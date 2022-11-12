const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 3 for length for [\"Yo Yo\", \"Lighthouse\", \"Labs\"] after the function call, showing argument array was not modified", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let t = tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns [\"Lighthouse\", \"Labs\"] for after tail function is called on [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let t = tail(words);
    assert.deepEqual(t,["Lighthouse", "Labs"]);
  });
});
