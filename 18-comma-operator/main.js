'use strict';

// 逗号运算符，几个语句依次运行, 但只返回最后一个语句返回的值
let result = ((num = 0), num + 1);
console.log(result); // 1
console.log(num); // 0
