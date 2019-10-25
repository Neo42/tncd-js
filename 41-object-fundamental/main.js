'use strict';

let user = new Object(); // “构造函数” 的语法
// let user = {}; // 字面量语法
user.name = 'neo';
delete user.name;

// user.likes birds = true
user['likes the Shiba Inu'] = true;
console.log(Object.keys(user)); // [ 'likes the Shiba Inu' ]
console.log(user['likes birds']); // undefined
delete user['likes birds'];

// 保留字可以当属性名
user.let = 'me';

// 键是字符串或者 symbol
for (const key in user) {
  console.log(typeof key); // string, string
}
