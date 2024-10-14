const name="harshitha"
const repoCnt=3
// console.log(name+" "+repoCnt)

// string interpolation using placeholders 

console.log(`Hello! My name is ${name} and my repo count is ${repoCnt}`); 

//declaration like object 

const gameName=new String('harshkay')
//string methods 
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));
console.log(gameName.substring(0,4)); // Negative values are treated as 0.
console.log(gameName.slice(-3,7)); // Negative values for start or end mean counting from the end of the string
console.log("    KAY   h  ".trim());
console.log("https://hkay/hkay%20about_section".replace("%20","-"));
console.log("https://hkay/hkay%20about_section".includes("kay"));

const word="h-kay-goud"
console.log(word.split('-'));