const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
let t = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(t);

const words2 = ["Yo Yo"];
t = tail(words2);
assertEqual(words2.length, 1); // original array should still have 1 element!
console.log(t);