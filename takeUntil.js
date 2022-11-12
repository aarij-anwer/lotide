const takeUntil = function(array, callback) {
  // ...
  let answer = [];
  let i = 0;
  let element = array[i];

  while (!callback(element) && i < array.length) {
    answer.push(element);
    i++;
    element = array[i];
  }
  return answer;
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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

const data3 = [1, 2, 5, 7, 2, 2, 4, 5];
const results3 = takeUntil(data3, x => x < 0);

const data4 = [];
const results4 = takeUntil(data4, x => x < 0);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results3, [1, 2, 5, 7, 2, 2, 4, 5]);
assertArraysEqual(results4, []);


module.exports = takeUntil;