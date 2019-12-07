let res = false;
let promise = new Promise((onThen, onCatch) => {
  if (res) {
    onThen(res);
  } else {
    onCatch('No response.');
  }
});

console.log(promise);
promise.then(res => console.log(res)).catch(err => console.error(err));

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

// function getPokemon(id) {
//   /*return new Promise((resolve, reject) => {})*/
//   return new Promise((onThen, onCatch) => {
//     $.getJSON({
//       url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
//       success: onThen,
//       error: onCatch
//     });
//   });
// }

// console.log(getPokemon(25));
// getPokemon(25)
//   .then(showPokemon)
//   .catch(showError);
