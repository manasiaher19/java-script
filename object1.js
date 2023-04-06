// let Array =[11,22,33,44]
// for(let i=0;i<Array.length;i++){
//     console.log(Array[i])
// }
//=============================================

// let Student = {             //Student => object
//     Name: "Sarthak",        //Name => key
//     Surname: "Aher",        //Sarthak/Aher ==> value
//     Age: 18,
//     Learning: ["dancing", "singing"]
// }

// //for loop for object
// //there are 2 way we can use for loop
// //one way

// //for key
// //syntax => for(let variableName in objectName){ console.log(variableName)}

// for (let key in Student) {
//     console.log(key)       //Name Surname Age Learning
// }

// //for value
// //by dot notation
// // for(let key in Student){
// //     console.log(Student.key) //undefined because loop does not support dot notation
// // }

// //by bracket notation
// for(let key in Student){
//     console.log(Student[key])
// }

// //for key & value
// for(let key in Student){
//     console.log(key,Student[key])
// }

// let Student = {             //Student => object
//     Name: "Sarthak",        //Name => key
//     Surname: "Aher",        //Sarthak/Aher ==> value
//     Age: 18,
//     Learning: ["dancing", "singing"]
// }

//second way
//for key
// for(let key of Object.keys(Student)){
//     console.log(key)
// }
// //for value
// for(let value of Object.values(Student)){
//     console.log(value)
// }
// //for key & value
// for(let [key,value] of object.entries(Student)){  //***************************
//     console.log(key,value)
// }

//================================================================
//example 2

// let Home = {
//     Name: "Aai",
//     Address: "Pune",
//     Members: 14,
//     Family: "Godse family"
// }

// //using for loop display key,value ,key & value
// //for key
// for(let key in Home){
//     console.log(key)
// }
// //for value
// for(let key in Home){
//     console.log(Home[key])
// }
// //for key & value
// for(let key in Home){
//     console.log(key,Home[key])
// }
//=============================================================================================

// let employee = {
//     firstName: "Mayur",
//     lastName: "Navale",
//     skills: ["js", "py", "java"],
//     salary: 20000,
//     family: {
//         father: "vinod",
//         mother: "kavita",
//         siblings: ["nayan", "karan", "sai"],
//         newFamily:{
//             wife:"rashi",
//             son:"rahul"
//         }
//     }
// }
// console.log(employee)
// //add new element at end in skill & print new element
// employee.skills.push("cy")
// console.log(employee.skills)
// console.log(employee.skills.length) // [ 'js', 'py', 'java', 'cy' ] 4

// //add new element at start in siblings & prient new length
// employee.family.siblings.unshift("maya")
// console.log(employee.family.siblings)
// console.log(employee.family.siblings.length) // [ 'maya', 'nayan', 'karan', 'sai' ] 4

//by using for loop print key & values in employee
// for(let key in employee){
//     console.log(key,employee[key])
// }

// //by using for loop print key & values in newFamily //***************************************** 
// for(let key in newfamily){
//     console.log(key,newfamily[key])
// } //error

// //print first sibling
// console.log(employee.family.siblings[0]) //maya

//print rashi
//console.log(employee.family.newFamily.wife) //rashi

// //update salary
// employee.salary=15000
// console.log(employee) 

// //delete last skill cy
// employee.skills.pop()
// console.log(employee.skills) //[ 'js', 'py', 'java' ]

//================================================================================================================

// let A =[] ==> Array
// let B ="" ==> string
// let c ={} ==> object

//================================================================================================
//example 3

// let car ={
//     Name:["maruti","suzuki","audi"],
//     Wheels:4,
//     color:["black","red","blue"],
//     owner:{
//         name:"Saii",
//         age:25,
//         address:"nashik",
//         education:{
//             degree:["bcs","mcs"]
//         }

//     }

// }
// //by using for loop print  key,value,key & value
// //key
// for(let k in car){
//     console.log(k)
// }
// //value
// for(let k in car){
//     console.log(car[k])
// }
// //both key & value
// for(let k in car){
//     console.log(k,car[k])
// }

//add jeep in name at end 
// car.Name.push("jeep") 
// console.log(car)
// console.log(car.Name) //[ 'maruti', 'suzuki', 'audi', 'jeep' ]
// console.log(car.Name.length) //4

// //add mahindra in name at first
// car.Name.unshift("mahindra")
// console.log(car)
// console.log(car.Name) //[ 'mahindra', 'maruti', 'suzuki', 'audi', 'jeep' ]
// console.log(car.Name.length) //5

//print audi
//    0         1       2        
//['maruti', 'suzuki', 'audi']
// console.log(car.Name[2]) //audi

//=====================================================================
//example 4
// let car ={
//     Name:["maruti","suzuki","audi"],
//     Wheels:4,
//     color:["black","red","blue"],
//     owner:{
//         name:"Saii",
//         age:25,
//         address:"nashik",
//         education:{
//             degree:["bcs","mcs"],
//             passingyear:2012
//         }

//     }

// }
console.log(car) //**************************************************
//print key & value of car

// for(let k in car){
//     console.log(k,car[k])
// }
// //print key & values of owner object
// for(let k in car.owner){
//     console.log(k,car.owner[k])
//}

// //print key & values of education object
// for(let k in car.owner.education){
//     console.log(k,car.owner.education[k])  //degree [ 'bcs', 'mcs' ]
// }

//push phd in education
// car.owner.education.degree.push("phd")
// console.log(car.owner.education.degree) //[ 'bcs', 'mcs', 'phd' ]

// for(let k in car){
//     console.log(k,car[k])
// }

// //update owner name
// car.owner.name="Manasi"
// console.log(car)

// //update color  black into white
// car.color[0]="white"
// console.log(car.color)
// console.log(car)
