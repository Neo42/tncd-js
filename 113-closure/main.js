'use strict';

let weapon = 'sword';
// 函数声明
function getWeapon() {
  console.log(`Got weapon: ${weapon}`);
  let innerWeapon = 'gun';
}

// 函数实例创建
getWeapon(); // Got weapon: sword
// console.log(innerWeapon); // 未定义

// 闭包：能够记录和访问它的外层作用域中变量和函数的函数
// 所有函数（的实例）中都有一个隐式引用（属性） [[environment]]
// 但外层作用域没办法访问到函数作用域中的变量和函数
// 闭包是一个相对概念：函数相对于它的外层作用域（词法环境）来说是一个闭包
// 两个部分：函数、它的外层作用域
