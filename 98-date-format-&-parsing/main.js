'use strict';

// - YYYY-MM-DDThh:mm:ss.sssZ (Z: +-hh:mm)
// - Month DD(, YYYY)
// - Mon DD
// - YYYY Mon(th) (DD)
// - MM/DD/YYYY hh:mm (am/pm)
// 空格无妨

let time = new Date('2012-01-26T13:51:50.417-07:00');
console.log(time); // Fri Jan 27 2012 04:51:50 GMT+0800 (GMT+08:00)

time = new Date('Oct 9,2000'); // time = new Date('Mon DD')
console.log(time); // Mon Oct 09 2000 00:00:00 GMT+0800 (GMT+08:00)

time = new Date('1999 March 31'); // time = new Date('1999 Mar 31')
console.log(time); // Wed Mar 31 1999 00:00:00 GMT+0800 (GMT+08:00)

time = new Date('March 31'); // time = new Date('1999 Mar 31')
console.log(time); // Sat Mar 31 2001 00:00:00 GMT+0800 (GMT+08:00) 默认从 2001 年开始

time = new Date('08/24/1995 01:30 '); // 0 可以省略
console.log(time); // Thu Aug 24 1995 01:30:00 GMT+0800 (GMT+08:00)

let timestamp = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(timestamp);
