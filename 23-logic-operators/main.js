'use strict';

// 逻辑或，输出第一个可以被转化成true的值
console.log(true || false); // true

// 如果没有输入就使用24作为默认值
let age = prompt('How old are you?') || 24;
console.log(age);

let x;
true || (x = 1);
console.log(x); // undefined，没有被赋值

// 逻辑与，输出第一个可以被转化成false的值
console.log(false && true); // false

// 如果作死就会死，后一个运算是否能执行取决于前一个运算的结果是否为真
let zuo = true;
zuo && console.log('WASTED');

// 逻辑非，转换成布尔，返回相反值
console.log(!'0');
// !!转化布尔值
console.log(!!'    1');
console.log(!'0' || '');
