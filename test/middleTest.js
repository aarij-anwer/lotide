const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let array = [1];
let mid = middle(array);
//console.log(array, mid);
assertArraysEqual(mid,[]);

array = [1, 2];
mid = middle(array);
//console.log(array, mid);
assertArraysEqual(mid,[]);

array = [1, 2, 3];
mid = middle(array);
//console.log(array, mid);
assertArraysEqual(mid,[2]);

array = [1, 2, 3, 4];
mid = middle(array);
//console.log(array, mid);
assertArraysEqual(mid,[2, 3]);

array = [1, 2, 3, 4, 5];
mid = middle(array);
//console.log(array, mid);
assertArraysEqual(mid,[3]);

array = [1, 2, 3, 4, 5, 6];
mid = middle(array);
//console.log(array, mid);
assertArraysEqual(mid,[3,4]);

array = [1, 2, 3, 4, 5, 6, 7];
mid = middle(array);
//console.log(array, mid);
assertArraysEqual(mid,[4]);

array = [1, 2, 3, 4, 5, 6, 7, 8];
mid = middle(array);
//console.log(array, mid);
assertArraysEqual(mid,[4, 5]);