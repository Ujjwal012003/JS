//const tinderUser = new Object() //Singleton object
const tinderUser ={}// non singleton

tinderUser.id = "123abc",
tinderUser.name = "Sammy",
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Ujjwal",
            lastname: "Bhardwaj"
        }
    }
}

console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3)

const users = [
    {
    id: 1,
    email: "u@gmail.com"
},
{
    id: 1,
    email: "u@gmail.com"
},
{
    id: 1,
    email: "u@gmail.com"
}
]

users[1].email
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(Object.entries(tinderUser))//gives the array of keys and values e.g. [key, value]


const course = {
    coursenmae: "Js in hindi",
    price: "999",
    courseInstructor: "Ujjwal"
}

const{courseInstructor: instructor}=course
console.log(instructor)

/*JSON(js object notation like)
{
    "name": "Ujjwal"
    "coursenmae": "Js in hindi",
    "price": "Free"
}*/

[
    {},
    {},
    {}
]// Api data can be in form of array also