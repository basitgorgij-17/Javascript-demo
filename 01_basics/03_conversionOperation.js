let num = "AB"

// console.log(num);
// console.log(typeof (num));

let valueInNumber = Number(num)
// console.log(typeof (valueInNumber))
// console.log(valueInNumber)

/*
After Applying Number Conversion Operation
"33" => 33
33abc => Nan(not a number)
true => 1, False => 0
Null => 0
*/


let isloggedIn = ""

let boolIsloggedIn = Boolean(isloggedIn)
// console.log(boolIsloggedIn);

/**
 After Applying Boolean Conversation Operation
 1 => true
 "" => false
 "Abu" => true
 */

 let stringNumber = 55

 let stringValue = String(stringNumber)
 console.log(stringValue);
//  console.log(typeof (stringValue));



 let obNumber = null

 let obValue = Object(obNumber)
 console.log(obValue);
 console.log(typeof (obValue));

 /**
  After Applying Object Conversation Operation
  33 => [Number: 33]
  "Abu" => [String: 'Abu']
  true => [Boolean: true], false => [Boolean: false]
  Undefined/Null => {}

  */
 
 

