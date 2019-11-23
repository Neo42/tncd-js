'use strict';

try {
  a = 1;
} catch (e) {
  // e 为存放异常信息的标识符，在 catch 语句之外不可用
  console.log('Here occurs an error.');
  console.log(e); // [ReferenceError: a is not defined]
} finally {
  console.log('Control flow complete.'); // Control flow complete.
}

let aBook = { title: 'Holy Bible' };

function hasAuthor(book) {
  try {
    if (!book.author) {
      throw { name: 'No author', message: "This book's author is anonymous." };
    }
    console.log(book); // 有异常则会被跳过
  } catch (e) {
    throw e; // 返回异常信息，交给之后的流程处理
  }
}

try {
  hasAuthor(aBook);
} catch (e) {
  console.log(e.message); // This book's author is anonymous.
} finally {
  console.log('Checking complete.'); // Checking complete.
}

// 省略 catch 旁边的括号和标识符也可以
try {
  a = 1; // a 未定义
} catch {
  console.log('Error.'); // Error.
}

// 注意：
// 1. 运行时检查错误，代码不能运行则无法使用
// try {
//   ...
// } catch (e) {
//   console.log(e);
// } // 跑不起来

// 2. 只能在同步代码中使用
try {
  setTimeout(() => {
    a = 1; // a is not defined，只是运行结果报错
  }, 5000);
} catch (error) {
  console.log(error.name); // 在运行异步代码之前已经被 JS 引擎跳过
}
