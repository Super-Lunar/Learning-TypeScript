export {}

// specifying types is optional

let a;
a = 10
a= true

// works fine

let b = 20
// b = true

// doesn't work as type is infered at the time of intialization

// to assign multitype to a variable 
// we use union types
let multiType : number | boolean = true
console.log(multiType)
multiType = 10
console.log(multiType)
