// let Family = {
//   name: "Aher",
//   2: "Sangamner",
//   3: 6,
//   undefined: 210,
//   Elders: {
//     fname: "sitaram",
//     mname: "parvati"
//   }
// }

// for (let k in Family) {
//   console.log(typeof k) //string  string string string string==>because in object key type is always string.
// }

// //======================================================================================
// //Map() ==> In map() we can use key in different datatype .
// //syntax =>
// //let mapname = new Map()

// //Map() method ==> 1.set() 2.get() 3.has() 4.delete() 4.clear() 5.forEach()
// //Map()property ==> size()


// let mymap = new Map()
// console.log(mymap) //Map(0) {}

// //1.set(key value) ==> add key & value / create property
// mymap.set("fname","manasi")
// mymap.set("lname","aher")
// mymap.set(54,"rollno")
// mymap.set(23,'age')
// mymap.set('undefined','ABC')
// console.log(mymap)

// //2.get(key) ==> get() gives which value present at given key
// let A1 = mymap.get(54)
// console.log(A1)  //rollno

// console.log(mymap.get('addr'))  //undefined

// //3.has(key) ==> has() check whether key present or not if present return true otherwise false

// console.log(mymap.has('lname')) //true
// console.log(mymap.has(56)) //false
// console.log(mymap.has('rollno')) //false

// //4.delete(key) ==> return boolean ==> if true then key => delete
// let A2 = mymap.delete('undefined')
// console.log(A2)  //true
// console.log(mymap) 

// console.log(mymap.delete('addr')) //false
// console.log(mymap)

// // //5.clear() ==> clear all map
// // mymap.clear()
// // console.log(mymap) //Map(0) {}

// //6.forEach() 

// mymap.forEach(function(value,key){
//   console.log(value) // all svalue
// })

// mymap.forEach(function(value,key){
//   console.log(key) // all keys
// })

// mymap.forEach(function(value,key){
//   console.log(value,key) // all value key 
// })

// // mymap.forEach(function(value,key){
// //   console.log(typeof value)  // string string string string 
// // })

// mymap.forEach(function(value,key){
//   console.log(typeof key)    // string string number number
// })

// //property
// //size()
// console.log(mymap.size) //4

// //for loop for map
// //for keys
// for(let key of mymap.keys()){
//   console.log(key)
// }

// //for values
// for(let value of mymap.values()){
//   console.log(value)
// }

// //for both 
// for(let [key,value] of mymap.entries()){
//   console.log(key,value)
// }

// //type of value & key
// for(let [key,value] of mymap.entries()){
//   console.log(typeof key,typeof value)
// }
// //=====================================================================================

// let students = new Map()
// console.log(students)
// //set():
// students.set('sname', ['manasi', 'aditi', 'nikhil'])
// students.set(undefined, 'rollno')
// students.set(5, 'skills')
// students.set(true, 'isdoingjob')
// console.log(students)
// //get():
// console.log(students.get('true')) //isdoingjob
// console.log(students.get('javascript')) //skills
// console.log(students.get('lname')) //undefined
// console.log(students.get('undefined')) //rollno
// //has():
// console.log(students.has('true')) //true
// console.log(students.has('lname')) //false
// //delete():
// let A1 = students.delete('undefined')
// console.log(A1) //true
// console.log(students)
// //clear()
// students.clear()
// console.log(students) //Map(0) {}
//forEach()

// students.forEach(function (value, key) {
//   //console.log(key)
//    console.log(typeof key)
// })

// students.forEach(function (value, key) {
//   //console.log(value)
//   console.log(typeof value)

// })

// students.forEach(function (value, key) {
//   console.log(key, value)
// })

//for loop

// for(let k of students.keys()){
//   console.log(k)
// }

// for(let v of students.values()){
//   console.log(v)
// }

// for(let [k,v] of students.entries()){
//   console.log(k,v)
// }

//----------------------------------------------------------------------------------

let Roles = new Map([
  [1, "admin"],
  [2, "customer"],
  [3, "support"],
  [4, "manager"]
])
console.log(Roles) 
// Map(4) {
//   1 => 'admin',
//   2 => 'customer',
//   3 => 'support',
//   4 => 'manager'
// }

//set()
console.log(Roles.set(5,"informer"))
//get()
console.log(Roles.get(3)) //support
//has()
console.log(Roles.has(4))  //true
// //clear()
// Roles.clear()
// console.log(Roles)  //Map(0) {}
//delete()
let A = Roles.delete(5)
console.log(A) //true
console.log(Roles)
//forEach()
Roles.forEach(function(value,key){
  //console.log(value)
  console.log(typeof value)
})

Roles.forEach(function(value,key){
  console.log(key)
})

Roles.forEach(function(value,key){
  console.log(key , value)
})

//for loop
for(let k of Roles.keys()){
  console.log(k)
}

for(let v of Roles.values()){
  console.log(v)
}

for(let [k,v] of Roles.entries()){
  console.log(k,v)
}




