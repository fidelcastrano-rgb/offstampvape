import * as cheerio from 'cheerio';

async function testScrape() {
  const res = await fetch('https://mipod.com/collections/off-stamp-vapes?page=1');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const products: any[] = [];
  
  // Try to find product items
  $('.grid-product, .grid-item, .product-item, .product-card, .grid__item').each((i, el) => {
    const title = $(el).find('.grid-product__title, .product-item__title, .product-card__title, .h4').text().trim();
    let image = $(el).find('img').attr('data-src') || $(el).find('img').attr('src');
    
    if (image && image.startsWith('//')) {
      image = 'https:' + image;
    }
    
    if (title && image) {
      products.push({ title, image });
    }
  });
  
  console.log(JSON.stringify(products.slice(0, 5), null, 2));
}

testScrape();
