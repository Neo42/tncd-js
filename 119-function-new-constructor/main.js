'use strict';

// new Function(["arg1","arg2","arg3"],functionBody)
// 在浏览器中，无论在哪构建 new Function，这个函数的作用域都是全局

var x = 'global';
function func1() {
  var x = 'local';
  return new Function('return x');
}

func1()(); // global，浏览器运行有效，nodejs没办法定义全局函数
