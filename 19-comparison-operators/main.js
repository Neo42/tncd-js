'use strict';

let num = 0;

// 前置形式，先算后用
// console.log(++num); // 1
// console.log(num); // 1
// 后置形式，先用后算
// console.log(num++); // 0
// console.log(num); // 1

// 修改替换
num += 3; // num = num + 3;

// 逗号运算符，几个语句依次运行, 但只返回最后一个语句返回的值
let result = ((num = 0), num + 1);
console.log(result); // 1
console.log(num); // 0
