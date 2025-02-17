const score = 400

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber= 25.55454

console.log(otherNumber.toPrecision(3))

const hundereds = 1000000
console.log(hundereds.toLocaleString('en-IN'))

//+++++++++++++Maths++++++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.2))
console.log(Math.min(4,5,3,5,3))
console.log(Math.max(4,5,3,5,3))


console.log(Math.random()) //random values lies b/w only 0 and 1 and most probably it would be decimal only
console.log((Math.random()*10)+1)

const min = 10 
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min))
