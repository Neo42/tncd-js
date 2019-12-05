function showPokemon(json, id) {
  let imgUrl = json.responseJSON.sprites.front_default;
  let img = document.createElement('img');
  img.height = 300;
  img.src = imgUrl;
  document.body.appendChild(img);
}

function showError() {
  console.log(`Request failed.`);
}

let json = $.getJSON({
  url: `https://pokeapi.co/api/v2/pokemon/1/`,
  success: () => {
    showPokemon(json, 0);
    let json2 = $.getJSON({
      url: `https://pokeapi.co/api/v2/pokemon/7/`,
      success: () => {
        showPokemon(json2, 1);
        let json3 = $.getJSON({
          url: `https://pokeapi.co/api/v2/pokemon/25/`,
          success: () => {
            showPokemon(json3, 2);
          },
          error: showError
        });
      },
      error: showError
    });
  },
  error: showError
});
