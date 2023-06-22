//Difference between ==>let/var/const
// let x = 100
// console.log(x)//100

// x = 200
// console.log(x) //200
// console.log(x) //200
// //--------------------------------------------------------

// const y=500
// console.log(y) //500

// y=600
// console.log(y) //Assignment to constant variable.

// let a 
// console.log(a) //undefined
//========================================================================
//{}==>block
// let & constant ==> block scope

//let==>
// //problem 1  
// {
//     let a=20
//     //console.log(a) //20
// }
// console.log(a) //error = a is not defined

// //problem 2
// let y1 = 100
// {
//     let y1 = 500
//     console.log(y1) //500
// }
// console.log(y1)//100

// //problem 3
// let x1 = 100
// {
//     console.log(x1) //100
//     x1 = 500                  // x value update 
//     console.log(x1) //500
// }
// console.log(x1) //500

//problem 4
// let z1 = 200
// {
//     //console.log(z1) //error (hoisting) (Cannot access 'z1' before initialization)
//     let z1 = 300
//     console.log(z1) //300
// }
// console.log(z1) //200

//const==>
//problem 5
// {
//     const x = 200
// }
// console.log(x) //x is not defined

// let a 
// console.log(a) //undefined

// //problem 6
// const s = 200
// {
//     console.log(s) //200
//     // s = 300
//     // console.log(s) //Assignment to constant variable
// }
// console.log(s) //200

//var ==>
// //problem 7
// {
//     var c = 400
// }
// console.log(c) //400

//Let and const having block scope
//var dont have block scope
//var => function scope

// //problem 8
// var num = 100
// console.log(num) //100
// function add() {
//     var num = 200
//     console.log(num) //200
// }
// console.log(num)  //100
// add()
// console.log(num) //100
//sequ=
// 100
// 100
// 200
// 100


// //problem 9
// function init(){
//     var w = 300
//     console.log(w) //300
// }
// init() 
// console.log(w) //error = w is not defined

//progrm 
// var w = 300
// function init(){
//     var w = 300
//     console.log(w) //300
// }
// console.log(w) //300
// init() 

// //problem 10
// var n1 = 500
// console.log(n1) //500
// function display() {
//     n1 = 600        //update
//     console.log(n1) //600
// }
// console.log(n1) //500
// display()
// console.log(n1) //600 ==(updated value)

//sequ
//500
//500
//600 
//600
//=======================================================================
// program 1
// function addition() {
//     let a = 12
//     let b = 12
//     console.log(a + b)
// }
// addition() //24

// //prog 2
// function addition() {
//     console.log(a + b)
// }
// addition() //a is not defined

// //program 3
// function Mult(x, y) {
//     console.log(x * y)
// }
// Mult(12, 2) //24
//========================================
// //program 4
//lexical scope ==> declare fun inside function  

// function Addition() {
//     let x = 10
//     let y = 5
//     console.log(x + y) //15

//     function AdditionB() {
//         let s = 100
//         let t = 50
//         console.log(x + y) //15
//         console.log(s + t) //150

//         function AdditionC() {
//             let j = 10
//             let k = 10
//             console.log(s + t + j + k) //170
//             console.log(j + k) //20
//         }
//         AdditionC()
//     }
//     AdditionB()
// }
// Addition()
//outputs ==>
// 15
// 15
// 150
// 170
// 20
//===================================================================
// //program 
// //lexical scope
// function Mult1(){
//     let x =100
//     let y = 10 
//     console.log(x*y) //1000

//     function Print(){
//         console.log(x*y) //1000
//         console.log('Hello') //Hello

//         function Cal(){
//             let z=10
//             console.log('Multiplication') //Multiplication
//             //return (x*y*z)
//             console.log(x*y*z) //10000
//         }
//         Cal()
//         // let a = Cal()
//         // console.log(a)
//     }
//     Print()
// }
// Mult1()
//---------------------------------------------------------
// //program 5
// // global variable
// let a = 100
// let b = 200

// function display() {
//     // let a=10
//     // let b=100
//     console.log(a + b) //110

//     function display1() {
//         console.log(a + b) //110

//         function display2() {
//             let p = 50
//             let q = 50
//             console.log(p+q+a+b)  //(50+50+100+200)
//         }
//         display2()
//     }
//     display1()
// }
// display()

// //program 6

// let e = 10
// let f = 20

// function init() {
//     let a = 5
//     let b = 2
//     console.log(a + b) //7
//     console.log(e + f)  //30 => global varial

//     function init1() {
//         // let e = 900
//         // let f = 300
//         let p = 200
//         let q = 300
//         console.log(a + b + p + q) //507
//         console.log(a + b + e + f) //(5+2+900+300) = 1207

//         function init2() {
//             // let e = 5000
//             // let f = 100
//             console.log(e + f) //(5000+100 = 5100) (900+300=1200) (10+20 =30)
//         }
//         init2()
//     }
//     init1()
// }
// init()
//=================================================================
//program 7
// //closures ==>
// function Multiplication(x, y) {
//     console.log(x * y) //18
//     return x * y    //4  // 4
//     console.log("Hello")  // return should always in last

// }
// Multiplication(3, 6)
// let q = Multiplication(2,2) //4
// console.log(q) //4


//program
// function Multiplication(x, y) {
//     console.log(x * y) //18
//     //return x * y
//     console.log("Hello")  //Hello (return should always in last then only Hello print)

// }
// Multiplication(3, 6)
// // let q = Multiplication(3, 6)
// // console.log(q)


// //program 6 ()
// function Re() {
//     return function () {
//         console.log("Hello")
//     }
// }
// let a = Re()
// console.log(a) //[Function (anonymous)]
// a() //Hello

// // let a =function(){
// //     console.log("Hello")
// // }
// // a() //Hello

// //program 7
// function Qwerty() {
//     let x = 100
//     let y = 100
//     return function () {
//         console.log(x + y)
//     }
// }
// let b = Qwerty()
// console.log(b) //[Function (anonymous)]
// b() //200

// // let b= function () {
// //     console.log(x + y)
// // }
// // b() //200

// //program 8
// function Add() {
//     let x = 20
//     let y = 20
//     return [x, y]
// }
// // let c = Add()
// // console.log(c) //[20,20]

// let [c1,c2] = Add()
// console.log(c1,c2) //20 20

// //program 9
//  function Add1(){
//     let a = 10
//     let b = 100
//     return [a,b]
//  }
// //  let a1 = Add1()
// //  console.log(a1) //[10,100]

// let [a1,a2] = Add1()
// console.log(a1,a2) //10 100

//program 10

function add(){
    let b=2
    let c=5
    console.log(b+c) //7
    return function(){
        console.log(b+c)
        console.log('Hello')
    }
}
// add() //7
let sum = add()
console.log(sum) //function
sum() //7 Hello