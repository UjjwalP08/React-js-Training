var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(a, b) {
    return a + b;
}
var result = add(2, 5);
// console.log(result);
// primitive data types
var age = 34;
var msg = "Hello";
var isValid = true;
// console.log(age,msg,isValid);
// Object and array in TS
// Array
var arr;
arr = ["hello", "how are you", "good"];
console.log(arr);
// object
var obj1;
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
var str = "this is the type-script section";
// type-inference means directly initalize value to variable w/o specify the data-type ,but now we don't able to initalze another data type to str variable
console.log(str);
// Union type
var str1 = "this is the type-script section";
// using union type we initalize value which type is specified
console.log(str1);
str1 = 4523;
console.log(str1);
var people;
// console.log(people);
// function & types
function sum(a, b) {
    return a + b;
    // this function return number type
}
function print1(value) {
    console.log(value);
    // this function return nothing so it return void type
}
// Generics
function adds1(arr, value) {
    var updatedArr = __spreadArray([value], arr, true);
    return updatedArr;
}
var demo = [1, 2, 3];
var newarr = adds1(demo, -4);
console.log(newarr);
