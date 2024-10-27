export {};

let myVariable:unknown = 10
function hasName(obj:any) : obj is {name:string} {
    return !!obj&&
    typeof obj ==="object" &&
    "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name)
}

// this fixes the error while accessing property of a unknown variable