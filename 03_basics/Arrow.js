const user = {
    username: "Ujjwal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)// Here it in local scope and here "this" has the context 
    }
}

user.welcomeMessage()

console.log(this)// here it is in global scope and here in node it has no context to global scope so it logs an empty set
//Imp if we do console.log(this) in an browser it give us windows in return rather than empty set because it is dependent on widows to perform tasks and has windows in its global scope

/*function chai(){
    let user = "Ujjwal"
    console.log(this.user)//gives us undefined it works in object only not in function
}
chai()*/

const chai = ()=> {
    let user = "Ujjwal"
    console.log(this)

}

const addTwo = (num1,num2) =>{
    return num1 + num2
}

console.log(addTwo(6,5))

const obj = (object)=> ({user: "Ujjwal"})//to return object we need to wrap it in paranthesis
console.log(obj())