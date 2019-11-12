'use strict';

// prototype 只在 new Function 创建对象实例时才会起作用

// 默认情况：Autobot.prototype = { constructor: Autobot }
function Autobot(model, colors) {
  this.model = model;
  this.colors = colors;
}
console.log(Autobot.prototype.constructor === Autobot); // true

let optimus = new Autobot('Peterbilt 379', ['red', 'blue']);
console.log(optimus.__proto__); // { constructor: Autobot }
console.log(optimus.constructor === Autobot); // true

// 构造函数的 prototype === 对象实例的 __proto__
Autobot.prototype = { planet: 'Cybertron' };
optimus = new Autobot('Peterbilt', ['red', 'blue']);
console.log(optimus.__proto__); // { planet: 'Cybertron' }
console.log(Autobot.prototype === optimus.__proto__); // true

// 原型变更后，构造函数也会相应变化
console.log(optimus.constructor); // [λ: Object] 原生对象构造函数，因为之前有 Autobot 构造函数的 __proto__ 被替换成了没有构造函数的 { planet: 'Cybertron' }，所以只能沿着原型链一直往上找，找到最近的原生对象构造函数
