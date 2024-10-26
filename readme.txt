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
    assign anytype