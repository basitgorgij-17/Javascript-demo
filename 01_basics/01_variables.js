const accountID = 123141
let accountEmail = "abdulbasit@gmail.com"
var accountPassword = "ab123"
accountCity = "Karachi"

// accountID = 08889

accountEmail = "basoo@gmail.com"
accountPassword = "ab17"
accountCity = "Balochistan"

console.log([accountID]);
/* 
prefer not to use VAR
because of issue in block scope and functional scope
*/
console.table([accountID, accountEmail, accountPassword, accountCity])
