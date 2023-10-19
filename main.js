let a = '';
let operator = '';
let result = '';

let previousNumber = document.querySelector('#previous-number');
let currentNumber = document.querySelector('#current-number');

currentNumber.textContent = '0';

const handleClickSignButton = () => {
    if (a.includes('-')) {
        a = a.slice(1);
    } else {
        a = '-'.concat(a);
    }
    currentNumber.textContent = a;
};

const signButton = document.querySelector('.sign');
signButton.addEventListener('click', handleClickSignButton);

const handleClickNumberButton = (e) => {
    // console.log(a);
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

const handlePercentage = () => {
    if (result != 0) {
        const percentage = (parseInt(a) * result) / 100;
        result = operate(operator, result, percentage);
        previousNumber.textContent = result;
        currentNumber.textContent = result;
        a = '';
        operator = '';
    } else {
        handleClickClearButton();
    }
};

const findOperator = (e) => {
    if (typeof e.target === 'object') {
        return e.target.textContent;
    } else if (typeof e === 'string') {
        return e;
    }
};

const handleClickOperatorButton = (e) => {
    if (e.target.dataset.key === '192') {
        handlePercentage();
    } else {
        if (result && operator) {
            result = operate(operator, result, parseInt(a));
            operator = '';
        } else if (result && !operator) {
            operator = findOperator(e);
        } else {
            result = parseInt(a);
        }
        if (!operator) {
            operator = findOperator(e);
        }

        previousNumber.textContent = `${result} ${operator}`;
        currentNumber.textContent = result;
        a = '';
    }
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
    currentNumber.textContent = 0;
};

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', handleClickClearButton);

const handleKeyDown = (e) => {
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

        case 'x':
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

const percentage = (a, b) => {
    return (b / 100) * a;
};
// let a = '';
// let operator = '';
// let result = '';

// let previousNumber = document.querySelector('#previous-number');
// let currentNumber = document.querySelector('#current-number');

// currentNumber.textContent = '0';

// const handleClickSignButton = () => {
//     if (a.includes('-')) {
//         a = a.slice(1);
//     } else {
//         a = '-'.concat(a);
//     }
//     currentNumber.textContent = a;
// };

// const signButton = document.querySelector('.sign');
// signButton.addEventListener('click', handleClickSignButton);

// const handleClickNumberButton = (e) => {
//     // console.log(a);
//     if (typeof e.target === 'object') {
//         a += e.target.textContent;
//     } else if (typeof e === 'string') {
//         a += e;
//     }
//     currentNumber.textContent = a;
// };

// const numberButtons = document.querySelectorAll('.number');
// numberButtons.forEach((button) => {
//     button.addEventListener('click', handleClickNumberButton);
// });

// const handlePercentage = () => {
//     if (result != 0) {
//         const percentage = (parseInt(a) * result) / 100;
//         result = operate(operator, result, percentage);
//         previousNumber.textContent = result;
//         currentNumber.textContent = result;
//         a = '';
//         console.log(result);
//     } else {
//         handleClickClearButton();
//     }
// };

// const findOperator = (e) => {
//     console.log('find');
//     if (typeof e.target === 'object') {
//         operator = e.target.textContent;
//     } else if (typeof e === 'string') {
//         operator = e;
//     }
// };

// const handleClickOperatorButton = (e) => {
//     console.log(operator);
//     if (e.target.dataset.key === '192') {
//         handlePercentage();
//     } else {
//         if (result && operator) {
//             result = operate(operator, result, parseInt(a));
//         } else if (result && !operator) {
//             findOperator(e);
//         } else {
//             result = parseInt(a);
//         }

//         console.log(result);
//         previousNumber.textContent = `${result} ${operator}`;
//         currentNumber.textContent = result;
//         a = '';
//     }
// };

// const operatorButtons = document.querySelectorAll('.operator');
// operatorButtons.forEach((button) => {
//     button.addEventListener('click', handleClickOperatorButton);
// });

// const handleClickEqualButton = () => {
//     result = operate(operator, result, parseInt(a));

//     previousNumber.textContent = null;
//     currentNumber.textContent = result;
//     a = 0;
// };

// const equalButton = document.querySelector('.equal');
// equalButton.addEventListener('click', handleClickEqualButton);

// const handleClickClearButton = () => {
//     a = '';
//     result = '';
//     operator = '';

//     previousNumber.textContent = null;
//     currentNumber.textContent = 0;
// };

// const clearButton = document.querySelector('.clear');
// clearButton.addEventListener('click', handleClickClearButton);

// const handleKeyDown = (e) => {
//     if (e.code.includes('Numpad') || e.code.includes('Digit')) {
//         if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
//             handleClickOperatorButton(e.key);
//         } else if (e.key === 'Enter' || e.key === ' ') {
//             handleClickEqualButton();
//         } else {
//             handleClickNumberButton(e.key);
//         }
//     } else if (e.key === 'Backspace' || e.key === 'Escape' || e.key === 'Delete') {
//         handleClickClearButton();
//     }
// };

// window.addEventListener('keydown', handleKeyDown);

// const operate = (operator, a, b) => {
//     switch (operator) {
//         case '+':
//             return add(a, b);

//         case '-':
//             return subtract(a, b);

//         case '*':
//             return multiply(a, b);

//         case '/':
//             return divide(a, b);

//         case '%':
//             return percentage((a, b));
//     }
// };

// const add = (a, b) => {
//     return a + b;
// };

// const subtract = (a, b) => {
//     return a - b;
// };

// const multiply = (a, b) => {
//     return a * b;
// };

// const divide = (a, b) => {
//     return a / b;
// };

// const percentage = (a, b) => {
//     return (b / 100) * a;
// };
