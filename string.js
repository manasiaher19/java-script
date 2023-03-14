
//example 1
// let Name = "Manasi"
// console.log(Name)//Manasi
// console.log(typeof Name)//string

// //example 2
// let city ="pune"
// console.log(typeof city) //string

// //example 3
// let N = '10'
// console.log(N)//['10']
// console.log(typeof N)//string

//====================================================
//program
// let City = "mumbai"

// //  m  u  m  b   a   i
// //  0  1  2  3   4   5

// console.log(City) //['mumbai']
// console.log(City[0]) //m
// console.log(City[5])//i

//length =====> property
//program1
// let Name = "Manasiiiiiiiiii"
// console.log(Name.length)//16
// console.log(Name[0])//M
// console.log(Name[Name.length-1])//i

//==================================================
//methods

//1.toUpperCase()
//action ==> convert all chr into uppercase
//return ==> new string

//program 1
// let student ="manish"
// let New = student.toUpperCase()
// console.log(New) //MANISH

//program 2
// let city ="Nagpur"
// console.log(city.toUpperCase()) //NAGPUR

// //2.toLowerCase()
// //action==>convert all chr into lower case
// //return ==>string

// //program
// let student1 = "NIKHIL"
// console.log(student1.toLowerCase()) //nikhil

// //program
// let city1 ="nashik"
// console.log(city1.toLowerCase()) //nashik

//3.indexOf()
//action==> check whether char present in string or not if present return index of not -1
//return==>number

//program 1
let Student = "diksha"
// 0  1  2  3  4  5
// d  i  k  s  h  a
// console.log(Student.indexOf("D")) //-1

// console.log(Student.indexOf("h"))//4

// console.log(Student.indexOf("K")) //-1

//4.includes()
//action==> check whether char present in string or not if present true else false
//return ==>boolean

//program
// let City ="sangamner"
// console.log(City.includes("S")) //false

// console.log(City.includes("g"))//true

//5.starstwith()
//action==> check whether string starts with given char or substring if startwith true else false
//return==>boolean

// let city = "pune"
// //substring ==> pu ,un ,ne
// console.log(city.startsWith("p")) //true

// console.log(city.startsWith("un")) //false

// console.log(city.startsWith("pu")) //true

//6.endswith()
//action ==> check whether string ends with given char or substring if endswith true else false
//return==>boolean

// let fruit ="Banana"
// console.log(fruit.endsWith("an")) //false

// console.log(fruit.endsWith("na")) //true

//program
let Name ="manuuuu"
console.log(Name.endsWith("nu")) //false

console.log(Name.endsWith("uu")) //true
