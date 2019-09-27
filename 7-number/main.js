'use strict';

// 动态类型：变量中保存的数据类型不固定
let word = 'hello';
word = 0;

// number类型
let n = 123;
n = 1.3443;
// number类型的特殊值
n = -Infinity;
n = NaN;

// + - * /
console.log(1 + 2); // 3
console.log(1 / 0); // 不是 NaN，Infinity，仍是个 number 类型
console.log('string' / 2); // NaN，计算错误
console.log(NaN / 2); // NaN

// 所有数学运算都有结果，不会中断程序，后果有好有坏
let iLoveYou = 3000;
iLoveYou = 3e3; // 3后跟3个0
console.log(iLoveYou);
