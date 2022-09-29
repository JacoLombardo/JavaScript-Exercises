// exercise 19

function multiply(a, b) {
    console.log(a * b);
}

multiply(5, 7);

// exercise 20

function multiply2(a, b) {
    var result = a * b;
    return result;
}

console.log(multiply2(5, 2));

// exercise 21

function multiply3(a, b) {
    var result = a * b;
    return result;
}

console.log(multiply3(2, 7));
console.log(multiply3(43, 6));
console.log(multiply3(22, 4));

// exercise 22

var side1
var side2
var side3

function triAngle(side1, side2, side3) {
    if (side1 === side2 && side2 !== side3 && side3 !== side1 ||
        side1 !== side2 && side2 === side3 && side3 !== side1 ||
        side1 !== side2 && side2 !== side3 && side3 === side1) {
        var result = "isosceles";
        return result;
    }
    if (side1 === side2 && side2 === side3) {
        var result = "equilateral";
        return result;
    }
    if (side1 !== side2 || side2 !== side3 || side3 !== side1) {
        var result = "scalene";
        return result;
    }

    console.log(result);
}

console.log(triAngle(3, 4, 5));
console.log(triAngle(3, 3, 3));
console.log(triAngle(4, 3, 3));

// exercise 23

var word = "Javascript"


function replaceA(word) {
    let newWord = word.replaceAll("a", 1);
    return newWord;
}

console.log(replaceA(word));

// exercise 24

let listA = [6, 4, 13, 56, 37]

function sumUp(listA) {
    let summA = 0
    for (let i = 0; i < listA.length; i++){
        summA += listA[i];
    }
    console.log(summA);
}

sumUp(listA);


function minIma(listA) {
    let min = listA[0]
    for (let i = 0; i < listA.length; i++){
        if (listA[i] < min) {
            min = listA[i];
        }
    }
    console.log(min);
}

minIma(listA);

// exercise 25

function addEven(listA) {
    let summA = 0
    for (let i = 0; i < listA.length; i++) {
        if (listA[i] % 2 === 0) {
            summA += listA[i];
        }
    }
    return summA;
}

console.log(addEven(listA));

// exercise 26

function addEven2(listA) {
    let summA = 0
    for (let i = 0; i < listA.length; i++) {
        if (i % 2 === 0) {
            summA += listA[i];
        }
    }
    return summA;
}

console.log(addEven2(listA));

// exercise 27

function even1(a) {
    let evenArray = [];
    for (let i = 0; i < a; i++){
        if (i % 2 === 0) {
            evenArray.push(i);
        }
    }
    return evenArray;
}

console.log(even1(9));

// exercise 28

function oddY(a, b) {
    let oddArray = [];
    if (a < b) {
        for (i = a; i <= b; i++){
            if (i % 2 !== 0) {
                oddArray.push(i);
            }
        }
    }
    if (a > b) {
        for (i = b; i <= a; i++){
            if (i % 2 !== 0) {
                oddArray.push(i);
            }
        }
    }
    return oddArray
}

console.log(oddY(43, 56));
