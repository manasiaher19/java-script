//Async to Sync by using Promise

// //program 1

// function UserCreated() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('user created')
//         }, 3000)
//     })
// }
// function GetId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('get id')
//         }, 2000)
//     })
// }
// function GetInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('get info')
//         }, 1000)
//     })
// }
// UserCreated().then(function(str){
//     console.log(str)
//     return GetId()
// }).then(function(str){
//     console.log(str)
//     return GetInfo()
// }).then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log('Fail!')
// })
// .finally(function(){
//     console.log('Hello')
// })
// // user created
// // user id
// // user info
// //Hello

//program 2
function additionA(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
           resolve('A is called')
        },3000)
    })
}
function additionB(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
           resolve('B is called')
        },2000)
    })
}
function additionC(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
           resolve('C is called')
        },1000)
    })
}
additionA().then(function(str){
    console.log(str)
    return additionB()
}).then(function(str){
    console.log(str)
    return additionC()
}).then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log('Byeee!')
})
// A is called
// B is called
// C is called
// Byeee!