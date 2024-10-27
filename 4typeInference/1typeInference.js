"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// specifying types is optional
var a;
a = 10;
a = true;
// works fine
var b = 20;
// b = true
// doesn't work as type is infered at the time of intialization
// to assign multitype to a variable 
// we use union types
var multiType = true;
console.log(multiType);
multiType = 10;
console.log(multiType);
