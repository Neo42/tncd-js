console.log(document.body.childNodes); // NodeList(6) [text, div, text, ul, text, script]
for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log(`The ${i + 1}th child node: ${document.body.childNodes[i]}`);
}

console.log(
  `Body's parent node: ${document.body.parentNode}`,
  document.body.parentNode.nodeName
); // <html></html> HTML
console.log(document.body.childNodes[0]); // <head></head>
console.log(document.body.firstChild); // #text
console.log(document.body.lastChild); // <script></script>
console.log(document.body.lastChild.previousSibling); // #text
console.log(document.body.firstChild.nextSibling); // <div></div>

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
