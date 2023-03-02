

//Math.floor() ==> written small value in iteger
//Math.ceil() ==> written larg value in iteger
//Math.round() ==> wrriten .5 
//Math random()==>written value in betw 0.0 - 0.99

//============================================================

//Math.floor()
// console.log(Math.floor(2.5)) //2
// console.log(Math.floor(23.44))//23
// console.log(Math.floor(-12.77))//-13
// console.log(Math.floor(-0.7))//-1

//      -24   -23.5   -23 -14  -13.78  -13    -12.77   -12         -3 -2  -1  -0.7  0  1   2  2.5  3  4  5   63  63.5  64

//Math.ceil()
// console.log(Math.ceil(2.5))//3
// console.log(Math.ceil(23.44))//24
// console.log(Math.ceil(-23.5))//-23
// console.log(Math.ceil(0.7))//1
// console.log(Math.ceil(-13.78))//-13
//================================================================================

//Math.round()
// console.log(Math.round(12.67))//13
// console.log(Math.round(12.2))//12
// console.log(Math.round(13.44))//13
// console.log(Math.round(10.5))//11
// console.log(Math.round(12.0))//12
// console.log(Math.round(0.67))//1
// console.log(Math.round(1.666))//2
// console.log(Math.round(1.3))//1
// console.log(Math.round(0.44))//0
// console.log(Math.round(10.66))//11

//==========================================================================================

//Math.random()

//console.log(Math.random())// 0.0 - 0.99

//1 - 5 random

//console.log(Math.random()*5)// 0 - 4.95 (decimal)

//console.log(Math.floor(Math.random()*5)) //0-4 (integer)

console.log(Math.floor(Math.random()*5)+1) //0 - 5 (integer)