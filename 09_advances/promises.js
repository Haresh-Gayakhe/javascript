// const promiseOne = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("first task completed successfully")
//         resolve()
//     },1000)
// })
// promiseOne.then(()=>{
//     console.log("first promise consumed")
// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('second task completed successfully')
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log("second promise resolved")
// })

// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("third task completed successfully")
//         resolve({name:"haresh", age:26})
//     },3000)
// })
// promiseThree.then((data)=>{
//     console.log(data)
//     console.log("third promise resolved")
// })

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if (!error){
//             console.log("fourth task completed successfully")
//             resolve({name:"haresh", age:26})
//         }
//         else{
//             console.log("fourth task failed")
//             reject("Error: this is error")
//         }
//     },1000)
// })
// const user = promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.name
// })
// .then((name)=>{
//     console.log(name)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("finally the promise either resolves or rejected")
// })

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       console.log("fifth task completed successfully");
//       resolve({ name: "haresh", age: 26 });
//     } else {
//       console.log("fifth task failed");
//       reject("Error: this is error");
//     }
//   }, 1000);
// });
// consumedPromiseFive = async () => {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log("==>",error);
//   }
// };
// consumedPromiseFive();



// async function getData() {
//     try{
//         const response = await fetch("https://api.github.com/users/Haresh-Gayakhe")
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// getData()



fetch("https://api.github.com/users/Haresh-Gayakhe")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})