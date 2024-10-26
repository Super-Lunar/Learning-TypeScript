export {};

// different methods for defining an array

// method 1
let list1: number[] = [1, 2, 3];

// method 2
let list2: Array<number> = [1, 2, 3];

// for mixed type array use tuple
let person1: [string, number] = ["Chris", 22];
// order and number is fixed so u can't change the order or use more than defined numnber of values
console.log(list1);
console.log(list2);
console.log(person1);

// enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);
// the output is 1 as enum begin with 0
// Red = 0 , Green = 1 , Blue = 2

// we can also change the value of enum tho
