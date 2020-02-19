console.log(document.body.classList);
console.log(document.body.className); // main page
document.body.classList.add('article');
console.log(document.body.className); // main page article
document.body.classList.toggle('article');
console.log(document.body.className); // main page
console.log(document.body.classList.contains('article')); // false
document.body.classList.toggle('article');
console.log(document.body.className); // main page article
console.log(document.body.classList.contains('article')); // true
for (const className of document.body.classList) {
  console.log(className); // main page article
}

// dash => camelCase
document.body.style.backgroundColor = '#000'; // background-color
// document.body.style.backgroundColor = prompt('Background color?', '#435');
document.body.style.display = 'none';
setTimeout(() => (document.body.style.display = ''), 1000);

// Mind the unit
document.body.style.margin = '20px';
console.log(document.body.style.margin);
