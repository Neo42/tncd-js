'use strict';

// 数字转换,容易错误判断
console.log('3' / 1, typeof ('3' / 1)); // 3,number
console.log(`'233'`, Number('233')); // '233' 233
console.log(`'我太难了'`, Number('我太难了')); // '我太难了' NaN
console.log(`undefined: '俺也一样！'`, Number(undefined)); // undefined: 俺也一样！ NaN
console.log(`true`, Number(true)); // true 1
console.log(`false`, Number(false)); // false 0
console.log(`null`, Number(null)); // null 0
console.log(`true + false`, Number(true + false)); // true + false 1
console.log(`'   -1000\n'`, Number('   -1000\n')); // '   -1000\n' -1000

// 运算优先级 => '+'转换字符串 => 其他运算符转换数字 => 数据类型数字运算特例
