'use strict';

// IEEE 754 double precision 双精度浮点数
let num = 0.3;
console.log(num);
console.log(num.toFixed(50));
console.log(num.toFixed(2));
console.log(+num.toFixed(2));
console.log((num * 10) / 10);

// 64位双精度浮点数有52位用来储存尾数
num = 9999999999999999;
console.log(num);
console.log(Math.log2(num).toFixed(51)); // 需要54位精度

console.log(-0 === 0); // true
console.log(NaN === NaN); // false

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(null, null)); // true
console.log(Object.is(undefined, undefined)); // true
