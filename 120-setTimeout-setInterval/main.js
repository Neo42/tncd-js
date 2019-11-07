'use strict';

let timeoutId = setTimeout(() => console.log('Rerunning'), 5000); // 1
console.log(timeoutId);
clearTimeout(timeoutId);

let counter = 0;
timeoutId = setInterval(() => {
  console.log(counter++); // 0,1,2,3,4,5
}, 1000);

setTimeout(() => clearInterval(timeoutId), 7000);

// 间隔设为零的 setTimeout 还是会后运行（异步）
setTimeout(() => {
  console.log('Hello');
}, 0);

console.log('World'); // World Hello

// setInterval 代码运行的时间会被包含在设置的时间间隔里，导致运行结果之间的时间间隔比既定间隔短
// 解决方法是把 setInterval 转写成多层嵌套 setTimeout

// setTimeout(() => {
//   setTimeout(() => {
//     console.log(++counter); // 1
//     setTimeout(() => {
//       console.log(++counter); // 2
//       setTimeout(() => {
//         console.log(++counter); // 3
//         setTimeout(() => {
//           console.log(++counter); // 4
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// 浏览器中计时器嵌套时时间间隔至少有4毫秒（https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers）
// node 中则不会
