const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


describe("#countOnlyTest", () => {
  it("returns 1 after counting [\"Jason\"]", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined after counting [\"Karima\"]", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns 2 after counting [\"Fang\"]", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns undefined after counting [\"Agouhanna\"]", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});
