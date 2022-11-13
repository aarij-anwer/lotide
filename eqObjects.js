const eqArrays = require('./eqArrays');

//returns true if `object1` and `object2` have the exact same key-value pairs
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