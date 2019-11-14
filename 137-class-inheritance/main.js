'use strict';

class Servant {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		console.log(this.weapon + '!!!');
	}
}

class Saber extends Servant {
	// 如果没有附加属性要添加则可以完全省略 constructor
	constructor(name, weapon) {
		super(name, weapon);
		this.master = '墨石';
	}

	say() {
		console.log(`Master ${this.master}!`);
	}
	attack() {
		super.attack();
		console.log('アホ毛!!!');
	}
}

console.log(Saber); // [λ: Saber]
let kingArthur = new Saber('Arthur', 'Excalibur');
console.log(kingArthur); // Saber { name: 'Arthur', weapon: 'Excalibur', master: '墨石' }
kingArthur.say(); // Master 墨石!
kingArthur.attack(); // Excalibur!!! アホ毛!!!
