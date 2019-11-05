'use strict';

// 函数执行上下文的组成部分：
// 1. arguments 对象
// 2. 指向外层对象的 this 关键字
// 3. 对外层全局执行上下文的引用（隐性）（闭包机制实现的关键）

let name = '墨石';
let github = 'neo42';

function say(word) {
  console.log(word);
}

say(name);

// 创建阶段（脚本创建后立即开始）：
// 1. 创建全局执行环境（ Global 对象、对应指向的 this、隐性指向 null 的引用）
// 2. 找到变量 name、github 和函数 say 的声明，开设内存、记录声明
// 3. 跳过 let 声明，保持未初始化状态，如果是 var 声明则初始化为 undefined

// 执行阶段（从脚本运行开始）
// 1. 从上到下分别把 name、github 赋值成 '墨石'、'neo42'
// 2. 引擎跑到第 15 行看到了函数的调用，于是在全局执行上下文之上又创建一个函数 say 的执行上下文（包括一个 arguments 对象、指向函数对象的 this 关键字以及对全局执行环境的隐性引用）（函数执行环境被摞到执行环境栈顶层）
// 3. say 函数执行上下文中又会经过代码创建、代码执行两个阶段，先以创建出以参数形式声明的局部变量 word，之后把全局变量 name 的值赋给函数的局部变量 word，console.log执行，函数执行环境的执行阶段结束
// 4. 函数执行环境被弹出执行环境栈，全局执行环境的执行阶段结束

// https://tylermcginnis.com/javascript-visualizer/ (只适用于es5)
// http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/
