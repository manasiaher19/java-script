//break
//for loop with break
//break ==> to come outside of loop

//program 1
//1 - 5 =>3
// for(let i=1 ; i<= 5;i++){
//     if(i==3){
//         break
//     }
//     console.log(i) // 1 2
// }

//if we use print statement after for loop
// for(let i=1 ; i<= 5;i++){ //i=1  1<=5 3 
//     console.log(i) // 1 2 3
//     if(i==3){ //1==3 
//         break
//     }

// }

//program 2
// 1-30 ==> 20
// for (let i = 1; i <= 30; i++) {
//     if (i == 20) {
//         break
//     }
//     console.log(i)
// }

//program 3
//10-5 ==> 8
// for(let i=10; i>=5;i--){
//     if(i==8){
//         break
//     }
//     console.log(i)
// }

//==============================================================
//continue
//for loop with continue statement
//continue ==> perticular condition escape

//program 1
//1- 10 => 5(skip)
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue
//     }
//     console.log(i)
// }

//if we use print statement after for loop

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
//     if (i == 5) {
//         continue
//     }
// }

//program 2
//20 - 10 ==>15
// for (let i = 20; i >= 10; i--) {
//     if (i == 15) {
//         continue
//     }
//     console.log(i)
// }

//************************************************************************************

//while with break statement 

//program
// let i=1
// while(i<=5){
//     console.log(i)
//     i++
// }

//program 1 
//1-5 => 3 break
// let j=1
// while(j<=5){
//     console.log(j)
//     if(j==3){
//         break
//     }
//     //console.log(j)
//     j++
// } // 1 2

// //if we use print statement after while loop
// let j=1
// while(j<=5){
//     console.log(j) 
//     if(j==3){
//         break
//     }
//     j++
// } // 1 2 3

//program 2
// 30-10 ==> 15
// let i = 30
// while (i >= 10) {
//     if (i == 15) {
//         break
//     }
//     console.log(i)
//     i--
// }

//===============================================
// while with continue
//program 1
//1-5 ==>3(skip)

// let i = 1
// while(i<=5){
//     if(i==3){
//         continue
//     }
//     console.log(i)
//     i++
// } // 1 2 infinity

//proper way
//0-5 => 3(skip)
// let i = 0
// while (i <= 5) {
//     if (i == 3) {
//         i++
//         continue
//     }
//     console.log(i)
//     i++
// }

//program
//1-5 ==> >3 (skip)
let j = 1
while (j <= 5) {  //1<=5  2<=5  3<=5  4<=5  5<=5  6<=5
    if (j > 3) {   //1>3 2>3  3>3 4>3  5>3
        j++ //5  6
        continue
    }
    console.log(j)  //1  2  3
    j++ //2  3  4
}