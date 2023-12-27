const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map((number)=> number + 1)

const newNums = myNumers
                .map((number)=> number * 10)
                .map((number)=> number + 1)
                .filter((number)=> number > 50)

console.log(newNums)