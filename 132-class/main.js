'use strict';

class User {
	constructor(name) {
		this.name = name;
	}
	say() {
		console.log(this.name);
	}
}

// let user = new User;
let user = new User();
console.log(user); // User { name:undefined }
user = new User('neo42');
console.log(user); // User { name: 'neo42' }
user.say(); // neo42

console.log(typeof User); // function
