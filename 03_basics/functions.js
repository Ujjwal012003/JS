function sayMyName(){
    console.log("U");
    console.log("J");
    console.log("J");
    console.log("W");
    console.log("A");
    console.log("L");
}

sayMyName()

/*function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
const result = addTwoNumbers(5,6)

console.log("Result: ",result)*/

function addTwoNumbers(number1,number2){
    //let result = number1 + number2
   // return result
   return number1+number2
}    
const result = addTwoNumbers(5,6)

console.log("Result: ",result)

function loginUserMessage(username){

    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ujjwal"))
console.log(loginUserMessage())// empty returns the undefined

function calculateCartPrice(...num1){///(rest operator puts in array)
    return num1
}

console.log(calculateCartPrice(200,400,244,758))

function calcCartPrice(val1,val2,...num1){///(rest operator puts in array and val1 and 2 are the first two values)
    return num1
}

console.log(calcCartPrice(200,400,244,758))