'use strict';

// 字符串转换，容易判断
console.log(typeof String(true)); // string
console.log(`This ${String(true)} is a ${typeof String(true)}`); // This true is a string
console.log(`This ${String(1)} is a ${typeof String(1)}`); // This 1 is a string

// + 是字符串派来的逗比，只要有一个运算元是字符串就会转换成字符串，其他情况转换成数字
console.log('3' + '2', typeof ('3' + '2')); // '32' string
console.log('3' + 2, typeof ('3' + 2)); // '32' string
console.log(typeof '3' + '2'); // NaN
console.log(typeof '3' + 2); // NaN
