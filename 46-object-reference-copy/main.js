'use strict';

// 其他基本类型，直接按值复制
let x = 1;
let y = x;
console.log(x === y); // true
y = 1;
console.log(x === y); // true

// x,y 分开创建，内存地址不同
x = {};
y = {};
// 值相同，但是引用（内存地址）不同
console.log(x === y); // false

// y 直接复制 x 的内存地址, 而不是复制它本身
y = x;
// 值相同，引用也相同
console.log(x === y); // true

//两者的值同时改变
x.age = 3;
console.log(y); // { age: 3 }
y.age = 6;
console.log(x); // { age: 6 }
