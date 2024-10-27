export {}

// so we can create interface of a object and use that interface as a type for function parameter

interface personType {
    firstName : string,
    age? : number
}

// so same interface can be used in multiple function
// and type change can be made in oneplace 
// also a property can be specified optional by adding ? at last of property 

// function fullName(person:{firstName:string,age:number})
function fullName(person:personType)
{
console.log(`Name is : ${person.firstName}.`)
console.log(`Age is : ${person.age}.`)
}

let p = {
    firstName : 'Randy',
    age : 10
}

fullName(p)

let o = {
    firstName : 'Orton',
    
}

fullName(o)