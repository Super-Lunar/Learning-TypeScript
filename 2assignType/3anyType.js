"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* if you're unsure about variable type
    assign anytype
    that will allow you to reassign any type of value */
var randomValue = 10;
console.log(randomValue);
randomValue = true;
console.log(randomValue);
randomValue = "hello";
console.log(randomValue);
var myVariable = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
/*
it doesn't throw error as it is of type any
so no type checking occurs
to tackle this problem a new type was introduced
- unknown
*/
var myValue = 10;
myValue.toUpperCase();
// above we use type assertion to bypass the unknown type restrictions
