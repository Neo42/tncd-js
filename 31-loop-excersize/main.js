'use strict';

// 弹出的最后一个值是什么？
let i = 3;
while (i) {
  console.log(i--);
}

i = 0;
while (++i < 5) {
  console.log(i); // ++i==5时跳出，i=4, 0~4
}

i = 0;
while (i++ < 5) {
  console.log(i); // 输出i+1后的值i++=5时跳出，i=5，1~5
  // 0 < 5, alert(1)
  // 1 < 5, alert(2)
  // 2 < 5, alert(3)
  // 3 < 5, alert(4)
  // 4 < 5, alert(5)
  // 5 == 5, 跳出
}

for (let i = 0; i < 5; i++ /* 或++i */) {
  console.log(i);
  // console.log(0);
  // i = 1;
  // 0~4
}

// 输出2-10的偶数
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}`);
}

i = 0;
while (i < 3) {
  console.log(`number ${i}`);
  i++;
}

// let input = prompt('Give me a number bigger than 100');
// while (input <= 100) {
//   if (!input) {
//     break;
//   }
//   input = prompt('WTF? Come again!');
// }

// let num;
// do {
//   num = prompt('Give me a number bigger than 100', '');
// } while (num <= 100 && num);

let n = prompt('Give a number.');
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    // 检查区间内的每个数是否有因数
    // 如果有，跳入下一个迭代
    if (i % j === 0) continue nextPrime;
  }
  console.log(i);
}
