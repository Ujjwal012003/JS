const buttons = document.querySelectorAll('.color-btn')
const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'Red'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'Green'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'Blue'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'Yellow'){
            body.style.backgroundColor = e.target.id
        }

    })
})

// Random Color Generator
document.getElementById("random-btn").addEventListener("click", () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    document.body.style.backgroundColor = randomColor;
})