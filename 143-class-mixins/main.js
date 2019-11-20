let servantMixin = {
  attack() {
    console.log(`${this.weapon}!!!`);
  },
  eat() {
    console.log(`Guh! I'm full!`);
  }
};

class Saber {
  weapon = 'Excalibur';
}

Object.assign(Saber.prototype, servantMixin);
new Saber().attack(); // Excalibur!!!
