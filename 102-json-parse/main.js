'use strict';

let data = `{"person":{"who":"me"},"location":"Beijing","todo":["code","record","repeat"]}`;
console.log(JSON.parse(data));
// { person: { who: 'me' },location: 'Beijing',todo: [ 'learn', 'code', 'repeat' ] }
