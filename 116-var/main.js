'use strict';

// 块作用域对 var 不起作用
if (true) {
  var varVar = 1;
  let letVar = 2;
  const constVar = 3;
}
console.log(varVar); // 1
// console.log(letVar); // 未定义
// console.log(constVar); // 未定义

// 提升时被初始化为 undefined，let、const 也被提升但保持未初始化的未定义状态
// （提升只是创建阶段的形象化的非正式的说法，实际上语言规范中并没有“提升”这个说法）
function func() {
  console.log('Func ran.');
}

func();
