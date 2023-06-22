// Important Topic
// //Promise ==> to solve problem of async to sync 
// //program 1
// let proOne = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 5
//     if (x == y) {
//         resolve('both are equal')
//     }
//     else {
//         reject('both are not equal')
//     }
// })
// proOne.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })
// //both are not equal

// //program  2
// let proTwo = new Promise(function (resolve, reject) {
//     let a = 100
//     let b = 100
//     if (a == b) {
//         resolve('a is equal to b')
//     }
//     else {
//         reject('a is not equal to b')
//     }
// })
// proTwo.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })
// //a is equal to b

// //program 3
// let pro3 = new Promise(function (resolve, reject) {
//     let x = 150
//     let y = 100
//     if (x == y) {
//         resolve([11, 22, 33, 44])
//     }
//     else {
//         reject([-11, -22, -33, -44])
//     }
// })
// pro3.then(function (arr) {   // arr ==> array
//     console.log(arr[2])
// }, function (arr) {
//     console.log(arr[2])
// })
// // output => -33

// //program 4
// let pro4 = new Promise(function (resolve, reject) {
//     let name = "Manasi"
//     if (name.length > 5) {
//         resolve('Long Name')
//     }
//     else {
//         reject('Short Name')
//     }
// })
// pro4.then(function (str) {   // str ==> string
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })
// // Long Name

// //program 5
// let pro5 = new Promise(function (resolve, reject) {
//     let name = "Yash"
//     if (name.length > 5) {
//         resolve('Long Name')
//     }
//     else {
//         reject('Short Name')
//     }
// })
// pro5.then(function (str) {
//     console.log(str)
// }).catch(function (str) {
//     console.log(str)
// }).finally(function () {
//     console.log('I Will always exixute')
// })
// //Short Name
// //I Will always exixute

// //.then()==> to consume promise
// //.catch()==> to reject fun
// //.finally()==> always exicute

//program 6
// let pro6 = new Promise(function (resolve, reject) {
//     let name1 = 'sai'
//     let name2 = 'sai'
//     if (name1 == name2) {
//         resolve('Both names are same')
//     }
//     else {
//         reject('Both names are not same')
//     }
// })
// pro6.then(function (n1) {
//     console.log(n1)
// }).catch(function (n2) {
//     console.log(n2)
// }).finally(function () {
//     console.log('Always exicute!')
// })
// Both names are same
// Always exicute!

//program 7
// let pro7 = new Promise(function (resolve, reject) {
//     let x = 200
//     let y = 400
//     if (x >= y) {
//         resolve('x is greater!')
//     }
//     else {
//         reject('y is greater!')
//     }
// })
// pro7.then(function (str) {
//     console.log(str)
// }).catch(function (str) {
//     console.log(str)
// })
//y is greater!

//program 8
let pro8 = new Promise(function (resolve, reject) {
    let x = 10000
    let y = 1500
    if (x >= y, y <= x) {
        resolve('X')
    }
    else {
        reject('Y')
    }
})
pro8.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})
// Y

//program 9
let pro9 = new Promise(function (resolve, reject) {
    let s = 100
    let t = 10
    if (s == t) {
        resolve('s is called')
    }
    else {
        reject('t is called')
    }
})
pro9.then(function (s) {
    console.log(s)
})
    .catch(function (t) {
        console.log(t)
    })
    .finally(function () {
        console.log('s & t')
    })
    //t is called
    //s & t