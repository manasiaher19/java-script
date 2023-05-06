//Es6 class (to set properties) 
//1.without constructor
// class Person{
//     firstaname="manasi"
//     lastname="aher"
//     display(){
//         console.log(this.firstaname , this.lastname)
//     }
// }
// let Ramesh = new Person()
// console.log(Ramesh) //Person { firstaname: 'manasi', lastname: 'aher' }
// Ramesh.display() //manasi aher
// //2.
// let Yogesh = new Person()
// console.log(Yogesh)
// Yogesh.display()

// class PersonB {
//     firstaname = undefined
//     lastname = undefined
//     display() {
//         console.log(this.firstaname, this.lastname)
//     }
// }
// let Om = new PersonB()
// console.log(Om)
// Om.firstaname="Om"
// Om.lastname="Rj"
// console.log(Om)
// Om.display()


// //2.with constructor
// class PersonC {
//     constructor(fn, ln) {
//         this.firstaname = fn,
//         this.lastname = ln
//     }
//     display(){
//         console.log(this.firstname)
//     }
// }
// //1.
// let Sai = new PersonC("Sai","jadhav")
// console.log(Sai)
// Sai.display()//undefined

//3.by using function
// class PersoneD {
//     fullName(fn) {
//         this.fullname = fn
//     }
//     displayName(){
//         return this.fullname
//     }
// }
// let Pari = new PersoneD()
// console.log(Pari)//PersoneD {}
// Pari.fullName("Pari Rane")
// console.log(Pari)
// //console.log(Pari.display())
// let A = Pari.displayName()
// console.log(A)

//program 2
// class PersoneD {
//     setfullName(fn) {
//         this.fullname = fn
//     }
//     display(){
//         return this.fullname
//     }
// }
// let Rani = new PersoneD()
// console.log(Rani)
// Rani.setfullName('Rani P.S')
// console.log(Rani)
// console.log(Rani.display())

//program 3
// class PersonE{
//     setName(nm){
//         this.name=nm
//     }
//     setlName(lnm){
//         this.lname=lnm
//     }
//     setRollN(rn){
//         this.rollno=rn
//     }
//     display(){
//         console.log(this.name,this.rollno)
//     }
// }
// let Sejal = new PersonE()
// console.log(Sejal)
// Sejal.setName("Sejal")
// Sejal.setlName("barge")
// Sejal.setRollN(13)
// console.log(Sejal)
// Sejal.display()

//4.set & get keyword
class Person{
    set fullName(fn){
        this.fullname=fn
    }
    set lastName(ln){
        this.lastname=ln
    }
    set Skill(sk){
        this.skill=sk
    }
    get display(){
        return this.skill
    }
}
let Yami = new Person()
Yami.fullName="Yami"
Yami.lastName="N.R"
Yami.Skill="Java"
console.log(Yami)
console.log(Yami.display)