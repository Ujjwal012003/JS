const user = {
    username:"Ujjwal",
    logInCount: 9,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database")
        console.log(`Username: ${this.username}`)// this is used for current context where it just look globally for what is asked
    }
}

console.log(user.username)
console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn){
    this.username=username,
    this.logInCount=loginCount,
    this.isLoggedIn=isLoggedIn

    return this
}

const userOne = new User("Ujjwal",14, true)
const userTwo = new User("ChaiaurCode",11,false)
console.log(userOne)