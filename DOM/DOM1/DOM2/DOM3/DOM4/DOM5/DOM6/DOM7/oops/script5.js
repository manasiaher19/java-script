//oops ==> proper & secure code
//inheritance-polymorphism-abstraction-encapsulation

// //inheritance
// class Student{
//     fname='kajal'
//     lname='kale'
//     country='india'
// }

// class Teacher extends Student{
//     salary=20000
// }
// let KK=new Student()
// console.log(KK) //Student { fname: 'kajal', lname: 'kale', country: 'india' }

// let KK1=new Teacher()
// console.log(KK1)  //Student { fname: 'kajal', lname: 'kale', country: 'india', salary: 20000  }
//-------------------------------------------------------------------------------
// //program 1
// class Employee{
//     constructor(fn,ln,cn){
//         this.fname=fn,
//         this.lname=ln,
//         this.country=cn
//     }
//     displayFullName(){
//         console.log(this.fname,this.lname)
//     }
// }

// class Manager extends Employee{
//     constructor(fn,ln,cn,salary){
//         super(fn,ln,cn)
//         this.salary=salary
//     }
//     displaysalary(){
//         console.log(this.salary)
//     }
// }

// let manasi = new Manager('manasi','aher','india',20000)
// console.log(manasi)
// manasi.displayFullName() //manasi aher
// manasi.displaysalary() //20000
// console.log(manasi.fname) //manasi

// let manu=new Employee('manu','aher','india')
// console.log(manu) //Employee { fname: 'manu', lname: 'aher', country: 'india' }
// console.log(manu.country) //india
//manu.displaysalary()//error

// //program 2
// class Student{
//     sname='diksha'
//     lname='gunjal'
//     skill='chemistry'
// }

// class Teacher extends Student{
//     slary=30000
// }

// let S=new Student()
// console.log(S)
// let S2=new Teacher()
// console.log(S2)

//program 3

// class Student{
//     constructor(snm,lnm,sk){
//     this.sname=snm
//     this.lname=lnm
//     this.skill=sk
//     }
//     displayName(){
//         console.log(this.sname)
//     }
// }

// class Teacher extends Student{
//     constructor(snm,lnm,sk,sal){
//         super(snm,lnm,sk)
//         this.salary=sal
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let stud1=new Student('janhavi','pawar','javascript')
// console.log(stud1)
// stud1.displayName() //janhavi 
// //stude1.displaySalary() //error

// let stud2=new Teacher('janhavi1','pawar1','java',2000)
// console.log(stud2)
// stud2.displayName() //janhavi1
// stud2.displaySalary() //2000

// //program 4
// class Grandfather{
//     surname='kale'
//     money=50000
//     displayMoney(){
//         console.log(`I have ${this.money}`)
//     }
// }
// class Father extends Grandfather{
//     //2 prop & 1 meth
//     home='kinara'
//     displayHome(){
//         console.log(`My home name is ${this.home}`)
//     }
// }
// class Son extends Father{
//     //3 prope & 2 methods
//     car="SUV"
//     displayCar(){
//         console.log(`I have ${this.car}`)
//     }
// }
// //obj create
// let Ram = new Grandfather()
// console.log(Ram) //Grandfather { surname: 'kale', money: 50000 }
// Ram.displayMoney() //I have 50000
// //Ram.displayCar() //error
// console.log(Ram.money=20000)
// console.log(Ram) //Grandfather { surname: 'kale', money: 20000 }

// let Ganesh=new Father()
// console.log(Ganesh) //Father { surname: 'kale', money: 50000, home: 'kinara' }
// Ganesh.displayHome() //My home name is kinara
// Ganesh.displayMoney() //I have 50000
// //Ganesh.displayCar() //error
// console.log(Ganesh.home="Nivas")
// console.log(Ganesh) //Father { surname: 'kale', money: 50000, home: 'Nivas' }

// let Sai = new Son()
// console.log(Sai) //Son { surname: 'kale', money: 50000, home: 'kinara', car: 'SUV' }
// Sai.displayCar()
// Sai.displayHome() //My home name is kinara
// Sai.displayMoney()
// console.log(Sai.home="Sai Ram")
// console.log(Sai)
// Sai.displayHome() //My home name is Sai Ram

