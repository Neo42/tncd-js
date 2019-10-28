'use strict';

let smallArray = [5, 6, 7];
let bigArray = [1, 2, 3, 4, ...smallArray, 8, 9, 0];

console.log(bigArray);

// let [...anotherArray, a, b] = bigArray; // Rest element must be last element 解构赋值，rest元素
// let [a, b, ...anotherArray] = bigArray;
// console.log(anotherArray);

let [...rest] = [2, 1]; // rest
console.log(rest);

let [b] = [...[1, 2]]; // spread
console.log(b);

let arr = [3, 5, 1];
console.log(Math.max(...arr));
