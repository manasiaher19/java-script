//js =>user interaction

//windows(object)==>document 

document.querySelector("h1").addEventListener("click", function () {
    document.querySelector('h1').style.color = "blue"
    document.querySelector('h1').style.backgroundColor = "pink"
    document.querySelector('ol').style.backgroundColor = "yellow"
})

// document.querySelector("ol").addEventListener("mousemove", function () {
//     document.querySelector('ol').style.backgroundColor = "yellow"
// })