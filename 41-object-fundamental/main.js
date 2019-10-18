'use strict';

let user = new Object(); // “构造函数” 的语法
// let user = {}; // 字面量语法
user.name = '墨石';
delete user.name;

// user.likes birds = true
user['likes the Shiba Inu'] = true;
console.log(Object.keys(user)); // [ 'likes the Shiba Inu' ]
console.log(user['likes birds']);
delete user['likes birds'];

// 保留字可以当属性名
user.let = 'me';
