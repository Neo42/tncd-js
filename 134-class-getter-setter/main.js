'use strict';

class Servant {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	get name() {
		return this._name;
	}
	set name(value) {
		if (value.length < 4) {
			console.error('The name is too short.');
			return;
		}
		this._name = value;
	}
	attack() {
		console.log(this.weapon + '!!!');
	}
}

let saber = new Servant('Sab', 'Excalibur');
console.log(saber.name);
