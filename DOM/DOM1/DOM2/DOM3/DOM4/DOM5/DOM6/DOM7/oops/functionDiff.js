//Actual difference betn function expression & Arrow function 
//1.function declaration
//2.fun expression
//3.arrow fun

// function display(){
//     console.log('Hello')
// }
// display()

// let display1 = function(){
//     console.log('Hey')
// }

// let display2=()=>{
//     console.log('how are you?')
// }

// //In javascript everything is object.
// //parent object ==> window

// let a=10 //block 
// console.log(a) //10
// console.log(window.a) //undefined

// var a1 = 20 //global
// console.log(a1) //20
// console.log(window.a1) //20

// //program 1
// let Person = {
//     firstname: 'Manasi',
//     lastname: 'Aher',
//     age: 23,
//     info: function () {
//         console.log(this == Person) //true
//         console.log(this.firstname, this.lastname) //Manasi Aher

//         let greeting = function () {
//             console.log(this == Window) //false
//             console.log(this.firstname + this.lastname) //Nan
//             console.log(this.firstname, this.lastname) // undefined undefined
//         }
//         greeting()
//     }
// }
// Person.info()

// //program 2
// let Person1 = {
//     firstname: 'Nikhil',
//     lastname: 'Aher',
//     age: 21,
//     init: function () {
//         console.log(this==Person1) //true
//         console.log(this.firstname, this.lastname) //Nikhil Aher

//         let greeting = function () {
//             console.log(this==window) //false
//             console.log(this.firstname + this.lastname) // undefined + undefined == NaN 
//         }
//         greeting()
//     }
// }
// Person1.init()

// //program 3
// var firstName = 'Aditi'
// var lastName = 'Rao'

// let Person1 = {
//     firstname: 'Nikhil',
//     lastname: 'Aher',
//     age: 21,
//     init: function () {
//         console.log(this == Person1) //true
//         console.log(this.firstname, this.lastname) //Nikhil Aher

//         let greeting = function () {
//             console.log(this == window) //true
//             console.log(this.firstName , this.lastName) // Aditi Rao 
//         }
//         greeting()
//     }
// }
// Person1.init()

//program 4
//solution ==> arrow fun

// let Person3 = {
//     firstName: 'Rashi',
//     lastName: 'Jadhav',
//     age: 15,
//     init: function () {
//         console.log(this == Person3) //true
//         console.log(this.firstName, this.lastName) //Rashi Jadhav

//         greeting = () => {
//             console.log(this == Person3) //true
//             console.log(this.firstName, this.lastName) //Rashi Jadhav == because,
//             //when we use arrow fun = it gets parent's parent value (e.g Person3(parent)=>init(parent)=>arrow fun)
//         }
//         greeting()
//     }
// }
// Person3.init() //Rashi Jadhav

//program 5
//no window properties

let Person4 = {
    firstName: 'Rashi',
    lastName: 'Jadhav',
    age: 15,
    init: () => {
        console.log(this == Person4) //false
        console.log(this.firstName + this.lastName)  //NaN

        greeting = () => {
            console.log(this == Person4) //false
            console.log(this.firstName + this.lastName) //Nan  == because,
            //when we use arrow fun = it gets parent's parent value (e.g Person3(parent)=>init(parent)=>arrow fun)
        }
        greeting()
    }
}
Person4.init() //NaN


// // program 6
//window
var firstName = 'Manish'
var lastName = 'Aher'

let Person5= {
    firstName: 'Rashi',
    lastName: 'Jadhav',
    age: 15,
    init: () => {
        console.log(this == Person4) //false
        console.log(this.firstName + this.lastName)  //ManishAher

        greeting = () => {
            console.log(this == Person4) //false
            console.log(this.firstName + this.lastName) //ManishAher  == because,
            //when we use arrow fun = it gets parent's parent value (e.g Person3(parent)=>init(parent)=>arrow fun)
        }
        greeting()
    }
}
Person5.init() //NaN