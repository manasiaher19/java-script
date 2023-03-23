
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
//=========================================================

//string + string ==>string
//string + number ==>string
//number + string ==>string
//number + number ==> number

//example
// let a = 10
// let b = 20
// let c = "hello"

// console.log(a + b + c)
// //         10 + 20 + hello ==> 30hello

// console.log(a+c+b) //10hello20
// console.log(c+a+b)
//===================================================================

//method chaining
// let fruits = "chikoo"
// let N = fruits.toUpperCase().toLowerCase().length
// //              CHIKOO        chikoo       6
// console.log(N) //6

// let fruits1 = "chikoo"
// let N1 = fruits1.toUpperCase().toLowerCase()
// //              CHIKOO        chikoo       
// console.log(N1) //chikoo

// let fruits2 = "chikoo"
// let N2 = fruits2.toUpperCase().toLowerCase().includes("c")
// //              CHIKOO        chikoo         true
// console.log(N2) //true

// let Name = "manasi"
// let M = Name.toUpperCase().toLowerCase().indexOf("M")
// //            MANASI        manasi        -1
// console.log(M) //-1

// let Name1 = "manasi"
// let M1 = Name.toUpperCase().toLowerCase().indexOf("M").includes("a")
// //            MANASI        manasi        -1
// console.log(M1) // error


// let Name2 = "manasi"
// let M2= Name2.toUpperCase().toLowerCase().includes("a")
// //            MANASI        manasi        true
// console.log(M2) //true

// let Name3 = "manasi"
// let M3 = Name3.toUpperCase().includes("a").toLowerCase()
// //            MANASI              true      manasi
// console.log(M3) //error

//==================================================
//methods

//1.toUpperCase()
//action ==> convert all chr into uppercase
//return ==> new string

//program 1
// let student ="manish"
// let New = student.toUpperCase()
// console.log(New) //MANISH
// console.log(typeof New) //string

//program 2
// let city ="Nagpur"
// console.log(city.toUpperCase()) //NAGPUR
//============================================================

// //2.toLowerCase()
// //action==>convert all chr into lower case
// //return ==>string

// //program
// let student1 = "NIKHIL"
// console.log(student1.toLowerCase()) //nikhil

// //program
// let city1 ="nashik"
// console.log(city1.toLowerCase()) //nashik
//=============================================================

//3.indexOf()
//action==> check whether char present in string or not if present return index of not -1
//return==>number

//program 1
//let Student = "diksha"
// 0  1  2  3  4  5
// d  i  k  s  h  a
// console.log(Student.indexOf("D")) //-1

// console.log(Student.indexOf("h"))//4

// console.log(Student.indexOf("K")) //-1
//=====================================================================

//4.includes()
//action==> check whether char present in string or not if present true else false
//return ==>boolean

//program
// let City ="sangamner"
// console.log(City.includes("S")) //false

// console.log(City.includes("g"))//true
//=====================================================================

//5.starstwith()
//action==> check whether string starts with given char or substring if startwith true else false
//return==>boolean

// let city = "pune"
// //substring ==> pu ,un ,ne
// console.log(city.startsWith("pun")) //true

// console.log(city.startsWith("un")) //false

// console.log(city.startsWith("pu")) //true
//=========================================================================================

//6.endswith()
//action ==> check whether string ends with given char or substring if endswith true else false
//return==>boolean

// let fruit ="Banana"
// console.log(fruit.endsWith("ana")) //false

// console.log(fruit.endsWith("na")) //true

//program
// let Name ="manuuuu"
// console.log(Name.endsWith("nu")) //false

// console.log(Name.endsWith("uu")) //true
//==================================================================================================

//7.trim()
//action=> remove space from starting & ending
//return =>

//for e.g
// let city = " pune "
// // 0  1  2  3  4  5
// //    p  u  n  e
// console.log(city.length)   //6 because it counts space also

//program foer trim
//1
// let City = " pune "
// let N = City.trim()
// console.log(N)
// console.log(N.length)

// //2
// let city = "mumbai "//length =7
// let N1 = city.trim()
// console.log(N1)//mumbai
// console.log(N1.length)//6
//============================================================

//8.trimstart()
//action => remove space from start
//return => new string

//program 1
// let city = " nashik"//length =7
// let N2 = city.trimStart()
// console.log(N2) //nashik
// console.log(N2.length) //6

//program 2 
// let Name = "    mauu" //length = 8
// let New = Name.trimStart()
// console.log(New) //mauu
// console.log(New.length)//4
//=============================================================

//9. trimEnd()
//action = remove space from last
//return = new string

