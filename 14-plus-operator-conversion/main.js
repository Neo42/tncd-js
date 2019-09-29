'use strict';

// - 二元加号在一个运算元是字符串时转换为字符串
// 字符串“按原样读取”，两端的空白被忽略。空字符串变成 0。出错变成 NaN。
console.log(`'   -1000\n'`, Number('   -1000\n')); // '   -1000\n' -1000
// - 两个都不是字符串转换数字
console.log(true + null, Number(true + false)); // 1 1
// - 一元加号转换数字
console.log(+'2'); // 相当于 Number('2')
console.log(+'+2'); // 消掉了原来的加号，相当于 Number('2')
console.log(-'2'); // 相当于 Number('-2')
