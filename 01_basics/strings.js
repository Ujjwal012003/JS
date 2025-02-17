const name = "Ujjwal"
const age = 21

console.log(`Hello my name is  ${name} and my age is ${age}`)
//${} it is known as string interpolation

const gameName = new String('Ujjwal')

console.log(gameName)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('U'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,3)
console.log(anotherString)

const newStringOne = '    Ujjwal  '
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://Ujjwal.com/Ujjwal%21Bhardwaj"
console.log(url.replace('%21','-'))

console.log(url.includes('Ujjwal'))