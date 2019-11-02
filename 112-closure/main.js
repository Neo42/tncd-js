'use strict';

// Global { say: { name:undefined, word: undefined } } 全局词法环境
// => null

let word = 'Yo!';
// Global { say: { name:undefined, word: undefined }, word:'Yo!'} 全局词法环境
// => null

say(); // Yo! undefined 这里也是一个没有环境记录的被调用的词法环境

function say(name) {
  console.log(`${word} ${name}`);
}

say('Lo!'); // Yo! Lo!
// console.log(name); // 未定义
// 调用的词法环境 { name:'Lo!' }
// => Global { say:{ name:undefined, word: undefined }, word:'Yo' } 全局词法环境
// => null

// say被调用时会在
// 本次调用的词法环境中的环境记录会覆盖函数词法环境中的局部变量 name
// 之后引擎没有在函数词法环境中找到 word 的值
// 就到函数上层词法环境 Global 中找到 word = 'Yo!'
// 函数顺利执行
// 但是，相反地，引擎没有办法从外层词法环境 Global 访问到内层词法环境 say 函数中的变量 name 抑或是被调用的词法环境中的 name='Lo!'
// 内层词法环境的环境记录对于外层环境来说是封闭的
// 所以这种特性叫做闭包

// 对于块级作用域也是一样
{
  console.log(word); // Yo!
  let block = 'ooo';
}
// console.log(block); // 未定义
