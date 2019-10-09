'use strict';

console.log(isFinite(0)); // true
console.log(isFinite('string')); // false

console.log(isNaN(0)); // false
console.log(isNaN('string')); // true

console.log(isNaN('')); // false
console.log(isFinite('')); // true

console.log(parseInt('100.0001px')); // -100
console.log(parseInt('100.0001px', 2)); // 4, 第二个参数是进制数
console.log(parseFloat('+100.022.0px')); // 100.022,只取从左到右第一个小数点
console.log(parseFloat('a100')); // NaN

console.log(Math.random()); // 0-1的随机数
console.log(Math.max(0, 1, 2)); // 2 取最大值
console.log(Math.min(0, 1, 2)); // 0 取最小值
console.log(Math.pow(2, 10)); // 1024
