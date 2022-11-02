const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  let answer;
  
  keys.forEach(element => {
    /*console.log(`element: ${element}`);
    console.log(`obj[element]: ${obj[element]}`);
    console.log(`value: ${value}`);*/

    if (obj[element] === value) {
      //console.log("Here!");
      answer = element;
    }
  });

  return answer;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
