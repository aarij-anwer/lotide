const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  
  for (const element of keys) {
    if (obj[element] === value) {
      return element;
    }
  }
};

module.exports = findKeyByValue;