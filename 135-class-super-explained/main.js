'use strict';

// https://2ality.com/2011/11/super-references.html

// [[HomeObject]] 用于固定父类
// [[HomeObject]] 不会变，所以方法中的 this 不会变
// [[HomeObject]] 只能与方法合用，不能与函数属性

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
  weapon: 'Excalibur',
  doSomething() {
    // that's how super.doSomething() could presumably work
    this.__proto__.doSomething.call(this); // => 当 this = KingArthur 时，运行结果为 Saber.doSomething.call(KingArthur)，跟之前的方法一样，所以会构成无限循环的递归
    console.log(this); // Saber
  }
};

let KingArthur = {
  __proto__: Saber,
  name: 'King Arthur',
  weapon: 'Excalibur',
  doSomething() {
    // ...do something with long ears and call parent (Saber) method
    console.log(this.__proto__); // { name: 'Saber', doSomething: [λ: doSomething] }
    // this.__proto__.doSomething.call(this); // => this === KingArthur, 所以运行结果为 Saber.doSomething.call(KingArthur)，于是会往上找接下来应该运行 Saber.doSomething() 的方法
  }
};

Saber.doSomething(); // Saber attacks with the Excalibur.
KingArthur.doSomething(); // { name: 'Saber', weapon: 'Excalibur', doSomething: [λ: doSomething] }

Saber = {
  __proto__: Servant,
  name: 'Saber',
  weapon: 'Excalibur',
  doSomething() {
    // Saber.doSomething.[[HomeObject]] == Saber
    super.doSomething();
    console.log("I'm Saber.");
  }
};

KingArthur = {
  __proto__: Saber,
  name: 'King Arthur',
  weapon: 'Excalibur',
  doSomething() {
    // KingArthur.doSomething.[[HomeObject]] == KingArthur
    super.doSomething();
  }
};

KingArthur.doSomething(); // King Arthur attacks with the Excalibur. I'm Saber.
