console.log(document.querySelector('ul').childNodes); // NodeList(7) [text, li, text, li, text, li, text]

// DOM集合：只读、实时、不可 for...in 循环
for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log(`The ${i + 1}th child node: ${document.body.childNodes[i]}`);
}

console.log(`Body's parent node: ${document.body.parentNode.nodeName}`); // <html></html> HTML
console.log(`Body's first child node: ${document.body.childNodes[0].nodeName}`); // <html></html> HTML
console.log(`Body's firt child node: ${document.body.firstChild.nodeName}`); // <html></html> HTML
console.log(`Body's last child node: ${document.body.lastChild.nodeName}`); // <html></html> HTML
console.log(
  `Body's second last child node: ${document.body.lastChild.previousSibling.nodeName}`
); // <html></html> HTML
console.log(
  `Body's second first child node: ${document.body.firstChild.nextSibling.nodeName}`
); // <html></html> HTML

document.body.firstElementChild.style.color = '#6c7b95';
console.log(document.body.firstElementChild); // true

document.body.firstElementChild.nextElementSibling.style.color = '#6c7b95';
console.log(document.body.firstElementChild.nextElementSibling);
document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.style.color =
  '#8bbabb';
console.log(
  document.body.firstElementChild.nextElementSibling.firstElementChild
    .nextElementSibling
);
