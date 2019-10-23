'use strict';

// 丑函数
function generateArticleUgly(
  title = 'Default Title',
  tags = [],
  content = 'Default content'
) {}

generateArticleUgly('User Title', ['tag1', 'tag2'], 'Lorem ipsum'); // 难写又难看

// 把用户输入整理成对象
let options = {
  title: 'User title',
  tags: ['tag1', 'tag2'],
  content: 'Lorem ipsum'
};

// 函数参数默认值，解构用户输入对象
function generateArticle({
  title = 'Default title',
  tags = [],
  content = 'Default content'
}) {
  console.log(`${title} ${tags} ${content}`);
}

generateArticle(options); // Default title  Default content
// generateArticle(); // Cannot destructure property `title` of 'undefined' or 'null'. 没有传入对象，无法解构

// 通过在参数中传入一个空对象解决以上报错
function generateArticle2({
  title = 'Default title',
  tags = [],
  content = 'Default content'
} = {}) {
  console.log(`${title} ${tags} ${content}`); // Default title  Default content
}
generateArticle2(); // Default title  Default content

// 计算属性，先修知识见上一节
function generateArticle3({
  title: a = 'Default title',
  tags: b = [],
  content: c = 'Default content'
} = {}) {
  console.log(`${a} ${b} ${c}`); // Default title  Default content
}

generateArticle3();
