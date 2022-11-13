//searches for a key on an object where its value matches a given value
const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  
  for (const element of keys) {
    if (obj[element] === value) {
      return element;
    }
  }
};

module.exports = findKeyByValue;