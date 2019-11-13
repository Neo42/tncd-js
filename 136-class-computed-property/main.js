'use strict';

let thing;

class Servant {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  ['use' + thing]() {
    console.log(this.weapon + '!!!');
  }
  [Symbol.iterator]() {}
}

let saber = new Servant('Saber', 'Excalibur');
saber['use' + thing](); // Excalibur!!!
