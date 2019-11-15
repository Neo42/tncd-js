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
