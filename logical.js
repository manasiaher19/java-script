// logical operators

// AND && 

// true   &&   true   ======> true
// false  &&   true   ======> false
// true   &&   false  ======> false
// false  &&   false  ======> false

console.log(7!=='7' && 8!==9)
console.log(7==='7' && 8!==9)
console.log(7===7 && 8===9)
console.log(7==='7' && 8===9)

console.log(5===4 && 4!=='4')
console.log(10!==5 && 10 ===10)


// OR  ||
// true   ||   true   ======> true
// false  ||   true   ======> true
// true   ||   false  ======> true
// false  ||   false  ======> false 

console.log(7 == 7 || 8 == 8)
console.log(7 != 7 || 8 == 8)
console.log(7 == 7 || 8 != 8)
console.log(7 != 7 || 8 != 8)

console.log(3!=='2'|| 4==='4')
console.log(5==='5' || 3!==4)


// Not  !

//True   --- False 
// False --- True

console.log(!(5!==4))
console.log(!(7>=10))
