const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

let array = [1];
console.log(array, middle(array));

array = [1, 2];
console.log(array, middle(array));

array = [1, 2, 3];
console.log(array, middle(array));

array = [1, 2, 3, 4];
console.log(array, middle(array));

array = [1, 2, 3, 4, 5];
console.log(array, middle(array));

array = [1, 2, 3, 4, 5, 6];
console.log(array, middle(array));

array = [1, 2, 3, 4, 5, 6, 7];
console.log(array, middle(array));

array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array, middle(array));