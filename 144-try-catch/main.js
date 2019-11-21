'use strict';

try {
  a = 1;
} catch (error) {
  console.log(`${error.name}\n${error.message}\n${error.stack}`);
}

// try {((((
// } catch (error) {
//   console.log('Who');
// } // 报错，必须可运行

try {
  setTimeout(() => {
    a = 1; // a未定义
  }, 1000);
} catch (error) {
  console.log('Ahhhh');
} // 不会打印，因为引擎会先跳过异步代码，运行完 catch，再按规定时间运行异步代码
