// id 必须唯一
console.log(users); // <ul id="users">...</ul>
// window[id]
console.log(window['user-1']); // <li id="user-1">John</li>
// document.getElementById(id)
console.log(document.getElementById('user-2')); // <li id="user-2">Pete</li>
// document.querySelectorAll(css)
console.log(document.querySelectorAll('ul>li:last-child')); // NodeList [li#user-3] 只能用 for of 循环
console.log(users.contains(document.getElementById('user-1'))); // true

for (const elem of document.body.children) {
  if (elem.matches('#users')) {
    console.log(elem); // <ul id="users">...</ul>
  }
}
