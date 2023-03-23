//Array

// let M = []        // blank array
// console.log(typeof M)

// let M1 = [10, 20, 30]  // number array 
// //console.log(M1)
// console.log(typeof M1) // M1 is object

// let M2 = ["mansi", "mayuri", "diksha"] //string array
// console.log(M2)

//=======================================================================
//1
//            0   1   2   3   4
// let Number = [10, 20, 30, 40, 50]
// console.log(Number[0])
// //console.log(Number[4])
// console.log(Number[Number.length-1])
// console.log(Number.length)
// for(let i = 0;i<Number.length;i++){
//     console.log(i)
//     console.log(Number[i])
// }

//2 forward
// //            0   1   2   3   4   5
// let rollNo = [20, 21, 22, 23, 24, 25]
// for(let i=0;i<rollNo.length;i++){
//     //console.log(i)
//     console.log(rollNo[i])
// }

//3 reverse array
//            0   1   2   3   4   5
// let rollNo = [20, 21, 22, 23, 24, 25] 
// for(let i=rollNo.length-1;i>=0;i--){
//     console.log(rollNo[i])
// }

//4 => add 5 in each
// let rollNo = [20, 21, 22, 23, 24, 25]
// for(let i=0;i<rollNo.length;i++){
//     console.log(rollNo[i]+5)
// }

//5 ==> add 5 in each and o/p will be in array 
// let rollNo = [20, 21, 22, 23, 24, 25]
// let add =[]
// for(let i=0;i<rollNo.length;i++){
//     //console.log(i)
//     console.log(rollNo[i]+5)
//     let addition = rollNo[i]+5
//     add.push(addition)
// }
// console.log(add)

//OR
let rollNo = [20, 21, 22, 23, 24, 25]
let A = rollNo.map(function(el,index,arr){
    return 5+el
})
console.log(A)




