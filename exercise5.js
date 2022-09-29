// exercise 17

let mySection = document.querySelector("#band-list");
let myBands = ["Dire Straits", "Kansas", "Steely Dan"];

function addBands(myBands) {
    for (let i = 0; i < myBands.length; i++){
        const bandS = document.createElement("p");
        bandS.innerHTML = myBands[i];
        mySection.appendChild(bandS);
    }
}

addBands(myBands);

// exercise 18

let table1 = document.createElement("table")

function addTable(a, b) {
    for (let i = 0; i < a; i++){
        let tRow = document.insertRow()
        table1.appendChild(tRow)
        for (let j = 0; j < b; j++){
            let tCell = document.inserCell()
            table1.appendChild(tCell)
        }
    }
}

addTable(2, 5);