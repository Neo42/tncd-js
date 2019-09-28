'use strict';

// 函数是值，可以用变量保存
// 函数表达式：自身位置创建、创建后可用
// 函数声明：全局创建，全局可见，局部创建，局部可见，块内创建，块内可见，调用可能先于声明
// 有无括号：运行 vs 未运行
// 有无分号：代码块 vs 赋值语句

let input = prompt('Give me a number.', '');
let func = prompt;

console.log(input);
func('Another prompt.', '');

// 首选函数声明
