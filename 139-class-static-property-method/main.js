// 静态属性、方法：只能用类本身调用的属性、方法

class Servant {
  static gender = undefined;

  static showThis() {
    console.log(this);
  }

  static createSaber(gender) {
    return new this('saber', 'sword', gender);
  }

  constructor(kind, weapon, gender) {
    this.kind = kind;
    this.weapon = weapon;
    this.gender = gender;
  }

  say() {
    console.log(
      `I'm a ${this.kind} and I attack with a ${this.weapon}. I am a ${this.gender}.`
    );
  }
}

Servant.showThis(); // { [λ: Servant] gender: undefined }
let saber = Servant.createSaber('girl');
saber.say(); // I'm a saber and I attack with a sword. I am a girl.
