"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// so same interface can be used in multiple function
// and type change can be made in oneplace 
// also a property can be specified optional by adding ? at last of property 
// function fullName(person:{firstName:string,age:number})
function fullName(person) {
    console.log("Name is : ".concat(person.firstName, "."));
    console.log("Age is : ".concat(person.age, "."));
}
var p = {
    firstName: 'Randy',
    age: 10
};
fullName(p);
var o = {
    firstName: 'Orton',
};
fullName(o);
