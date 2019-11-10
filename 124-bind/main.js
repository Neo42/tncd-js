'use strict';

let user = {
  id: 'neo42',
  say(phrase = 'Hello', otherWords = '') {
    console.log(`${phrase}, ${this.id}! ${otherWords}`);
  }
};

let user2 = {
  id: 'mpjme'
};

setTimeout(user.say, 1000);
// func.bind(thisArg, arg1, arg2...) 返回绑定之后的函数

let say = function(word) {
  return user.say.bind(user2, 'Yo', word);
};

setTimeout(say('How are you doing!'), 1000);
setTimeout(say(`What're you up to?`), 1000);
setTimeout(() => user.say('Goodbye'), 1000);
