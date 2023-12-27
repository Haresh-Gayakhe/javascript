// named iife function
(function chai() {
    console.log("drink chai in morning")
})(); // semicolon is neccessary to end the execution and move on


// iife using arrow function
((userName) => {
    console.log(`welcome, ${userName}`)
})("Haresh"); // we can pass arguments also