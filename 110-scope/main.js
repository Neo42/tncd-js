'use strict';

function f() {
  let a = 1;
}
// console.log(a); // not defined

// 作用域
// 变量、函数可见或可用的范围、通常呈层级分布
// 一个标识符（变量名称、函数名称）能够正确指向一个变量的位置、范围
// 标识符的属性（上下文是程序整体的属性）
// 可以说变量 xxx 的作用域、函数 xxx 的作用域，不能说程序 xxx 的作用域

// 如何确定作用域？
// 作用域由 JavaScript 编译器负责确定
// 在 JavaScript 中， 编译器通过识别变量、函数在程序源码（相对于运行执行阶段）中被声明的位置决定作用域的位置
// 所以 JavaScript 的作用域机制被称为“词法作用域”(相对于某些语言采用的动态作用域)

// 全局作用域
var globalVar = 'globalVar'; // var 全局作用域
// var foo; 声明
// foo = 'bar'赋值(绑定)
// let scriptVar = 'scriptVar'; let 脚本作用域

// 函数作用域：函数声明和表达式作用域机制一样
function declaredFunc() {
  let funcVar = 'funcVar';
  console.log('declaredFunc ran.');
}

var arrowFunc = () => {
  let funcVar = 'funcVar';
  console.log('arrowFunc ran.');
};

declaredFunc();
arrowFunc();
// console.log(funcVar); // 未定义

// 块级作用域：按代码块确定的作用域
// var 没有块级作用域，let const 有
{
  var varVar = 1;
  let letVar = 2;
  const constVar = 3;
}

console.log(varVar); // 1
// console.log(letVar); // 未定义
// console.log(constVar); // 未定义
