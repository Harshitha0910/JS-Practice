const accountId=31290910
// accountId=23 -- const values cannot be changed 

let accountEmail="harshithak@kmail.com" 
var accountPassword="987654"
// variables can be declared with let and var keyword. var is not used because of block and functional scope. So, let is used. 

accountCity="hyd"
// variable can be declared as shown above. 

let accountState;
// The above variable gets 'undefined' as its value 

accountEmail='hk@kmail.com'
accountPassword=123456
accountCity="Mumbai"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);