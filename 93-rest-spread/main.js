'use strict';

let smallArray = [5, 6, 7];
let bigArray = [1, 2, 3, 4, ...smallArray, 8, 9, 0];

console.log(bigArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

let [a, b, ...anotherArray] = bigArray;
console.log(anotherArray); // [ 3, 4, 5, 6, 7, 8, 9, 0 ]

let [...rest] = [2, 1]; // rest
console.log(rest);

// Rest element must be last element,剩余元素必须排在最后
// let [...rest, a, b] = [1, 2, 3];

// spread
[a] = [...[1, 2]];
console.log(a);

let arr = [3, 5, 1];
console.log(Math.max(...arr));
