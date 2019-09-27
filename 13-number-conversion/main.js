'use strict';

// 数字转换,容易错误判断
console.log('3' / 1, typeof ('3' / 1)); // 3,number
console.log(`233`, Number('233')); // '233' 233
console.log(`我太难了`, Number('我太难了')); // '我太难了' NaN
console.log(`undefined: '俺也一样！'`, Number(undefined)); // undefined: 俺也一样！ NaN
console.log(true, Number(true)); // true 1
console.log(false, Number(false)); // false 0
console.log(null, Number(null)); // null 0

// 运算优先级 => '+'连接字符串 => 其他运算符转换数字 => 数据类型数字运算特例

// - 二元加号在一个运算元是字符串时转换为字符串
// 字符串“按原样读取”，两端的空白被忽略。空字符串变成 0。出错变成 NaN。
console.log(`'   -1000\n'`, Number('   -1000\n')); // '   -1000\n' -1000
// - 两个都不是字符串转换数字
console.log(true + null, Number(true + false)); // 1 1
// - 一元加号转换数字
console.log(+'2'); // 相当于 Number('2')
console.log(-'2'); // 相当于 Number('-2')
