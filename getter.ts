import request from "request-promise";
import fs from "fs";
import dotenv from "dotenv";
import puppeteer from "puppeteer";
// import chrome from "../../../../System Volume Information/EDP/Recovery/";

// Trying with a proxy
const usedRequest = request.defaults({
  proxy: "20.111.54.16:80",
});

// Dotenv
dotenv.config();

async function getHtml(url: string) {
  const browser = await puppeteer.launch({
    headless: false,
    // executablePath:
    // "../../../../../../Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    // "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto(
    // `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url}&render=true`
    url,
    { waitUntil: "networkidle0" }
  );
  const html = await page.content();
  // const html = await request.get(
  //   `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url}&render=true`
  // );
  // console.log(html);
  // const html = await page.content();
  // await browser.close();
  return html;
}

function saveHtmlToFile(html: any) {
  fs.writeFileSync("./test.html", html);
}

async function main() {
  const url = "https://sfbay.craigslist.org/search/muc#search=1~list~0~0";
  const html: any = await getHtml(url);
  html && saveHtmlToFile(html);
}

main();
