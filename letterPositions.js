//returns all the indices (zero-based positions) in the string where each character is found
const letterPositions = function(sentence) {
  let answer = {};

  for (let i = 0; i < sentence.length; i++) {
    let element = sentence[i];

    if (element !== ' ') {
      if (answer.hasOwnProperty(element)) {
        answer[element].push(i);
      } else {
        answer[element] = [];
        answer[element].push(i);
      }
    }
  }

  return answer;
};

module.exports = letterPositions;