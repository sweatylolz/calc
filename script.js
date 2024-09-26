let displayValue = '';
let secondOperator = '';
let operatorChosen = '';
let clicked = false;
let calcDisplay = document.getElementById("display");
var numberbtns = document.querySelectorAll('.number');
var operatorbtns = document.querySelectorAll('operand');

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
}


  numberbtns.forEach(function (i) {
  i.addEventListener('click', function() {
    if(clicked === false) {
      displayValue = displayValue + i.value;
      calcDisplay.innerText = displayValue;
      console.log(displayValue);
      return displayValue
    }
    else {
      secondOperator = secondOperator + i.value;
      calcDisplay.innerText = secondOperator;
      console.log(secondOperator)
      return secondOperator;
    }
  });
});


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
    if(operatorChosen === '/' && secondOperator === 0) {
        document.getElementById("display").textContent = 'yikes';
        // console.log('yikes');
        displayValue = 0;
        secondOperator = null;
        operatorChosen = '';
    }
    //incase = is hit before an operator or second number is input
    else if(operatorChosen === '' || secondOperator === null) {
        clearFunction();
    }
    else {
    let a = displayValue;
    let b = secondOperator;
    let operator = operatorChosen;
    let equals = operate(a, b, operator);
    displayValue = equals;
    document.getElementById("display").textContent = Math.round(equals * 100) / 100;
    // console.log(equals);
    }
 }

const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener("click", clearFunction)
function clearFunction() {
    document.getElementById("display").textContent = '';
    operatorChosen = '';
    displayValue = 0;
    secondOperator = null;
}