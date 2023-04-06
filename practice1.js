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

// //OR
// let rollNo = [20, 21, 22, 23, 24, 25]
// let A = rollNo.map(function(el,index,arr){
//     return 5+el
// })
// console.log(A)
//==========================================================================================
//========================================================================================

//object ==> object stores value by key & values paires
// let Manasi = {
//     fname:"manasi",
//     lname:"aher",
//     age:23,
//     skill:["javascript","java"]
// } 
// console.log(Manasi)
//methodes: CRUD => create,retrive,update,delete
//dot notation  /  bracket notation
// //create:
// Manasi.addr=("sangamner")
// console.log(Manasi)

// Manasi["dist"]=("A.nagar")
// console.log(Manasi)

// //retrive
// console.log(Manasi.fname)  //manasi
// console.log(Manasi["age"]) //23

// //update
// Manasi.addr=("pune")
// console.log(Manasi)

// Manasi["age"]=(20)
// console.log(Manasi)

// //delete
// delete Manasi.dist
// console.log(Manasi)

// delete Manasi["addr"]
// console.log(Manasi)

//dublicate key 
let Manasi = {
    fname:"manasi",
    lname:"aher",
    age:23,
    age:40,
    skill:["javascript","java"]
}
console.log(Manasi)
//age : 40

// //for loop
// for(let k in Manasi){
//     console.log(k)
// }

// for(let k in Manasi){
//     console.log(Manasi[k])
// }

// for(let k in Manasi){
//     console.log(k,Manasi[k])
// }

//2nd way of for loop 
for(let k of Object.keys(Manasi)){
    console.log(k)
}

for(let v of Object.values(Manasi)){
    console.log(v)
}

for(let [k,v]of Object.entries(Manasi)){
    console.log(k,v)
}