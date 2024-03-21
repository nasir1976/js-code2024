const accountId = 144553
let accountEmail = "ahmed@gmail.com"
var accountPassword = "123456"
accountCity = "Lahore"
let accountState;

// accountId = 223344 // not possible to change

accountEmail = "asif@gmail.com"
accountPassword = "abcdef"
accountCity = "Karachi"


console.log(accountId);

/*
prefer dont not use var
because of issus in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);