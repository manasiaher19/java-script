// let fruits =["apple","mango","banana"]
// console.log(fruits)
// console.log(fruits[1])
// let fruit="apple"
// console.log(fruit)
//------------------------------------------------------------------------------------

//Set() ==> to remove dublicate element 
let myset = new Set()
console.log(myset)  //Set(0) {}

//object => property & methods
//property
//size()
// myset.size
// console.log(myset)  
//----------------------------------------------------------------------------------

// 1. add()
// //adding values
// myset.add("apple")
// myset.add("mango")
// myset.add("banana")
// console.log(myset)  //Set(3) { 'apple', 'mango', 'banana' }
// console.log(myset[1])  //undefined
// //****************************************************************************************
// //2.has()

// let myset1=new Set(["manasi","aditi","nikhil","manjii"])
// console.log(myset1)  //Set(4) { 'manasi', 'aditi', 'nikhil', 'manjii' }

// let A = myset1.has("aditi")
// console.log(A)  //true

// let B = myset1.has("Aditi")
// console.log(B) //false

// console.log(myset.has("mango")) //true

//e.g 2
let setA = new Set("abc","xyz","pqr","lmn")  //Set(3) { 'a', 'b', 'c' }
console.log(setA)

let setB = new Set(["abc","xyz","pqr","lmn"])  //Set(4) { 'abc', 'xyz', 'pqr', 'lmn' }
console.log(setB)
//******************************************************************************************** 
// //3.clear()
// myset1.clear()
// console.log(myset1)   //Set(0) {}
//******************************************************************************************* 
// // 4.forEach()

// myset1.forEach(function(el){
//     console.log(el) // all elements
// })

//  console.log(myset1.keys()) //[Set Iterator] { 'manasi', 'aditi', 'nikhil', 'manjii' }
//  console.log(myset1.values())  //[Set Iterator] { 'manasi', 'aditi', 'nikhil', 'manjii' }
//  console.log(myset1.entries())
// //  [Set Entries] {
// //   [ 'manasi', 'manasi' ],
// //   [ 'aditi', 'aditi' ],
// //   [ 'nikhil', 'nikhil' ],
// //   [ 'manjii', 'manjii' ]
// // }
// //**************************************************************************** 
// // 5. delete
//  let C =myset1.delete("nikhil")
//  console.log(C) //true
//  console.log(myset1) //Set(3) { 'manasi', 'aditi', 'manjii' }