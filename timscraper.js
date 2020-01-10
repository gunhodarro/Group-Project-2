const puppeteer = require("puppeteer");

async function getResults() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage();

  const url =
    "https://" +
    city +
    ".craigslist.org/search/sss?query=" +
    item +
    "&sort=rel&min_price=" +
    minPrice +
    "&max_price=" +
    maxPrice;

  await page.goto(url);

  await page.waitFor(".result-row");

  const results = await page.$$eval(".result-row", rows => {
    return rows.map(row => {
      const properties = {};
      const titleEl = row.querySelector(".result-title");
      properties.title = titleEl.innerText;
      properties.url = titleEl.getAttribute("href");
      const priceEl = row.querySelector(".result-price");
      properties.price = priceEl ? priceEl.innerText : "";
      const imageEl = row.querySelector(".swipe [data-index='0'] img");
      properties.imageUrl = imageEl ? imageEl.src : "";
      return properties;
    });
  });
  console.log(results[0]);
  console.log(url);
  browser.close();

  return {
    url,
    results
  };
}

getResults();
