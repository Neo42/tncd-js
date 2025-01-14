let ele = document.body;
console.log(ele.nodeName, ele.tagName, ele.nodeType); // BODY BODY 1
let p = document.body.firstChild;
console.log(p.nodeName, p.tagName, p.nodeType); // #text undefined 3

console.log(ele.innerHTML, `\n`, ele.innerText);
// Blah
// < !--comment-- >
// <div id="txt"></div>
// <script src="./main.js"></script>
// Blah

// ele.innerHTML = 'New body';
// => e.innerHTML = 'New body';
// console.log(ele.innerHTML); // New body

// ele.outerHTML = 'Bruh'; // 页面可以看到新文本节点
// console.log(ele.outerHTML); // 仍然是旧元素节点，因为新节点并没有被存储到任何变量里
// <body>
// Blah
// <!-- comment -->
// <div id="txt"></div>;
// <script src="./main.js"></script></body>

console.log(p.nodeValue, p.data); // Blah Blah
console.log(p.nextSibling.data); // comment

let name = prompt("What's your name?", "<b>I should't be bold.</b>");
message.innerHTML = name; // 插入 html
message.textContent = name; // 插入纯文本

setTimeout(() => (hidden.hidden = !hidden.hidden), 2000); //  5秒后切换 #hidden 的隐藏属性

input.value = 'Magical input value.'; // 在输入框中填充文本值 等同于在 html 标签中插入 input 属性
// 相应地可以这样使用
console.log(input.type); // text
console.log(input.id); // input

twitter.href = 'https://twitter.com/neo42me'; // 给 a 标签加上 href 属性
