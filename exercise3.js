// exercise 11

var myArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function myFunc(myArray) {
    var repeated = [];
  for (let i = 0; i < myArray.length; i++){
    for (let x = (i+1); x < myArray.length; x++){
      if (myArray[i] === myArray[x]) {
          repeated.push(myArray[x]);
      }
    }
  }
  return repeated;
}

console.log(myFunc(myArray));

// exercise 12

let myColor = ["Red", "Green", "White", "Black"];

function stringOf(myColor) {
    let myString = '"' + myColor.join('","') + '"';
    console.log(myString)
}

stringOf(myColor);

// exercise 13

let num = 32443

function reverseNum(num) {
  console.log(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  )
}

reverseNum(num);

// exercise 14

let word = "webmaster"

function orderAlph(word) {
  console.log(
    word
      .split("")
      .sort()
      .join("")
  )
}

orderAlph(word);

// exercise 15

let strOf = "prince of persia"

function upperPersia(strOf) {
  let strPersia = strOf.split(" ");
  for (let i = 0; i < strPersia.length; i++) {
    strPersia[i] = strPersia[i].charAt(0).toUpperCase() + strPersia[i].slice(1);
  }
  let strPrince = strPersia.join(" ");
  console.log(strPrince)

}

upperPersia(strOf);

// exercise 16

var strWeb = "Web Development Tutorial"
var webSplit = strWeb.split(" ");

function longestSearch(webSplit)
  {
    var longestW = webSplit[0].length;
    var alsoMe = webSplit[0];
    for (var i = 1; i < webSplit.length; i++){
      var lWord = webSplit[i].length;
      if (lWord > longestW) {
          alsoMe = webSplit[i];
          longestW = lWord;
      }   
    }
  return alsoMe
}

console.log(longestSearch(webSplit));