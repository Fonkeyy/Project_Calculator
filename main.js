let a = '';
let operator = '';
let result = '';

let previousNumber = document.querySelector('#previous-number');
let currentNumber = document.querySelector('#current-number');

const handleClickNumberButton = (e) => {
    console.log(a);
    if (typeof e.target === 'object') {
        a += e.target.textContent;
    } else if (typeof e === 'string') {
        a += e;
    }
    currentNumber.textContent = a;
};

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', handleClickNumberButton);
});

const handleClickOperatorButton = (e) => {
    if (result) {
        result = operate(operator, result, parseInt(a));
    } else {
        result = parseInt(a);
    }
    if (typeof e.target === 'object') {
        operator = e.target.textContent;
    } else if (typeof e === 'string') {
        operator = e;
    }

    previousNumber.textContent = `${result} ${operator}`;
    currentNumber.textContent = result;
    a = '';
};

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', handleClickOperatorButton);
});

const handleClickEqualButton = () => {
    result = operate(operator, result, parseInt(a));

    previousNumber.textContent = null;
    currentNumber.textContent = result;
    a = 0;
};

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', handleClickEqualButton);

const handleClickClearButton = () => {
    a = '';
    result = '';
    operator = '';

    previousNumber.textContent = null;
    currentNumber.textContent = null;
};

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', handleClickClearButton);

const handleKeyDown = (e) => {
    console.log(e);
    if (e.code.includes('Numpad') || e.code.includes('Digit')) {
        if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            handleClickOperatorButton(e.key);
        } else if (e.key === 'Enter' || e.key === ' ') {
            handleClickEqualButton();
        } else {
            handleClickNumberButton(e.key);
        }
    } else if (e.key === 'Backspace' || e.key === 'Escape' || e.key === 'Delete') {
        handleClickClearButton();
    }
};

window.addEventListener('keydown', handleKeyDown);

const operate = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b);

        case '-':
            return subtract(a, b);

        case '*':
            return multiply(a, b);

        case '/':
            return divide(a, b);
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
