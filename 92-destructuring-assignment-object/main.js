'use strict';

// 顺序不重要，变量名对应即可
let { name, gender, age } = { name: 'Bruh', age: 24, gender: 'unknown' };
console.log(name, age, gender);

// let a, b;
// {a, b} = { a: 1, b: 2 }; // 报错，因为 {a, b} 会被认为是一个代码块而不是对象字面量

let a, b;
({ a, b } = { a: 1, b: 2 }); // 用括号规定 {a, b} 不是代码块
console.log(a, b); // 1 2
