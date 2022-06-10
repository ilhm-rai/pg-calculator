const numbers = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
const backspaceBtn = document.querySelector('.backspace');

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.textContent);
    updateScreen(currentNumber);
  });
});

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.textContent);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '0';
  updateScreen(currentNumber);
};

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = '';
  prevNumber = Number(prevNumber);
  currentNumber = Number(currentNumber);
  switch (calculationOperator) {
    case "+":
      result = prevNumber + currentNumber;
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "×":
      result = prevNumber * currentNumber;
      break;
    case "÷":
      result = prevNumber / currentNumber;
      break;

    default:
      return;
  }
  currentNumber = result.toString();
  calculationOperator = '';
};

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
};

decimal.addEventListener('click', () => {
  inputDecimal();
  updateScreen(currentNumber);
});

const inputDecimal = () => {
  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += '.';
};

backspaceBtn.addEventListener('click', () => {
  backspace();
  updateScreen(currentNumber);
});

const backspace = () => {
  currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  if (currentNumber.length < 1) {
    currentNumber = '0';
  }
};