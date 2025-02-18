//if
// const isUserloggedIn = true

// if(isUserloggedIn){

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow user to buy the course")
}

if (loggedInFromEmail || loggedInFromGoogle)
    console.log("User Logged in")