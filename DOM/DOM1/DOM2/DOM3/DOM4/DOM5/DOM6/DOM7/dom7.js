{/* <h1 id="std" class="one" name="nm">Names</h1> */ }
//single element (find)
let byTag = document.querySelector('h1')
console.log(byTag)

{/* < li > Kajal</li >
<li>Nayan</li>
 <li>Sai</li>
<li>Rani</li> */}

let List = document.querySelector('li')
console.log(List)  //Kajal

//multiple element (find)
//Node List
let List2 = document.querySelectorAll('li')
console.log(List2) // all li but NodeList 
//Node List ==> static
//by using for loop we can also display node list
for(let i = 0;i<List2.length;i++){
    console.log(List2[i].textContent)
}
//length
console.log(List2.length) //4
//============================================================
//HTMLCollection ==> dynamic
let List3 = document.getElementsByTagName('h1')
console.log(List3) //HTMLCollection
//length
console.log(List3.length) //1
//===================================================================
{/* <h1 id="std" class="one two three" name="nm">Names</h1> */ }
//find ele by =>
//by tagname
//bt id
//by classname

//ByTagName
let H1 = document.getElementsByTagName('h1')
console.log(H1) //HTMLCollection

//ById
let H2 = document.getElementById('std')
console.log(H2) //htmlelement

//ByClassName
let H3 = document.getElementsByClassName('one two three')
console.log(H3) //HTMLCollection
//=======================================================================================
{/* <h1 id="std" class="one two three" name="nm">Names</h1> */ }
let ele = document.querySelector('h1')
console.log(ele.className) //one two three

console.log(ele.classList)  //DOMTokenList(3)
//-----------------------------------------------------------------
{/* <h1 id="std" class="one two three" name="nm">Names</h1> */ }

let Ele = document.querySelector('h1')
console.log(Ele) //h1

//add
Ele.classList.add('four')
console.log(Ele.classList) //class="one two three four"

//remove
Ele.classList.remove('one')
console.log(Ele.classList) //class="two three four"

//toggle
Ele.classList.toggle('five')
console.log(Ele.classList) //five add

Ele.classList.toggle('five') 
console.log(Ele.classList) //five remove
//--------------------------------------------
//getAttribute
{/* <h1 id="std" class="one two three" name="nm">Names</h1> */ }
console.log(Ele.getAttribute('id')) //std

//setAttribute
Ele.setAttribute('newAt','new')
console.log(Ele) //{/* <h1 id="std" class="one two three" name="nm" newAt="new">Names</h1> */ }