to automatically recompile the typescript file to js 
    we have watch option of tsc compiler
    command
        tsc main --watch


to assign type 
    let name: string = "harry";
    where type is defined after variable using :

for array 
    // method 1
    let list1: number[] = [1, 2, 3];

    // method 2
    let list2: Array<number> = [1, 2, 3];


if you're unsure about variable type 
    assign any type

any type has few issues as no type checking occurs 
so tsc 3.0 introduced new type called unknown

however we can't access any properties of unknown
also we can't call or construct them
to bypass this we have to use type assertion

 to assign multitype to a variable 
let multiType : number | boolean = true

 number | boolean is called union types 

 using union types instead of any types gives us intellisense support


 for function 

 function name(params1:type1,params2:type2):returnType {}

 for optional parameters
 use ? after parameters (note: order of parameter matters)

 function name(params1:type1,params2?:type2):returnType {}

 for default parameters
 function name(params1:type1,params2:type2 = value):returnType {}
