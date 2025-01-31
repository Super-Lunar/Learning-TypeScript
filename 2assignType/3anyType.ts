export {};

/* if you're unsure about variable type 
    assign anytype
    that will allow you to reassign any type of value */

let randomValue: any = 10;
console.log(randomValue);
randomValue = true;
console.log(randomValue);
randomValue = "hello";
console.log(randomValue);

let myVariable: any = 10;
// this throws error in js tho but not in tsc
console.log(myVariable.name);
myVariable(); 
myVariable.toUpperCase(); 
/* 
it doesn't throw error as it is of type any 
so no type checking occurs
to tackle this problem a new type was introduced
- unknown
*/

let myValue: unknown = 10;
(myValue as string).toUpperCase();

// above we use type assertion to bypass the unknown type restrictions

