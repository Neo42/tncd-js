'use strict';

let str = 'I am a string.';
// str = "I am also a string.";
str = `I
am
a
${`string`}`;
console.log(str);

// 转义符：\r \t \n \" \' \\

// 长度是属性，不是方法
let leng = str.length; // 而不是str.length()
leng;

//访问字符 [pos] 或 str.charAt(pos)
console.log(str[1] === '\n'); // true
console.log(str.charAt(1) === '\n'); // true
console.log(str[100]); // undefined
console.log(str.charAt(100)); // [empty string]

for (const char of str) {
  console.log(char); // I, , a, m, , a, , s, t, r, i, n, g
}

// 字符串的每个字符是只读属性，不支持修改
// str[0] = '\n'; // Cannot assign to read only property '0' of string '....'

console.log(str.toUpperCase()); // I AM A STRING
console.log(str.toLowerCase()); // i am a string

console.log(str.indexOf('am', 1)); // 从第一位开始找 ‘am’ 的位置，从 0 计，找不到返回 -1
