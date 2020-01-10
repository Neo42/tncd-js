let ele = document.body;
console.log(ele.nodeName, ele.tagName, ele.nodeType); // BODY BODY 1
let p = document.body.firstChild;
console.log(p.nodeName, p.tagName, p.nodeType); // #text undefined 3

console.log(ele.innerHTML, `\n`, ele.innerText);
//  Blah
//  <script src="./main.js"></script>
//  Blah

// ele.innerHTML = 'New body';
// => e.innerHTML = 'New body';
// console.log(ele.innerHTML); // New body

ele.outerHTML = 'Bruh'; // 页面可以看到新文本节点
console.log(ele.outerHTML); // 仍然是旧元素节点，因为新节点并没有被存储到任何变量里
// <body>
//  Blah
//  <script src="./main.js"></script></body>

console.log(p.nodeValue, p.data); // Blah Blah
