//singleton
//Object.create

//object literals

const mySym = Symbol("key1")


const Jsusers={
    name:"Ujjwal",
    "full name": "Ujjwal Bhardwaj",
    [mySym]: "key1",
    age: 21,
    location: "Una",
    email: "Ujjwal@audi.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

/*console.log(Jsusers.name)
console.log(Jsusers["full name"])
console.log(Jsusers[mySym])// it is symbol only not converted to string
console.log(typeof(Jsusers))// It remains object

Jsusers.email= "Ujjwal@AI.com"
Object.freeze(Jsusers)
console.log(Jsusers)*/


Jsusers.greeting = function(){
    console.log("Hello Js User")
}

Jsusers.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(Jsusers.greeting())
console.log(Jsusers.greeting2())