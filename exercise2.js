// exercise 7

const codeAc = [21, 38, 43, 24, 18, 59, 31, 30]


function myFuc1(codeAc) {
    let i = 0
    while (i < codeAc.length) {
        console.log(codeAc[i]);
        codeAc[i] % 2 == 0;
        i++;
    }
}
myFuc1(codeAc);

function myFunc2(codeAc) {
    for (let i = 0; i <= codeAc.length; i++) {
        if (codeAc[i] % 2 == 0) {
            console.log(codeAc[i])
        }
    }
}
myFunc2(codeAc);

// exercise 8

let min = codeAc[0]
function myMin(codeAc) {
    for (let i = 0; i < codeAc.length; i++) {
        if (codeAc[i] < min)
            min = codeAc[i];
    }
    console.log(min);
}
myMin(codeAc);

// exercise 9

let max = codeAc[0]
function myMax(codeAc) {
    for (let i = 0; i < codeAc.length; i++) {
        if (codeAc[i] > max)
            max = codeAc[i];
    }
    console.log(max);
}

myMax(codeAc);

// exercise 10

let myArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
let indexo = 1;

function myFuc3(myArray, indexo) {
    console.log(myArray.at(indexo))
}

myFuc3(myArray, indexo);