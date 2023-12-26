if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a)
// console.log(b)
console.log(c) // can access even from local scope



function one() {
    let username = "Haresh"
    function two() {
        let password = "Password"
        console.log(username)
    }
    two()
    console.log(password) // can't access here
}

one()



addOne(5) // this will run fine
function addOne(num) {
    return num + 1
}

addTwo(5) // this will give error because we are accessing variable before it's initialization
const addTwo = function(num) {
    return num + 2
}