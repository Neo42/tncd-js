'use strict';

const THEME_COLOR = '#ec625f';

// 不能被重新赋值
THEME_COLOR = 1; //报错

// 可以被改变
const foo = {};
console.log(foo);
foo.bar = 42;
console.log(foo);
