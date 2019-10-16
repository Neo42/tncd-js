'use strict';

// arr.some(function(element, index, array){}, thisArg)
// 检查数组中是否含有符合条件的元素
// 依次对每个元素运行回调函数，一旦有回调的执行结果为 true 即返回 true 并结束运行，所有元素运行回调都没有返回 true 才会最后返回 false
let myArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(myArray.some(ele => ele.id === 1)); // true
console.log([].some(ele => ele.id === 1)); // false，对空数组测试的结果都为 false

// 可以用 thisArg 指定回调执行时的 this, 但必须用 function 声明回调函数，不能用箭头函数，因为箭头函数无法绑定 this
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

// arr.every((element, index, array) => {}, thisArg)
// 检查数组中的所有元素是否都符合条件
// 对所有元素都执行一遍回调函数，只有所有回调结果都为 true 时，every 才会返回最后结果 true，否则会返回 false
// 可以通过 thisArg(可选) 指定回调执行时的 this，但要使用 function 声明回调函数而不能用箭头函数，因为箭头函数无法绑定 this

console.log(myArray.every(ele => ele.id === 1)); // false
console.log([].every(ele => ele.id === 1)); // true，对空数组测试的结果都为 true
console.log(
  hobbies.every(
    function(hobby, i, hobbies) {
      return this.age >= hobby.ageRequired;
    },
    // 规定 person 为回调函数执行时的 this
    person
  )
); // false
