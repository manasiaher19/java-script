
//STRING

// let name = "Manasiiiiiii"
// // 0  1  2  3  4  5
// // M  a  n  a  s  i
// console.log(name[0])
// console.log(name[4])
// console.log(name.length)
// console.log(name[name.length - 1])
// console.log(typeof name) //string

//================================================================================
//By using for loop

//program 1
// let name = "Manasi"
// for(let i=0;i<name.length;i++){
//     //console.log(i) //index
//     console.log(name[i]) //characters
// }

// //program 2
// let student = "Manish"
// for (i = student.length - 1; i >= 0; i--) {
//     //console.log(i) // reverse index
//     console.log(student[i])// reverse characters
// }

//program 3
//print reverse string
// let friend = "Diksha"
// let rev = ""
// for (i = friend.length - 1; i >= 0; i--) {
//     //console.log(i)
//     rev = rev + friend[i]

// }
// console.log(rev)

//program 4
//print same string
// let friend = "Diksha"
// let same = ""
// for (i = friend.length - 1; i >= 0; i--) {
//     //console.log(i)
//     same = friend[i] + same
//          a       + ""  =>a
//  a    =  h       + a   =>ha
//  ha   =  s       + ha  =>sha
//  sha  =  k       + sha =>ksha
//  ksha =  i       + ksha => iksah
//  iksah=  D       + iksah =>Diksah
// }
// console.log(same)

//program 5
//by using methods revers string

// let city = "Pune"
// console.log(city.split("").reverse().join(""))
// // [ 'P', 'u', 'n', 'e' ] .[ 'e', 'n', 'u', 'P' ].enuP

//program 6
//by using methods same string
// let city = "Pune"
// console.log(city.split("").join(""))
//[ 'P', 'u', 'n', 'e' ] .Pune

//program 7
//find how many vowels in the string (aeiou)
// let firstName = "MayuriRoa"
// let count = 0
// for (let i = 0; i < firstName.length; i++) {
//     if (firstName[i] == 'a' || firstName[i] == 'e' || firstName[i] == 'i' || firstName[i] == 'o' || firstName[i] == 'u') {
//         count = count + 1
//     }
// }
// console.log(count)

// //program 8
// //find vowels aeiou (aai==3)
// let Name = "Manasi"
// let Count = 0
// for (let i = 0; i < Name.length; i++) {
//     if (Name[i] == 'a' || Name[i] == 'e' || Name[i] == 'i' || Name[i] == 'o' || Name[i] == 'u') {
//         Count = Count + 1
//     }
// }
// console.log(Count)

//program 9
//count how many r 
let fri ="Meherrr"
let count =0
for(let i=0;i<fri.length;i++){
    if(fri[i]=='r'){
      count = count + 1
    }
}
console.log(count) //3