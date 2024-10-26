"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// different methods for defining an array
// method 1
var list1 = [1, 2, 3];
// method 2
var list2 = [1, 2, 3];
// for mixed type array use tuple
var person1 = ["Chris", 22];
// order and number is fixed so u can't change the order or use more than defined numnber of values
console.log(list1);
console.log(list2);
console.log(person1);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// the output is 1 as enum begin with 0
// Red = 0 , Green = 1 , Blue = 2
// we can also change the value of enum tho
