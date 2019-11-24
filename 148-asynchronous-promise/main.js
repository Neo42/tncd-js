'use strict';
// 约定：
// resolve 在前，处理结果，状态为 fulfilled
// reject 在后，处理异常，状态为 rejected
let promise = new Promise((resolve, reject) => {
  throw 42;
});

promise
  .then(() => {
    // 状态为 fulfilled 时运行
    console.log('Success');
  })
  .catch(() => {
    // 状态为 rejected 时运行
    console.log('💩');
  });
