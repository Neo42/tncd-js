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

console.log(table.rows); // HTMLCollection(2) [tr, tr] 所有行元素的集合
let cap = table.createCaption(); // 添加说明
cap.innerHTML = '<b>YOLO</b>'; // 添加说明文字
console.log(table.caption); // <caption><b>YOLO</b></caption>
table.rows[0].cells[1].style.color = '#faf9f9';
console.log(table.tBodies); // // HTMLCollection[tbody]
table.tBodies[0].style.backgroundColor = '#add2c9';
console.log(table.rows[0].sectionRowIndex); // 0 行元素索引数
console.log(table.rows[1].sectionRowIndex); // 1
let thead = table.createTHead();
thead.innerText = 'Head';
let tfoot = table.createTFoot();
tfoot.innerText = 'Foot';
console.log(table.tHead, table.tFoot); // <thead>Head</thead> <tfoot>Foot</tfoot>

// table.tBodies.style.backgroundColor = '#d6e5fa';
