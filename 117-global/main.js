'use strict';

// global 对象：运行环境中最顶层的对象
// var 可以用来声明全局变量（无论所有脚本、所有模块都可以访问到的变量）；let、const 则无法声明全局变量，其作用域会保持在他们所在脚本，而不是全局作用域
// 这个现象可以在浏览器中看到，quokka 里看不到

// 查看 "global" 对象

// 浏览器
console.log(window);
console.log(window.globalThis); // chrome 浏览器的 global 对象中有这个属性，quokka 和 微软的 edge 不支持

// node中的 global 对象，浏览器里没有，需要用 node 运行脚本
// console.log(global);

var globalVar = 'global variable';
let scriptLet = 'script variable';
console.log(window.globalVar); // 浏览器中显示 'global variable'
console.log(window.scriptLet); // 浏览器中显示 undefined

if (!window.Promise) {
  console.log('Your browser is old af.');
}

console.log(window.Promise);
console.log(window.screenX);
