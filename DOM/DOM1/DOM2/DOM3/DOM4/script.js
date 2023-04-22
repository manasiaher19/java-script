//index.html
{/* <h1 id ="frd">kajal</h1>
    <button>change</button> */}

// let byID = document.querySelector('#frd')
// let byBtn = document.querySelector('button')
// console.log(byID)
// console.log(byBtn)
// byBtn.addEventListener("click", function () {
//     console.log(byID.textContent)
//     byID.style.color = "Blue"
//     byID.textContent = byID.textContent.toUpperCase()
//     //byID.textContent=byID.textContent.toLowerCase()
// })
//---------------------------------------------------------------------------------
//index1.html
{/* <h1 id="std">Student</h1>
    <input class="cls" type="text">
    <button id="btn">Add Me</button> */}

// let byID = document.querySelector("#std")
// let byClass = document.querySelector(".cls")
// let byBtn = document.querySelector("#btn")
// console.log(byID)
// console.log(byClass)
// console.log(byBtn)
// byBtn.addEventListener("click", function () {
//     console.log(byID.textContent)
//     console.log(byClass.value)
//     byID.style.color = "brown"
//     byID.textContent=byClass.value
//     byClass.value =""

// //OR
// let text = byClass.value
// byID.textContent = text
// byID.style.color = text
// byClass.value =""
//})
//---------------------------------------------------------------------------------
//index2.html
{/* <ul>
        <li>Manasi</li>
        <li>Diksha</li>
        <li>Janhavi</li>
        <li>Meher</li>
    </ul>
    <input type="text">
    <button>Add Me</button> */}

let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input[type="text"]')
let addMeBtn = document.querySelector('button')
console.log(ulList)
console.log(inputBox)
console.log(addMeBtn)
addMeBtn.addEventListener("click", function () {
    let inputValue = inputBox.value
    let newLiElement = document.createElement('li') //<li></li>
    newLiElement.textContent = inputValue //<li>Manji</li>
    ulList.appendChild(newLiElement)
    inputBox.value = ""
})