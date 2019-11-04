'use strict';

let weapon = 'sword';
function getWeapon() {
  console.log(`Got weapon: ${weapon}`);
  let innerWeapon = 'gun';
}

getWeapon(); // Got weapon: sword
console.log(innerWeapon); // 未定义

// 所有函数（的实例）中都有一个隐式引用（属性） [[environment]] 允许函数可以从内部访问到外层作用域（词法环境）中的变量和函数
// 但外层作用域没办法访问到函数作用域中的变量和函数
// 闭包是一个相对概念：函数相对于它的外层作用域（词法环境）来说是一个闭包
