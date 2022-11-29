import request from "request-promise";
import fs from "fs";
// Trying with a proxy
const usedRequest = request.defaults({
  proxy: "20.111.54.16:80",
});

async function getHtml(url: string) {
  const html = await request.get(url);
}

function saveHtmlToFile(html: any) {
  fs.writeFileSync("./test.html", html);
}

async function main() {
  const html: any = await getHtml(
    "https://sfbay.craigslist.org/search/muc#search=1~list~0~0"
  );
  html && saveHtmlToFile(html);
}

main();
