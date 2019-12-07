// JavaScript
// 单线程语言、执行至完成: 不同程序在执行时不会相互抢占
//

// 同步 synchrony: 按照一定的顺序执行
// https://en.wikipedia.org/wiki/Synchronization_(computer_science)
// asynchrony: 不依赖于主线程，不遵循主线程的执行顺序，执行通常需要等待
// https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)

// 异步的一般表述：先···再运行
// 事件循环中的设定：调用栈全部清空之后，如果任务队列还有未执行的任务，则把队列中的任务传回调用栈执行
// Web API -> task queue 任务队列 -> call stack 调用栈
setTimeout(() => {
  // 独立于主线程的执行顺序
  console.log('I go eventually.');
}, 0);

console.log('I go first.');
console.log('I go next.');

// function showPokemon(res) {
//   let imgUrl = res.sprites.front_default;
//   let img = document.createElement('img');
//   img.height = 300;
//   img.src = imgUrl;
//   document.body.appendChild(img);
// }

// function showError(e) {
//   console.log(`Request failed: ${e}`);
// }

// $.getJSON({
//   url: `https://pokeapi.co/api/v2/pokemon/25/`,
//   success: showPokemon,
//   error: showError
// });
