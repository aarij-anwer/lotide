//returns all itmes after the head of `array` as an array
const tail = function(array) {
  let answer = [];
  for (let i = 1; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
};

module.exports = tail;