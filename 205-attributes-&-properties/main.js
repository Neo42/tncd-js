document.body.tempData = {
  title: 'The Graveyard Book',
  author: 'Neil Gaiman',
  hero: 'Nobody',
  sayMsg() {
    msg.textContent = `${this.title} is authored and narrated by ${this.author}, and the hero of the book is ${this.hero}.`;
  }
};

document.body.tempData.sayMsg(); // The Graveyard Book is authored and narrated by Neil Gaiman, and the hero of the book is Nobody.

// 这里的特性名称不区分大小写，特性值永远是字符串
console.log(input.hasAttribute('type')); // true，检查特性存在性
console.log(input.getAttribute('type')); // text，获取特性值
input.setAttribute('value', 'Read widely.'); // text，设定特性值
console.log(input.removeAttribute('value')); // text，移除特性值

input.value = 'New value';
console.log(input.getAttribute('value')); // null, value特性值不能通过特性值修改

input.setAttribute('type', 'checkbox');
input.setAttribute('checked', true);

msg[1].dataset.customized = 'dude';
