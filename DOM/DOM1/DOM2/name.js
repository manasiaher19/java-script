//<h1>Dyaneshvari</h1>
let byTagname = document.querySelector('h1')
console.log(byTagname)
//<input type="text">
let CF = document.querySelector('input[type="text"]')
console.log(CF)
//<button>Change</button>
let changeme = document.querySelector('button')
console.log(changeme)

changeme.addEventListener("click",function(){
    console.log(CF.value)
    console.log(byTagname.textContent)
    byTagname.textContent=CF.value
})