'use strict';

// 提示hints
// 首选类型PreferredType

// 所有对象显式转换为 Boolean 时都为 true
console.log(Boolean({})); // true
console.log({} == true); // false

// string
let obj = {};
let obj2 = {};
// alert(obj);
obj2[obj] = 1;
console.log(obj2); // { '[object Object]': 1 }

// number
let num = Number({});
console.log(num); // NaN
let n = +num;
console.log(n); // NaN
let greater = { a: 1 } - { b: 2 };
console.log(greater); // NaN

// default: 首选类型不确定
// 二元加号、==与字符串数字符号比较时
let total = 'car1' + {};
console.log(total); // car1[object Object]
if (total == '') {
  console.log('');
}
