const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {

  let ab = [1, 2, 3];
  let ba = [1, 2, 3];
  let answer = eqArrays(ab, ba);
  let expectedAnswer = true;

  it(`returns ${expectedAnswer} when comparing [${ab}] and [${ba}]`, () => {
    assert.strictEqual(answer, expectedAnswer);
  });

  ab = [1, 2, 3];
  ba = [3, 2, 1];
  answer = eqArrays(ab, ba);
  expectedAnswer = false;

  it(`returns ${expectedAnswer} when comparing [${ab}] and [${ba}]`, () => {
    assert.strictEqual(answer, expectedAnswer);
  });

  ab = ["1", "2", "3"];
  ba = ["1", "2", 3];
  answer = eqArrays(ab, ba);
  expectedAnswer = false;

  it(`returns ${expectedAnswer} when comparing [${ab}] and [${ba}], "${ab[2]}" is a string in the second array`, () => {
    assert.strictEqual(answer, expectedAnswer);
  });

});