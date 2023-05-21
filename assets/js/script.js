let buffer = "0";
let operator = null;

function addNumber(number) {
    if (buffer === "0") {
        buffer = number;
    } else {
        buffer += number;
    }
    updateScreen(buffer);
}

function addDecimal() {
    if (buffer.indexOf(".") === -1) {
        buffer += ".";
        updateScreen(buffer);
    }
}

function clearInput() {
    buffer = "0";
    operator = null;
    updateScreen(buffer);
}

function addOperator(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
    lastNumber = buffer;
    buffer = "0";
}

function calculate() {
    if (operator === null) {
        return;
    }
    switch (operator) {
        case "+":
            buffer = parseFloat(lastNumber) + parseFloat(buffer);
            break;
        case "-":
            buffer = parseFloat(lastNumber) - parseFloat(buffer);
            break;
        case "*":
            buffer = parseFloat(lastNumber) * parseFloat(buffer);
            break;
        case "/":
            buffer = parseFloat(lastNumber) / parseFloat(buffer);
            break;
    }
    operator = null;
    lastNumber = buffer;
    updateScreen(buffer);
}

function updateScreen(displayValue) {
    var input = document.querySelector("#input");
    input.value = displayValue;
}

// `addNumber()` se encarga de agregar números al buffer. Si el buffer es igual a "0", entonces se reemplaza por el número ingresado; de lo contrario, se le agrega el número ingresado.

// `addDecimal()` agrega un punto decimal al buffer.

// `clearInput()` reinicia el buffer y el operador.

// `addOperator()` agrega un operador al buffer. Si ya hay un operador, se calcula el resultado.

// `calculate()` calcula el resultado basado en el operador elegido. La variable `lastNumber` se utiliza para almacenar el último número ingresado antes de agregar el operador al buffer.

// `updateScreen()` actualiza el valor del input en la pantalla.