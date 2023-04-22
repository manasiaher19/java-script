let olList = document.querySelector('ol')
let inputBox = document.querySelector('input[type="text"]')
let Btn = document.querySelector('#btn')
console.log(olList)
console.log(inputBox)
console.log(Btn)

//step 1
Btn.addEventListener("click", function () {
    let Text = inputBox.value
    let newLi = document.createElement('li') //<li></li>
    newLi.textContent = Text
    //step 3
    createButton(newLi)
    olList.appendChild(newLi)
    inputBox.value = ""
})
//step 4
olList.addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
        if (event.target.className == 'remove') {
            let liEle = event.target.parentElement
            let olEle = liEle.parentElement
            olEle.removeChild(liEle)
        }
        if (event.target.className == 'up') {
            let liEle = event.target.parentElement
            let prevLi = liEle.previousElementSibling
            let olEle = liEle.parentElement
            if (prevLi) {
                olEle.insertBefore(liEle, prevLi)
            }
        }
        if (event.target.className == 'down') {
            let liEle = event.target.parentElement
            let nextLi = liEle.nextElementSibling
            let olEle = liEle.parentElement
            if(nextLi){
                olEle.insertBefore(nextLi,liEle)
            }
        }
    }
})




//step 2
function createButton(liElement) {
    // <br><button class="remove">Remove</button>
    //     <button class="up">Up</button>
    //     <button class="down">Down</button>
    //console.log(event.target)
    let remove = document.createElement('button')  //<button></button>
    remove.textContent = 'Remove' //<button>Remove</button>
    remove.className = 'remove' //<button class="remove">Remove</button>
    liElement.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = 'Up'
    up.className = 'up'
    liElement.appendChild(up)

    let down = document.createElement('button')
    down.textContent = 'Down'
    down.className = 'down'
    liElement.appendChild(down)
}