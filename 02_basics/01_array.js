//Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


//declaration: 
const myArr=[1,2,3,4,5]
const myHeros=['Spiderman',"Ironman"]
const myArr2=new Array(1,2,3,4,5)
/*

//Array Methods 
myArr.push(6,7,8)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(7);       //Adds the element at first moving all the other elements to right 
console.log(myArr);

myArr.shift()           //Removes the first element in the array 
console.log(myArr);

console.log(myArr.includes(9));

console.log(myArr.indexOf(3));
console.log(myArr.indexOf(89));

const newArr=myArr.join() 
console.log("myArr"+" "+myArr+" "+typeof myArr);
console.log("newArr"+" "+newArr+" "+typeof newArr);

*/

//Slice and Splice 

console.log("Original Array", myArr); 
let mySlice=myArr.slice(1,3);
console.log("Slice Array", mySlice);

console.log("Original Array", myArr); 
let mySplice=myArr.splice(1,3);
console.log("Splice Array", mySplice);
console.log("Original Array after splice", myArr); 

/*
    Difference between slice and splice is that, 
    -> slice gives portion of arr excluding the upper range 
    -> Splice gives portion of arr including the upper range and also removes that part from the original array 
*/ 
