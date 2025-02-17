const marvel_heros = ["Ironman","Thor","Hulk"]
const dc_heros = ["Batman","Superman","Wonder women"]

//console.log(marvel_heros.push(dc_heros))

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros= [...marvel_heros, ...dc_heros] //Spread operator
console.log(all_new_heros)

const another_array = [1,2,4,[5,6,7],8,[1,5,3]]
const real_array = another_array.flat(Infinity)// or we canuse the depth instead of infinity in this case the depth is 2
console.log(real_array)

console.log(Array.isArray("Ujjwal"))
console.log(Array.from("Ujjwal"))//Here "Ujjwal" is a string which is iterable
console.log(Array.from({name: "Ujjwal"})) //Here {name: "Ujjwal"} is object which is not iterable

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

