'use strict';
// 单纯复制会复制对象的引用
// 如何只复制一个对象的值
let user1 = { age: 3 };
let user2 = {
  age: 4,
  size: { height: 200 }
};
let clone = {};

Object.assign(clone, user1, user2);
console.log(clone);
// 最后复制的值会覆盖之前复制的值
console.log(user2.size === clone.size);

// 改变 user2 的值，观察 clone 的变化
user2.age++;
user2.size.height++;
// 变量属性不共享，对象属性共享
// 因为对象属性复制的还是引用
// 需要深拷贝：_.cloneDeep(obj)
console.log(clone);
