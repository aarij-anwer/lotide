const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  if (array1.length === array2.length) {
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let words = ["ground", "control", "to", "major", "tom"];
let results1 = map(words, word => word[0]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);

words = ["hello", "world", "!"];
results1 = map(words, word => word[0]);
assertArraysEqual(results1,[ 'h', 'w', '!']);

words = [];
results1 = map(words, word => word[0]);
assertArraysEqual(results1,[]);

