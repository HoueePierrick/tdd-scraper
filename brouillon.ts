import request from "request-promise";
import dotenv from "dotenv";
import puppeteer from "puppeteer";

const USURL = "https://sfbay.craigslist.org/search/muc#search=1~list~0~0";
const AsianURL = "https://bangkok.craigslist.org/search/bbb#";
const ParisURL = "https://paris.craigslist.org/search/muc";
// Dotenv
dotenv.config();

async function getHtml(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url}`
  );
  //   const html = await request.get(
  //     `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url}`
  //   );
  const html = await page.content();
  console.log(html);
}

getHtml(USURL);
