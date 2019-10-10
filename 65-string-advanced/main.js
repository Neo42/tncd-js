'use strict';

// 代理对的两段 utf-16 编码
console.log(`\uD83D\uDE02`);

// 不常用字符串
console.log('😂'.length);

console.log('a'.codePointAt(0));
console.log('a'.charCodeAt(0));

console.log('😂'.codePointAt(0)); // 128514，返回整个字符的 unicode 十进制编码位置（码位、码点）
console.log('😂'.codePointAt(0).toString(16)); // 将 unicode 编码位置转换为 utf-16 编码
console.log('😂'.codePointAt(1)); // 56834，返回第二段 unicode 编码位置

// charCodeAt 较旧，无法识别代理对，分开返回两段 UTF-16 编码的 unicode 编码位置
console.log('😂'.charCodeAt(0)); // 55357
console.log('😂'.charCodeAt(1)); // 56834

// 将 unicode 编码位置转换成 utf-16 编码
console.log('😂'.charCodeAt(0).toString(16)); // d83d
console.log('😂'.charCodeAt(1).toString(16)); // de02

for (let index = 0; index < '😂'.length; index++) {
  console.log('😂'[index]); // ��，分别输出代理对的两段
}

// unicode 正规化
console.log('S\u0307'); // Ṡ
console.log('S\u0307\u0323'); // Ṩ

console.log(
  'S\u0307\u0323'
    .normalize()
    .codePointAt(0)
    .toString(16)
); // '1e68'

console.log('\u1e68'); // Ṩ
