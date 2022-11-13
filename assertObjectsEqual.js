const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
/*
let ob1 = { a: '1', b: 2 };
let ob2 = { b: 2, a: '1' };
assertObjectsEqual(ob1, ob2);

ob1 = { a: '1', b: '2' };
ob2 = { b: 2, a: '1' };
assertObjectsEqual(ob1, ob2);

ob1 = { a: '1', b: 2, c: '3' };
ob2 = { b: 2, a: '1' };
assertObjectsEqual(ob1, ob2);

ob1 = "1";
ob2 = "1";
assertObjectsEqual(ob1, ob2);

ob1 = "1";
ob2 = 1;
assertObjectsEqual(ob1, ob2);

ob1 = [1];
ob2 = [1];
assertObjectsEqual(ob1, ob2);

ob1 = [1];
ob2 = ["1"];
assertObjectsEqual(ob1, ob2);

ob1 = [1, 2];
ob2 = [1];
assertObjectsEqual(ob1, ob2);*/
