'use strict';

// 布尔转换，易失误

// false
console.log(`0 ${Boolean(0)}`);
console.log(`null ${Boolean(null)}`);
console.log(`undefined ${Boolean(undefined)}`);
console.log(`NaN ${Boolean(NaN)}`);
console.log(`'' ${Boolean('')}`);

// true
console.log(`'0' ${Boolean('0')}`);
console.log(`'   ' ${Boolean('   ')}`);
