//map method  ==> map return array

//by using  for
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

//program 1
// by using map
// let years = [1989,1990,1991,1992]
// let q1 = years.map(function(el,index,arr){
//   //console.log(el,index,arr)
//     return 2023-el
// })
// console.log(q1)

//program 2
// let Y = [2010,2011,2012,2013]
// let a = Y.map(function(el,index,arr){
//     console.log(el,index,arr)
//     return 2023-el
// })
// console.log(a)

// program 3 (add 3 in every element...11+3)
// let a = [11, 22, 33, 44, 55, 66]
// let q2 = a.map(function (el, index, arr) {
//     //console.log(el, index, arr)
//     return el + 3
// })
// console.log(q2)

// program 4 (every element multiply with 3)
// let a = [100, 200, 300, 400]
// let q3 = a.map(function (el, index, arr) {
//     //console.log(el,index,arr)
//     return el * 3
// })
// console.log(q3)

//program4
//1 t0 10 (2's table)
// let table = [1,2,3,4,5,6,7,8,9,10]
// let Ans = table.map(function(el){
//     //console.log(el)
//     return el * 2
// })
// console.log(Ans)

//program 5
//
// let table1 = [1,2,3,4,5,6,7,8,9,10]
// let Ans1 = table1.map(function(el){
//     //console.log(el)
//     return el %  2
// })
// console.log(Ans1)

//======================================================================
//filter ==> 
//program 
//print above 50 using for loop
// let n = [44 ,55,77,66,88]
// let above50 = []
// for(i=0;i<n.length;i++){
//     // console.log(i)
//     // console.log(n[i])
//     if(n[i]>50){
//         above50.push(n[i])
//     }
// }
// console.log(above50)

//program 1
// using filter
//print above 30 using filter
// let no = [11,22,33,44,55,66]  //33,44,55,66
// let above30 = no.filter(function(el,index,arr){
// //console.log(el,index,arr)
// return el > 30
// })
// console.log(above30)

//program 2 
//above 50 using filter
// let n = [44,55,77,66,88]
// let q = n.filter(function(el){
// //console.log(el,index,arr)
// return el > 50
// })
// console.log(q)


// program 3
//print equal to 20
// let A = [10,20,30,40,20,30,50,60,70,80] //20,20
// let Q = A.filter(function(el,index,arr){
//     // console.log(el,index,arr)
//     return el == 20 

// })
// console.log(Q)

//program 4
//print not equal to 30
// let A = [10,20,30,40,20,30,50,60] // 10,20,40,20,50,60
// let Q = A.filter(function(el,index,arr){
//     //console.log(el,index,arr)
//     return el != 30 

// })
// console.log(Q)


// // program 
// //% 2
// let n = [44,55,66,33,44,55,66,77,88,100]
// let Q = n.filter(function (el) {
//     //console.log(el)
//     return el % 2 == 0 //44,66,44,66,88,100
// })
// console.log(Q)

//============================================================
//reduce
//program 
// using for
// let num = [40 ,50,60] //40+50+60 ==> 150
// let sum = 0
// for(i=0;i<num.length;i++){
//     // console.log(i)
//     // console.log(num[i])
//     sum = sum + num[i]
//    //      0  +  40   ==> 40
//    //      40 +  50   ==> 90
//    //      90 +  60   ==> 150
// }
// console.log(sum)

//program
// using reduce
// accumulator value is 0
// let num = [40 ,50,60]
// let sum = num.reduce(function(acc,el,index,arr){
//     return acc + el
//   //        0  + 40  ==> 40   ****
//   //        40  + 50  ==> 90      
// },0)
// console.log(sum)

// // program 1
// //using reduce
// let n = [40 ,50,60 ]
// let q = num.reduce(function(acc,el,index,arr){
//     return acc + el

// },5)
//console.log(q)

//program 1
//using reduce
// let no = [10 , 20 , 30] 
// let A = no.reduce(function(acc,el,index,arr){
//          return acc * el
// },0) //0
// console.log(A)

//======================================================================
//forEach()

//program 1
//using for loop print welcome(city)

// let city = ["nashik","pune","nagar"]
// for(let i =0;i<city.length;i++){
//     //console.log(i)
//     console.log("Welcome  "+ city[i])
// }

// let cities = ["nashik", "pune", "nagar"]
// let Q = cities.forEach(function (el, index, arr) {
//     //console.log(el)
//     console.log("Welcome " + el)
// })
// console.log(Q)

//  let N = [10 , 20 , 30 ]
//  let sum = N.forEach(function(el,index,arr){
//     console.log(3 + el)
//  })
//  console.log(sum)

//  let No = [10 , 20 , 30 ]
//  let A = No.forEach(function(el,index,arr){
//     console.log(30 - el)
//  })
//  console.log(A)

