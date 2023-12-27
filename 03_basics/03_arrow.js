const user = {
    userName: "Haresh",
    age: 26,
    func : function() {
        console.log(`${this.userName}, welcome to the future...`)
        console.log(this)
    }
}
// user.func()
// user.userName = "Leo"
// user.func()



function chai() {
    let user = "Haresh"
    console.log(this)
    console.log(this.user)
}
// chai()


// arrow function (explicit return)
const arrowFunction = (num1, num2) => {
    return num1 + num2
}
console.log(arrowFunction(3,4))



// implicit return
const implicitReturn = (num1, num2) => (num1 + num2)
console.log(implicitReturn(3, 4))