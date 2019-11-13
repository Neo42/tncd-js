'use strict';

// 类声明不会被提升

class Servant {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    console.log(this.weapon + '!!!');
  }
}

// function Servant(name, weapon) {
// 	this.name = name;
// 	this.weapon = weapon;
// }

// console.log(Servant.prototype); // {}

// Servant.prototype = {
// 	constructor: Servant,
// 	attack() {
// 		console.log(this.weapon + '!!!');
// 	}
// };

// let saber = new Servant;
let saber = new Servant();
console.log(saber); // Servant { name:undefined, weapon:undefined }
saber = new Servant('Saber', 'Excalibur');
console.log(saber); // User { name: 'Saber', weapon:'Excalibur' }
saber.attack(); // Excalibur!!!

console.log(typeof Servant); // function

console.log(Servant.prototype); // Servant { constructor: [λ: Servant], attack: [λ: attack] }

saber = new Servant('Saber', 'Excalibur');
saber.attack();

let saberProto = Object.getPrototypeOf(saber);
console.log(saberProto); // Servant { constructor: [λ: Servant], attack: [λ: attack] }
console.log(saberProto === Servant.prototype); // true

// saber = Servant(); // 没有 new 不能使用 class

// class 方法不可枚举
for (const key in saber) {
  console.log(key); // name, weapon
}
