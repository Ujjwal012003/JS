// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//Maps

const map = new Map() //map prints only unique values and in the same order
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('CN', "Canada")

console.log(map)

for (const [key,value] of map) {
    console.log(key, ':-', value)
    
}