'use strict';

let Servant = class {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		console.log(this.weapon + '!!!');
	}
};

let saber = new Servant('Saber', 'Excalibur');
saber.attack();

let makeServant = function() {
	return class {
		constructor(name, weapon) {
			this.name = name;
			this.weapon = weapon;
		}
		attack() {
			console.log(this.weapon + '!!!');
		}
	};
};

Servant = makeServant();
saber = new Servant('Saber', 'Excalibur');
saber.attack(); // Excalibur!!!
