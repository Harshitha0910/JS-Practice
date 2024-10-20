const hero=["ALex","Josh","Rhys"]
const heroine=["Ava","Jules","Bri"]

// hero.push(heroine)
// console.log(hero);
// console.log(hero[3][0]);

// const myfav=hero.concat(heroine)
// console.log(myfav);

//Spreading - we can as my arrays as we wish 
// const myFav=[...hero,...heroine]
// console.log(myFav);

//flating - flats out the nested arrays based on the depth we give 
// let arr=[1,2,3,4,[4,5,6,[6,7,8]],8,9];
// let flatArr=arr.flat(Infinity)
// console.log(flatArr);

//Sometimes we might not have the array, but would want to turn it to array. In such case we do: 
console.log(Array.isArray("HK"));   // Tells whether that thing is array or not  
console.log(Array.from("HK"));      // Converts anything to array 
console.log(Array.from({name:"HK"}))    //JS wouldnt understand whether to change the key or value to array. SO it return empty Array.

let score1 = 100
let score2=200
let score3=300 
console.log(Array.of(score1,score2,score3));    //Converts to array given any set of values 