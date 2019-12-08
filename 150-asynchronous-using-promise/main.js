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

// Promise.all([getPokemon(1), getPokemon('a'), getPokemon(25)])
//   .then(pokemons => pokemons.forEach(showPokemon))
//   .catch(showError); // Resquest failed 只要其中一个 promise 有 reject, 那么忽略其他 resolve 的 promise 并抛出异常

Promise.allSettled([getPokemon(1), getPokemon('a'), getPokemon(25)]).then(
  pokemons =>
    pokemons.forEach(pokemon => {
      if (pokemon.status === 'fulfilled') {
        showPokemon(pokemon.value);
      } else {
        console.error(
          `${pokemon.status}: Response ${pokemon.reason.statusText}! ${pokemon.reason.responseText}.`
        );
      }
    })
);
// Resquest failed 只要其中一个 promise 有 reject, 那么忽略其他 resolve 的 promise 并抛出异常

Promise.race([getPokemon(1), getPokemon(7), getPokemon(25)])
  .then(showPokemon)
  .catch(showError);
