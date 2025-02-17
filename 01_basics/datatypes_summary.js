// Primitive

//7 types: String, number, boolean, null, undefined, symbol, Bigint

const score = 100
const scoreValue=100.5

const isLoggedIn = false

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3434455743556n

//Reference type (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj={
    name: "Ujjwal",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world")
}

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Cybertronic"