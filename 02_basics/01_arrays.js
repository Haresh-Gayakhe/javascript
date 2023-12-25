// array

const myArray = [1, 2, 3, 4, 5]
const myHeros = ["ironman", "spiderman"]
const numbers = new Array(1, 2, 3, 4, 5)

// console.log(myArray[0])

// array methods

myArray.push(6)
// console.log(myArray)
myArray.pop()
// console.log(myArray)

myArray.unshift(0)
// console.log(myArray)
myArray.shift()
// console.log(myArray)

// console.log(myArray.includes(5))
// console.log(myArray.includes(7))
// console.log(myArray.indexOf(1))
// console.log(myArray.indexOf(0))

const newArray = myArray.join()
// console.log(newArray)
// console.log(typeof newArray)


// slice, splice
console.log("A ", myArray)
const myn1 = myArray.slice(1, 3)
console.log(myn1)
console.log("B ", myArray)

const myn2 = myArray.splice(1, 3)
console.log(myn2)
console.log("C ", myArray)

