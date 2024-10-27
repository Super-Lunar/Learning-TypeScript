export {};

/* function add(num1: number, num2?: number): number {
  if(num2){
    return num1 + num2;
  }
  else return num1
}

console.log(add(10, 40));
console.log(add(10)); */

// to make parameters optional we add ? at end of parameteres

// for default parameters

function add(num1: number, num2: number= 30): number {
    if(num2){
      return num1 + num2;
    }
    else return num1
  }
  
  console.log(add(10, 40));
  console.log(add(10));