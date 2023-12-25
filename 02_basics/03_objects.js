const mySymbol = Symbol("key")

const user = {
    name : "haresh",
    "full name" : "haresh gayakhe",
    [mySymbol] : "using symbol as key",
    age : 26,
    location : "mumbai",
    email : "haresh@google.com",
    isLoggesIn : false,
    lastLoginDays : ["monday", "saturday"]
}

console.log(user.age)
// console.log(user["age"])
console.log(user["full name"])
console.log(user[mySymbol])

user.email = "haresh@chatgpt.com"
// Object.freeze(user)
user.email = "haresh@facebook.com"
console.log(user)

user.greeting = function () {
    console.log("Hello js user")
}

console.log(user.greeting())

user.newGreet = function () {
    console.log(`Hello user, ${this["full name"]}`)
    console.log(`your age is ${this.age}`)
}
console.log(user.newGreet())


