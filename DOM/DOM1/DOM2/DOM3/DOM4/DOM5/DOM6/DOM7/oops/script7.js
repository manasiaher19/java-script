//inheritance
//Polymorphism ==> one Function = different state - different behave
//poly = many , morphism = form
//--------------------------------------------------
//Overriding ==> differnt class = but same methods = same paramethers

//program 1
// class WorldBank{
//     loan(){
//         console.log('I am loan method from worldbank')
//     }
//     save(){
//         console.log('I am save method from worldbank')
//     }
// }
// class HDFC extends WorldBank{
//     loan(){
//         console.log('I am loan method from HDFC')
//     }
//     save(){
//         console.log('I am save method from HDFC')
//     }
// }
// class SBI extends HDFC{
//     loan(){
//         console.log('I am loan method from SBI')
//     }
//     save(){
//         console.log('I am save method from SBI')
//     }
// }

// let sbi = new SBI() 
// console.log(sbi) //SBI {}
// sbi.loan() //I am loan method from SBI
// sbi.save() //I am save method from SBI

// let hdfc =new HDFC()
// console.log(hdfc)
// hdfc.loan()  //I am loan method from HDFC
// hdfc.save()  //I am save method from HDFC
//======================================================================
// //program 2
// class WorldBank {
//     loan() {
//         console.log('I am loan method from worldbank')
//     }
//     save() {
//         console.log('I am save method from worldbank')
//     }
// }
// class HDFC extends WorldBank {
//     loan() {
//         super.loan()
//         console.log('I am loan method from HDFC')
//     }
//     save() {
//         super.save()
//         console.log('I am save method from HDFC')
//     }
// }
// class SBI extends HDFC {
//     loan() {
//         super.loan()
//         console.log('I am loan method from SBI')
//     }
//     save() {
//         super.save()
//         console.log('I am save method from SBI')
//     }
// }

// let sbi = new SBI()
// console.log(sbi)
// sbi.loan() //I am loan method from HDFC //I am loan method from SBI
// sbi.save() //I am save method from HDFC  //I am save method from SBI

// let sbi1 = new SBI()
// sbi1.loan()
// sbi1.save()
//I am loan method from worldbank
// I am loan method from HDFC
// I am loan method from SBI
// I am save method from worldbank
// I am save method from HDFC
// I am save method from SBI

// //program 3
// class Shape {
//     draw() {
//         console.log('I'm generic shape')
//     }
// }
// class Squre extends Shape {
//     draw() {
//         super.draw()
//         console.log('shape of squre')
//     }
// }
// class Circle extends Squre {
//     draw() {
//         super.draw()
//         console.log('shape of Circle')
//     }
// }
// let C1 = new Circle()
// C1.draw() //Image of generic shape //Image of squre //Image of Circle

// let S1 = new Squre()
// console.log(S1)
// S1.draw() //Image of generic shape // Image of squre

// //program 4
// class Myntra {
//     Prize() {
//         console.log('Prize of sandle & shoes')
//     }
// }
// class Sandle extends Myntra {
//     Prize() {
//         super.Prize()
//         console.log('200 prize of sandle')
//     }
// }
// class Shoes extends Myntra {
//     Prize() {
//         super.Prize()
//         console.log('500 prize of shoes')
//     }
// }
// let shoe = new Shoes()
// shoe.Prize() //500 prize of shoes

// let shoe1=new Shoes()
// shoe1.Prize() //Prize of sandle & shoes //500 prize of shoes

// let sandle = new Sandle()
// sandle.prize() //200 prize of sandle

// let sandle1 = new Sandle()
// sandle1.Prize()  //Prize of sandle & shoes //200 prize of sandle

// //program 5
// class Student {
//     constructor(fn, ln) {
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayName() {
//         console.log(this.firstName, this.lastName)
//     }
// }
// class Teacher extends Student{
//     salary = 20000
//     displayName() {
//         console.log("Mr."+ this.firstName, this.lastName)
//         super.displayName()
//     }
// }

// let O = new Teacher('Ravi','Kadam')
// console.log(O) //Teacher { firstName: 'Ravi', lastName: 'Kadam', salary: 20000 }
// console.log(O.firstName)
// console.log(O.lastName)
// console.log(O.salary)
// O.displayName() // Mr.Ravi Kadam
// O.displayName() //Ravi Kadam (override from parent Student)

//program 6
class Grandfather {
    constructor(gn, ln) {
        this.gname = gn
        this.lname = ln
    }
    displayName() {
        console.log(this.gname, this.lname)
    }
}
class Father extends Grandfather {
    constructor(gn, ln, fn) {
        super(gn, ln)
        this.fname = fn
    }
    displayName() {
        super.displayName()
        console.log(this.fname, this.lname)
    }

}
class Son extends Father {
    constructor(gn, ln, fn, sn) {
        super(gn, ln, fn)
        this.sname = sn
    }
    displayName() {
        super.displayName()
        console.log(this.sname, this.lname)
    }
}
let S1 = new Son('Sitaram','Aher','Sunil','Nikhil')
console.log(S1)
console.log(S1.gname)
console.log(S1.lname)
console.log(S1.fname)
console.log(S1.sname)

S1.displayName() //Nikhil Aher







//=====================================================================
//Overloading ==> same class - same method - different signature(parameter)
//Overloading is not support in javascript

// //program 1
// class Calculator {
//     addition(a, b) {
//         console.log(a + b)
//     }
//     addition(a, b, c) {
//         console.log(a + b + c)
//     }
//     addition(a, b, c, d) {
//         console.log(a + b + c + d)
//     }
// }

// let sum = new Calculator()
// console.log(sum)
// sum.addition(10, 20) //NaN ==> because Overloading is not support in javascript
// sum.addition(10, 20, 30) //NaN
// sum.addition(20, 30, 40, 10) ////100

// //example not imp ==>
// class Add {
//     add(a, b, c, d) {
//         if (a != undefined && b != undefined && c != undefined && d != undefined) {
//             console.log(a + b + c + d)
//         }
//         else if (a != undefined && b != undefined && c != undefined) {
//             console.log(a + b + c)
//         }
//         else if (a != undefined && b != undefined) {
//             console.log(a + b)
//         }
//     }
// }
// let addition = new Add()
// addition.add(10, 20, 30) //60
// addition.add(10, 20, 30, 40) //100
// addition.add(20, 20) //40