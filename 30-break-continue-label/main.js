'use strict';

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coods (${i} ${j})`, '');

    // 如果是空字符串或被取消，则t跳出两个循环，直接走下一步
    if (!input) {
      break outer;
    }
  }
}
console.log('Out of loops.');

// 只能从循环内部调用
// 先声明后调用（不能上面调用下面声明）
// break below // undefined label
// below: for (let i = 0; i < 3; i++) {}
