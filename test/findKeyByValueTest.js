const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let answer = findKeyByValue(bestTVShowsByGenre, "The Wire");
let expectedAnswer =  "drama";

describe("#findKeyByValue", () => {
  it(`returns ${expectedAnswer} when searching by ${bestTVShowsByGenre.drama}`, () => {
    assert.strictEqual(answer, expectedAnswer);
  });

  answer = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
  expectedAnswer =  undefined;

  it(`returns ${expectedAnswer} when searching by key that doesn't exist`, () => {
    assert.strictEqual(answer, expectedAnswer);
  });

});
