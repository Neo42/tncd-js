'use strict';

// 顺序不重要，变量名对应即可
let { name, gender, age } = { name: 'Bruh', age: 24, gender: 'unknown' };
console.log(name, age, gender);

// let a, b;
// {a, b} = { a: 1, b: 2 }; // 报错，因为 {a, b} 会被认为是一个代码块而不是对象字面量

// let a, b;
// ({ a, b } = { a: 1, b: 2 }); // 用括号规定 {a, b} 不是代码块
// console.log(a, b); // 1 2

// 计算属性赋值：在解构时声明新变量
let val1,
  val2,
  Obj = {
    name: 'neo',
    birthYear: '1962'
  };

({ name: val1, birthYear: val2 } = Obj);
console.log(val1, val2); // neo 1962

// rest spread 如果想使用 quokka.js 测试这个功能则需要安装 @babel/plugin-proposal-object-rest-spread 这个插件
let { x, y, ...rest } = { x: 10, y: 20, z: 30 };
console.log(x); // 10
console.log(y); // 20
console.log(rest); // { z: 30 }
