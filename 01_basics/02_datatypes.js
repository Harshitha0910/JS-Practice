"use strict"; // treat all JS code as newer version 

// alert("hello!!") --> works on the browser but not in the node.js (available but will be used later)

console.log(3+3) 

/*
Documentaion: 
1. https://tc39.es/ecma262/#sec-intro
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/ 

let name ="Hkay"
let age=20
let isLoggesIn=true 

//PRIMITIVE DATATYPES 
// number --> 2^53 
// bigint 
// string --> ""
// null --> standalone value 
// boolean --> true/false 
// undefined --> still the value is not assigned 
// symbol --> to find the uniqueness 

//NON-PRIMITIVE DATATYPES 
// Object 
// Array 
// Set 
// Map

//typeof 
console.log(typeof "Hkay");
console.log(typeof null);        //--> object 
console.log(typeof undefined);   //--> undefined 