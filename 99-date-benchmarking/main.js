'use strict';

// https://zhuanlan.zhihu.com/p/51047561
// https://benediktmeurer.de/2017/12/13/an-introduction-to-speculative-optimization-in-v8/
// https://www.youtube.com/watch?v=cvybnv79Sek
// https://mrale.ph/v8/resources.html

let t1 = new Date();
let t2 = new Date('2016');

console.log(t1 - t2);
console.log(t1.getTime() - t2.getTime());

// 定义两个求时间差的函数
function diffDirect(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

// 定义性能测试函数
function bench(func) {
  let date1 = new Date(0);
  let date2 = new Date();
  let start = Date.now();
  for (let i = 0; i < 100000; i++) func(date1, date2);
  return Date.now() - start;
}

// 不预热测试
let time1 = 0;
let time2 = 0;

for (let i = 0; i < 10; i++) {
  time1 += bench(diffDirect);
  time2 += bench(diffGetTime);
}

console.log(`diffDirect 时间（未预热）: ${time1}`);
console.log(`diffGetTime 时间（未预热）: ${time2}`);

/* 预热后测试，多数情况下是预热后性能更好 */

// 时间清零
time1 = 0;
time2 = 0;

// 两个函数各自运行一次以便预热
bench(diffDirect);
bench(diffGetTime);

for (let i = 0; i < 10; i++) {
  time1 += bench(diffDirect);
  time2 += bench(diffGetTime);
}

console.log(`diffDirect 运行时间（预热后）: ${time1}`);
console.log(`diffGetTime 运行时间（预热后）: ${time2}`);
