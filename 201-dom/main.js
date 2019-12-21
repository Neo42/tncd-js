document.body.firstElementChild.style.color = '#6c7b95';
console.log(document.body.firstElementChild); // true

document.body.firstElementChild.nextElementSibling.style.color = '#8bbabb';
console.log(document.body.firstElementChild.nextElementSibling);
document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.style.color =
  '#6c7b95';
console.log(
  document.body.firstElementChild.nextElementSibling.firstElementChild
    .nextElementSibling
);
