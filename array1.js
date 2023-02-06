//METHODS

// push()
// action =add to the element 
// return =new element of array
//              0      1        2          3          4
//let cities = ["pune","mumbai","banglore","kolkata","nashik"]
// let q1=cities.push("wardha")
// console.log(q1)
// console.log(cities)

// unshift()
// action =add the element at first 
// return -=new length of array
// let q2=cities.unshift("jaipur")
// console.log(q2)
// console.log(cities)

// pop()
// action =removes the last element 
// return = returns the same lement 
// let fruits = ["apple","mango","banana","grapes"]
// let q3 = fruits.pop()
// console.log(q3)
// console.log(fruits)

// shift()
// action =removes the first element 
// return = firstElement
// let fruits = ["apple","mango","banana","grapes"]
// let q4 = fruits.shift()
// console.log(q4)
// console.log(fruits)

// includes()
// let vegetables = ["cabbage","cauliflower","carrrot","potato"]
// let q5 = vegetables.includes('cabbage')
// console.log(q5)

// // join()
// let info = ["Manasi","Aher",99887766]
// console.log(info.join('-')) 
// console.log(info.join('@'))
// console.log(info.join('  '))

// // indexOf()
// //               0       1       2        3
// let  flowers = ["rose","lily","jasmine","tulip"]
// let q6 = flowers.indexOf('lily')
// let q7 = flowers.indexOf('tuli')
// console.log(q6)
// console.log(q7)

// //program 

// let birthYears = [1989, 1990, 1991, 1992]
// let ages = []
// for (i = 0; i < birthYears.length; i++) {
//     console.log(i)
//     console.log(birthYears[i])
//     // console.log(2023-birthYears[i])
//     let ag = 2023 - birthYears[i]
//     ages.push(ag)
// }
// console.log(ages)


//program
let numbers = [33, 44, 55, 66, 22, 33, 55]
let above40 = []
for (let i = 0; i < numbers.length; i++) {
    // console.log(i)
    // console.log (numbers(i))
    if (numbers[i] > 40) {
        above40.push(numbers[i])
    }
    console.log(above40)
}