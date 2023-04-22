let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')
let Btn = document.querySelector('#one')
console.log(ulList)
console.log(inputBox)
console.log(Btn)

Btn.addEventListener("click", function () {
    //step 1
    let Text = inputBox.value
    let newList = document.createElement('li')//<li></li>
    newList.textContent = Text
    //step 3
    createButton(newList)
    ulList.appendChild(newList)
    inputBox.value = ""
})
//step 4






//step 2
function createButton(liElement) {
    //<button class="remove">Remove</button>
    let remove = document.createElement('button') //<button></button>
    remove.textContent='Remove'
    remove.className='remove' //<button class="remove">Remove</button>
    liElement.appendChild(remove)
}
