// const parser = (num1: number, num2: number) => num1 + num2;

// export default parser;
// exports.add = (number1, number2) => number1 + number2;

// import cheerio from "cheerio";
const cheerio = require("cheerio");

function getDatePosted($, e) {
  return new Date(
    $(e).find(".meta").children("span").eq(3).attr("title").split(" (")[0]
  );
}

function getHood($, e) {
  return $(e).find(".meta").children("span").eq(1).text().trim();
}

exports.listings = (html) => {
  const $ = cheerio.load(html);
  return $(".cl-result-info")
    .map((i, e) => {
      const titleElement = $(e).find(".titlestring");
      const title = titleElement.text();
      const url = titleElement.attr("href");
      const hood = getHood($, e);
      const datePosted = getDatePosted($, e);
      return { title, url, hood, datePosted };
    })
    .get();
};
