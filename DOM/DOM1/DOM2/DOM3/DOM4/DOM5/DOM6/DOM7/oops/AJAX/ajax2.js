//promises example
// //program 1
// let Pro1 = new Promise(function (resolve, reject) {
//     let arr = [11, 22, 33, 44]
//     if (arr.length > 5) {
//         resolve({ firstname: 'Manasi', lastname: 'Aher' })
//     }
//     else {
//         reject({ firstname: 'Manish', lastname: 'Aher' })  //Aher
//     }
// })
// Pro1.then(function (a) {   // a ==> object
//     console.log(a.firstname)
// }).catch(function (b) {
//     console.log(b.lastname)
// }).finally(function () {
//     console.log('Always Exicute!')
// })
// //Aher
// //Always Exicute!

// //program 2
// let Pro2 = new Promise(function (resolve, reject) {
//     let arr = [11, 22, 33, 44, 55, 66, 77]
//     if (arr.length > 5) {
//         resolve({ firstname: 'Manasi', lastname: 'Aher' })  //Manasi
//     }
//     else {
//         reject({ firstname: 'Manish', lastname: 'Aher' })
//     }
// })
// Pro2.then(function ({ firstname, lastname }) {
//     console.log(firstname)
//     return lastname
// }).then(function (str) {  // 2nd then exicute when 1st then exicute & return lastname ==> Aher
//     console.log(str)
// })
//     .catch(function ({ firstname, lastname }) {
//         console.log(firstname)
//         console.log(lastname)
//     })
//     .finally(function () {
//         console.log('Always Exicute!')
//     }) //Always Exicute!

// //program 3
// let Pro3 = new Promise(function (resolve, reject) {
//     let rollNo = [22, 33, 44, 55]
//     if (rollNo.length > 5) {
//         resolve({ studname: 'Kajal', schname: 'Adarsh school' })
//     }
//     else {
//         reject({ studname: 'Nikhil', schname: 'D.G.saraf school' }) // Nikhil  // D.G.saraf school
//     }
// })
// Pro3.then(function({studname,schname}){
//     console.log(studname)
//     return schname
// }).then(function(str){
//     console.log(str)
// })
// .catch(function({studname,schname}){
//     console.log(studname)
//     console.log(schname)
// })
// .finally(function(){
//     console.log('Always Exicute!')
// })
// Nikhil
// D.G.saraf school
//Always Exicute!

//program 4
let Pro4 = new Promise(function(resolve,reject){
    let text = 'abcdefghijk'
    if(text.length > 6){
        resolve({coment:'greater than 6'})
    }
    else{
        reject({coment:'less than 6'})
    }
})
Pro4.then(function(str){
    console.log(str)
    return 'long text'
}).then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
    console.log('short text')
})
//output ==>
// { coment: 'greater than 6' }
// long text