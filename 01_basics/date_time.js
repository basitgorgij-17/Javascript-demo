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


