function addTwoNumbers(num1, num2) {
    return num1 + num2
}
// console.log(addTwoNumbers(2, 5))
const result = addTwoNumbers(5, 3)
// console.log("Result: ", result)



function loginMessage(username = "Sam") { // This will use as default value if nothing passed
    if(username) {
        return `${username} just logged in`
    }
    return 'Enter valid username'
}
// console.log(loginMessage("Haresh"))



function calculatePrice(val1, val2,...num1) { // rest operator num1 will have 300 and 400 in array
    return num1
}
// console.log(calculatePrice(100, 200, 300, 400))



function userDetails(obj) {
    return `Hello ${obj.username}, your age is ${obj.age} years`
}
// console.log(userDetails({username:"Haresh", age:26}))



function getSecondElement(arr) {
    return arr[1]
}
const array = [1, 2, 3]
console.log(getSecondElement(array))

