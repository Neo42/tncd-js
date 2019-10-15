'use strict';

// str.split(seperator, length)
// 在字符串中找出分隔符 seperator，把字符串分割成一个长度为 length 的数组，忽略超过长度的部分
let me = 'INTPT';
console.log(me.split()); // [ 'INTPT' ]
console.log(me.split('')); // [ 'I', 'N', 'T', 'P', 'T' ]
console.log(me.split(',')); // [ 'INTPT' ]，找不到分隔符，返回原字符串
me = 'I,N,T,P,T';
console.log(me.split(',')); // [ 'I', 'N', 'T', 'P', 'T' ]

// arr.join(seperator)
// str.split 的逆操作，把数组的每个元素之间插入分隔符 seperator 之后粘合成一个字符串并返回
me = ['I', 'N', 'T', 'P', 'T'];
console.log(me.join('-')); // 'I-N-T-P-T'
