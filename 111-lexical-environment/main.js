'use strict';

// 词法环境是一种规范类型，用于根据ECMAScript代码的词法嵌套结构来定义标识符与特定变量和函数之间的关联。

// 声明环境记录： FunctionDeclarations, VariableDeclarations
// var, const, let, class, function declarations

// 作用域、词法环境：
// - 环境记录：记录了标识符的在其词法环境范围内创建的绑定，记录了词法环境
// - 外层词法环境的引用：

// 全局词法环境——全局环境记录——全局变量
// - 全局环境记录 - 保存全局变量、函数
// - 上层词法环境的引用 [[environment]]：null
var foo = 'bar'; // var 在文件顶层声明，自动变为全局变量
// var foo; 声明
// foo = 'bar'赋值(绑定)
// let foo = 'bar' 脚本作用域

// 全局词法环境——全局环境记录——全局变量
// - 全局环境记录 - 保存全局变量、函数
// - 上层词法环境的引用 [[environment]]：null
var foo = 'bar'; // var 在文件顶层声明，自动变为全局变量

console.log(foo); // 'bar'

// 函数词法环境——声明环境记录——函数环境记录——局部变量
// - 函数环境记录
// - 上层词法环境的引用 [[environment]]：Global
function bar(boo) {
  // 参数按局部变量处理
  let foo = 'baz';
  console.log(foo, boo);
}
// let foo = 'bar';
bar(); // baz undefined
