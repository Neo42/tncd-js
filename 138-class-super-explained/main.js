'use strict';
let animal = {
	name: 'Animal',
	eat() {
		console.log(`${this.name} eats.`);
	}
};

let rabbit = {
	__proto__: animal,
	name: 'Rabbit',
	eat() {
		// that's how super.eat() could presumably work
		this.__proto__.eat.call(this); // => 当 this = LongEar 时，运行结果为 Rabbit.eat.call(LongEar)，跟之前的方法一样，所以会构成无限循环的递归
		console.log(this); // Rabbit
	}
};

let longEar = {
	__proto__: rabbit,
	name: 'LongEar',
	eat() {
		// ...do something with long ears and call parent (rabbit) method
		console.log(this.__proto__); // { name: 'Rabbit', eat: [λ: eat] }
		// this.__proto__.eat.call(this); // => this === LongEar, 所以运行结果为 Rabbit.eat.call(LongEar)，于是会往上找接下来应该运行 Rabbit.eat() 的方法
	}
};

rabbit.eat(); // Rabbit eats.
longEar.eat();
// { name: 'Rabbit', eat: [λ: eat] } { name: 'Rabbit', eat: [λ: eat] }
