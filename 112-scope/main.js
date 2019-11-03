'use strict';

function f() {
  let a = 1;
}
// console.log(a); // not defined

// 作用域
// MDN定义：当前的执行上下文（一个变量或函数所在的执行上下文）
// 跟一般意义上的执行上下文所指范围不同、使用场景也不同
// 词法环境、词法作用域——JavaScript 引擎根据一个变量或函数在整个脚本中的词法位置判断它所在的作用域，而不是动态判断（动态作用域）
// (规定了)变量和函数的可见性——一个标识符（变量名称、函数名称）能准确引用到某个变量的位置、范围

// 全局作用域
let globalVar = 'globalVar'; // var 全局作用域
// let foo; 声明
// foo = 'bar'赋值(绑定)

// 函数作用域：函数声明和表达式作用域机制一样
function declaredFunc() {
  let funcVar = 'funcVar';
  console.log('declaredFunc ran.');
}

let arrowFunc = () => {
  let funcVar = 'funcVar';
  console.log('arrowFunc ran.');
};

declaredFunc();
arrowFunc();
// console.log(funcVar); // 未定义

// 块作用域：按代码块确定的作用域，包括 if for 结构
// var 没有块级作用域，let const 有
{
  let letVar = 2;
  const constVar = 3;
}

// console.log(letVar); // 未定义
// console.log(constVar); // 未定义
