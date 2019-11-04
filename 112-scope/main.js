'use strict';

function f() {
  let a = 1;
}
// console.log(a); // not defined

// 作用域
// MDN定义：当前的执行上下文（一个变量或函数所在的执行上下文）https://developer.mozilla.org/en-US/docs/Glossary/Scope
// 跟一般意义上的执行上下文所指范围不同, 两个概念的使用场景也不同
// 别称：词法环境、词法作用域—— JS引擎根据声明变量的位置来确定该变量可被访问的位置
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
  var varVar = 1;
  let letVar = 2;
  const constVar = 3;
}

console.log(varVar); // 1
// console.log(letVar); // 未定义
// console.log(constVar); // 未定义

function returnFunc() {
  let string = 'local';
  function returnedFunc() {
    return string;
  }
  return returnedFunc();
}

let string = 'global';
console.log(returnFunc()); // local, 沿作用域链从内向外查找：returnedFunc => returnFunc => Global

var result = [];

for (var i = 0; i < 5; i++) {
  result[i] = function() {
    console.log(i);
  };
}

console.log(i);

result[0](); // 5, expected 0
result[1](); // 5, expected 1
result[2](); // 5, expected 2
result[3](); // 5, expected 3
result[4](); // 5, expected 4

// 全局创建阶段：全局执行上下文 this、null、global对象，变量：result、i，函数
// 全局执行阶段：先进行循环，定义新函数
// result = [
//   function(){console.log(i);},
//   function(){console.log(i);},
//   function(){console.log(i);},
//   function(){console.log(i);},
//   function(){console.log(i);}
// ]
// 之后发现函数调用，再取用变量 i（全局变量 i = 5），函数执行

function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: 'email', help: 'Your e-mail address' },
    { id: 'name', help: 'Your full name' },
    { id: 'age', help: 'Your age (you must be over 16)' }
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i]; // 全局 i
    document.getElementById(item.id).onfocus = function() {
      console.log(i);
      showHelp(item.help);
    };
  }
}

setupHelp();
