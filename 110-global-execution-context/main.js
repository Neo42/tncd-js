'use strict';

// 1. creation phase: 代码创建阶段，脚本创建后立即开始，编译器参与，搜索和记录所有的标识符（变量、函数等）声明
// 2. execution phase：代码执行阶段，在创建阶段之后开始，引擎参与，按照上下顺序进行赋值或执行，所有执行结束时结束

// let name, github; 声明 declaration（不规范说法：定义 definition、创建 creation）
// name = '墨石'; github = 'neo42'; 赋值 assignment（CS领域的一般说法：绑定 binding）

let name = '墨石';
let github = 'neo42';

function say(word) {
  console.log(word);
}

// 创建阶段（脚本创建后立即开始）：
// 1. 创建全局执行环境（全局对象、对应指向的 this、隐性指向 null 的引用）
// 2. 找到变量 name、github 和函数 say 的声明，开设内存、记录声明
// 3. name、github 的值默认为 undefined

// 执行阶段（从创建阶段记录完最后一个声明之后开始）
// 1. 从上到下分别把 name、github 赋值成 '墨石'、'neo42'

// 全局执行上下文的组成部分：
// 1. 全局对象
// 2. 指向全局对象、可以手动调用的 this 关键字
// 3. 外层执行上下文的引用：null（隐性）（闭包机制实现的关键）

// 上下文：背景、环境、容器（但不是对象）
// 执行时代码被引擎评估时所处的环境，这个环境会对代码中数据的使用产生影响
// 执行上下文是 JavaScript 语言规范中定义的一种类型（不是对象），只用于解释语言规范中的概念

// https://tylermcginnis.com/javascript-visualizer/
// http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/
