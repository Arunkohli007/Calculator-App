


function appendValue(value) {
    var currentInput = document.getElementById('result').value;
    var newValue = currentInput + value;
    document.getElementById('result').value = newValue;
}

// Function to calculate and display the result
function calculateResult() {
    var currentInput = document.getElementById('result').value;

    try {
        var result = eval(currentInput); // Using eval for simplicity (exercise caution in a production environment)
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Function to clear the input field
function allClear() {
    document.getElementById('result').value = '';
}