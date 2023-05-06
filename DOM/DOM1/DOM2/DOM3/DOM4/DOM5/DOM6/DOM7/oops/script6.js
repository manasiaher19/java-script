//OOPS
//inheritance ==> single level / Multi-level /Hierarchical / Multiple Level / Hbrid

// //Single Level inheritance (without constructor)
// class Father{
//     surname='Kale'
//     money=40000
//     display(){
//         console.log(`My Suename is ${this.surname}`)
//     }
// }
// class Son extends Father{
//     car="Audi"
//     home="Nivas"
//     displayHome(){
//         console.log(`My home name is ${this.home}`)
//     }
// }
// let Ajay=new Father()
// console.log(Ajay) //Father { surname: 'Kale', money: 40000 }
// console.log(Ajay.surname)
// console.log(Ajay.money)
// Ajay.display()
// // Ajay.displayHome() //error

// let Jay = new Son()
// console.log(Jay)//Son { surname: 'Kale', money: 40000, car: 'Audi', home: 'Nivas' }
// console.log(Jay.surname)
// console.log(Jay.money)
// console.log(Jay.car)
// console.log(Jay.home)
// Jay.display()
// Jay.displayHome()

// //Single Level (with constructor)
// class Father{
//     constructor(sn,money){
//         this.surname=sn
//         this.money=money
//     }
//     display(){
//         console.log(`My Suename is ${this.surname}`)
//     }
// }
// class Son extends Father{
//     constructor(sn,money,car,home){
//         super(sn,money)
//         this.car=car
//         this.home=home
//     }
//     displayHome(){
//         console.log(`My home name is ${this.home}`)
//     }
// }
// let Ajay=new Father('Jadhav',8000)
// console.log(Ajay) //Father { surname: 'Jadhav', money: 8000 }
// console.log(Ajay.surname)
// console.log(Ajay.money)
// Ajay.display()
// // // Ajay.displayHome() //error

// let Jay = new Son('Jadhav',8000,"Audi","shree")
// console.log(Jay) //Son { surname: 'Jadhav', money: 8000, car: 'Audi', home: 'shree' }
// console.log(Jay.surname)
// console.log(Jay.money)
// console.log(Jay.car)
// console.log(Jay.home)
// Jay.display()
// Jay.displayHome()

//single level ==> parent class with constructor & child without constructor
// class Father{
//     constructor(sn,money){
//         this.surname=sn
//         this.money=money
//     }
//     display(){
//         console.log(`My Surname is ${this.surname}`)
//     }
// }
// class Son extends Father{
//     home = "Shree"
//     displayHome(){
//         console.log(`My home name is ${this.home}`)
//     }
// }
// let Kiran = new Son('Wale',30000)
// console.log(Kiran) //Son { surname: 'Wale', money: 30000, home: 'Shree' }
// console.log(Kiran.surname)
// console.log(Kiran.money)
// console.log(Kiran.home)
// Kiran.display()
// Kiran.displayHome()

//=============================================================================
//Multi-level inheritance(with constructor)
// class GrandFather{
//     constructor(sn,money){
//         this.surname=sn
//         this.money=money
//     }
//     displayMoney(){
//         console.log(this.money)
//     }
// }
// class Father extends GrandFather{
//     constructor(sn,money,home){
//         super(sn,money)
//         this.home=home
//     }
//     displayHome(){
//         console.log(this.home)
//     }
// }
// class Son extends Father{
//     constructor(sn,money,home,car){
//         super(sn,money,home)
//         this.car=car
//     }
//     displayCar(){
//         console.log(this.car)
//     }
// }
// let Sai = new Son('Aher',6000,'SaiRam','SUV')
// console.log(Sai)  //Son { surname: 'Aher', money: 6000, home: 'SaiRam', car: 'SUV' }
// console.log(Sai.surname)
// console.log(Sai.money)
// console.log(Sai.home)
// console.log(Sai.car)
// //methods
// Sai.displayMoney()
// Sai.displayHome()
// Sai.displayCar()
//================================================================
// //Hierarchicl inheritance
//example 1
// class Father {
//     constructor(fn, sn, money) {
//         this.fname = fn
//         this.sname = sn
//         this.money = money
//     }
//     displayMoney() {
//         console.log(`Father's Money is ${this.money}`)
//     }
// }
// class Son extends Father {
//     constructor(fn, sn, money, home) {
//         super(fn, sn, money)
//         this.home = home
//     }
//     displayHome() {
//         console.log(`My Home name is ${this.home}`)
//     }
// }
// class Daughter extends Father {
//     constructor(fn, sn, money, car) {
//         super(fn, sn, money)
//         this.car = car
//     }
//     displayCar() {
//         console.log(`My car name is ${this.car}`)
//     }
// }

// let Ram = new Father('Ram', 'Kumar', 7000)
// console.log(Ram) //Father { fname: 'Ram', sname: 'Kumar', money: 7000 }
// console.log(Ram.fname)
// console.log(Ram.sname)
// console.log(Ram.money)
// Ram.displayMoney()

// let Rahul = new Son('Ram', 'Kumar', 7000,'Kinara')
// console.log(Rahul) //Son { fname: 'Ram', sname: 'Kumar', money: 7000, home: 'Kinara' }
// console.log(Rahul.fname)
// console.log(Rahul.sname)
// console.log(Rahul.money)
// console.log(Rahul.home)
// //console.log(Rahul.car) //undefined
// Rahul.displayMoney()
// Rahul.displayHome()
// // Rahul.displayCar()//error

// let Nikita =new Daughter('Ram', 'Kumar', 7000,'SUV')
// console.log(Nikita) //Daughter { fname: 'Ram', sname: 'Kumar', money: 7000, car: 'SUV' }
// console.log(Nikita.fname)
// console.log(Nikita.sname)
// console.log(Nikita.money)
// console.log(Nikita.car)
// console.log(Nikita.home) //undefined
// Nikita.displayMoney()
// Nikita.displayCar()
// // Nikita.displayHome() //error

//example 2
class Vehical {
    constructor(model, year) {
        this.model = model
        this.year = year
    }
    displayV() {
        console.log(this.model)
    }
}
class Car extends Vehical {
    wheels() {
        console.log('My type is Four wheeler')
    }
}

class Bike extends Vehical {
    bikes() {
        console.log('My type is two wheeler')
    }
}

let V1 = new Vehical ('bike',1999)
console.log(V1)
V1.displayV()

let C1 = new Car('car',1998)
console.log(C1)
C1.displayV()
C1.wheels()
// C1.bikes() //error

let B1 = new Bike('bike',1990)
console.log(B1)
console.log(B1.model) //bike
B1.displayV()
B1.bikes()