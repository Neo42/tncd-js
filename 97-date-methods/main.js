'use strict';

// 从小时开始用复数
let time = new Date();
console.log(
  time.getFullYear(), // 2019
  time.getMonth(), // 9
  time.getDate(), // 24
  time.getHours(), // 11
  time.getMinutes(), // 59
  time.getSeconds(), // 40
  time.getMilliseconds(), // 45
  time.getTime(), // 1571889632098,时间戳：从 1970 年 1 月 1 号 0 点（UTC）起经过的总毫秒数
  time.getTimezoneOffset() // -480(东八区)，当地时区时间和 UTC 时间之差，单位为分钟
); // 2019 9 24 11 59 40 45 1571889632098

// 手动设置时间，改变原有的时间变量。方法的写法跟getDate等对应，参数除方法对应的单位必须写之外，其后的单位可以省略
console.log(time.setDate(26)); // 1571895529439，返回更改后的 time.getTime()
console.log(time); // Sat Oct 26 2019 14:29:48 GMT+0800 (GMT+08:00)

time.setFullYear(2049);
console.log(time); // Tue Oct 26 2049 14:29:40 GMT+0800 (GMT+08:00)

// 超出范围时，自动在原时间上累加
time.setMonth(24);
console.log(time); // Thu Jan 26 2051 14:29:16 GMT+0800 (GMT+08:00)
