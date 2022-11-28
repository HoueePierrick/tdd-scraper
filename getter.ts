import request from "request-promise";

async function getHtml(url) {
  const html = await request.get(url);
}

function saveHtmlToFile(html) {}
