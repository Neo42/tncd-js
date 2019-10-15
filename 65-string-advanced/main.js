'use strict';

// unicode编码位置、码点、代码点、码位：字符在 unicode 编码中的编号，可以用不同进制表示 e.g.‘&#128514;’
// UTF-16：UTF-16是 unicode 字符的一种表示格式，用一个或两个（二进制下）长度为 16 位的整数序列（即代码单元或码元）表示 unicode 编码位置，可以使用不同进制表示。 e.g. 16进制（hex）：0xD83D 0xDE02。
// 高位编码单元（unicode 编码位置高于 65535）使用一对（低位编码 lower valued）代理伪字符（"surrogate" pseudo-characters）来表示，从而构成一个真正的字符。

// 代理对的两段 utf-16 编码单元
console.log('\ud83d\ude02'); // 😂

// 高位编码单元的长度为 2
console.log('😂'.length);

// 都返回 unicode 编码位置（码位、代码点），但是可用范围不一样
console.log('😂'.codePointAt(0)); // 128514，可以返回高于 65535 的编码位置（码位、代码点）
console.log('😂'.charCodeAt(0)); // 55357，低于 65535

console.log('😂'.codePointAt(0)); // 128514，返回整个字符的 unicode 十进制编码位置（码位、代码点）
console.log('😂'.codePointAt(1)); // 56834，返回第二段代理伪字符的 unicode 编码位置（码位、代码点）
console.log('😂'.codePointAt(0).toString(16)); // 1f602，把整个字符串的 unicode 编码位置（码位、代码点）转换为 utf-16 编码单元

// charCodeAt 较旧，无法识别代理对，分开返回两段代理伪字符的编码位置（码位、代码点）
console.log('😂'.charCodeAt(0)); // 55357
console.log('😂'.charCodeAt(1)); // 56834

// 将 unicode 编码位置（码位、代码点）转换成 JS 源码
console.log('😂'.charCodeAt(0).toString(16)); // d83d
console.log('😂'.charCodeAt(1).toString(16)); // de02

for (let index = 0; index < '😂'.length; index++) {
  console.log('😂'[index]); // �, �，分别输出代理对的两段伪字符
}

// unicode 语调符号和正规化
console.log('S\u0307'); // Ṡ
console.log('S\u0307\u0323'); // Ṩ

// 正规化得到完整字符，转换为 unicode 码点，再转换为 UTF-16 编码单元
console.log(
  'S\u0307\u0323'
    .normalize()
    .codePointAt(0)
    .toString(16)
); // '1e68'

console.log('\u1e68'); // Ṩ
