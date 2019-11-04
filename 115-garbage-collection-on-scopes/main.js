'use strict';

// 正常的垃圾收集
function wrapperFunc() {
  let innerVar = 'I am in the wrapper function.';
  let func = function() {
    return innerVar; // func 中有对 wrapperFunc 的引用
  };
  return func;
}

let result = wrapperFunc(); // result = function(){ return 1 }; 有对 func 的引用（其中还带有 wrapperFunc 的引用），内存不清理函数
console.log(result()); // I am in the wrapper function.
result = null; // 解除原有的引用，所有函数作用域从内存中清除

// V8 实际优化(浏览器中调试):
let value = 'Surprise!';
function f() {
  let value = 'the closest value'; // V8 引擎把函数定义域中的局部变量优化掉了
  function g() {
    // in console: type alert(value); Surprise!
  }
  return g;
}

let g = f();
g();
