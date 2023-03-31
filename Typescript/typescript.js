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
console.log((obj1));
// Array of an object
var people;
// type inference
var str = "this is the type-script section";
// type-inference means directly initalize value to variable w/o specify the data-type ,but now we don't able to initalze another data type to str variable
console.log(str);
str = 'good moring';
console.log(str);
