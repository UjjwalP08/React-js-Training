function add(a: number, b: number) {
  return a + b;
}

const result = add(2, 5);

// console.log(result);

// primitive data types

let age: number = 34;

let msg: string = "Hello";

let isValid: boolean = true;

// console.log(age,msg,isValid);

// Object and array in TS

// Array
let arr: string[];
arr = ["hello", "how are you", "good"];
console.log(arr);

// object
let obj1: {
  name: string;
  age: number;
};

obj1 = {
  name: "Ujjwal",
  age: 21,
};

console.log(obj1);

// // Array of an object
// let people: {
//   name: string;
//   age: number;
// };

// type inference
let str = "this is the type-script section";
// type-inference means directly initalize value to variable w/o specify the data-type ,but now we don't able to initalze another data type to str variable
console.log(str);

// Union type
let str1: string | number = "this is the type-script section";
// using union type we initalize value which type is specified

console.log(str1);

str1 = 4523;
console.log(str1);

// type alias
// specify the type only once then use type variable
type obj1 = {
  name: string;
  age: number;
};

var people: obj1[];
// console.log(people);

// function & types
function sum(a: number, b: number) {
  return a + b;
  // this function return number type
}

function print1(value: string) {
  console.log(value);
  // this function return nothing so it return void type
}

// Generics
// angular brack inside is specify the type
function adds1<T>(arr: T[], value: T) {
  const updatedArr = [value, ...arr];
  return updatedArr;
}

const demo = [1, 2, 3];

const newarr = adds1(demo, -4);

console.log(newarr);
