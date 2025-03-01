let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculateResult() {
    if (previousInput === "" || currentInput === "") return;

    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error";
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}