function launch() {
  let url = json.responseJSON.links.flickr_images[4];
  let img = document.createElement('img');
  img.src = url;
  img.width = 600;
  setTimeout(() => document.querySelector('body').append(img), 3000);
}

function showError() {
  console.log(`Request failed.`);
}

let json = $.getJSON({
  url: `https://api.spacexdata.com/v3/launches/67`,
  success: launch,
  error: showError
});

let i = 4;
let interval = setInterval(() => {
  i -= 1;
  console.log(i);
  if (i === 0) {
    clearInterval(interval);
  }
}, 1000);
