<<<<<<< HEAD
'use strict'

let thing
class Servant {
  constructor (name, weapon) {
    this.name = name
    this.weapon = weapon
  }

  get name () {
    return this._name
  }

  set name (value) {
    if (value.length < 4) {
      console.error('The name is too short.')
      return
    }
    this._name = value
  }
}

const saber = new Servant('Saber', 'Excalibur')
console.log(saber.name) // Saber
=======
'use strict';

let thing;
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
}

let saber = new Servant('Saber', 'Excalibur');
console.log(saber.name); // Saber
>>>>>>> 0b29fcf16835ccfe0431a8d93d1c052670436f49
