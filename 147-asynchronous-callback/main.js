function showPokemon(res) {
  let imgUrl = res.sprites.front_default;
  let img = document.createElement('img');
  img.height = 300;
  img.src = imgUrl;
  document.body.appendChild(img);
}

function showError() {
  console.log(`Request failed.`);
}

$.getJSON({
  url: `https://pokeapi.co/api/v2/pokemon/25/`,
  success: showPokemon,
  error: showError
});
