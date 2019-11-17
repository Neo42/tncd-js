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
  constructor(master, ...args) {
    super(...args);
    this.master = master;
  }
  say() {
    console.log(`${this.master}、 結婚しよ!`);
  }
  attack() {
    super.attack();
    console.log('とアホ毛!!!');
  }
}

console.log(Saber); // [λ: Saber]
let kingArthur = new Saber('墨石', 'Arthur', 'Excalibur');
console.log(kingArthur); // Saber { name: 'Arthur', weapon: 'Excalibur', master: '墨石' }
kingArthur.say(); // 墨石! 結婚しよ!
kingArthur.attack(); // Excalibur!!! アホ毛!!!
