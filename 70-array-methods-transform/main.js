'use strict';
let myArray = ['a', 'b', 'c'];

// arr.map((element, index, array) => {})
// 取每个元素、当前元素的索引数、和原数组执行回调函数，每次回调执行都会返回一个结果，把这些结果作为元素组成一个新数组并返回
console.log(myArray.map(ele => ele + ' person')); // [ 'a person', 'b person', 'c person' ]

// arr.sort((a, b) => {})
// 排序后返回新数组，采用的是经过优化后的快速排序算法
// 接受一个回调函数，每次比较时回调函数把被比较的两个数作为参数
// 之后 sort 方法会判断回调函数执行后返回的结果转换为数字之后的值与 0 的关系
// 如果结果小于 0，则 a 排在 b 的左边：f(a,b) < 0 => a, b
// 如果结果大于 0，则 a 排在 b 的右边：f(a,b) > 0 => b, a
// 如果结果等于 0，则 a、b 的相对位置不变

myArray = [1, 2, 11];

// 回调函数没有指明时，sort方法会把参数转换为字符串，再按照 unicode 编码位置（码位、码点）大小顺序排序而非数字顺序，'2' > '11'
console.log(myArray.sort()); // [ 1, 11, 2 ]，

console.log(
  myArray.sort((a, b) => {
    console.log(
      `a = ${a}， b = ${b}， ${a} - ${b} ${a - b > 0 ? `>` : `<`} 0 ==> ${
        a - b > 0 ? `${b}, ${a}` : `${a}, ${b}`
      }\n`
    );
    return a - b;
  })
);
// a = 1， b = 11， 1 - 11 < 0 ==> 1, 11
// a = 11， b = 2， 11 - 2 > 0 ==> 2, 11
// a = 11， b = 2， 11 - 2 > 0 ==> 2, 11
// a = 1， b = 2， 1 - 2 < 0 ==> 1, 2
// [ 1, 2, 11 ]

// str.split(seperator, length)
// 在字符串中找出分隔符 seperator，把字符串分割成一个长度为 length 的数组，忽略超过长度的部分
let me = 'INTP';
console.log(me.split()); // [ 'INTP' ]
console.log(me.split('')); // [ 'I', 'N', 'T', 'P' ]，
console.log(me.split(',')); // [ 'INTP' ]，找不到分隔符，返回原字符串
me = 'I,N,T,P';
console.log(me.split(',')); // [ 'I', 'N', 'T', 'P' ]

// arr.join(seperator)
// str.split 的逆操作，把数组的每个元素之间插入分隔符 seperator 之后粘合成一个字符串并返回
me = ['I', 'N', 'T', 'P'];
console.log(me.join('-')); // 'I-N-T-P'
