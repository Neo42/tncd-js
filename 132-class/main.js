'use strict';

// class Servant {
// 	constructor(name,weapon) {
// 		this.name = name;
// 		this.weapon = weapon;
// 	}
// 	attack() {
// 		console.log(this.weapon);
// 	}
// }

// // let saber = new Servant;
// // let saber = new Servant();
// console.log(saber); // Servant { name:undefined, weapon:undefined }
// user = new User('Saber','Excalibur');
// console.log(saber); // User { name: 'Saber', weapon:'Excalibur' }
// saber.attack(); // Excalibur

// console.log(typeof Servant); // function

function Servant(name, weapon) {
	this.name = name;
	this.weapon = weapon;
}

Servant.prototype = {
	constructor: Servant,
	attack() {
		console.log(this.weapon);
	}
};

console.log(Servant.prototype); // Servant { constructor: [λ: Servant], attack: [λ: attack] }

let user = new Servant('Saber', 'Excalibur');
user.attack();

let saberProto = Object.getPrototypeOf(user);
console.log(saberProto); // Servant { constructor: [λ: Servant], attack: [λ: attack] }
console.log(saberProto === Servant.prototype); // true
