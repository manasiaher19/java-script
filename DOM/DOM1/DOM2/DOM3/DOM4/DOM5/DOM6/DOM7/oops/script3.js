//Es6 class ==> to set properties use following
//without constructor
//with constructor
//by using function
//set and get keyword

//1.without constructor
// class Car{
//     Ownername="Manasi Aher"
//     displayName(){
//         console.log(this.Ownername)
//     }
// }
// let Mayuri = new Car()
// console.log(Mayuri) //Car { Ownername: 'Manasi Aher' }
// Mayuri.displayName() //Manasi Aher

// let Nikhil = new Car()
// console.log(Nikhil) //Car { Ownername: 'Manasi Aher' }
// Nikhil.displayName() //Manasi Aher
//.........................................................
// class Car {
//     Ownername = undefined
//     displayName() {
//         console.log(this.Ownername)
//     }
// }
// let Kajal = new Car()
// console.log(Kajal) //Car { Ownername: undefined }
// Kajal.Ownername ="Kajal K."
// console.log(Kajal) //Car { Ownername: 'Kajal K.' }
// Kajal.displayName() //Kajal K.

// let Ravi = new Car()
// console.log(Ravi) //Car { Ownername: undefined }
// Ravi.Ownername="Ravi Kumar"
// console.log(Ravi) //Car { Ownername: 'Ravi Kumar' }
// Ravi.displayName() //Ravi Kumar
//----------------------------------------------------------------
// //2. with constructor
// class Car{
//     constructor(cn,col){
//         this.carname=cn,
//         this.color=col
//     }
//     displayName(){
//         console.log(this.col)
//     }
// }

// let C1 = new Car('SUV','blue')
// console.log(C1) //Car { carname: 'SUV', color: 'blue' }
// C1.displayName() //undefined //**********************
//=====================================================================
//3.by Using Function
// class Empl{
//     fullname1(fn){
//         this.fullname=fn
//     }
//     displayName(){
//         return this.fullname
//     }
// }
// let Kranti = new Empl()
// console.log(Kranti) //Empl {}
// Kranti.fullname1("Kranti S.P")
// console.log(Kranti) //Empl { fullname: 'Kranti S.P' }
// console.log(Kranti.displayName()) //Kranti S.P
//===============================================================
//4.set & get keyword
// class Person{
//     set fullName(fn){
//         this.Name=fn
//     }
//     get displayName(){
//         return this.Name
//     }
// }
// let Laxman = new Person()
// console.log(Laxman) //Person {}
// Laxman.fullName="Laxman M.L"
// console.log(Laxman) //Person { fullName: 'Laxman M.L' }
// console.log(Laxman.displayName) //Laxman M.L

// let Sai = new Person()
// console.log(Sai)
// Sai.fullName="Sai Aher"
// console.log(Sai)
// console.log(Sai.displayName)

//####################################################################################

