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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (const element of keys1) {
      //console.log(`key: ${element}`);
      //console.log(`value object1: ${object1[element]}`);
      //console.log(`value object2: ${object2[element]}`);

      if (object1[element] instanceof Array && object2[element] instanceof Array) {
        //do something
        if (!eqArrays(object1[element],object2[element])) {
          return false;
        }
      } else if (!(object1[element] instanceof Array) && !(object2[element] instanceof Array)) {
        if (object1[element] !== object2[element]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

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

let ob1 = { a: '1', b: 2 };
let ob2 = { b: 2, a: '1' };
assertObjectsEqual(ob1, ob2);

ob1 = { a: '1', b: '2' };
ob2 = { b: 2, a: '1' };
assertObjectsEqual(ob1, ob2);

ob1 = { a: '1', b: 2, c: '3' };
ob2 = { b: 2, a: '1' };
assertObjectsEqual(ob1, ob2);

