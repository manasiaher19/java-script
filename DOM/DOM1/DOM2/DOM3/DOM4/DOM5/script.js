{/* <h1>Fruits</h1>
    <ol>
        <li>Apple</li>
        <li>Mango</li>
        <li>Banana</li>
    </ol>
    <input type="text">
    <button>Add Fruits</button> */}

let fruits = document.querySelector('h1')
let orderL = document.querySelector('ol')
let inputBox = document.querySelector('input[type="text"]')
let Btn = document.querySelector('button')
console.log(fruits)
console.log(orderL)
console.log(inputBox)
console.log(Btn)

Btn.addEventListener("click", function () {
    let EnterF = inputBox.value
    let newL = document.createElement('li')
    newL.textContent = EnterF
    orderL.appendChild(newL)
    inputBox.value =""
})