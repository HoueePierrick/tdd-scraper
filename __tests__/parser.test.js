// Test keep failing because of a bug ?
// import parser from "../parser";
const parser = require("../parser");
const fs = require("fs");
// import fs from "fs";
// const listingInterface = require("../interfaces");
let html;
let listings;

// interface listingInterface {
//   title: string;
//   url: string;
//   datePosted: Date;
//   hood: string;
// }

// const listings = [
//   {
//     title: "title",
//     url: "url",
//     datePosted: new Date("2019-06-30"),
//     hood: "(San Francisco)",
//   },
// ];

describe("First test", () => {
  beforeAll(() => {
    html = fs.readFileSync("./test.html");
    console.log(html);
    listings = parser.listings(html);
    // console.log(listings);
  });

  it("should give the correct listing object", () => {
    expect(listings.length).toBe(120);
    expect(listings[0].url).toBe(
      "https://sfbay.craigslist.org/sfc/muc/7563821305.html"
    );
  });

  it("should get correct title", () => {
    expect(listings[0].title).toBe("Need guitarist in hardcore, metal group");
  });

  it("should get correct url", () => {
    expect(listings[0].url).toBe(
      "https://sfbay.craigslist.org/sfc/muc/7563821305.html"
    );
  });

  it("should get correct date from listing", () => {
    expect(listings[0].datePosted).toBe(
      new Date("Fri Dec 02 2022 17:42:35 GMT+0100")
    );
  });

  it("should get hood from listing", () => {
    expect(listings[0].hood).toBe("bayview");
  });
});
