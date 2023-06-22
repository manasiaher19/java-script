//1.Sync code
//2.Async Code

//sync code

// function additionA(){
//     console.log('A is exicuted')
// }

// function additionB(){
//     console.log('B is exicuted')
// }
// additionA()
// additionB()
// // A is exicuted
// // B is exicuted
// additionB()
// additionA()
// // B is exicuted  ====> sync code
// // A is exicuted

//Async code

// function additionC(){
//    setTimeout(function(){
//     console.log('C is exicuted')
//    },3000)
// }

// function additionD(){
//     setTimeout(function(){
//         console.log('D is exicuted')
//     },4000)
// }
// // additionC()
// // additionD()
// //C is exicuted
// // D is exicuted

// additionD()
// additionC()
// //C is exicuted
// // D is exicuted

// usercreate -------> id --------- id info

// function getInfo(){
//     setTimeout(function(){
//         console.log('user created')
//     },5000)
//     setTimeout(function(){
//         console.log('id created')
//     },4000)
//     setTimeout(function(){
//         console.log('user info')
//     },3000)
// }
// getInfo()
// user info
// id created
// user created

// function Myself(){
//     setTimeout(function(){
//         console.log('Manasi')
//     },5000)
//     setTimeout(function(){
//         console.log('Popat')
//     },4000)
//     setTimeout(function(){
//         console.log('Aher')
//     },3000)
// }
// Myself()
// Aher
// Popat
// Manasi

//Async in natural sync
function mySelf(){
    setTimeout(function(){
      console.log('Manasi')
      setTimeout(function(){
        console.log('Popat')
        setTimeout(function(){
            console.log('Aher')
        },3000)
      },4000)
    },5000)
}
mySelf()
// Manasi
// Popat
// Aher













// //Async --- in natural Sync 
// function getinfo(){
//     setTimeout(function(){
//         console.log('user created') 
//         setTimeout(function(){
//             console.log('id created')
//             setTimeout(function(){
//                 console.log('user info')
//             },3000)
//         },4000)
//     },5000)
// }
// getinfo()
// user created
// id created
// user info