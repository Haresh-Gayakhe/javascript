// primitive datatypes
// 7 ==> String, Number, Boolean, null, undefined, Symbol, BigInt

let str = "Haresh"
let num = 123
let alive = true
let value = null
let saving
let symbol = Symbol("123")
let bigNumber = 123456789987654321n


// reference (non primitive)
// Array, Objects, Functions

const heros = ["shaktiman","shakal"];

const obj = {
    name: "Haresh",
    age : 26,
    gender: "male"
}

const func = function () {
    console.log("Hello World!")
}

console.log(typeof func)
