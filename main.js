let a = '';
let b = '';
let c = '';
let newOperator = '';
let operator = '';
let result = '';
let counter = 0;

let previousNumber = document.querySelector('#previous-number');
let currentNumber = document.querySelector('#current-number');

const numbersButton = document.querySelectorAll('.number');
numbersButton.forEach((button) => {
  button.addEventListener('click', addNumber);
});

/*window.addEventListener('keydown', checkKey);

function checkKey(e) {
  if (
    `.key[data-key="${e.keyCode}"]` == '192' ||
    '111' ||
    '106' ||
    '109' ||
    '107'
  ) {
    addOperator(e);
  } else if (`.number[data-key="${e.keyCode}"]` == '46') {
    clear();
  } else if (`.number[data-key="${e.keyCode}"]` == '13') {
    operate(e);
  } else {
    addNumber(e);
  }
}*/

function addNumber(e) {
  // const keyNumber = document.querySelector(`.number[data-key="${e.keyCode}"]`);
  currentNumber.textContent += e.target.textContent;
  // currentNumber.textContent += keyNumber.value;
  if (counter == 0) {
    a += parseInt(e.target.textContent);
  } else if (counter == 1) {
    b += parseInt(e.target.textContent);
  } else if (counter > 1 && counter % 2 == 0) {
    c += parseInt(e.target.textContent);
  } else {
    b += parseInt(e.target.textContent);
  }
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
  console.log('operator:', operator);
  console.log('counter:', counter);
}

const operatorsButton = document.querySelectorAll('.operator');
operatorsButton.forEach((button) => {
  button.addEventListener('click', addOperator);
});

function addOperator(e) {
  previousNumber.textContent +=
    currentNumber.textContent + ' ' + e.target.textContent + ' ';
  newOperator = e.target.textContent;
  counter++;
  // operate(operator, a, b);
  // a.textContent = currentNumber.textContent;

  if (counter >= 1 && c == '' /*counter % 2 == 0*/) {
    // a = parseInt(a) + parseInt(b);
    operate(operator, a, b);
    a = result;
    b = '';
  } else if (counter > 1 && b == '' /*counter % 2 !== 0*/) {
    // a = parseInt(a) + parseInt(c);
    operate(operator, a, parseInt(c));
    a = result;
    c = '';
  }
  operator = newOperator;
  newOperator = '';
  clearCurrent();
}

function clearCurrent() {
  currentNumber.textContent = '';
}

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => operate(operator, a, b));

function operate(operator, a, b) {
  // previousNumber.textContent += currentNumber.textContent;
  clearCurrent();
  switch (operator) {
    case '+':
      result = add(parseInt(a), parseInt(b));
      break;
    case '-':
      result = substract(parseInt(a), parseInt(b));
      break;
    case '*':
      result = multiply(parseInt(a), parseInt(b));
      break;
    case '/':
      result = divide(parseInt(a), parseInt(b));
      break;
  }
  currentNumber.textContent = result;
  console.log('result:', currentNumber.textContent);
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// console.log(a);
// console.log(b);
// console.log(operator);
// console.log(result);

/*function equals() {
  previousNumber.textContent += currentNumber.textContent + ' ' + '=';
  const arr = previousNumber.textContent.split(' ');
  operate(arr[1], arr[0], arr[2]);
}*/

/*function equals() {
  const arr = previousNumber.textContent.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if ((arr[1] = '+')) {
      result = add(arr[0], arr[2]);
    } else if ((arr[1] = '-')) {
      result = substract(arr[0], arr[2]);
    } else if ((arr[1] = '*')) {
      result = multiply(arr[0], arr[2]);
    } else if ((arr[1] = '/')) {
      result = divide(arr[0], arr[2]);
    }
    currentNumber.textContent = result;
  }
  console.log(arr);
}*/

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);

function clear() {
  counter = 0;
  a = '';
  b = '';
  currentNumber.textContent = '';
  previousNumber.textContent = '';
}
