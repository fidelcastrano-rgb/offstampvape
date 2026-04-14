import * as cheerio from 'cheerio';

async function checkCategory(url: string) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const html = await res.text();
  const $ = cheerio.load(html);
  console.log(url);
  $('a.page-numbers').each((i, el) => console.log($(el).text(), $(el).attr('href')));
}

async function run() {
  await checkCategory('https://www.offstamp-vape.store/product-category/ice-cube/');
  await checkCategory('https://www.offstamp-vape.store/product-category/sw9000-disposable/');
}

run();
