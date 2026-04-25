// Unerstand this ===>> context of scope value 
// THIS ===>>> current context
const user = {
    userName: 'Basit',
    greeting: function(){
        console.log(`Welcome to ${this.userName} our website`);
        console.log(this);
    }   
}
// console.log(user.greeting())
// user.userName = 'Sheikh'
// console.log(user.greeting())

console.log(this)

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
    //i.basic explosive arrow function 
// const num = (value1, value2) =>{
//     return value1 + value2
// }
// console.log(num(15,5)) 

// ii.implosive arrow function
const num = (value1, value2) => (value1 + value2)
console.log(num(15,5)) 