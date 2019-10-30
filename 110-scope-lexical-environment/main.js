'use strict';

// 词法环境、词法作用域

// 词法环境是一种规范类型，用于根据ECMAScript代码的词法嵌套结构来定义标识符与特定变量和函数之间的关联。

// 变量、函数可见或可用的范围、哪一层
// 一个名字可以指向一个变量的位置范围
// 标识符（变量、函数）的一个属性（与上下文对比）

function func() {
  let a = 1;
}
// a; // not defined

// 全局词法环境——全局环境记录——全局变量
// - 全局环境记录 - 保存全局变量、函数
// - 上层词法环境的引用 [[scope]]：null
var foo = 'bar'; // var 在文件顶层声明，自动变为全局变量
// var foo; 声明
// foo = 'bar'赋值(绑定)
// let foo = 'bar' 脚本作用域

console.log(foo); // 'bar'

// 函数词法环境——声明环境记录——函数环境记录——局部变量
// - 函数环境记录
// - 上层词法环境的引用 [[scope]]：Global 全局
function bar(boo) {
  // 参数按局部变量处理
  let foo = 'baz';
  console.log(foo, boo);
}
// let foo = 'bar';
bar(); // baz undefined

// 如何确定作用域？
// 作用域由编译器负责确定
// 在 JavaScript 中， 编译器通过识别变量、函数在程序源码（相对于运行执行阶段）中被声明的位置决定作用域的位置
// 所以 JavaScript 的作用域机制被称为 词法作用域

// 块级作用域：按代码块确定的作用域
// var 没有块级作用域，let const 有
{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // 1
// console.log(b); // 未定义
// console.log(c); // 未定义

// 作用域、词法环境：
// - 环境记录：记录了标识符的在其词法环境范围内创建的绑定，记录了词法环境
// - 外层词法环境的引用：

// 声明环境记录： FunctionDeclarations, VariableDeclarations
// var, const, let, class, function declarations

//  对象环境记录
//  全局环境记录
