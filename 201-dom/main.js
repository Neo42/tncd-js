let html = document.documentElement;
let head = document.head;
let body = document.body;
console.log(html, head, body); // <html></html> <head></head> <body></body>

// xxxChild 只会显示 script 元素之前（包括 script）的元素
console.log(body.firstChild); // #text:"↵    " body 和 div 之间的所有字符
console.log(body.lastChild); // script
console.log(body.childNodes, typeof body.childNodes); // NodeList(8) [text, div, text, ul, text, table#table, text, script], "object"

for (const elem of body.childNodes) {
  console.log(elem); // 展示 script元素之前的所有元素
}

// children：子元素节点集合
console.log(body.children); // 展示 script 标签前的所有元素节点
// firstElementChild：第一个子元素节点
console.log(body.firstElementChild); // div
// nextElementSibling：下一个兄弟元素节点
console.log(body.firstElementChild.nextElementSibling); // ul
// parentElement：父元素节点
console.log(body.lastElementChild.parentElement); // body

console.log(document.documentElement.parentNode); // #document，父节点
console.log(document.documentElement.parentElement); // null, document 不是元素节点，只是一个文本节点
