'use strict';

let user = {};
console.log(user.age === undefined); // true

// in 的左边必须是字符串或字符串变量
console.log('age' in user); // false

user = { age: undefined }; // 不推荐，推荐用 null
console.log('age' in user); // true
console.log(user.age === undefined); // true
