const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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

module.exports = map;