
//Array  

//Example 1
//            0          1         2        3
//let names = ["manasi", "manji", "mayuri", "diksha"]
// console.log(names[0]) // manasi
// console.log(names[1]) //manji
//console.log(names.length) // 4
// console.log(names[names.length - 1]) //diksha (-1 is always last index)

// let a = names.length
// console.log(a)
// console.log(typeof a)

// for (i = 0; i < names.length; i++) {  //0<4  //1<4 2<4 3<4 4<4=f
//     console.log(i) // 0 1 2 3 
//     console.log(names[i]) // print every elment of array // manasi manji mayuri diksha
// }


// for (let i = names.length; i >= 0; i--) { // 4>0  3>0  2>0 1>0 0>=0
//     console.log(i) // 4 3 2 1 0
//     console.log(names[i]) // print every elment of in reverse array  //undefi diksha mayuri manji manasi
// }

//Example 2

// let fruits = ["apple", "banana", "grapes", "mango"]
// // console.log(fruits[0])
// // console.log(fruits[1])
// // console.log(fruits.length)

// for (let i = 0; i < fruits.length; i++) {
//     console.log(i)
//     console.log(fruits[i])
// }

// for (let i = fruits.length ; i>=0 ; i--) {
//     console.log(i)
//     console.log(fruits[i])
// }

//OLD METHODS
// push()    ==> add last element &   return new element
// pop()     ==> delete last elem &   return same element
// unshift() ==> add first element &   return new length og array
//shift()    ==> delete first ele &   return first element
//include()  ==> check element correct or not &   return boolean (T/F)
// join()    ==> join array elements (eg. manasi-aher) 
//indexOf()  ==> return element index

//program
//              0         1         2        3        4
let students = ["manish","nikhil","shubham","sarthak","sai"]
// console.log(students[0])
// console.log(students.length)
// for(i=0;i<students.length;i++){
//     console.log(i)
//     console.log(students[i])
// }
//push()
let New = students.push("abhi")
console.log(New) // 6
console.log(students)
//pop()
let New1 = students.pop()
console.log(New1) //abhi
console.log(students)
//unshift()
let New2 = students.unshift("abhi")
console.log(New2) //6
console.log(students)
//shift()
let New3 =students.shift()
console.log(New3) //abhi
console.log(students)
//include()
let New4 = students.includes("manish")
console.log(New4)// true
//console.log(students)
//join()
let New5 = students.join(" _ ")
console.log(New5)  // manish _ nikhil _ shubham _ sarthak _ sai
//console.log(students)
//indexOf()
let New6 = students.indexOf("shubham")
console.log(New6) //2
let New7 = students.indexOf("Shubham")
console.log(New7) //-1