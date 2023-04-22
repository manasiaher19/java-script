//  <h1>Hello</h1>
//     <input type="text">
//   <button>Click</button> 

let bytagname = document.querySelector('h1')
let inputBox = document.querySelector('input[type="text"]')
let bybtn = document.querySelector('button')
// console.log(bytagname)
// console.log(bybtn)
// console.log(inputBox)
// bybtn.addEventListener("click", function () {
// program 1 => index1.html
// console.log(bytagname.textContent)
// bytagname.textContent="Byee"
// bytagname.style.color="Red"

//program 2 => index 2.html
console.log(inputBox.value)
console.log(bytagname.textContent)
bytagname.textContent = inputBox.value
bytagname.style.color = "Brown"

// //program 3 => index3.html
// //  <h1>Maharashtra</h1>
// // <button>ChangeColor</button>
// let head = document.querySelector('h1')
// let bybtn = document.querySelector('button')
// console.log(head)
// console.log(bybtn)
// bybtn.addEventListener("click", function () {
//     head.style.color = "orange"
// })




    // console.log(inputBox.value)
    // bytagname.textContent = inputBox.value
    // bytagname.style.color = "Green"
    // inputBox.value = ""

// })