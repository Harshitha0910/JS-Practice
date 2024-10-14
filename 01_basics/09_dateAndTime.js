//Dates 
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString('default'),{weekday:"long"});

let newDate1=new Date(2024,9,9);
console.log(newDate1.toDateString()); 

let newDate2=new Date("2023-01-14");
console.log(newDate2.toDateString()); 

let newDate3=new Date("01-14-2023");
console.log(newDate3.toDateString()); 

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(newDate3.getTime())

//in seconds 
console.log(Math.floor(Date.now()/1000))