// Get the current date and time and display it
function updateDateTime() {
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    const formattedDate = now.toLocaleString();
    dateElement.textContent = `Current Date & Time: ${formattedDate}`;
}

setInterval(updateDateTime, 1000); // Update every second

// Calculator variables
let currentInput = "";
let operator = "";
let firstNum = null;

// Function to add numbers to the display
function appendNumber(num) {
    currentInput += num;
    document.getElementById('result').textContent = currentInput;
}

// Function to add operators
function appendOperator(op) {
    if (currentInput !== "") {
        firstNum = parseFloat(currentInput);
        operator = op;
        currentInput = "";
    }
}

// Function to clear the display
function clearDisplay() {
    currentInput = "";
    document.getElementById('result').textContent = "0";
    firstNum = null;
    operator = "";
}

// Function to calculate the result
function calculateResult() {
    if (firstNum !== null && currentInput !== "") {
        let secondNum = parseFloat(currentInput);
        let result = 0;
        switch (operator) {
            case "+":
                result = firstNum + secondNum;
                break;
            case "-":
                result = firstNum - secondNum;
                break;
            case "*":
                result = firstNum * secondNum;
                break;
            case "/":
                result = firstNum / secondNum;
                break;
        }
        document.getElementById('result').textContent = result;
        firstNum = null;
        operator = "";
        setTimeout(() => {
            alert("You completed your arithmetic operation");
        }, 500);
    }
}

// Toggle Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = "Light Mode";
    } else {
        darkModeToggle.textContent = "Dark Mode";
    }
};

// Event listener for the dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
