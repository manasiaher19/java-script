
//program 1
//object inside arr
//print skill
let Student = [
    {
        firstname: "manasi",
        rolno: 34,
        skill: "javascript"
    },
    {
        firstname: "satish",
        rolno: 66,
        skill: "css"
    }
]

let [{ skill: s1 }, { skill: s2 }] = Student
console.log(s2) //css
console.log(s1, s2)//javascript css

//program 2
//arr inside object
//print mark 99
let S = {
    fname: "jay",
    lname: "jadhav",
    marks: [34, 56, 78, 99]
}

let { marks: [a1, a2, a3, a4] } = S
console.log(a4)  //99

//program 3
//print mayuri,javascript & salary
let Person = {
    firstName: "manasi",
    family: {
        father: "popat",
        mother: "anita",
        sister: [
            {
                name1: "manjusha",
                age: 23
            },
            {
                name1: "mayuri",
                age: 20
            },
            {
                name1: "samiksha",
                age: 17,
                skills: ["html", "css", "javascript"],
                employeeDetails: {
                    empId: 2222,
                    salary: 45000
                }
            }
        ]
    }
}

let { family: { sister: [{ }, { name1: n1 }, { skills: [q1, q2, q3], employeeDetails: { salary } }] } } = Person
console.log(n1) //mayuri
console.log(q3) //javascript
console.log(salary)//45000

//program 4
//print 1) dhanesh 70  2) sai & javascript
let Home = {
    ownername: "Ram",
    surname: "Yadav",
    family: [
        {
            membername: "ganesh",
            age: 40,
            hobby: ["reading", "singing",]
        },
        {
            membername: "gita",
            age: 20,
            hobby: ["reading", "dancing", "singing"]
        },
        {
            membername: "Dhanesh",
            age: 70,
            grandson: [
                {
                    gname: "manish",
                    skill: ["java", "html"]
                },
                {
                    gname: "ravi",
                    skill: ["java", "css", "cypress"]
                },
                {
                    gname: "sai",
                    skill: ["javascript", "html", "python"]
                },
            ]
        },
    ]
}

let { family: [{ hobby:[h1,h2]}, { hobby:[h11,h12,h13]}, { membername: m, age, grandson: [{ }, { }, { gname, skill: [x, y, z] }] }] } = Home
console.log(m, age)   //Dhanesh 70
console.log(gname, x)  //sai javascript
console.log(h1,h13) //reading singing

//program 5
