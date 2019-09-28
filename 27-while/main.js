'use strict';

let i = 3;
// i != 0
while (i) {
  // 当 i 变成 0 时，条件为 false，循环终止
  alert(i); // 3,2,1
  i--;
}

// 不建议这样写
i = 0;
while (i++ < 5) {
  // ++ 会递增 i，但以递增之前的 i 值进行判断
  alert(i);
}
