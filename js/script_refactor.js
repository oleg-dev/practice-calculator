var buttonClear = document.getElementById("clear"),
    buttonEqual = document.getElementById("equal"),
    display = document.getElementById("display"),
    actionElements = document.getElementsByClassName("action"),
    digitElements = document.getElementsByClassName("symbol");

var firstNumber = null,
    currentNumber = null,
    currentAction = null;

buttonClear.addEventListener("click", clear);
buttonEqual.addEventListener("click", equal);

[].forEach.call(actionElements, function (item) {
    item.addEventListener("click", functionListener);
    function functionListener(){
        if (firstNumber == null && currentNumber == null) {
            alert("You didn't input first number");
        } else {
            if (firstNumber == null) {
                refreshFirstNumber();
            }
        }
        currentAction = item.getAttribute("data-value");
    }
});

[].forEach.call(digitElements, function (item) {
    item.addEventListener("click", functionListener);
    function functionListener(){
        if (item.getAttribute("data-value")=="." && (currentNumber == null || (currentNumber.indexOf(".") != -1))) {
            alert("Incorrect input");
            return
        }
        isNumberNull();
        currentNumber = currentNumber + item.getAttribute("data-value");
        refreshInput();
    }
});

function clear(){
    display.value = "";
    firstNumber = null;
    currentNumber = null;
    currentAction = null;
}

function equal(){
    switch (currentAction) {
        case "divide":
            currentNumber = firstNumber / currentNumber;
            break;
        case "multiply":
            currentNumber = firstNumber * currentNumber;
            break;
        case "subtract":
            currentNumber = firstNumber - currentNumber;
            break;
        case "addition":
            currentNumber = +firstNumber + +currentNumber;
    }
    refreshInput();
    firstNumber = null;
    currentAction = null;
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