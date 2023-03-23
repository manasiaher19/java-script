
let student = [
    {
        firstname: "manasi",
        lastname: "aher",
        age: 23,
        skill: ["java", "js"]
    },
    {
        firstname: "nikita",
        lastname: "pawar",
        age: 25,
        skill: ["cy", "python"]
    },
    {
        firstname: "nidhi",
        lastname: "mehta",
        age: 50,
        skill: ["html", "javascript"]
    },
    {
        firstname: "manjusha",
        lastname: "jondhale",
        age: 40,
        skill: ["c", "SQL"]
    }
]

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
let Total = student.reduce((acc,el)=>{
    return acc + el.age
},0)
console.log(Total) //138
 