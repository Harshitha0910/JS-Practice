const score=300 
const score1=13.346
const score2=123.556 
const score3=123.973
const score4=123.53
const balance=new Number(100)
// console.log(balance,score);


// console.log(typeof balance.toString())
// console.log(score1.toFixed(2),score2.toFixed(1)); // after the decimal point is considered 
// console.log(score3.toPrecision(3),score4.toPrecision(2)) // It returns a string representation. entire no of digits 

// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));


// MATHS 

console.log(Math);//try in inspect 
console.log(Math.abs(-4.23));
console.log(Math.round(4.3))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.min(4,2,1,6,7,8))
console.log(Math.max(4,2,1,6,7,8))

//Math.random- lies b/w 0 and 1. Inclusive 
console.log(Math.random())
console.log((Math.random()*10)+1) //suppose is 0.012
console.log(Math.floor(Math.random()*10)+1) // floor makes into 0, +1 will give 1 
const min=10 
const max=20 
console.log(Math.floor(Math.random()*(max-min+1))+min) //stays in the range 