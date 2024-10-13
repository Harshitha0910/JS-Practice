let val=3 
let negVal=-val
console.log(negVal)

console.log(2+3)
console.log(2-3)
console.log(2*3)
console.log(2**3)
console.log(2/3)
console.log(2%3)

let str1 ="Hey"
let str2="Kay"
let str3=str1+str2 
console.log(str3) 
                 
console.log("1"+2)    
console.log(1+"2") 
console.log(1+"2"+2) 
console.log(1+2+"3")   


/*
    -> When a string is involved with +, JavaScript converts numbers to strings and performs concatenation instead of arithmetic.
    -> When no strings are involved, JavaScript performs arithmetic operations as usual.
*/ 


console.log(+true) 
console.log(+"harshitha")
// console.log(true+)--> Gives error. Incomplete syntax
/* 
    The unary plus operator attempts to convert the operand into a number:

    For booleans: true becomes 1, and false becomes 0.
    For strings (if they contain numeric values): "5" becomes 5.
    For non-numeric strings: the result will be NaN (Not-a-Number).
*/ 

let num1,num2,num3 
num1=num2=num3=2+3 // Shouldn't be used 

let cnt=100
x=cnt++
console.log(x,cnt)
let cnter=100
y=++cnter
console.log(y,cnter)

/*
    -> If used postfix, with operator after operand (for example, x++), the increment operator increments and 
    returns the value before incrementing.

    -> If used prefix, with operator before operand (for example, ++x), the increment operator increments and 
    returns the value after incrementing. 
*/

