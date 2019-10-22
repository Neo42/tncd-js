'use strict';

let matrix = {
  neo: 'male',
  morpheus: 'male',
  trinity: 'female'
};

// 返回真实的数组(也是 iterable)
console.log(Object.keys(matrix)); // [ 'neo', 'morpheus', 'trinity' ]
console.log(Object.values(matrix)); // [ 'male', 'male', 'female' ]
console.log(Object.entries(matrix)); // [ [ 'neo', 'male' ], [ 'morpheus', 'male' ], [ 'trinity', 'female' ] ]

for (const key of Object.keys(matrix)) {
  console.log(key); // neo, morpheus, trinity
} //

// 对象 => 数组 => 变换 => 数组，解构赋值
let transformedMatrix = Object.fromEntries(
  Object.entries(matrix).map(([key, value], index) => [key, index + 1])
); // {neo: 1, morpheus: 2, trinity: 3}
