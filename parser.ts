// const parser = (num1: number, num2: number) => num1 + num2;

// export default parser;
// exports.add = (number1, number2) => number1 + number2;

// import cheerio from "cheerio";
const cheerio = require("cheerio");

exports.listings = (html) => {
  const $ = cheerio.load(html);
  return $(".cl-result-info")
    .map((i, e) => {
      const title = $(e).find(".titlestring").text();
      return { title };
    })
    .get();
};
