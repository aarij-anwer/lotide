const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

let array = [];
let mid = [];

describe("#middle", () => {
  it("returns [] for middle of [1]", () => {
    array = [1];
    mid = middle(array);
    assert.deepEqual(mid,[]);
  });

  it("returns [] for middle of [1, 2]", () => {
    array = [1, 2];
    mid = middle(array);
    assert.deepEqual(mid,[]);
  });

  it("returns [2] for middle of [1, 2, 3]", () => {
    array = [1, 2, 3];
    mid = middle(array);
    assert.deepEqual(mid,[2]);
  });

  it("returns [2, 3] for middle of [1, 2, 3, 4]", () => {
    array = [1, 2, 3, 4];
    mid = middle(array);
    assert.deepEqual(mid,[2, 3]);
  });

  it("returns [3] for middle of [1, 2, 3, 4, 5]", () => {
    array = [1, 2, 3, 4, 5];
    mid = middle(array);
    assert.deepEqual(mid,[3]);
  });

  it("returns [3, 4] for middle of [1, 2, 3, 4, 5, 6]", () => {
    array = [1, 2, 3, 4, 5, 6];
    mid = middle(array);
    assert.deepEqual(mid,[3,4]);
  });

});