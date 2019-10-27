'use strict';

// 数组操作的内存成本高

let list = {
  value: 'me',
  next: {
    value: 'you',
    next: {
      value: 'ze',
      next: null
    }
  }
};

// 每个值都可以被独立操作, 不需要其他大量的边际成本
// 还可以定制属性，指向任意一个相对位置的值
console.log(list.value); // me
console.log(list.next.value); // you
console.log(list.next.next.value); // ze

list.next.next.value = 'Darth Vadar';
console.log(list); // { value: 'me', next: { value: 'you', next: { value: 'Darth Vadar', next: null } } }
