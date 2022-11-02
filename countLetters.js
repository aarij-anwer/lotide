const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(phrase) {

  let answer = {};

  for (const element of phrase) {
    //do something
    if (element !== ' ') {
      if (answer.hasOwnProperty(element)) {
        answer[element]++;
      } else {
        answer[element] = 1;
      }
    }
  }

  return answer;
};

console.log(countLetters("lighthouse in the house"));
const answer = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
console.log(answer);