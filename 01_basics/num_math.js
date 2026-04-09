// understand Number

let num = 40;
console.log(typeof num);

let score = new Number (40);
console.log(typeof score)

let balance = 2000000
console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(balance.toLocaleString('en-IN'))

let commonNum = 32.617;
console.log(commonNum.toPrecision(2))

// understand Math
console.log(Math)

let count = -5;
console.log(Math.abs(count))
console.log(Math.round(12.7566))
console.log(Math.ceil(21.4455))
console.log(Math.floor(21.8455))

console.log(Math.min(2,8,4,7,1))
console.log(Math.max(3, 8, 4, 6))

console.log(Math.random())
console.log((Math.random()*10) +1)

let max = 20;
let min = 10;
console.log(Math.floor(Math.random() * (max-min + 1)) + min)
