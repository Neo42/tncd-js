'use strict';

// 函数表达式：自身位置创建、创建后可用
// 函数声明：
// 全局创建，全局可见，局部创建，局部可见
// 块内创建，块内可见，if,switch,loop（块级定义域），有需要则定义全局变量
// 调用可能先于声明

{
  function func() {}
}

func(); // can't access in-block func but global func.
func2(); // Cannot access 'func2' before initialization

function func(params) {
  console.log(1);
}

let func2 = function() {
  console.log(3);
};
