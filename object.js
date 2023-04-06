// let Name = "Manasi"
// console.log(Name)

// // let Name1 =["manasi","nikhil","manish"]
// //add
// // Name1.push("manji")
// // Name1.unshift("diksha")
// // console.log(Name1)

// //retrive(print/display)
// let Name1 =["manasi","nikhil","manish"]
// // console.log(Name1[0])
// // console.log(Name1[2])
// //or

// console.log(Name1.at(2))

//update
// let Name1 =["manasi","diksha","manish"]
// // console.log(Name1[1]="diksha")
// // console.log(Name1)
// //or 
// let A = Name1.fill('nikhil',1,2)
// console.log(Name1)

//delete
// let Name1 =["manasi","diksha","manish"]
// console.log(Name1.pop())
//===============================================================================================

//OBJECT

//let info=["Manasi","Aher",23,01]

//object
//key & value ==> property

// let info={
//     firstName:"Manasi",
//     lastName:"Aher",
//     age:23,
//     rollNo:01
// }
// console.log(info)

//CRUD
//C = create
//R = retrive
//U = update
//D = delete
//dot notation
//bracket notation

//C=create (new property)
// let info={
//     firstName:"Manasi",
//     lastName:'Aher',
//     age:23,
//     rollNo:01
// }
// console.log(info)
// //dot notation
// info.skill='Javascript'
// console.log(info)
// //bracket notation
// info['langauge']='english'
// console.log(info)

//R=retrive
//syntax => objectName.key ==>(value)
//dotnotation
// console.log(info.lastName) //Aher
// //bracket notation
// console.log(info['age'])//23

//U =update
//dot notation
// info.firstName="Diksha"
// console.log(info)
// //bracket notation
// info["lastName"]="Gunjal"
// console.log(info)
// //{ firstName: 'Diksha', lastName: 'Gunjal', age: 23, rollNo: 1 }

//D=delete
// let info={
//     firstName:"Manasi",
//     lastName:'Aher',
//     age:23,
//     rollNo:01
// }
// console.log(info)
// //dot notation
// delete info.age
// console.log(info)
// //bracket notation
// delete info['rollNo']
// console.log(info)

//dublicate property
// let car={
//     color:'red',
//     wheel:4,
//     model:'audi',
//     model:'suzuki'
// }
// console.log(car)
//{ color: 'red', wheel: 4, model: 'suzuki' }
//retrive
// console.log(car.model) //suzuki
// //update
// car.color='blue'
// console.log(car) //{ color: 'blue', wheel: 4, model: 'suzuki' }
// //create
// car.woner="Manish"
// console.log(car) //{ color: 'blue', wheel: 4, model: 'suzuki', woner: 'Manish' }
// //delete
// delete car.woner
// console.log(car)

//===================================================================================
//example 2

// let Myself = {
//     Name: "Aditi",
//     Surname: "Aher",
//     Gender: "Girl",
//     Std: 10,
//     Medium: "English",
// }
// console.log(Myself)

// //CRUD
// //Create
// //dot notation
// Myself.Adress="Pune"
// console.log(Myself)
// //bracket notation
// Myself['Hobby']='Dancing'
// console.log(Myself)

// //Retrive(print)
// //dot notation
// console.log(Myself.Std)
// //bracket notation
// console.log(Myself['Medium'])

// //Update
// //dot notation
// Myself.Std=11
// console.log(Myself)
// //bracket notation
// Myself['Hobby']='Singing'
// console.log(Myself)

// //Delete
// //dot notation
// delete Myself.Adress
// console.log(Myself)
// //bracket notation
// delete Myself["Gender"]
// console.log(Myself)

//=========================================================================

