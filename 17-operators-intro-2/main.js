'use strict';

// 连写赋值符号是可以的
let x, y, z;
x = y = z = '我们是害虫';
console.log(x, y, z);

// 赋值符号返回赋出的值
let a = '哈';
let b;
let c = '哇' + a + (b = a);
console.log(a, b, c);

console.log(3 % 2);
console.log(3 ** 2);
