const assert = require('chai').assert;

const flatten = require('../flatten');

let array = flatten([1, 2, [3, 4], 5, [6]]);
let flattened = [1, 2, 3, 4, 5, 6];

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] after flattening [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(array, flattened);
  });

  array = flatten([1, 2, 3, 4, 5]);
  flattened = [1, 2, 3, 4, 5];

  it("returns [1, 2, 3, 4, 5] after flattening [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(array, flattened);
  });
  
  array = flatten([[1],[2],[3,4,5],[6],[7],[8,9]]);
  flattened = [1,2,3,4,5,6,7,8,9];
  
  it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9] after flattening [[1],[2],[3, 4, 5],[6],[7],[8, 9]]", () => {
    assert.deepEqual(array, flattened);
  });
});
