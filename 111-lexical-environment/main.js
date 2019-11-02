'use strict';

bar(1); // baz 1 一旦脚本中有函数声明，那么这个函数声明的环境记录会在其上层词法环境创建之后立即初始化，所以可以在执行位置可以高于声明位置

// 作用域在 JavaScript 中的机制规范
// 词法环境是一种规范类型，用于根据ECMAScript代码的词法嵌套结构来定义标识符与特定变量和函数之间的关联。

// 声明环境记录： FunctionDeclarations, VariableDeclarations
// var, const, let, class, function declarations

// 作用域、词法作用域、词法环境：
// - 环境记录：JavaScript 规范中的一种类型，记录了标识符的在其词法环境范围内创建的绑定，比如变量和函数
// - 对外层词法环境的引用，有可能是 null

// 全局词法环境
// - 全局环境记录 - 保存全局变量、函数
// - 外层词法环境的引用为空 [[environment]]：null
var foo = 'bar'; // var 在文件顶层声明，自动变为全局变量
// var foo; 声明，值为 undefined
// foo = 'bar'赋值(绑定)
// let foo = 'bar' 脚本作用域，不一定是全局作用域
console.log(foo); // 'bar'

// 函数词法环境
// - 函数环境记录
// - 上层词法环境的引用 [[environment]]：Global
// 在上层词法环境创建时初始化
function bar(boo) {
  // 参数按局部变量处理
  let foo = 'baz';
  console.log(foo, boo);
}
// let foo = 'bar';
bar(); // baz undefined
