//const myName = "Ujjwal      "

//console.log(myName.trueLength)
//console.log(myName.trim().length)

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

Object.prototype.ujjwal = function(){
    console.log(`Ujjwal is present in all objects`)

}

heroPower.ujjwal()
myHeroes.ujjwal()