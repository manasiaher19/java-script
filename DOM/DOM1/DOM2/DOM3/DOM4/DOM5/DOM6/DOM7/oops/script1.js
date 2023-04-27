//object literals
let info ={
    firstname:'manasi',
    lastname:'aher',
    age:23
}
console.log(info)

let info1 ={
    firstname:'sai',
    lastname:'jadhav',
    age:26
}
console.log(info1)

//function constructor

function Person(fn,ln,ag){
    this.firstname=fn
    this.lastname=ln
    this.age=ag
}
let P1=new Person('manasi','aher',23)
let P2 = new Person('kajal','varpe',34)
console.log(P1)
console.log(P2)

//Es6 class
class Student {
    constructor(fn,ln,age,rollno){
        this.firstname=fn
        this.lastname=ln
        this.age=age
        this.rollno=rollno
    }
}
let manish = new Student('manish','aher',17,21)
let aditi = new Student('aditi','aher',16,12)
console.log(manish)
console.log(aditi)

//object create
let Car = Object.create({})
// console.log(Car)
Car.firstname="Audi"
Car.color="white"
Car.Regno=2345
console.log(Car)