// //program 5
// class GrandFather{
//  constructor(sn,money){
//     this.surname=sn
//     this.money=money
//  }
//  displaymoney(){
//   console.log(`I have ${this.money}`)
//  }
// }
// class father extends GrandFather{
//     constructor(sn,money,home){
//         super(sn,money)
//         this.home=home
//     }
//     displayhome(){
//         console.log(`My home name is ${this.home}`)
//     }
// }
// class son extends father{
//     constructor(sn,money,home,car){
//         super(sn,money,home)
//         this.car=car
//     }
//     displaycar(){
//         console.log(`I have ${this.car}`)
//     }
// }
// //obj create
// let Kisan=new GrandFather('Wale','2 lakh')
// console.log(Kisan) //GrandFather { surname: 'Wale', money: '2 lakh' }
// Kisan.displaymoney() //I have 2 lakh
// //Kisan.displayhome() //error

// let Gokul = new father('Wale','2 lakh','Shree')
// console.log(Gokul) //father { surname: 'Wale', money: '2 lakh', home: 'Shree' }
// Gokul.displayhome()
// Gokul.displaymoney()
// Gokul.money='5 lakh'
// console.log(Gokul) //father { surname: 'Wale', money: '5 lakh', home: 'Shree' }

// let Saurabh=new son('Wale','2 lakh','Shree','Audi')
// console.log(Saurabh) //son { surname: 'Wale', money: '2 lakh', home: 'Shree', car: 'Audi' }
// Saurabh.displaycar()
// Saurabh.displayhome()
// Saurabh.displaymoney()
// console.log(Saurabh.home="Kisan")
// console.log(Saurabh)

//program 6
//parent with constructor & child without constructor
// class GrandFather{
//     constructor(surname,money){
//         this.surname=surname
//         this.money=money
//     }
//     displayMoney(){
//         console.log(`I have ${this.money}`)
//     }
// }
// class Father extends GrandFather{
//     home='Nivara'
//     displayHome(){
//         console.log(`My home name is ${this.home}`)
//     }
// }

// let Gorkh=new GrandFather('Jadhav','1 lakh')
// console.log(Gorkh) //GrandFather { surname: 'Jadhav', money: '1 core' }
// Gorkh.displayMoney() //I have 1 core


// let Arjun=new Father('jadhav','2 lakh')
// console.log(Arjun) //Father { surname: 'jadhav', money: '1 lakh', home: 'Nivara' }
// Arjun.displayMoney()
// Arjun.displayHome()

//program 7
// //parent with constructor & child with constructor
// class GrandFather {
//     constructor(surname, money) {
//         this.surname = surname
//         this.money = money
//     }
//     displayMoney() {
//         console.log(`I have ${this.money}`)
//     }
// }
// class Father extends GrandFather {
//     constructor(surname, money, home) {
//         super(surname, money)
//         this.home = home
//     }
//     displayHome() {
//         console.log(`My home name is ${this.home}`)
//     }
// }

// let Kiran = new GrandFather('Deshmukh',8000)
// console.log(Kiran)
// Kiran.displayMoney()

// let Jay = new Father('Deshmukh',9000,'shree')
// console.log(Jay) //Father { surname: 'Deshmukh', money: 9000, home: 'shree' }
// Jay.displayMoney()
// Jay.displayHome()

//program 8
//class whatsApp : texing()  ==> 1 feature
//multimedia()  => texing()+multimedia()
//calling() => texing () , mulimedia(), calling()

class WhatsApp {
    texting() {
        console.log('This is Texting Feature')
    }
}
class WhatsApp1 extends WhatsApp {
    multiMedia() {
        console.log('This is multimedia feature')
    }
}
class WhatsApp2 extends WhatsApp1 {
    calling() {
        console.log('This is calling feature')
    }
}

let UpdatedWhatsApp=new WhatsApp2()
console.log(UpdatedWhatsApp) //WhatsApp2 {}
UpdatedWhatsApp.texting() //This is Texting Feature
UpdatedWhatsApp.multiMedia() //This is multimedia feature
UpdatedWhatsApp.calling() //This is calling feature