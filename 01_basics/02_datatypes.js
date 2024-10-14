//JavaScript is dynamically typed, meaning types are determined at runtime, and variables 
// can hold values of any type without prior declaration or type enforcement.

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

//PRIMITIVE DATATYPES (PASS BY VALUE) : When primitive types are passed to a function, a copy of the value is made. 
//     Any changes to the parameter inside the function won’t affect the original variable.
// number --> 2^53 
// bigint 
// string --> ""
// null --> standalone value 
// boolean --> true/false 
// undefined --> still the value is not assigned 
// symbol --> to find the uniqueness 

//NON-PRIMITIVE DATATYPES (PASS BY REFERENCE): When objects (including arrays) are passed to a function, the reference to the original object is passed. 
//      If the function modifies the object's properties, those changes will reflect outside the function.
// Object 
// Array 
// Function 

//typeof 
console.log(typeof "Hkay");
console.log(typeof null);        //--> object 
console.log(typeof undefined);   //--> undefined 
/* 
    undefined - undefined 
    null - object 
    
*/ 