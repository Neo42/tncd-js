'use strict';
// 实时：new Date()
let now = new Date();
console.log(now); // Wed Oct 23 2019 16:24:20 GMT+0800 (GMT+08:00)

// 微秒，表示从 1970 年 1 月 1 日开始经过的描述：new Date(milliseconds)
let past = new Date(1000);
console.log(past); // Thu Jan 01 1970 08:00:01 GMT+0800 (GMT+08:00)

// 日期字符串: new Date("yy-mm-dd")
past = new Date('2017-01-26');
console.log(past); // Thu Jan 26 2017 08:00:00 GMT+0800 (GMT+08:00)
past = new Date('adsfa');
console.log(past); // Invalid Date

// new Date(year, month, date, hours, minutes, seconds, ms)
