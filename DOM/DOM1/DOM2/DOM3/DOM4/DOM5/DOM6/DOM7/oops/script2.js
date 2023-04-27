// let manasi = {
//     firstname: 'manasi',
//     lastname: 'aher',
//     age: 23,
//     rollno: 1,
//     display: function () {
//         console.log(this.firstname + this.lastname)
//     }
// }
// console.log(manasi)

// let Sai = {
//     firstname: 'sai',
//     lastname: 'aher',
//     age: 18,
//     rollno: 10,
//     display: function () {
//         console.log(this.firstname + this.lastname)
//     }
// }
// console.log(Sai)

// //Templates ==>
// //function constructor
// //program 1
// function Person(fn, ln, age, rollno) {
//     this.firstname = fn
//     this.lastname = ln
//     this.age = age
//     this.rollno = rollno
//     this.display = function () {
//         console.log(this.firstname + this.lastname)
//     }
// }
// let mayuri = new Person('mayuri', 'aher', 18, 11)
// console.log(mayuri)
// mayuri.display()

// let sarthak =new Person('sarthak','jadhav',14,23)
// console.log(sarthak)
// sarthak.display()

//Protype inheritance
//every thing in js is object
//every object has __proto__ === parent.prototype

// console.log(sarthak.__proto__===Person.prototype) //true
// Person.prototype.display=function(){
//     console.log(this.firstname + this.lastname)
// }

//program 2
// function PersonB(fn,ln){
//     this.firstname=fn
//     this.lastname=ln
//     this.display=function(){
//         console.log(this.firstname + this.lastname)
//     }
// }

// let diksha = new PersonB('diksha','gunjal')
// let nikita=new PersonB('nikita','gorde')
// diksha.display()
// nikita.display()

// Every object has one protype 
//object.__proto__ === parent.prototype
// diksha.__proto__===PersonB.prototype //true
// PersonB.prototype.display=function(){
//     console.log(this.firstname + this.lastname)
// }
// PersonB.prototype.country="India"
// diksha.display()
// console.log(diksha.country)
//=============================================================
// let Names = ["manasi","sai","sarthak"]
// console.log(Names.__proto__===Array.prototype)
// Array.prototype.greet=function(){
//     console.log("hello")
// }
// Names.pop()
// console.log(Names)
// Names.push("manish")
// console.log(Names)
// Names.greet()
// console.log(Names)

//-----------------------------------------------------------------------
let obj = {}

// //program 3
// //funnction constructor
// function Employee(fn, ln, ag, skill) {
//     this.firstname = fn
//     this.lastname = ln
//     this.age = ag
//     this.skill = skill
// }
// //(there is display method & salary property but i dont want to show every one so use prototype )

// let Jaya = new Employee('jaya', 'jondhale', 24, 'doctor')
// console.log(Jaya)
// let Mayu = new Employee('mayu', 'aher', 20, "html")
// console.log(Mayu)
// //object.__proto__==parent.prototype
// //for display
// console.log(Jaya.__proto__ == Employee.prototype) //true
// Employee.prototype.display = function () {
//     console.log(this.firstname, this.lastname)
// }
// Jaya.display() //jaya jondhale
// //for salary
// Employee.prototype.salary = 50000
// console.log(Jaya.salary)
// //for country
// Employee.prototype.country = "India"
// console.log(Jaya.country) //India
// //---------------------------------------------------
// //instanceof ==>keyword==>boolean
// console.log(Jaya instanceof Employee) //true
// console.log(obj instanceof Employee) //false
// //-------------------------------------------------------
// //hasOwnprOperty() ==>method ==> boolean
// console.log(Jaya.hasOwnProperty("firstname")) //true
// console.log(Jaya.hasOwnProperty("salary"))//false
//===============================================================
//program 4
//Es6 class
class Person {
    constructor(fn, ln, ag,skill){
        this.firstname=fn,
        this.lastname=ln
        this.age=ag,
        this.skill=skill
    }
    display(){
        console.log(this.firstname,this.skill)
    }
}
let Kajal =new Person("kajal","kale",23,"javascript")
console.log(Kajal)
Kajal.display() //kajal javascript
console.log(Kajal.__proto__==Person.prototype)
console.log(Person.prototype.salary=20000)
console.log(Kajal.salary)//20000
//---------------------------------------------------
console.log(Kajal instanceof Person) //true
console.log(obj instanceof Person) //false

