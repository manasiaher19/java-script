
// let student = [
//     {
//         firstname: "manasi",
//         lastname: "aher",
//         age: 23,
//         city:"pune",
//         skill: ["java", "js","html"]
//     },
//     {
//         firstname: "nikita",
//         lastname: "pawar",
//         age: 25,
//         city:"nashik",
//         skill: ["cy", "python","html"]
//     },
//     {
//         firstname: "nidhi",
//         lastname: "mehta",
//         age: 50,
//         city:"mumbai",
//         skill: ["html", "javascript","html"]
//     },
//     {
//         firstname: "manjusha",
//         lastname: "jondhale",
//         age: 40,
//         city:"pune",
//         skill: ["c", "SQL","html"]
//     }
// ]

// //how many ele present in student
// //example      0  1  2
// let Student =[{},{},{}]
// console.log(Student.length) //3
// console.log(Student[1])
//------------------------------------------------------------------------------------
//program 1
//retrive the fullname i.e firstname+lastname of all students
// for(let i =0;i<student.length;i++){
//     //console.log(student[i]) //hole object
//    console.log(`${student[i].firstname} ${student[i].lastname}`)  //string interpolation
//    //manasi aher nikita pawar nidhi mehta manjusha jondhale
// } 

//OR

// student.forEach((el)=>{
//     console.log(`${el.firstname} ${el.lastname}`)
// }) //manasi aher nikita pawar nidhi mehta manjusha jondhale
//----------------------------------------------------------------------------------
//program 2
//find the full name of student whoes age > 25
// for (let i = 0; i < student.length; i++) {
//     if (student[i].age > 25) {
//         console.log(`${student[i].firstname} ${student[i].lastname}`)  //nidhi mehta  manjusha jondhale
//     }
// }

// //OR
// let greaterthan = student.filter((el) => {
//     return el.age > 25
// })
// console.log(greaterthan) // nidhi nd manjusha student object print
// greaterthan.forEach((el) => {
//     console.log(el.firstname + el.lastname)  //nidhimehta   manjushajondhale
// })

//OR
// student.filter((el) => {
//     return el.age > 25
// }).forEach((el)=>{
//     console.log(el.firstname + el.lastname)  //nidhimehta   manjushajondhale
// })
//------------------------------------------------------------------------------------------------
//program 3
//find the sum of all student age
// let sum = 0
// for (let i = 0; i < student.length; i++) {
//     sum = sum + student[i].age
// }
// console.log(sum) //138

//OR
// let Total = student.reduce((acc,el)=>{
//     return acc + el.age
// },0)
// console.log(Total) //138
//--------------------------------------------------------------------------------------------------------
// console.log(student[0].firstname) //manasi
// console.log(`${student[0].firstname} ${student[0].lastname}`)  //manasi aher 
// console.log(student[2].age) //50
//-----------------------------------------------------------------------------------------------
//program 4
// //print student first name & skill length
// for (let i = 0; i < student.length; i++) {
//     console.log((`${student[i].firstname} : ${student[i].skill.length}`))
// }

// //OR
// for (let i = 0; i < student.length; i++) {
//     console.log((student[i].firstname + ":" + student[i].skill.length))
// }
//-----------------------------------------------------------------------------------
//program 5
//print student first name & city

// for(let i = 0; i < student.length; i++){
//     console.log((`${student[i].firstname} : ${student[i].age}`))
// }

//OR
// student.forEach(function(el){
//     console.log(el.firstname +":"+el.age)
// })

//OR
// student.forEach((el)=>{
//     console.log(el.firstname +":"+ el.age)
// })
//-----------------------------------------------------
//program 6
//print those stud whoes city is pune & skill is html
// student.forEach(function(el){
//     if(el.city =="pune" && el.skill.includes("html")){
//         console.log(el.firstname)
//     }
// })

//OR 

// for(let i=0;i<student.length;i++){
//     if(student[i].city=="pune" && student[i].skill.includes("html")){
//         console.log(student[i].firstname)
//     }
// }