// Formula of Volume of Cylinder

// HTML Elements
let calcBtnEl = document.getElementById("calc");
let inputEl1 = document.getElementById("sideR");
let inputEl2 = document.getElementById("sideH");
let outputEl = document.getElementById("output");

// Event Listener
calcBtnEl.addEventListener("click", calculate);

// Event Function
function calculate() {
    // Get inputs
    let sideR = +inputEl1.value;
    let sideH = +inputEl2.value;
    
    // Calculate & Output
    outputEl.innerHTML = formulaFunction(sideR, sideH);
    console.log(sideR, sideH);
}

function formulaFunction(r, h) {
    return (Math.PI * r * r * h);
}