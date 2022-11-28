// import parser from "../parser.js";
const parser = require("../parser");

it("should give 4", () => {
  const result = parser.add(2, 2);
  console.log(result);
  expect(result).toBe(4);
});
