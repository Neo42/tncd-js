'use strict';

// break
// 严格相等
// switch、case后跟表达式

let input = prompt('框架：', '');

let framework = input ? input.toLowerCase() : '';

switch (framework) {
  case 'react':
    console.log('Backed by Facebook');
    break;
  case 'vue':
    console.log('Created by Evan You');
    break;
  case '':
    console.log('没写');
    break;
  default:
    console.log('不明');
}
