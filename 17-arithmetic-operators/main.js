'use strict';

console.log(5 * 2);
console.log(-1);
console.log(3 % 2);
console.log(3 ** 2);

let num = 0;

// 前置形式，先算后用
console.log(++num); // 1
console.log(num); // 1
// 后置形式，先用后算
// console.log(num++); // 0
// console.log(num); // 1

//一元+ > 一元- > 乘 > 除 > 加 > 减 > 赋值符
console.log(2 + 2 + '1');
console.log(2 - '1');
