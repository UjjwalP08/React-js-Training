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

// Array of an object
let people: {
  name: string;
  age: number;
};

// type inference
let str = "this is the type-script section";
// type-inference means directly initalize value to variable w/o specify the data-type ,but now we don't able to initalze another data type to str variable
console.log(str);

// Union type
let str1:string | number = "this is the type-script section";
// using union type we initalize value which type is specified

console.log(str1);

str1 = 4523;
console.log(str1);
