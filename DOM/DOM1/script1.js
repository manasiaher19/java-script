
// document.querySelector('h1').addEventListener("click",function(){
//     document.querySelector('h1').style.color="red"
// })

//---------------------------------------------------------------------------
//   <h1 id="one" class="two" name="xyz">WelCome</h1>
//<> ==> opening tag
//</> ==> closing tag
//h1/p/ul ==> tagName
// id="one" ==> attribute =value (pair)
//<>text</>
//id is always unique
//class => multiple ele but same property
//Html element ==> Object => property and methods

//To find element there are 4 ways==>
//<h1>WelCome</h1>
//<h1 id="one" class="two" name="xyz">WelCome</h1>

//1. By Tagname==>
let byTagname = document.querySelector('h1')
console.log(byTagname)

//2.By ID (#)==>
let byID = document.querySelector('#one')
console.log(byID)

//3.By Class (.)==>
let byClass = document.querySelector('.two')
console.log(byClass)

//4.By CF ('tagname[attribute,"value"]')==>
let cf = document.querySelector('h1[name="xyz"]')
console.log(cf)

//<input type="text">
let inputBox = document.querySelector('input[type="text"]')
console.log(inputBox)

//<button>click me</button>
let clickme = document.querySelector('button')
console.log(clickme)

clickme.addEventListener("click", function () {
    console.log(inputBox.value)
    console.log(byTagname.textContent)
    byTagname.textContent = inputBox.value
    byTagname.style.color = inputBox.value
})


