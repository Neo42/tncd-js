'use strict';

let i = 5;
while (i) {
  console.log(i);
  i--;
  // 如果 i==3，结束循环
  if (i === 3) {
    console.log("I'm dying");
    break;
  }
}
console.log('dead');

i = 5;
while (i) {
  --i;
  // 如果 i==3，跳过i==3的迭代中剩下的部分
  if (i === 3) {
    console.log("I'm skipping");
    continue;
  }
  console.log(i);
}
