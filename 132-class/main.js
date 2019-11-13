'use strict';

class MyClass {
	constructor(name) {
		this.name = name;
	}
	say() {
		console.log(this.name);
	}
}

// let user = new MyClass;
let user = new MyClass();
console.log(user); // MyClass { name:undefined }
user = new MyClass('neo42');
console.log(user); // MyClass { name: 'neo42' }
user.say(); // neo42
