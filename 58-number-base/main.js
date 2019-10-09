'use strict';

let num;

num = 1.1e2;
console.log(num); // 1.1*(10**2) 小数点右移2位
num = 1.1e-3;
console.log(num); // 1.1*(0.1**3) 小数点左移3位

// hex number 0123456789abcdef(10-15)
num = 0x3423; // 3 * 16 ** 3 + 4 * 16 ** 2 + 2 * 16 ** 1 + 3 * 16 ** 0
console.log(num); // 13347

// binary number
num = 0b11; // 1 * 2 ** 1 + 1 * 2 ** 0
console.log(num);

// octal number
num = 0o23;
console.log(num); //  2 * 8 ** 1 + 3 * 8 ** 0
