let score = 33 
console.log(typeof score)

let scoreStra = "33" 
console.log(typeof scoreStra)

let scoreStrb = "33abcd" 
console.log(typeof scoreStrb)


let scoreInNum=Number(scoreStrb)
console.log(scoreInNum)
console.log(typeof scoreInNum)


let isLogged=NaN 
let booleanIsLogged = Boolean (isLogged)
console.log(booleanIsLogged)
console.log(typeof booleanIsLogged)
/* 

ANY VALUE TO NUMBER: 
    "34" --> 34 
    "34agf" --> NaN 
    true --> 1
    false --> 0 
    null --> 0 
    undefined --> NaN 

ANY VALUE TO BOOLEAN:
    1 --> true 
    0 --> false 
    "" --> false 
    non empty string --> true 
    null --> false 
    undefined --> false 
    NaN --> false 
*/ 