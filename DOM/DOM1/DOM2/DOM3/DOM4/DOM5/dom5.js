let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')
let Btn = document.querySelector('#btn')
console.log(ulList)
console.log(inputBox)
console.log(Btn)

Btn.addEventListener("click", function () {
    //step1(to add new li ele)
    let inputText = inputBox.value
    let newList = document.createElement('li') //<li></li>
    newList.textContent = inputText
    //step3
    createButton(newList)
    ulList.appendChild(newList)
    inputBox.value = ""
})
//step4
ulList.addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
        if (event.target.className == "remove") {
            let liEle = event.target.parentElement
            let ulEle = liEle.parentElement
            ulEle.removeChild(liEle) //remove li from ul
        }
        if (event.target.className == "up") {
            let liEle = event.target.parentElement
            let prevLi = liEle.previousElementSibling
            let ulEle = liEle.parentElement
            if (prevLi) {
                ulEle.insertBefore(liEle, prevLi)
            }

        }
        if (event.target.className == "down") {
            let liEle = event.target.parentElement
            let nextLi = liEle.nextElementSibling
            let ulEle = liEle.parentElement
            if (nextLi) {
                ulEle.insertBefore(nextLi,liEle)
            }

        }
    }
})


//step2 (for creating button)
function createButton(liElement) {
    // <button class="remove">Remove</button>
    // <button class="up">Up</button>
    // <button class="down">Down</button>
    let remove = document.createElement('button') //<button></button>
    remove.textContent = "Remove" //<button>Remove</button>
    remove.className = "remove" //<button class="remove">Remove</button>
    liElement.appendChild(remove)

    let up = document.createElement('button') //<Button></Button>
    up.textContent = "Up" //<Button>Up</Button>
    up.className = "up" //<Button class ="up">Up</Button>
    liElement.appendChild(up)

    let down = document.createElement('button') //<Button></Button>
    down.textContent = "Down" //<Button>Down</Button>
    down.className = "down" //<Button class ="down">Up</Button>
    liElement.appendChild(down)
}