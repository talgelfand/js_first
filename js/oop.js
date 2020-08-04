"use strict";

// let str = "some"; // строка
// let strObj = new String(str); // объект

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier); // новый созданный объект john прототипно наследуется от объекта soldier 

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // прототипом john является soldier (устаревший метод)

// Object.setPrototypeOf(john, soldier); // прототипом john является soldier (устаревший метод)

// console.log(john.armor);
john.sayHello();