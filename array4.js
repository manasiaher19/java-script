
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
//let students = ["manish","nikhil","shubham","sarthak","sai"]
// console.log(students[0])
// console.log(students.length)
// for(i=0;i<students.length;i++){
//     console.log(i)
//     console.log(students[i])
// }
//push()
// let New = students.push("abhi")
// console.log(New) // 6
// console.log(students)
// //pop()
// let New1 = students.pop()
// console.log(New1) //abhi
// console.log(students)
// //unshift()
// let New2 = students.unshift("abhi")
// console.log(New2) //6
// console.log(students)
// //shift()
// let New3 =students.shift()
// console.log(New3) //abhi
// console.log(students)
// //include()
// let New4 = students.includes("manish")
// console.log(New4)// true
// //console.log(students)
// //join()
// let New5 = students.join(" _ ")
// console.log(New5)  // manish _ nikhil _ shubham _ sarthak _ sai
// //console.log(students)
// //indexOf()
// let New6 = students.indexOf("shubham")
// console.log(New6) //2
// let New7 = students.indexOf("Shubham")
// console.log(New7) //-1

//new methode
// map() ==> return Array
// filter() ==> if u want to choose betw Array(like 5 out of 10)
// reduce() ==> accumulator is always 0
// forEach() ==> perform operation (print) with every array element 
// find() ==> it gives first true element from left side of array 
// findIndex() ==> it gives first true index from left side of array
//some()==> if elemment present in array as per condition then its true otherwise false , output is in boolean
//every()==> if condition true foe every element then o/p is true if not true for every element then o/p is false
//slice()==> break the array 
//splice()==> delete array element & also add new element
//flat()==>create one combine array
//at()==> print element present at perticular index

//program 
//map()
// let Years = [1999, 1998, 1997, 1996, 1995]
// let Q = Years.map(function (el, index, arr) {
//     return 2023 - el
// })
// console.log(Q)

// //program  (map)
// let No = [50 , 51 , 52 , 53 , 54 ]
// let Q1 = No.map(function(el,index,arr){
//   return el % 2
// })
// console.log(Q1)

//=======================================================================
//filter()
//program 1
// let Num = [22, 55, 66, 44, 77]
// let Q2 = Num.filter(function (el, index, arr) {
//   return el < 50
// })
// console.log(Q2) // 22 44

//program 2
// let Num1 = [30, 40, 50, 60]
// let Q3 = Num1.filter(function (el, index, arr) {
//   return el != 30
// })
// console.log(Q3)

// //program 3
// let N = ["m", "a", "n"]
// let Q4 = N.filter(function (el, index, arr) {
//   return el != "m"
// })
// console.log(Q4) // ['a','n']

//=================================================================
//reduce()
//program 1
//accumulator is always 0
// let Num = [40 , 50 ,60 ] //40+50+60 
// let Q5 = Num.reduce(function(acc,el,index,arr){
//   return acc + el
// //        0  +  40 ==> 40
// //      
// //
// },0)
// console.log(Q5) //150

// //program 2
// let Num1 = [ 40 , 30 ,20]//40-30-20
// let Q6 = Num1.reduce(function(acc,el,index,arr){
// return acc - el
// //      0  -  40  ==> -40
// //     -40  - 30  ==> -70
// //     -70  - 20 ==> -90
// },0)
// console.log(Q6) //-90

//====================================================================================
//forEach()
//program 1
// let City = ["pune", "mumbai", "nashik", "dhule"]
// let Q7 = City.forEach(function (el, index, arr) {
//   console.log("WelCome  " + el)
// })
// console.log(Q7)

//program 2
//             0          1        2        3         
// let Names = ["manasi", "manji", "mayuri", "snehal"]
// let S = Names.forEach(function (el, index, arr) {
//   console.log("Hey " + el)
// })
// console.log(S)


//program 3
// let Nums = [10, 20, 30, 40]
// let S1 = Nums.forEach(function (el, index, arr) {
//   console.log("Hey " + el)
// })
// console.log(S1)

//=================================================================================
//find()
//program 1
// let N = [50, 60, 30, 20]
// let N1 = N.find(function (el, index, arr) {
//   return el > 50
// })
// console.log(N1)

// //program 2
// let Num = [20, 30, 40, 50]
// let N2 = Num.find(function (el, index, arr) {
//   return el < 50
// })
// console.log(N2)

//==================================================================================
//findIndex()
//program 1
let Num = [20, 30, 40, 50]
let N2 = Num.findIndex(function (el, index, arr) {
  return el > 40
})
console.log(N2) //3

//program 2
let Num1 = [12, 13, 14, 15, 16]
let N3 = Num1.findIndex(function (el, index, arr) {
  return el > 14
})
console.log(N3)