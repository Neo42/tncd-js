function showPokemon(res) {
  let imgUrl = res.sprites.front_default;
  let img = document.createElement('img');
  img.height = 300;
  img.src = imgUrl;
  document.body.appendChild(img);
}

function showError(e) {
  console.log(`Request failed ${e}`);
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

Promise.all([getPokemon(1), getPokemon(7), getPokemon(25)])
  .then(pokemons => pokemons.forEach(showPokemon))
  .catch(showError);
