// Two Datatypes 

// 1. Primitive Datatypes (call by value)
// String, Number, Bolean, Null, Undefined, Symbol, BigInt

// string
const name = "Basit"

// Number
const score = 34559
const scorevalue = 455.55

// Boolean
const isLoggedIn = true

// Null
const Temp = null //empty value 

// undefined
let unEmail;
let isEmail= undefined;

//Symbol 
const cnic = Symbol('42101-548889')
const anotherCnic = Symbol('42101-54889')
// console.log(cnic == anotherCnic);

// BigInt
const bigNumber = 447777888n
// console.log(typeof(bigNumber));

// 2. Non Primitive Datatypes (call by reference)
// Array, Object, Functions

// Array
const heros = ["Batman", "Spiderman", "Hulk"];

// Object
let obj = {
    name:"AB",
    age:20,
}

// Function
const myFunction = function(){
    console.log("Hello World!");
}