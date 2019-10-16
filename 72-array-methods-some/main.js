'use strict';

// arr.some(function(element, index, array){}, thisArg)
// 检查数组中是否含有符合条件的元素
// 依次对每个元素运行回调函数，一旦有回调的执行结果为 true 即返回 true 并结束运行，所有元素运行回调都没有返回 true 才会最后返回 false
let myArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(myArray.some(ele => ele.id === 1)); // true
console.log([].some(ele => ele.id === 1)); // false，对空数组测试的结果都为 false

// 要使用 thisArg 就必须用 function(){} 声明函数，因为箭头函数无法绑定 this
let person = { age: 24 };
let hobbies = [{ ageRequired: 18 }, { ageRequired: 3 }, { ageRequired: 30 }];
console.log(
  hobbies.some(
    function(hobby, i, hobbies) {
      return this.age >= hobby.ageRequired;
    },
    // 规定 person 作为回调函数中的 this
    person
  )
); // true
