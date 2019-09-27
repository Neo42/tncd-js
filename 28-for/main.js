'use strict';

// for：如果 condition 成立 → 运行 body 然后运行 step,易错
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// 效果相当于
// let i = 0;
// if (i < 3) // condition
// {
//   console.log(i); // body
//   i++; // step
// }

// for (;;) {
//   console.log('To the infinity!');
// }
