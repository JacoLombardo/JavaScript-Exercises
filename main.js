// exercise 1

var myName = "Jacopo"
console.log(myName)

// exercise 2

var age = 28
console.log(age)

// exercise 3

var juliaAge = 32
console.log(age - juliaAge)

// exercise 4

if (age > 21) {
    console.log("You are older");
} else {
    console.log("You are younger");
}

// exercise 5

if (age > juliaAge) {
    console.log("Julia is younger than you");
} else if (age == juliaAge){
    console.log("You are the same age");
} else {
    console.log("Julia is older than you");
}

// exercise 6

const codePeople = ["Jacopo", "Victor", "Dickson", "Heron", "Sebastian", "Silvia", "Raul", "Lukas"]
codePeople.sort()
console.log(codePeople)
console.log(codePeople[0])
console.log(codePeople[7])


for (let i = 0; i < codePeople.length; i++) {
    console.log(codePeople[i])
}