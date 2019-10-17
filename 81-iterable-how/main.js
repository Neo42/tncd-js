'use strict';

// 创建一个可以当作范围使用的对象
let range = {
  from: 1,
  to: 5
};

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    end: this.to,
    next() {
      return this.current <= this.end
        ? { value: this.current++, done: false }
        : { done: true };
    }
  };
};

for (const i of range) {
  console.log(i);
} // 1,2,3,4,5

let str = 'Hello';

// 和下面代码完成的功能一致
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator](); // 取得迭代器 {next(){}}

while (true) {
  let result = iterator.next(); // 返回迭代结果 {done,　value}
  if (result.done) break;
  alert(result.value); // H, e, l, l, o，一个一个输出字符
}

// 实现：
// 1. 参照的约定：可迭代协议和迭代器协议(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
// 2. 用对象的 Symbol.iterator 内置键定义一个方法，返回一个迭代器，以供每次循环调用（当然也可以手动调用）

// for of 循环运行原理
// 1. 运行 obj[Symbol.iterator] 方法：for (let key of obj){} 循环开始，找到并调用 obj[Symbol.iterator] 方法，如果没有找到就报错
// 2. 得到 {next(){}}：obj[Symbol.iterator] 方法运行后返回一个“迭代器”对象，这个对象必须包含一个控制循环何时结束、怎样进行的 next() 方法
// 3. 运行 next() 方法，得到 {done, value}：每次循环后 next() 方法都会返回一个格式为 {done: Boolean, value: any} 的对象来记录迭代结果
// 4. 根据 {done, value} 判断迭代是否继续：迭代结果对象中的 done=true 时，迭代结束，next() 方法返回 { done: true }，否则返回 {done: false, value: any}
