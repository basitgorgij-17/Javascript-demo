// Function Work for reptitive task
// if you this code execution 10X time it really hard but use function it is easy

// console.log('B');
// console.log('A');
// console.log('S');
// console.log('I');
// console.log('T');

function myName(){
console.log('B');
console.log('A');
console.log('S');
console.log('I');
console.log('T');
}
// myName();
// myName();
// myName();
// myName();
// myName();

// If you store function value into variable using Return keyword

// This is wrong way to store function value into variable
// function num(num1,num2 ==>> This is parameter ){
// num1 + num2
// }
// let result = num(20,15)  ===>> This is arguments
// console.log(result)

function num(num1,num2){
return  num1 + num2
}
let result = num(20,45)
console.log(result);


function userLoggedIn(userName){
if(!userName){
    console.log('Please Enter a username')
    return
}
return `${userName} Just Logged in`
}
console.log(userLoggedIn('Basit'));
 

