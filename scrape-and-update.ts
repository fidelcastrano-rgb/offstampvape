import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.join(process.cwd(), 'public', 'product-assets');

async function downloadImage(url: string, filename: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(path.join(ASSETS_DIR, filename), Buffer.from(buffer));
    return true;
  } catch (e) {
    console.error(`Error downloading ${url}:`, e);
    return false;
  }
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function scrapeCategory(startUrl: string) {
  let currentUrl = startUrl;
  const products: any[] = [];
  
  while (currentUrl) {
    console.log(`Scraping ${currentUrl}...`);
    const res = await fetch(currentUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch ${currentUrl}`);
      break;
    }
    
    const html = await res.text();
    const $ = cheerio.load(html);
    
    const productEls = $('li.product, .product, .type-product');
    console.log(`Found ${productEls.length} product elements on ${currentUrl}`);
    
    productEls.each((i, el) => {
      const title = $(el).find('.woocommerce-loop-product__title, h2, h3').text().trim();
      let img = $(el).find('img').attr('src');
      
      if (!img || img.includes('placeholder')) {
        img = $(el).find('img').attr('data-src') || $(el).find('img').attr('data-lazy-src') || img;
      }
      
      if (title && img) {
        img = img.split('?')[0];
        products.push({ title, img });
      }
    });
    
    const nextLink = $('a.next.page-numbers').attr('href');
    if (nextLink) {
      currentUrl = nextLink;
      await new Promise(r => setTimeout(r, 500));
    } else {
      break;
    }
  }
  
  return products;
}

async function run() {
  console.log('Deleting existing photos...');
  if (fs.existsSync(ASSETS_DIR)) {
    const files = fs.readdirSync(ASSETS_DIR);
    for (const file of files) {
      fs.unlinkSync(path.join(ASSETS_DIR, file));
    }
  } else {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
  }
  
  const categories = [
    'https://www.offstamp-vapes.com/product-category/x-cube/',
    'https://www.offstamp-vapes.com/product-category/ice-cube/',
    'https://www.offstamp-vapes.com/product-category/classic-cube/',
    'https://www.offstamp-vapes.com/product-category/sweet-cube/',
    'https://www.offstamp-vapes.com/product-category/sw9000-disposable/'
  ];
  
  let allProducts: any[] = [];
  for (const catUrl of categories) {
    const products = await scrapeCategory(catUrl);
    allProducts = allProducts.concat(products);
    await new Promise(r => setTimeout(r, 500));
  }
  
  // Remove duplicates by title
  const uniqueProductsMap = new Map();
  for (const p of allProducts) {
    if (!uniqueProductsMap.has(p.title)) {
      uniqueProductsMap.set(p.title, p);
    }
  }
  const uniqueProducts = Array.from(uniqueProductsMap.values());
  
  console.log(`Found ${uniqueProducts.length} unique products in total.`);
  
  const productMap: Record<string, string> = {};
  
  for (const p of uniqueProducts) {
    const ext = path.extname(p.img) || '.png';
    const filename = `${slugify(p.title)}${ext}`;
    
    console.log(`Downloading ${p.img} -> ${filename}`);
    const success = await downloadImage(p.img, filename);
    if (success) {
      productMap[p.title] = `/product-assets/${filename}`;
    }
  }
  
  console.log('Updating products.ts...');
  const productsFile = path.join(process.cwd(), 'src', 'data', 'products.ts');
  let productsContent = fs.readFileSync(productsFile, 'utf-8');
  
  let updatedCount = 0;
  for (const title of Object.keys(productMap)) {
    const imagePath = productMap[title];
    
    // Escape special regex characters, then allow either straight or curly apostrophe
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/['’]/g, "['’]");
    
    const regex = new RegExp(`("name"\\s*:\\s*"${escapedTitle}"[\\s\\S]*?"image"\\s*:\\s*")[^"]+(")`, 'i');
    
    if (regex.test(productsContent)) {
      productsContent = productsContent.replace(regex, `$1${imagePath}$2`);
      updatedCount++;
    } else {
      console.log(`Could not find product in products.ts to update image: ${title}`);
    }
  }
  
  fs.writeFileSync(productsFile, productsContent);
  console.log(`Updated ${updatedCount} products in products.ts`);
  console.log('Done!');
}

run().catch(console.error);
