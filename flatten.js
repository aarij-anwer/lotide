const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(array) {
  let answer = [];
  array.forEach(element => {
    if (!Array.isArray(element)) {
      answer.push(element);
    } else {
      for (let i = 0; i < element.length; i++) {
        answer.push(element[i]);
      }
    }
  });
  array = answer;
  return array;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;