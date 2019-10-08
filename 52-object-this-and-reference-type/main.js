// this 在执行时才有值
let baby = {
  word: 'Aaa',
  sayWord() {
    console.log(this.word);
  }
};

word = 'AAA';
(true ? baby.sayWord : console.log)(); // console.log(this.word)

let say = baby.sayWord;
console.log(say); // ƒ sayWord() { console.log(this.word)}

// 对象属性是引用类型，重新赋值就会破坏 base 从而影响结果
// (base, 'key', true)();
