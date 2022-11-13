const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  let ab = { a: "1", b: "2" };
  let ba = { b: "2", a: "1" };
  let answer = eqObjects(ab, ba);
  let expectedAnswer = true;

  it(`returns ${expectedAnswer} when comparing two equal objects with different order`, () => {
    assert.strictEqual(answer, expectedAnswer);
  });

  const abc = { a: "1", b: "2", c: "3" };
  answer = eqObjects(ab, abc);
  expectedAnswer = false;
  
  it(`returns ${expectedAnswer} when comparing two unequal objects`, () => {
    assert.strictEqual(answer, expectedAnswer);
  });

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  answer = eqObjects(cd, dc);
  expectedAnswer = true;

  it(`returns ${expectedAnswer} when comparing two equal objects with arrays as values`, () => {
    assert.strictEqual(answer, expectedAnswer);
  });

  const cd2 = { c: "1", d: ["2", 3, 4] };
  answer = eqObjects(cd, cd2);
  expectedAnswer = false;
  
  it(`returns ${expectedAnswer} when comparing two unequal objects with arrays as values`, () => {
    assert.strictEqual(answer, expectedAnswer);
  });

});
