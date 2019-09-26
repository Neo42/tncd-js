'use strict';

// > < >= <= ==
let isBigger = 2 > 1;
console.log(isBigger);

// 字符串比较
console.log('z' > 'a');
console.log('bz' > 'bas');
console.log('A' < 'a'); // Unicode 排序

// 不同类型，首先转换为数字再比较，NaN无法比较
console.log('2' > 1); // true
console.log(false == 0); // true
console.log(false === 0); // false
console.log(null === undefined); //false

console.log(null == undefined); // true
console.log(undefined == 0); // false
console.log(null == 0); // false

console.log(null < 0); // false
console.log(null <= 0); // true

console.log(undefined <= 0); // false, undefined => NaN
console.log(undefined == 0); // false, undefined => NaN
