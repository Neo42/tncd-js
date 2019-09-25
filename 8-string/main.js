'use strict';

let str = 'Hello';
str = 'こんにちは';
// str = "World";

let str2 = '虾';
str = `逮${str2}户`; // {}中必须是一个值（表达式）
console.log(str);

str = `逮${str2}户`; // 重新取用 str2 的值
console.log(str);
