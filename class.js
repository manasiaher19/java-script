//This also known as object literal :
// //E.g 1
// let manasi = {
//     fitrstname :"manasi",
//     age:23,
//     skill:"javascript",
//     display : function(){
//         console.log(this.fitrstname)
//     }
// }
// manasi.display()  //manasi

// //E.g 2
// let student ={
//     fitrstname:"manish",
//     age:25,
//     skill:"css",
//     display:function(){
//         console.log(this.skill)
//     }
// }
// student.display() //css

//javascript ==> class ==> es6
//javascript methods: string,array,number ==> predefined
//class ==> User defined datatype
//program 1
// class Student {
//     constructor(firstname, age, skill) {
//         this.firstname = firstname
//         this.age = age
//         this.skill = skill
//     }
//     display() {
//         console.log(this.firstname)

//     }

// }
// let nikhil = new Student("nikhil", 20, "java")
// console.log(nikhil)   //  Student { firstname: 'nikhil', age: 20, skill: 'java' }
// nikhil.display()  //nikhil


// let Sai = new Student("sai", 25, "css")
// console.log(Sai)  //Student { firstname: 'sai', age: 25, skill: 'css' }
// Sai.display()  //sai 

// //program 2
// class Car {
//     constructor(name, color, regno) {
//         this.name = name
//         this.color = color
//         this.regno = regno
//     }
//     display() {
//         console.log(this.name)
//         console.log(this.color)
//         console.log(this.regno)
//     }
// }

// let Swati = new Car("maruti", "red", 2003)
// console.log(Swati) //Car { name: 'maruti', color: 'red', regno: 2003 }
// Swati.display() //maruti  2003

// let Aarti = new Car("suzuki", "blue", 200)
// console.log(Aarti)
// Aarti.display()

// //program 3
// class Family {
//     constructor(Fname,Mname,Surname,members,city){
//         this.Fname=Fname
//         this.Mname=Mname
//         this.Surname=Surname
//         this.members=members
//         this.city=city
//     }
//     display(){
//         console.log(this.Fname)
//         console.log(this.Mname)
//         console.log(this.Surname)
//         console.log(this.members)
//         console.log(this.city)
//     }
// }

// let Manasi=new Family("Popat","Anita","Aher",6,"Sangamner")
// console.log(Manasi)
// Manasi.display()

// let Manish=new Family("Popat","Anita","Aher",6,"Sangamner")
// console.log(Manish)
// Manish.display()

// //program 4
// class MyFriends {
//     constructor(fri1, fri2, fri3, fri4) {
//         this.fri1 = fri1
//         this.fri2 = fri2
//         this.fri3 = fri3
//         this.fri4 = fri4
//     }
    // display() {
    //     console.log(this.fri1)
    //     console.log(this.fri2)
    //     console.log(this.fri3)
    //     console.log(this.fri4)
    // }

//}

// let Manasi = new MyFriends("Diksha","Janhavi","Meher","Manjusha")
// console.log(Manasi)
//Manasi.display()

// //program 5
// class Student{
//     constructor(firstname,lastname,age,skill){
//         this.firstname=firstname
//         this.lastname=lastname
//         this.age=age
//         this.skill=skill
//     }
//     display(){
//         console.log(this.age)
//         console.log(this.skill)
//     }
// }

// let Student1 = new Student("Manasi","Aher",23,["javascript","html"])
// console.log(Student1)
// Student1.display()

// let Student2 = new Student("Aditi","Pawar",20,"css")
// console.log(Student2)
// Student2.display()

//program 6
class City{
    constructor(cname,state,dist,pincode){
        this.cname=cname
        this.state=state
        this.dist=dist
        this.pincode=pincode
    }
      display(){
        console.log(this.pincode)
      }
}
//console.log(City)  //[class City]

let city = new City(["Sangamner","Kokangov","Samnapur","Khandgov"],"Maharashtra","A.nagar",422605)
console.log(city)
city.display()    //422604


