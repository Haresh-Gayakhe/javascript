let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toUTCString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.getDate())
console.log(myDate.getHours())


let currentTimeStamp = Date.now() // it will give you epoch time
console.log(currentTimeStamp) 

let newDate = new Date()
console.log(newDate.getDay())