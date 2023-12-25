const tinderApp = {}

tinderApp.id = "123abc"
tinderApp.name = "john"
tinderApp.isLoggedIn = true

// console.log(tinderApp)


const fbUser = {
    email : "me@gmail.com",
    fullName : {
        userName : {
            firstName : "Haresh",
            lastName : "Gayakhe"
        }
    }
}

// console.log(fbUser.fullName.userName.firstName)


// merge objects
const obj1 = {1 : "a", 2 : "b", 5: {4 : "c"}}
const obj2 = {3 : "a" , 4 : "b"}
// const obj3 = Object.assign({}, obj1, obj2) 
const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// extract keys and values from oject
const keys = Object.keys(tinderApp)
const values = Object.values(tinderApp)
// console.log(Object.entries(tinderApp))
// console.log(keys)
// console.log(values)
// console.log(tinderApp.hasOwnProperty("id"))



// object destructuring
const course = {
    courseName : "js tutorial",
    price : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor : instructor} = course
console.log(instructor)


