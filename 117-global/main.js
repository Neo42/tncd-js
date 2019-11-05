'use strict';

// global 对象：运行环境中最顶层的对象
// var 可以用来声明全局变量（无论哪里都可以访问到的变量）；let、const 则无法声明全局变量，其作用域会保持在他们所在脚本，而不是全局作用域
// 这个现象可以在浏览器中看到

// 查看 "global" 对象
console.log(window);
// console.log(global); // 用 node 运行脚本
