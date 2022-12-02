import request from "request-promise";
import fs from "fs";
import dotenv from "dotenv";

// Trying with a proxy
const usedRequest = request.defaults({
  proxy: "20.111.54.16:80",
});

// Dotenv
dotenv.config();

async function getHtml(url: string) {
  const html = await request.get(
    `http://api.scraperapi.com/?api_key=${process.env.SCRAPE_API_KEY}&url=${url}`
  );
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
