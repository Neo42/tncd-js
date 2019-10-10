'use strict';

// 字符串的比较是 UTF-16 编码的比较
console.log('a' > 'Z'); // true
console.log('a'.codePointAt()); // 97
console.log('Z'.codePointAt()); // 90
console.log('ð'.codePointAt()); // 240
console.log(String.fromCodePoint(937)); // Ω
console.log('Ω'.localeCompare('a')); // 1，大于
console.log('Ω'.localeCompare('Ω')); // 0，等于
console.log(
  String.fromCodePoint(937).localeCompare(String.fromCodePoint(1024))
); // -1，小于
