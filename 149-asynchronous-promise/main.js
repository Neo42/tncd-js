// https://promisesaplus.com/

let res = 'I am a response.';
let promise = new Promise((onThen, onCatch) => {
  if (res) {
    setTimeout(() => {
      // resolve
      onThen(res);
    }, 1000);
  } else {
    // reject
    onCatch(new Error('No response.')); // reject
  }
});

console.log(promise);
// Promise {<pending>} 初始状态：pending 如果 res 一开始就有值，则是同步执行，初始状态为 resolved
// __proto__: Promise
// [[PromiseStatus]]: "resolved" 结果状态：resolved
// [[PromiseValue]]: 'I am a response.' 包含的值

promise
  .then(res => `New response: ${res}`) // 变形
  .then(newRes => console.log(newRes)) // 'New response: I am a response.'
  .then(res => res)
  .catch(err => console.error(err))
  .finally(() => console.log('Done.')); // 'Done.'

// pending - settled (fulfilled / rejected)
// 1. 只可能有一个结果或异常
// 2. reject with new Error
// 3. 可以同步执行

function showPokemon(res) {
  let imgUrl = res.sprites.front_default;
  let img = document.createElement('img');
  img.height = 300;
  img.src = imgUrl;
  document.body.appendChild(img);
}

function showError(e) {
  console.log(`Request failed: ${e}`);
}

function getPokemon(id) {
  /*return new Promise((resolve, reject) => {})*/
  return new Promise((onThen, onCatch) => {
    $.getJSON({
      url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
      success: onThen,
      error: onCatch
    });
  });
}

console.log(getPokemon(25));
getPokemon(25)
  .then(showPokemon)
  .catch(showError);
