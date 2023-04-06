let student = [
    {
        firstname: "manasi",
        lastname: "aher",
        age: 43,
        city: "pune",
        skill: ["java", "js", "html"],
        marks: [55, 44, 66, 77]
    },
    {
        firstname: "nikita",
        lastname: "pawar",
        age: 25,
        city: "nashik",
        skill: ["cy", "python", "html"],
        marks: [99, 84, 76, 65]
    },
    {
        firstname: "nidhi",
        lastname: "mehta",
        age: 45,
        city: "mumbai",
        skill: ["html", "javascript", "html"],
        marks: [99, 56, 68, 65]
    }
]
// //program 1
// //student name & total marks
// for(let i=0;i<student.length;i++){
//     //console.log(student[i].marks)
//     let Totalmarks= student[i].marks.reduce(function(acc,el){
//         return el + acc
//     },0)
//     //console.log(student[i].firstname + Totalmarks)
//     console.log(`${student[i].firstname} : ${Totalmarks}`)
// }

//OR
// student.forEach(function (el) {
//     let T = el.marks.reduce(function (acc, el) {
//         return acc + el
//     }, 0)
//     console.log(el.firstname + ":" + T)
// })
// //---------------------------------------------------------------------------------------
// //program 2
// //student name & persentage
// for (let i = 0; i < student.length; i++) {
//     let TotalMarks = student[i].marks.reduce(function (acc, el) {
//         return el + acc
//     }, 0)
//     console.log(`${student[i].firstname} : ${TotalMarks / student[i].marks.length}`)
//}

//OR
// student.forEach(function(el){
//    let percentage = el.marks.reduce(function(acc,el){
//         return acc + el
//     },0)
//     console.log(`${el.firstname} : ${percentage/el.marks.length}`)
// })
//---------------------------------------------------------------------------------------
//program 3
//print student name who has 99 marks
// for(let i=0;i<student.length;i++){
//     if(student[i].firstname && student[i].marks.includes(99)){
//         console.log(student[i].firstname)
//     }
// }    //nikita nidhi 

// //OR
// student.forEach(function(el){
//     if(el.firstname && el.marks.includes(99)){
//         console.log(el.firstname)
//     }
// })
//-----------------------------------------------------------------------------------------------
//program 4
// //student name & how many no of skills  
// for (let i = 0; i < student.length; i++) {
//     console.log(student[i].firstname + "=" + student[i].skill.length)
// }

// //OR
// student.forEach(function(el){
//     //console.log(el.firstname + el.skill.length)
//     console.log(`${el.firstname} = ${el.skill.length}`)
// })

//------------------------------------------------------------------------
// //program 5
// //print manasi and her skill in no
// //manasi =3
// for (let i = 0; i < student.length; i++) {
//     if (student[i].firstname == "manasi") {
//         console.log(student[i].firstname + "=" + student[i].skill.length)
//     }
// }
// //OR
// student.forEach(function(el){
//     if(el.firstname=="manasi"){
//         console.log(`${el.firstname} = ${el.skill.length}`)   //manasi=3
//     }
//})
//--------------------------------------------------------------------------------------
//program 6
//c++  skill add 
// for (let i = 0; i < student.length; i++){
//    student[i].skill.push("c++")
// }
// console.log(student)

//OR

// student.forEach(function(el){
//     el.skill.push("c++")
// })
// console.log(student)
//---------------------------------------------------------------------------------
//program 7
//age<50 ==> 10 add ==> age >50 ==>sum
// for(let i = 0; i < student.length; i++){
//     if(student[i].age < 50 ){
//         console.log(student[i].age + 10)
//     }
// }

//OR 
////age<50 ==> 10 add ==> age >50 ==>sum
student.forEach(function (el) {
    if (el.age < 50) {
        el.age = el.age + 10
    }
})
console.log(student)  // 43 = 53,25 = 35,45 = 55

let greater50 = []
student.forEach(function (el) {
    if (el.age > 50) {
        greater50.push(el.age)
    }
})
console.log(greater50)  //[ 53, 55 ]

// //OR
// let greater50 = student.filter(function(el) {
//     return el.age > 50
// })
// console.log(greater50)


let sum = greater50.reduce(function (acc, el) {
    return acc + el
}, 0)
console.log(sum) //108

// //avg = sum/length
// console.log(sum / greater50.length)  // (108/2) ==>54







//=======================================================================================================

// let Family = [
//     {
//         fname: "sitaram",
//         mname: "parvati",
//         lastname: "aher",
//         childrens: ["bhaskar", "popat", "sunil"],
//         members: 14
//     },
//     {
//         fname: "popat",
//         mname: "anita",
//         lastname: "aher",
//         childrens: ["manasi", "manish"],
//         members: 4
//     },
//     {
//         fname: "bhaskar",
//         mname: "tara",
//         lastname: "aher",
//         childrens: ["shubham", "manjusha"],
//         members: 4
//     }
// ]

// //print grandfather/grandmother/lastname
// console.log(Family[0].grandfather + Family[0].grandmother + Family[0].lastname)  //sitaramparvatiaher
// //string interpolation
// console.log(`${Family[0].grandfather}/${Family[0].grandmother} ${Family[0].lastname}`) //sitaram/parvati aher
// console.log(`${Family[1].father}/${Family[1].mother} ${Family[1].lastname}`) //popat/anita aher
// console.log(`${Family[2].uncle}/${Family[2].aunty} ${Family[2].lastname}`) //bhaskar/tara aher
//-----------------------------------------------------------------------------------------------
// //print lastname of everyone
// for(let i=0;i<Family.length;i++){
//     console.log(Family[i].lastname)
// }
//----------------------------------------------------------------------------------------------------------
// //add shaku in family[0].childrens
// let C = Family[0].childrens.push("shaku")
// console.log(C) //4
// console.log(Family[0]) //childrens: [ 'bhaskar', 'popat', 'sunil', 'shaku' ]
// //-----------------------------------------------------------------------------------------
// //print all childrens
// for(let i=0;i<Family.length;i++){
//     console.log(Family[i].childrens)
// }
//-------------------------------------------------------------------------------------------------------

// //print those fname & mname whoes members are 4

// for (let i = 0; i < Family.length; i++) {
//     if (Family[i].members == 4) {
//         console.log(`${Family[i].fname} ${Family[i].mname}`) //popat anita  bhaskar tara
//     }
// }

// //OR
// let M = Family.filter(function (el) {
//     return el.members == 4
// })
// console.log(M)
// M.forEach(function(el){
//     console.log(el.fname + " " + el.mname)
// })

//OR

// Family.filter(function (el) {
//     return el.members == 4
// }).forEach(function(el){
//     console.log(`${el.fname} ${el.mname}`)
// })

//----------------------------------------------------------------------------------------
//total of family members
// let Totalmember = 0
// for (let i = 0; i < Family.length; i++){
//     Totalmember = Totalmember + Family[i].members
// }
// console.log(Totalmember)

// //OR
// let T = Family.reduce(function(acc,el){
//     return acc + el.members
// },0)
// console.log(T)