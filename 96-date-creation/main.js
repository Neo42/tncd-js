'use strict';
// 实时：new Date()

let now = new Date();
console.log(now); // Wed Oct 23 2019 16:24:20 GMT+0800 (GMT+08:00)

// 微秒，表示从 1970 年 1 月 1 日开始经过的描述：new Date(milliseconds)
let time = new Date(1000);
console.log(time); // Thu Jan 01 1970 08:00:01 GMT+0800 (GMT+08:00)

// 日期字符串: new Date("yy-mm-dd")
time = new Date('2017-01-26');
console.log(time); // Thu Jan 26 2017 08:00:00 GMT+0800 (GMT+08:00)
time = new Date('adsfa');
console.log(time); // Invalid Date

// new Date(year, month, date, hours, minutes, seconds, ms)
time = new Date(1999, 2, 31, 0, 0, 0, 314); // 年份必须是4位；月份从 0 计数，2 表示三月，范围是 0-11 ；日期默认 1 日；之后单位默认为 0；可以精确到毫秒
console.log(time); // Wed Mar 31 1999 00:00:00.314 GMT+0800 (GMT+08:00)

// 参数超出范围会自动累加跟进
time = new Date(2013, 0, 32); // 一月 32 号？
console.log(time); // Fri Feb 01 2013 00:00:00 GMT+0800 (GMT+08:00)，自动更正为二月 1 号

// 仅供了解
time = new Date(0);
console.log(time);
time = new Date(0, 0, 0);
console.log(time); // Sun Dec 31 1899 00:00:00 GMT+0805 (GMT+08:00)

// 类型转换
time = new Date();
console.log(+time); // 1571906220798，转换成毫秒时间戳，相当于 time.getTime()

// 相减可得时间差，单位为毫秒
let timeDiff = new Date() - new Date(0);
console.log(timeDiff); // 1571906210180，毫秒时间戳

time = Date.now();
console.log(time); // == time.getTime()，毫秒时间戳
