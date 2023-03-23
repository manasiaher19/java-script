
// //array methods
// //push()
// let rollNo = [22, 33, 44, 55, 66]
// rollNo.push(12)
// console.log(rollNo)  //[ 22, 33, 44, 55, 66, 12 ]

// //pop
// let Student = ["manasi", "nikhil", "manish", "sai"]
// Student.pop()
// console.log(Student)  //[ 'manasi', 'nikhil', 'manish' ]

// //unshift()
// let Student1 = ["manasi", "nikhil", "manish", "sai"]
// Student.unshift("Aditi")
// console.log(Student)         //[ 'Aditi', 'manasi', 'nikhil', 'manish' ]

// //shift()
// let rollno = [22, 33, 44, 55, 66]
// rollno.shift()
// console.log(rollno) //[ 33, 44, 55, 66 ]

// //indexOf()
// let Names =["Aditi","manjusha","diksha"]
// let index = Names.indexOf("diksha")
// console.log(index) //2
// let Index = Names.indexOf("mayuri")
// console.log(Index) //-1

// //includes()
// let car = ["maruti","suzuki","zeep"]
// let ans = car.includes("maruti")
// console.log(ans) //true
// let Ans =car.includes("mahindra")
// console.log(Ans) //false

// //join()
// let info = ["Manasi","aher","19"]
// let J =info.join("_")
// console.log(J)    //Manasi_aher_19

//==============================================================================================

//map()
//Add 5 in each element
// let Add =[55,56,57,58]
// let Ans = Add.map(function(el,index,arr){
//     return el + 5
// })
// console.log(Ans)      //[ 60, 61, 62, 63 ]

// //by using for  Add 5 in each element
// let Add = [55, 56, 57, 58]
// let Sum = []
// for (let i = 0; i < Add.length; i++) {
//     //console.log(Add[i]+5)
//     let Sum1 = Add[i] + 5
//     Sum.push(Sum1)
// }
// console.log(Sum)    //[ 60, 61, 62, 63 ]
//-----------------------------------------------------------------
// //filter()
// //print less than 40 nos
// let No = [55, 40, 66, 20, 32, 30]
// let New = No.filter(function (el, index, arr) {
//     return el < 40
// })
// console.log(New) //[ 20, 32, 30 ]

//by using for  print less than 40 nos
// let No = [55, 40, 66, 20, 32, 30]
// let lessthan=[]
// for(let i=0;i<No.length;i++){
//     if(No[i]<40){
//        lessthan.push(No[i])
//     }
// }
// console.log(lessthan)    //[ 20, 32, 30 ]
//-----------------------------------------------------------------------------------
//reduce()
//accamulator=0
//print total of elements
// let num = [22, 33, 44, 55]
// let Total = num.reduce(function (acc, el, index, arr) {
//     return acc + el
// })
// console.log(Total) //154

//by using for loop print total of elements
// let num = [22, 33, 44, 55]
// let Total = 0
// for(let i=0;i<num.length;i++){
//      Total=Total+num[i]
// }
// console.log(Total)  //154
//----------------------------------------------------------------------------------------------
//forEach()
//print welcome (cityname)
// let city = ["pune", "mumbai", "nagpur", "nagar"]
// let Output = city.forEach(function (el, index, arr) {
//     console.log("Welcome " + el)
// })
// console.log(Output) 

// by using for loop print welcome (cityname)
// let city = ["pune", "mumbai", "nagpur", "nagar"]
// for(let i =0;i<city.length;i++){
//     console.log("Welcome "+city[i])
// }
//------------------------------------------------------------------------------------
//find() 
//greater than 40
// let no = [12, 44, 55, 13]
// let G = no.find(function(el){
//     return el > 40
// })
// console.log(G) //44  ===> because it gives first true value from left side
//---------------------------------------------------------------------------------------------
//findIndex()
//find less than 30
// let num = [20, 22, 12, 11]
// let lessthan = num.findIndex(function(el){
//     return el <30
// })
// console.log(lessthan) //0  because it gives first true index from left side
//--------------------------------------------------------------------------
//some()
//greater than 30
// let A = [20, 30, 40, 50]
// let greater = A.some(function (el) {
//     return el > 30
// })
// console.log(greater) //true ==> if condition is true for some element then o/p is  true otherwise false

// //less than 20
// let B = [40, 44, 50, 20]
// let lessthan = B.some(function (el) {
//     return el < 20
// })
// console.log(lessthan) //false
//-----------------------------------------------------------------------------------------------
//every()
// let Ele = [ 100,200,300,400]
// let E = Ele.every(function(el){
//     return el >300
// })
// console.log(E) //false ==> because condition must be true with every element then o/p true otherwise false

// let N = [1000,100,2000,200]
// let N1 = N.every(function(el){
//     return el > 10
// })
// console.log(N1) //true
//------------------------------------------------------------------------------------------
//slice()
// //break the ele with the help of start & end position
// //       0   1   2   3    4   5
// let R = [90, 80, 70, 60 , 50 ,40]
// //       -6  -5  -4  -3   -2  -1
// let R1 = R.slice(1,4) //[80, 70, 60 ]
// console.log(R1)

// console.log(R.slice(2)) //[70, 60 , 50 ,40]
// console.log(R.slice(3,2)) //[]
// console.log(R.slice(-2,1)) //[]
// console.log(R.slice(1,-2))  //[80, 70, 60 ]
//-----------------------------------------------------------------------------------------------
// //splice()
//delete array elements and also add new elements 
// //        0  1   2   3   4   5  
// let M = [10, 20, 30, 40, 50, 60]
// //       -6  -5  -4  -3  -2  -1

// let M1 = M.splice(1, 2, 100, 100)  //[20,30]
// console.log(M1)
// console.log(M)    //[ 10, 100, 100, 40, 50, 60 ]

// console.log(M.splice(-3, 3, 1, 1, 1)) //[40,50,60]
// console.log(M)   //[ 10, 100, 100, 1, 1, 1 ]
//--------------------------------------------------------------------------
//flat()
// //group of array combine together / create one long array
// //            0            1          2
// //        0   1   2     0    1    0    1   2
// let A = [[10, 20, 30], [40, 50], [60, 70, 80]]
// console.log(A.flat())   //[10,20,30,40,50,60,70,80]

// //print 70
// console.log(A[2][1]) //70
//---------------------------------------------------------------------------------------------
// //at()
// //through index gives which elem is present/print ele
// let Char = ["A","B","C","D"]
// console.log(Char.at(2))  //C
// console.log(Char.at(4))  //undefined
//--------------------------------------------------------------------------------------------------
//fill()
// //with fill we can replace element
// //            0        1         2
// let Array =["Manasi","manish","aditi"]
// let A = Array.fill("nikhil",2)
// console.log(A)  //[ 'Manasi', 'manish', 'nikhil' ]
//---------------------------------------------------------------------
// //concat()
// //mix array
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// let C = a.concat(b)
// console.log(C)     //[ 1, 2, 3, 4, 5, 6 ]

// let X = ["M", "A", "N"]
// let Y = [10, 20, 30]
// let Z = ["j", "k"]
// console.log(X.concat(Y).concat(Z)) //['M', 'A', 'N', 10, 20,  30,  'j', 'k' ]
//----------------------------------------------------------------------------------------------
//reverse()
//reverse array
let R = [100, 90, 80, 70, 60] 
console.log(R.reverse())    //[ 60, 70, 80, 90, 100 ]