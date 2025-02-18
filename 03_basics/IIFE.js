//Immideatiely Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`)

})();// to write to IIFFE together we need to end 1st IIFE with ;
// we use IIFE to remove the pollution(variables) from global scope

//()()//1st paranthesis is for function definition and 2nd is for function execution

((name)=> {
    //unmaed or simple IIFE
    console.log(`DB connected to ${name}`)

})('Ujjwal')
