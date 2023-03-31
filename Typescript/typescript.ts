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

console.log((obj1));


// Array of an object
let peopl:{
    name:string,
    age:number
}
