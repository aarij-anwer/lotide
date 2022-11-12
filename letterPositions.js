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

console.log(letterPositions("lighthouse in the house"));
let answer = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

console.log(answer);

console.log(letterPositions("ighthouse in the house"));
answer = {
  //should be -1 for all values
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

console.log(answer);

module.exports = letterPositions;