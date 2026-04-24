// Unerstand this ===>> context of scope value 
const user = {
    userName: 'Basit',
    greeting: function foo(){
        return `Welcome to ${this.userName} our website`
    }   
}
console.log(user.greeting())
user.userName = 'Sheikh'
console.log(user.greeting())

// Type of Function
// 1.classic function
// function number(num1,num2){
//     return num1 + num2
// }
// console.log(number(5,10))

// 2.expression Function
// const foo = function(fname,lname){
//     return fname + lname
// }
// console.log(foo('Ali ','Sheikh'))

// 3.Arrow function
const num = (value1, value2) =>{
    return value1 + value2
}
console.log(num(15,5))