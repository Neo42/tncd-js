'use strict';

// str.split(seperator, length)
// 在字符串中找出分隔符 seperator，把字符串分割成一个长度为 length 的数组，忽略超过长度的部分
let me = 'INTPT';
console.log(me.split()); // [ 'INTPT' ]
console.log(me.split('')); // [ 'I', 'N', 'T', 'P', 'T' ]
console.log(me.split(',')); // [ 'INTPT' ]，找不到分隔符，返回原字符串
me = 'I,N,T,P,T';
console.log(me.split(',')); // [ 'I', 'N', 'T', 'P', 'T' ]

// 当用空字符串 '' 作分隔符时，分隔标准并不是表面上的每个字符一个元素，也不是每个 unicode 码点一个元素，而是按照每个 UTF-16 编码单元一个元素分隔，所以有可能破坏字符。
// 如果字符串中含有高位字符，分隔结果中的数组就会含有代理伪字符元素。了解此处的前置知识参见 #65
me = '😂';
console.log(me.split('')); // [ '�', '�' ]

// arr.join(seperator)
// str.split 的逆操作，把数组的每个元素之间插入分隔符 seperator 之后粘合成一个字符串并返回
me = ['I', 'N', 'T', 'P', 'T'];
console.log(me.join('-')); // 'I-N-T-P-T'
