'use strict';

// num.toString(base)
let num = 1.7523;

let string = num.toString();
console.log(string);

// 下舍
let floored = Math.floor(num);
console.log(floored);

// 上舍
let ceiled = Math.ceil(num);
console.log(ceiled);

// 四舍五入取整
let rounded = Math.round(num);
console.log(rounded);

// 直接取整
let truncated = Math.trunc(num);
console.log(truncated);

// 按位数四舍五入(默认取整)，返回一个字符串
let fixedStr = num.toFixed(2);
console.log(fixedStr, typeof fixedStr);

// 先乘后除
let fixedNum = Math.round(num * 100) / 100;
console.log(fixedNum, typeof fixedNum);
