const myArr = [0,1,2,3,4,5]

// Array methods

/*myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)*/

//myArr.unshift(9)
/*myArr.shift()
console.log(myArr)

console.log(myArr.includes(6))
console.log(myArr.indexOf(2))*/

//const newArr = myArr.join() //converts the array to string

//console.log(myArr)
//console.log(newArr)

console.log("A", myArr)

const myn1 = myArr.slice(1,3) //slice doesnot manipulate original array
console.log("B",myn1)

console.log(myArr)

const myn2 = myArr.splice(1,3) //splice manipulates the original array
console.log("C",myn2)

console.log(myArr)