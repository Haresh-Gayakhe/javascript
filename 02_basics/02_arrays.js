const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]
marvelHeros.push(dcHeros)
console.log(marvelHeros)

// concat method
const newHeros = marvelHeros.concat(dcHeros) // this will merge two arrays and return new array
console.log(newHeros)

// spread operator
const allNewHeros = [...marvelHeros, ...dcHeros] // this will merge two or more arrays
console.log(allNewHeros)

// flat method
const complexArray = [1, 2, [3, 4], [5, [6, 7, 8]]]
console.log(...complexArray)
console.log(complexArray.flat(Infinity)) // we can also pass depth in 1, 2, 3 to flat upto that level

console.log(Array.isArray("Haresh"))
console.log(Array.from("Haresh"))
console.log(Array.from({name: "Haresh"}))
let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3))
