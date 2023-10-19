let previousNumber = document.querySelector('#previous-number');
let currentNumber = document.querySelector('#current-number');

let current = '';
let operator = '';
let result = null;

const updateDisplay = () => {
    currentNumber.textContent = current || '0';
    previousNumber.textContent = result !== null ? `${result} ${operator}` : '';
};

const handleSignButtonClick = () => {
    current = current.startsWith('-') ? current.slice(1) : `-${current}`;
    updateDisplay();
};

const handleNumberButtonClick = (e) => {
    current += e;
    updateDisplay();
};

const handlePercentageButtonClick = () => {
    if (result != 0) {
        const percentage = (parseFloat(current) * result) / 100;
        result = operate(operator, result, percentage);

        current = '';
        operator = '';
        previousNumber.textContent = result;
    } else {
        handleClickClearButton();
    }
};

const handleOperatorButtonClick = (value) => {
    value === '*' && (value = 'x');
    if (result !== null && operator) {
        result = operate(operator, result, parseFloat(current));
    } else if (result === null) {
        result = parseFloat(current);
    }
    current = '';
    operator = value;
    updateDisplay();
};

const handleEqualButtonClick = () => {
    if (result !== null) {
        previousNumber.textContent = `${result} ${operator} ${current}`;
        result = operate(operator, result, parseFloat(current));
        result && (currentNumber.textContent = result);
        current = '';
        operator = '';
    }
};

const handleDotButtonClick = () => {
    if (current.includes('.')) {
        return;
    } else {
        current = `${current}.`;
        updateDisplay();
    }
};

const handleDeleteButtonClick = () => {
    current = current.slice(0, -1);
    updateDisplay();
};

const handleClearButtonClick = () => {
    current = '';
    operator = '';
    result = null;

    updateDisplay();
};

const handleKeyboardInput = (e) => {
    console.log(e.key);
    if (e.key >= '0' && e.key <= '9') {
        handleNumberButtonClick(e.key);
    } else if (['+', '-', '*', '/'].includes(e.key)) {
        handleOperatorButtonClick(e.key);
    } else if ('%'.includes(e.key)) {
        handlePercentageButtonClick(e.key);
    } else if (e.key === 'Enter') {
        handleEqualButtonClick();
    } else if (e.key === 'Delete') {
        handleClearButtonClick();
    } else if (e.key === 'Backspace') {
        handleDeleteButtonClick();
    } else if (e.key === '.') {
        handleDotButtonClick();
    }
};

document.addEventListener('keydown', handleKeyboardInput);

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('sign')) {
        handleSignButtonClick();
    } else if (e.target.classList.contains('number')) {
        handleNumberButtonClick(e.target.textContent);
    } else if (e.target.classList.contains('operator')) {
        handleOperatorButtonClick(e.target.textContent);
    } else if (e.target.classList.contains('percentage')) {
        handlePercentageButtonClick();
    } else if (e.target.classList.contains('equal')) {
        handleEqualButtonClick();
    } else if (e.target.classList.contains('clear')) {
        handleClearButtonClick();
    } else if (e.target.classList.contains('delete')) {
        handleDeleteButtonClick();
    } else if (e.target.classList.contains('dot')) {
        handleDotButtonClick();
    }
});

const operate = (operator, a, b) => {
    if (!operator || !a || !b) {
        currentNumber.textContent = 'error';
    }
    switch (operator) {
        case '+':
            return add(a, b);

        case '-':
            return subtract(a, b);

        case 'x':
            return multiply(a, b);

        case '/':
            if (b === 0) {
                alert(
                    "Dividing by zero? Nice try, but I can't make the impossible happen. Please choose a different number to divide by. 😉"
                );
                handleClearButtonClick();
            } else {
                return divide(a, b);
            }
    }
};

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};
