const middle = function(array) {
  let answer = [];
  if (array.length < 3) {
    return answer;
  }

  let mid = Math.round(array.length / 2);
  answer.push(array[mid - 1]);

  if (array.length % 2 === 0) {
    //even
    answer.push(array[mid]);
  }
  return answer;
};

module.exports = middle;