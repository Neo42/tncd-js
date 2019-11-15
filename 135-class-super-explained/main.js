'use strict';

// https://2ality.com/2011/11/super-references.html

let Servant = {
	name: 'Servant',
	weapon: undefined,
	doSomething() {
		console.log(`${this.name} attacks with the ${this.weapon}.`);
	}
};

let Saber = {
	__proto__: Servant,
	name: 'Saber',
	weapon: 'アホ毛',
	doSomething() {
		// that's how super.eat() could presumably work
		this.__proto__.doSomething.call(this); // => 当 this = LongEar 时，运行结果为 Rabbit.eat.call(LongEar)，跟之前的方法一样，所以会构成无限循环的递归
		console.log(this); // Rabbit
	}
};

let KingArthur = {
	__proto__: Saber,
	name: 'King Arthur',
	weapon: 'Excalibur',
	doSomething() {
		// ...do something with long ears and call parent (rabbit) method
		console.log(this.__proto__); // { name: 'Rabbit', eat: [λ: eat] }
		// this.__proto__.eat.call(this); // => this === LongEar, 所以运行结果为 Rabbit.eat.call(LongEar)，于是会往上找接下来应该运行 Rabbit.eat() 的方法
	}
};

Saber.doSomething();
// Saber attacks with the アホ毛.
// { name: 'Saber', weapon: 'アホ毛', doSomething: [λ: doSomething] }
KingArthur.doSomething(); // { name: 'Saber', weapon: 'アホ毛', doSomething: [λ: doSomething] }

Saber = {
	__proto__: Servant,
	name: 'Saber',
	weapon: 'アホ毛',
	doSomething() {
		// rabbit.eat.[[HomeObject]] == rabbit
		super.doSomething();
	}
};

KingArthur = {
	__proto__: Saber,
	name: 'King Arthur',
	weapon: 'Excalibur',
	doSomething() {
		// longEar.eat.[[HomeObject]] == longEar
		console.log(super.doSomething);
	}
};

KingArthur.doSomething(); // King Arthur attacks with the Excalibur.
