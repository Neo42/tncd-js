'use strict';

// Global { say:λ } 全局词法环境，此时只包含函数 say, say的函数词法环境还没有生成
// => null

let word = 'Yo!';
// Global { say:λ, word:'Yo!'} 全局词法环境现在有了变量 word
// => null

say(); // Yo! undefined
// 这里的调用会生成一个函数 say 的词法环境
// 这个词法环境会取出函数 say 声明中所有声明过的变量，也就是以参数形式声明的局部变量 name,因为 name 没有被赋值所以 name === undefined
// 之后在函数执行时 JS 引擎会从调用生成的词法环境开始找 word 声明
// 就到上层词法环境 Global 中找到 word 的声明，接着找 word 的赋值 word === 'Yo!'
// 最后执行

function say(name) {
  console.log(`${word} ${name}`);
}

say('Lo!'); // Yo! Lo!
// console.log(name); // 未定义
// 调用生成的函数词法环境 { name:'Lo!' }
// => Global { say:{ name:'Lo!' }, word:'Yo' } 全局词法环境
// => null

// 函数执行时
// 本次调用生成的函数词法环境中的环境记录会记录 say 函数声明中的局部变量 name，
// 之后引擎没有在函数词法环境中找到 word 的声明
// 就到上层词法环境 Global 中找到 word 的声明，接着找 word 的赋值 word = 'Yo!'
// 函数顺利执行
// 但是，相反地，引擎没有办法从外层词法环境 Global 访问到内层函数词法环境中的变量 name === 'Lo!'
// 内层词法环境的环境记录对于外层环境来说是封闭的
// 所以这种特性叫做闭包

// 对于块级作用域也是一样
{
  console.log(word); // Yo!
  let block = 'ooo';
}
// console.log(block); // 未定义
