
let ulList = document.querySelector('ul')
let inputBox =document.querySelector('input')
let addMeBtn = document.querySelector('#one')
console.log(ulList)
console.log(inputBox)
console.log(addMeBtn)

//<li>orange</li>
//step1
addMeBtn.addEventListener("click",function(){
    let inputText = inputBox.value //orange
    let newLiEl = document.createElement('li') //<li></li>
    newLiEl.textContent=inputText //<li>orange</li>
//    //step 3
   createButton(newLiEl)
   ulList.appendChild(newLiEl)
   inputBox.value =""
})

//step2
function createButton(liElement){
    // <button class="remove">Remove</button> 
    // <button class="up">Up</button>
    // <button class="down">Down</button>

    let remove = document.createElement('button') //<button></button>
    remove.textContent="Remove" //<button>Remove</button>
    remove.className="remove" //<button class="remove">Remove</button>
    liElement.appendChild(remove)

    let up = document.querySelector('button') //<button></button>
    up.textContent="Up" //<button>Up</button>
    up.className="up" //<button class="up">Up</button>
    liElement.appendChild(up)

    let down = document.querySelector('button') //<button></button>
    down.textContent="Down" //<button>Down</button>
    down.className="down" //<button class="down">Up</button>
    liElement.appendChild(down)
}