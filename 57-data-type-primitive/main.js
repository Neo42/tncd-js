'use strict';

// 基本类型的方法：基本类型 + 包装对象（访问方法时创建，方法运行后销毁）
console.log('Hello'.toUpperCase());

// 不推荐使用 new + 基本类型的构造函数
let num = new Number(1);
console.log(typeof num);
// 不带 new 使用是可以的
num = Boolean(1);
console.log(num);

// null / undefined没有方法
