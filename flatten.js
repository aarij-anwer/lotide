const flatten = function(array) {
  let answer = [];
  array.forEach(element => {
    if (!Array.isArray(element)) {
      answer.push(element);
    } else {
      for (let i = 0; i < element.length; i++) {
        answer.push(element[i]);
      }
    }
  });
  array = answer;
  return array;
};

//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;