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
