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

const without = function(array1, array2) {
  let answer = [];
  for (let i = 0; i < array1.length; i++) {
    answer.push(array1[i]);
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        answer.pop();
      }
    }
  }
  return answer;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, 2, "4"])); // => ["1", "2", "3"]
console.log(without(["1", "2", "3"], ["1", "2", "3"])); // => ["1", "2", "3"]
console.log(without(["1", 2, "3"], ["1", "2", "3"])); // => ["1", "2", "3"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
