const assertArraysEqual = require('./assertArraysEqual');

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
/*
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, 2, "4"])); // => ["1", "2", "3"]
console.log(without(["1", "2", "3"], ["1", "2", "3"])); // => ["1", "2", "3"]
console.log(without(["1", 2, "3"], ["1", "2", "3"])); // => ["1", "2", "3"]
*/

const words = ["hello", "world", "lighthouse"];
const wo = without(words, ["lighthouse"]);

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// Make sure without is working
assertArraysEqual(wo, ["hello", "world"]);


module.exports = without;