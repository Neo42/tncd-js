let servantMixin = {
  attack() {
    console.log(`${this.weapon}!!!`);
  },
  eat() {
    console.log(`我饱了!`);
  }
};

let saberMixin = {
  __proto__: servantMixin,
  attack() {
    super.attack();
  },
  eat() {
    super.eat();
  }
};

class Saber {
  weapon = 'Excalibur';
} // Saber.prototype

Object.assign(Saber.prototype, saberMixin);
new Saber().attack(); // Excalibur!!!