//===================================================================
//find()  ===> gets first true value from left side
//program 1
//greater than 40 using find
// let B = [12 ,33,44 ,11,50]
// let C = B.find(function(el){
//       return el > 40
// })
// console.log(C)

//program 2
// let D = [50,60,70,80]
// let ANS = D.find(function(el){
//     return el > 30
// })
// console.log(ANS)

//============================================================================
//findIndex() ====> gets first true index from left side
//program 1
// let B = [12 ,33,44,11]
// let C = B.findIndex(function(el){
//       return el > 40
// })
// console.log(C)


//program 2
// let U = [50, 60, 70, 80]
// let X = U.findIndex(function (el) {
//     return el > 30
// })
// console.log(X)

//==================================================================
//some() ==> output is boolean (T/F)
//program 1
// let m = [33,2,66,22,34,66,77]
// let q1= m.some(function(el,index,arr){
//     return el > 30
// })
// console.log(q1)

// //program2
// let M =[50,60,70,80]
// let q2 = M.some(function(el,index,arr){
//    return el == 100
// })
// console.log(q2)

//===========================================================
//every() ===> if condition true for every element o/p is true if not then o/p is false
//program 1
// let A = [33,20,66,22,34,66,77]
// let Q= A.every(function(el,index,arr){
//      return el > 10
// })
// console.log(Q)

//program 2
// let A = [33,20,66,22,34,66,77]
// let Q = A.every(function(el,index,arr){
//      return el < 100
// })
// console.log(Q)

//==========================================================================================
//slice() ==> break the array .....left => right
//program 1
//            0   1  2   3   4    5
// let array = [11, 22, 33, 44, 55, 66]
// let Finalarray = array.slice(2,5)//33,44,55
// console.log(Finalarray)

//program 2
// //          0   1   2   3   4   5   6   7
// let arr = [11, 22, 33, 44, 55, 66, 77, 88]
// let a1 = arr.slice(4,7) 
// console.log(a1)

//program 3
//          0   1   2   3   4   5   6   7
// let arr1 = [11, 22, 33, 44, 55, 66, 77, 88]
// let arr2 = arr1.slice(4,5)
// console.log(arr2)

//program 4
//           0    1    2    3    4    5    6     
// let X = [100, 200, 300, 400, 500, 600, 700]
// //       -7   -6    -5    -4  -3   -2  -1
// let Y = X.slice(2, -3)//[300 , 400]
// console.log(Y)

//program 5
// //        0  1    2   3  4   
// let S = [10, 20, 30, 40, 50]
// //       -3  -4  -3  -2  -1
// let D = S.slice(-1,2) //[]
// console.log(D)

// //program 6
// //        0  1    2   3  4   
// let S = [10, 20, 30, 40, 50]
// //       -3  -4  -3  -2  -1
// let D = S.slice(1,-1) //[20,30,40]
// console.log(D)

//===============================================================
//splice() ==> delete element & also add new elements

//program 1
//       0   1   2    3   4   5   
// let S1 = [10, 20, 30, 40, 50, 60]
// let D1 = S1.splice(1,2,100,200)
// console.log(D1)
// console.log(S1)

// //program 2
// //       0   1   2    3   4   5   
// let S2 = [10, 20, 30, 40, 50, 60]
// let D2 = S2.splice(1,2,100,200,300)
// console.log(D2)
// console.log(S2)

//program 3
//             0          1      2       3        4
// let names = ["manasi","mayuri","nidhi","sakshi","manji"]
// let N = names.splice(1,3,"diksha","janhavi","meher")
// console.log(N)
// console.log(names)

//=============================================================================

//flat() ===> one combine array

//program 1
//let rollNo = [[1, 2, 3], [22, 23, 24], [44, 46, 47]]
// let No = rollNo.flat()
// console.log(No)

// //program 2
// let Names = [["manasi", "diksha"], ["meher", "janhavi"], ["manji"]]
// let Allnames = Names.flat()
// console.log(Allnames)

// //program 3
// let DecimalN = [[22.1, 22.2, 22.3], [33.1]]
// let NO = DecimalN.flat()
// console.log(NO)

//=================================================================

//at() ===> print element present at  perticular index

//program
//          0  1   2   3   4   5 
// let Num = [11, 22, 33, 44, 55, 66]
// //console.log(Num.at(4))
// let F1 = Num.at(4)
// console.log(F1)

// //program 2
// //             0          1      2       3        4
//  let names = ["manasi","mayuri","nidhi","sakshi","manji"]
//  console.log(names.at(4))

//  //OR

//  let F2 = names.at(3)
//  console.log(F2)

//program 3
// let V = [22.1 , 33.1 ,44.1 ,55.1 ,66.1]
// console.log(V.at(2)) 

// //OR

// let M = V.at(3)
// console.log(M)