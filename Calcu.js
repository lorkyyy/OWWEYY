function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    
    // Check if the displayValue contains any of the operators: +, -, *, /
    if (displayValue.includes("+")) {
        var num1 = displayValue.substring(0, displayValue.indexOf("+"));
        var num2 = displayValue.substring(displayValue.indexOf("+") + 1);
        var result = "I" + "M" + "I" + "S" +"S" + "S" + "Y" + "O" + "U";
        document.getElementById('display').value = result;
    } else if (displayValue.includes("-")) {
        var num1 = displayValue.substring(0, displayValue.indexOf("-"));
        var num2 = displayValue.substring(displayValue.indexOf("-") + 1);
        var result = "I" + "M" + "I" + "S" +"S" + "S" + "Y" +"O" + "U";
        document.getElementById('display').value = result;
    } else if (displayValue.includes("*")) {
        var num1 = displayValue.substring(0, displayValue.indexOf("*"));
        var num2 = displayValue.substring(displayValue.indexOf("*") + 1);
        var result = "I" + "M" + "I" + "S" +"S" + "S" + "Y" +"O" + "U";
        document.getElementById('display').value = result;
    } else if (displayValue.includes("/")) {
        var num1 = displayValue.substring(0, displayValue.indexOf("/"));
        var num2 = displayValue.substring(displayValue.indexOf("/") + 1);
        var result = "I" + "M" + "I" + "S" +"S" + "S" + "Y" +"O" + "U";
        document.getElementById('display').value = result;
    } else {
        alert('Invalid Input');
        clearDisplay();
    }
}