"use strict";

const str = "teSt";

//console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q")); // output is -1

const logg = "Hello world";

console.log(logg.slice(6, 11)); // вырезает слово world (до 11 не включительно)
console.log(logg.slice(6)); // вырезает все до конца

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5)); // второе число - сколько символов вырезать

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));