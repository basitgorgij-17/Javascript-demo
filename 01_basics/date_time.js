const currentDate = new Date()

console.log(currentDate.toString())
console.log(currentDate.toISOString())
console.log(currentDate.toJSON())
console.log(currentDate.toLocaleString())

let timeStamp = Date.now()
console.log(Math.floor(timeStamp/1000))

let DOB = new Date()
DOB.setFullYear(2006)
DOB.setMonth(3)
DOB.setDate(20)
console.log(DOB.toDateString())

let date = new Date()
myDate = date.toLocaleString('default',{
    weekday:"long",
})


// How to convert reamining Date millisecond convert into Day
let today = new Date();
let futureDate = new Date ("July 20, 2035")

let msToday = today.getTime()
let msFutureDate = futureDate.getTime()

msRemain = msFutureDate - msToday;
dRemain = msRemain / (1000 * 60 * 60 *24) 
dRemain = Math.floor(dRemain);


console.log(msToday)
console.log(msFutureDate)
console.log(msRemain)
console.log(dRemain)

