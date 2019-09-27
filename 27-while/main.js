'use strict';

let i = 3;
// i != 0
while (i) {
  // 当 i 变成 0 时，条件为 false，循环终止
  alert(i); // 3,2,1
  i--;
}
