// let Array = ["ABC", "PQR", "LMN", "XYZ"]
// //console.log(Array[0])
// let p = Array[0]
// let P1 = Array[1]
// let p2 = Array[2]
// let p3 = Array[3]

// console.log(p)
// console.log(P1)
// console.log(p2)
// console.log(p3)
//------------------------------------------------------------------------

// //Destructing
// //1.Array

// let Names = ["manasi", "prajjwal", "prachiti", "sai"]
// let [p1, p2, p3, p4] = Names
// console.log(p1)
// console.log(p2)
// console.log(p3) //prachiti
// console.log(p4)

// //2.nested array
// //            0           1         2
// let No = [[11, 22, 33], [41, 42, 43], [51, 52, 53]]
// //          0   1   2    0    1  2       0  1   2

// console.log(No[0][2]) //33
// console.log(No[2][1]) //52

// //by destructing 
// let [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3]] = No
// console.log(a3) //33
// console.log(c2) //52

// //3.object
// let Human = {
//     firstname: "manasi",
//     lastname: "aher",
//     age: 23
// }

// console.log(Human.firstname) //manasi
// //by destructing
// let { firstname, lastname, age } = Human
// console.log(age) //23
// console.log(lastname) //aher

// //OR
// //Alising the key
// let { firstname: fn, lastname: ln, age: a } = Human
// console.log(a) //23
// console.log(ln)//aher

// //4.nested object
// let Student = {
//     name: "Aditi",
//     age: 18,
//     skill: "dancing",
//     family: {
//         father: "sunil",
//         mother: "manisha"
//     }
// }

// console.log(Student.family.father) //sunil
// console.log(Student.age) //18

//by destructing
//let {name,skill,family:{father}}=Student
// console.log(father) //sunil
// console.log(name) //Aditi
// console.log(skill) //dancing

// let {family:{father:fh}}=Student
// console.log(fh) //sunil

// //5.object inside array
// let Customer = [
//    {
//       cname: "Kajal",
//       age: 26
//    },
//    {
//       cname: "Tarun",
//       age: 28
//    },
//    {
//       cname: "Rahul",
//       age: 16
//    },
//    {
//       cname: "Lakhan",
//       age: 40
//    }
// ]
// console.log(Customer[1].cname) //Tarun
// console.log(Customer[1]) //{ cname: 'Tarun', age: 28 }

// // //by destructing
// // let [{cname:c1,age:a1},{cname:c2,age:a2},{cname:c3,age:a3},{cname:c4,age:a4}]=Customer
// // console.log(c2) //Tarun
// // console.log(c4) //Lakhan
// // console.log(a3) //16

// //OR
// let [{ }, { }, { cname: c3, age: a3 }, { cname: c4, age: a4 }] = Customer
// console.log(c3) //Rahul
// console.log(a4) //40

//====================================================================

// let Roles = ["customer", "admin", "support", "manager"]
// //console.log(Roles[0])

// let [a1, a2, a3, a4] = Roles
// console.log(a1)
// console.log(a4)

// //nested array
// let Student = [["manasi", "manish", "aditi"], [23, 43, 56], ["java", "css", "html"], ["pune", "nashik", "mumbai"]]
// let [[l1, l2, l3], [m1, m2, m3], [n1, n2, n3], [o1, o2, o3]] = Student
// console.log(l1)
// console.log(m1)
// console.log(n1)
// console.log(o1)

// //object
// let City = {
//    cname: "sangamner",
//    dist: "A.nagar",
//    pincode: 422605
// }
// let { cname, dist, pincode } = City
// console.log(dist) //A.nagar

// //alising
// let { cname: c, dist: d, pincode: p } = City
// console.log(d) //A.nagar
// console.log(p)  //422605

// //nestd object
// let Car={
//    carname:"audi",
//    color:"white",
//    carno:5667,
//    owner:{
//       oname:"ravi",
//       addr:"mumbai"
//    }
// }

// let {carname,owner:{oname}}=Car
// console.log(carname)
// console.log(oname)

// //alising
// let {carname:c,owner:{oname:o}}=Car
// console.log(c)
// console.log(o)

//object inside array
// let Car = [
//    {
//       cname: "audi",
//       color: "white"
//    },
//    {
//       cname: "suzuki",
//       color: "black"
//    },
//    {
//       cname: "maruti",
//       color: "blue"
//    },
//    {
//       cname: "jeep",
//       color: "grey"
//    },
// ]

// let [{ cname: c1, color: c2 }, { cname: c3, color: c4 }, { cname: c5, color: c6 },{cname: c7, color: c8 }] = Car
// console.log(c2)
// console.log(c4)
// console.log(c6)
// console.log(c8)

//==============================================================================