//program 1
// let student = " manasi   "
// console.log(student.length) //10
// let N = student.trimEnd()
// console.log(N) //  manasi
// console.log(N.length) //7

//program 2
// let M = "nikhil   "
// console.log(M.length) //9
// let M1 = M.trimEnd()
// console.log(M1) //nikhil
// console.log(M1.length) //6

//==============================================================
//10.slice()
//action==>break string as per starting and ending index
//return==>new string

//program 1
//let S = "janhavi"
//  0  1  2  3  4  5  6
//  j  a  n  h  a  v  i
// -7 -6 -5 -4 -3 -2 -1

// console.log(S.slice(3,6)) //hav
// console.log(S.slice(4)) // avi
// console.log(S.slice(1,-3)) //anh
// console.log(S.slice(-1,-4))//blank
// console.log(S.slice(-3)) //avi
// console.log(S.slice(-1)) //i
// console.log(S.slice(-3,1)) //blank

//===========================================================

//11.split()
//action => split char
//return=> array

//program 1
// let Name = "manasi"
// let N = Name.split("n")
// console.log(N) //[ 'ma', 'asi' ]

// //program 2
// let Student = "Manasi P Aher"
// let A= Student.split(" ")
// console.log(A) //['Manasi','p','Aher']

// //program 3
// //split 200
// let No = "200$00"
// let New = No.split("$")
// console.log(New) //['200','00']
// console.log(New[0])//[0 , 1] ==> o/p 200

// //program 4
// //['manasi','19'] //['Manasi']
// let S1 = "Manasi@19"
// let S2 = S1.split("@")
// console.log(S2) //['manasi','19']
// console.log(S2[0]) //Manasi

//program 5
// let Friend = "dikshajanhavi"
// console.log(Friend.split(""))
// //['d', 'i', 'k', 's','h', 'a', 'j', 'a','n', 'h', 'a', 'v','i']

// //program 6
// let Friend1 = "diksha/janhavi"
// console.log(Friend1.split("/")) //[ 'diksha', 'janhavi' ]
//======================================================

//12.charAt()
//action ==> perticular index gives which char if index not present gives blank string
//return ==> string

//program 1
// let City="dhule"
// // 0  1  2  3  4
// // d  h  u  l  e
// let C = City.charAt(2)
// console.log(C) //u

// console.log(City.charAt(7)) //blank string

// //program 2
// let N = " janhavi"
// // j  a  n  h  a  v  i
// // 0  1  2  3  4  5  6
// console.log(N.charAt(6)) //v
// console.log(N.charAt(9)) //blank string
//==================================================================================

//13 .charCodeAt()
//action ==> givs ASCII value for perticular index  if index not present gives NaN(not a no)
//return ==> number

//program 1
// let Friend = "Diksha"
// // 0  1  2  3  4  5
// // D  i  k  s  h  a
// let A = Friend.charCodeAt(2)
// console.log(A) //k ==> 107

// console.log(Friend.charCodeAt(0)) //D ==>68
 
// console.log(Friend.charCodeAt(6)) //NaN
//==============================================================================

// let Friends = ["diksha","janhavi"]
// let M = Friends.join("-").toUpperCase().toLowerCase().split("-").indexOf("janhavi")//includes('janhavi')
// console.log(M)
//diksha-janhavi
//DIKSHA-JANHAVI
//diksha-janhavi
//[ 'diksha', 'janhavi' ] //1
//true

//===========================================================================================

//STRING INTERPOLATION

// let FirstName = "Manasi"
// console.log(FirstName) //Manasi
// let LastName ="Aher"
// console.log(LastName)

// //My FirstName is Manasi and My LastName is Aher

// //old way
// console.log("My FirstName is"+ FirstName + " and My LastName is"+LastName)
// //My FirstName isManasi and My LastName isAher

// //new way
// console.log(`My FirstName is ${FirstName} and My LastName is ${LastName}`)
// //My FirstName is Manasi and My LastName is Aher

//program 2
// let F1 = "Diksha"
// console.log(F1)
// let F2 = "Meher"
// console.log(F2)

// // Diksha & Meher are my friends

// console.log(`${F1} & ${F2} are my friends `)

//program 3
// let A = 10
// let B = 20

// // 10 + 20 = 30
// console.log(`${A} + ${20} = 30`)

//program 4
// let X = 50
// let Y = 50

// //what is the ans of 50 + 50 ?
// console.log(`what is the ans of ${X} + ${X} ? `)

// //console.log("what is the ans of ${X} + ${Y} ") // what is the ans of ${X} + ${Y}

// //program 5

// console.log(`${5+5}`) //10

