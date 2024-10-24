//declaration can be done using constructors (singleton) and literals

//Object Literals - Keys are taken as strings defaulty 

let mySym=Symbol("key1")//Symbol 

let jsUser={
    name:"Hkay",
    age:20,
    location:"hyd",
    email:"hkay@gmail.com",
    isLogged:false,
    lastLoginDate:["Monday","Saturday"], 
    // mySym:"mySym1" //wrong way to take the Symbol, mySym as a key to the object. Because here, mySym is considered as the String rather than the Symbol
    [mySym]:"MYSYM" //The symbols are taken as keys in this way 
}

console.log(jsUser.length);
// console.log(jsUser.email);
// console.log(jsUser["name"]); 
// //If we have any key that has string with spaces then we must use the []

// // If we wish to declare a symbol first and use it as key in objects then:
// console.log(typeof jsUser.mySym);// Gives the undefined, because dot notation works only with string keys, not symbols.
// console.log(typeof jsUser[mySym]); 

// //Changing the values of objects:
// jsUser.email="kay@hmail.com"
// //To not let the values of any keys change, i.e. the object, we use:
// // Object.freeze(jsUser)
// jsUser.email="hk@kmail.com"
// console.log(jsUser);    //The email change is not reflected, coz the object jsUSer is freezed 


