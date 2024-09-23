let displayValue = 0;
let secondOperator = 0;
let thirdOperator = 0;
let operatorChosen = '';



function add(a,b) {
    return a + b;
  }
  
function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

function multiply(a,b) {
    return a * b;
}

function operate(a, b, operator) {
    if(operator === '+') return add(a,b);
    else if (operator === '-') return subtract(a,b);
    else if (operator === '*') return multiply(a,b);
    else if (operator === '/') return divide(a,b);
    else throw "Unknown operator";
}


// *** assigns numbers when buttons are clicked 
const onebtn = document.querySelector('#one');
 onebtn.addEventListener("click", oneFunction)
 function oneFunction() {
    document.getElementById("display").textContent = "1";
    if(displayValue == 0){
        return displayValue = 1;
    }
    else {
        return secondOperator = 1;
    }
 }

 const twobtn = document.querySelector('#two');
 twobtn.addEventListener("click", twoFunction) 
 function twoFunction() {
    document.getElementById("display").textContent = "2";
    if(displayValue == 0){
        return displayValue = 2;
    }
    else {
        return secondOperator = 2;
    }
 }

 const threebtn = document.querySelector('#three');
 threebtn.addEventListener("click", threeFunction) 
 function threeFunction() {
    document.getElementById("display").textContent = "3";
    if(displayValue == 0){
        return displayValue = 3;
    }
    else {
        return secondOperator = 3;
    }
 }

 const fourbtn = document.querySelector('#four');
 fourbtn.addEventListener("click", fourFunction) 
 function fourFunction() {
    document.getElementById("display").textContent = "4";
    if(displayValue == 0){
        return displayValue = 4;
    }
    else {
        return secondOperator = 4;
    }
 }

 const fivebtn = document.querySelector('#five');
 fivebtn.addEventListener("click", fiveFunction) 
 function fiveFunction() {
    document.getElementById("display").textContent = "5";
    if(displayValue == 0){
        return displayValue = 5;
    }
    else {
        return secondOperator = 5;
    }
 }
 
 const sixbtn = document.querySelector('#six');
 sixbtn.addEventListener("click", sixFunction) 
 function sixFunction() {
    document.getElementById("display").textContent = "6";
    if(displayValue == 0){
        return displayValue = 6;
    }
    else {
        return secondOperator = 6;
    }
 }

 const sevenbtn = document.querySelector('#seven');
 sevenbtn.addEventListener("click", sevenFunction) 
 function sevenFunction() {
    document.getElementById("display").textContent = "7";
    if(displayValue == 0){
        return displayValue = 7;
    }
    else {
        return secondOperator = 7;
    }
 }

 const eightbtn = document.querySelector('#eight');
 eightbtn.addEventListener("click", eightFunction) 
 function eightFunction() {
    document.getElementById("display").textContent = "8";
    if(displayValue == 0){
        return displayValue = 8;
    }
    else {
        return secondOperator = 8;
    }
 }

 const ninebtn = document.querySelector('#nine');
 ninebtn.addEventListener("click", nineFunction) 
 function nineFunction() {
    document.getElementById("display").textContent = "6";
    if(displayValue == 0){
        return displayValue = 9;
    }
    else {
        return secondOperator = 9;
    }
 }



 //// operator buttons 
 const addbtn = document.querySelector('#add');
 addbtn.addEventListener("click", addFunction) 
 function addFunction() {
    if(operatorChosen == ''){
        return operatorChosen = '+';
    }
    else {
        return operatorChosen = '+';
    }
 }

 const subtractbtn = document.querySelector('#subtract');
 subtractbtn.addEventListener("click", subtractFunction)
 function subtractFunction() {
    if(operatorChosen == ''){
        return operatorChosen = '-';
    }
    else {
        return operatorChosen = '-';
    }
 }

 const multiplybtn = document.querySelector('#multiply');
 multiplybtn.addEventListener("click", multiplyFunction)
 function multiplyFunction() {
    if(operatorChosen == ''){
        return operatorChosen = '*';
    }
    else {
        return operatorChosen = '*';
    }
 }

 const dividebtn = document.querySelector('#divide');
 dividebtn.addEventListener("click", divideFunction)
 function divideFunction() {
    if(operatorChosen == ''){
        return operatorChosen = '/';
    }
    else {
        return operatorChosen = '/';
    }
 }

 const operatebtn = document.querySelector('#equals');
 operatebtn.addEventListener("click", operateFunction) 
 function operateFunction() {
    let a = displayValue;
    let b = secondOperator;
    let operator = operatorChosen;
    let equals = operate(a, b, operator);
    displayValue = equals;
    document.getElementById("display").textContent = equals;
    console.log(equals);
 }

const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener("click", clearFunction)
function clearFunction() {
    document.getElementById("display").textContent = '';
    operatorChosen = '';
    displayValue = 0;
    secondOperator = 0;
    thirdOperator = 0;
}