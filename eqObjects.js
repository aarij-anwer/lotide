const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
/*
let ab = { a: "1", b: "2" };
let ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba),true); // => true

ab = { a: "1", b: "2" };
ba = { b: "3", a: "1" };
console.log(eqObjects(ab, ba),false); // => false

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2,), false); // => false*/