let a = '';
let b = '';
let operator = '';
let result = '';
let counter = 0;

let previousNumber = document.querySelector('#previous-number');
let currentNumber = document.querySelector('#current-number');

const numbersButton = document.querySelectorAll('.number');
numbersButton.forEach((button) => {
  button.addEventListener('click', addNumber);
});

function addNumber(e) {
  currentNumber.textContent += e.target.textContent;
  if (counter == 0) {
    a += parseInt(e.target.textContent);
  } else {
    b += parseInt(e.target.textContent);
  }
  console.log(a);
  console.log(b);
  console.log(operator); //Fonctionne dans la fonction mais pas au global
  console.log(result);
}

const operatorsButton = document.querySelectorAll('.operator');
operatorsButton.forEach((button) => {
  button.addEventListener('click', addOperator);
});

function addOperator(e) {
  previousNumber.textContent +=
    currentNumber.textContent + ' ' + e.target.textContent + ' ';
  operator += e.target.textContent;
  counter++;
  clearCurrent();
}

function clearCurrent() {
  currentNumber.textContent = '';
}

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', operate);

function operate(operator, a, b) {
  previousNumber.textContent += currentNumber.textContent;
  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = substract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      result = divide(a, b);
      break;
  }
  currentNumber.textContent = result;
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

console.log(a);
console.log(b);
console.log(operator);
console.log(result);

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
  currentNumber.textContent = '';
  previousNumber.textContent = '';
}
