var buttonClear = document.getElementById("clear"),
    buttonDivide = document.getElementById("divide"),
    buttonMultiply = document.getElementById("multiply"),
    buttonSubtr = document.getElementById("subtract"),
    buttonEqual = document.getElementById("equal"),
    buttonAdd = document.getElementById("addition"),
    button1 = document.getElementById("digit-1"),
    button2 = document.getElementById("digit-2"),
    button3 = document.getElementById("digit-3"),
    button4 = document.getElementById("digit-4"),
    button5 = document.getElementById("digit-5"),
    button6 = document.getElementById("digit-6"),
    button7 = document.getElementById("digit-7"),
    button8 = document.getElementById("digit-8"),
    button9 = document.getElementById("digit-9"),
    button0 = document.getElementById("digit-0"),
    buttonPoint = document.getElementById("digit-point"),
    display = document.getElementById("display");

var firstNumber = null,
    currentNumber = null,
    currentAction = null;

buttonClear.addEventListener("click", clear);
buttonDivide.addEventListener("click", divide);
buttonMultiply.addEventListener("click", multiply);
buttonSubtr.addEventListener("click", subtract);
buttonAdd.addEventListener("click", addition);

button1.addEventListener("click", digit1);
button2.addEventListener("click", digit2);
button3.addEventListener("click", digit3);
button4.addEventListener("click", digit4);
button5.addEventListener("click", digit5);
button6.addEventListener("click", digit6);
button7.addEventListener("click", digit7);
button8.addEventListener("click", digit8);
button9.addEventListener("click", digit9);
button0.addEventListener("click", digit0);

function clear(){
    display.value = "";
    firstNumber = null;
    currentNumber = null;
    currentAction = null;
}

function divide() {
    if (checkFirstNumber()==false)
        return
    checkSecondNumber();
    activeAction = "divide";
    refreshFirstNumber()
}

function multiply() {
    if (checkFirstNumber()==false)
        return
    checkSecondNumber();
    activeAction = "multiply";
    refreshFirstNumber()
}

function subtract() {
    if (checkFirstNumber()==false)
        return
    checkSecondNumber();
    activeAction = "subtract";
    refreshFirstNumber()
}

function addition() {
    if (checkFirstNumber()==false)
        return
    checkSecondNumber();
    activeAction = "addition";
    refreshFirstNumber()
}


        function checkFirstNumber() {
            if (firstNumber==null && currentNumber==null) {
                alert("You didn't input first number");
                return false
            }
            if (firstNumber == null) {
                firstNumber = currentNumber;
                currentNumber = null;
            }
        }


function checkSecondNumber() {
    if (firstNumber != null && currentNumber != null)
        alert("You can calculate only two numbers");
}

function digit1() {
    isNumberNull();
    currentNumber = currentNumber + "1";
    refreshInput();
}
function digit2() {
    isNumberNull();
    currentNumber = currentNumber + "2";
    refreshInput();
}
function digit3() {
    isNumberNull();
    currentNumber = currentNumber + "3";
    refreshInput();
}
function digit4() {
    isNumberNull();
    currentNumber = currentNumber + "4";
    refreshInput();
}
function digit5() {
    isNumberNull();
    currentNumber = currentNumber + "5";
    refreshInput();
}
function digit6() {
    isNumberNull();
    currentNumber = currentNumber + "6";
    refreshInput();
}
function digit7() {
    isNumberNull();
    currentNumber = currentNumber + "7";
    refreshInput();
}
function digit8() {
    isNumberNull();
    currentNumber = currentNumber + "8";
    refreshInput();
}
function digit9() {
    isNumberNull();
    currentNumber = currentNumber + "9";
    refreshInput();
}
function digit0() {
    isNumberNull();
    currentNumber = currentNumber + "0";
    refreshInput();
}

function isNumberNull() {
    if (currentNumber == null)
        currentNumber = ""
}

function refreshInput() {
    display.value = currentNumber;
}

function refreshFirstNumber(){
    firstNumber = currentNumber;
    currentNumber = null;
}