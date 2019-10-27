'use strict';
let str = '012345678910a';
// 长度是属性，不是方法（函数属性）
let len = str.length; // 而不是str.length()
len;

//访问字符 [pos] 或 str.charAt(pos)
console.log(str[1] === '\n'); // false
console.log(str.charAt(1) === '\n'); // false
console.log(str[100]); // undefined
console.log(str.charAt(100)); // [empty string]

for (const char of str) {
  console.log(char); // 0,1,2,3,4,5,6,7,8,9,1,0,a
}

// 字符串的每个字符是只读属性，不支持修改
// str[0] = '\n'; // Cannot assign to read only property '0' of string '....'

console.log(str.toUpperCase()); // 012345678910A
console.log(str.toLowerCase()); // 012345678910a

console.log(str.indexOf('a', 1)); // 12，从第 0 位开始找 ‘am’ 的位置，从 0 计，找不到返回 -1
console.log(str.lastIndexOf('a', 15)); // -1，lastIndexOf(str,fromIndex)默认从最末尾开始找，fromIndex 指从右到左开始找的位置

// 和 if 连用时，当位置为 0时, if 判断为 false
if (str.indexOf('string')) {
  console.log('Found it.');
}

// 如果找不到（返回 -1）
if (str.indexOf('string') != -1) {
  console.log('Found it.');
}

console.log(str.includes('string', 2));
console.log(str.startsWith('I'));
console.log(str.endsWith('.'));

console.log(str, str.substring(3, 8)); // 3,8 之间的字符串，可颠倒，负值位置按 0 处理
console.log(str, str.slice(3, 8)); // 3 到 8 (包括起始，不包括末尾)负数从末尾开始数
console.log(str, str.substr(3, 8)); // 从第 3 位数 8 位，允许起始为负数

console.log(
  `
dd
     `.trim()
); // 'dd',去除字符串两头空白字符，包括换行和制表符
console.log(str.repeat(2)); // I am a string.I am a string.
