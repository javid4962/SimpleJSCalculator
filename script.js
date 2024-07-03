let resutlDiv = document.getElementById("listResults");

let display = document.getElementById("display");
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
  if (display.value === "0" || shouldResetDisplay) {
    display.value = number;
    shouldResetDisplay = false;
  } else {
    display.value += number;
  }
}

function chooseOperation(operation) {
  if (currentOperation !== null) calculate();
  firstOperand = display.value;
  currentOperation = operation;
  shouldResetDisplay = true;
}

function calculate() {
  if (currentOperation === null || shouldResetDisplay) return;
  secondOperand = display.value;
  display.value = operate(firstOperand, secondOperand, currentOperation);

//   saving the operation expression 
  let r = document.createElement("li");
  r.innerHTML = ` ${firstOperand} ${currentOperation} ${secondOperand} = ${display.value}`;
  resutlDiv.appendChild(r);

  currentOperation = null;
}

function clearDisplay() {
  display.value = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
  shouldResetDisplay = false;
}

function operate(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    default:
      return null;
  }
}



function showHistory(){
    let resultDiv = document.getElementById('listResults');
    let displayResult = document.getElementById('displayResults')
    if(resultDiv.style.display=='none'){
        resultDiv.style.display='block';
    }
    else{
        // document.getElementById('displayResults').innerHTML='Show History';
        resultDiv.style.display='none';
    }
}



const lightThemeBtn = document.getElementById('lightThemeBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');

lightThemeBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--primary-color', '#f6f6f6');
  document.documentElement.style.setProperty('--secondary-color', '#000');
  document.documentElement.style.setProperty('--border-color', '#000');
  document.documentElement.style.setProperty('--text-color', '#000');
  document.documentElement.style.setProperty('--number-color', '#a4a4a4');
  document.documentElement.style.setProperty('--operation-color', '#ff9601');
  document.documentElement.style.setProperty('--equal-bg-color', '#a7a7a7');
  document.documentElement.style.setProperty('--clear-color', '#f00');
  localStorage.setItem('theme', 'light');
});

darkThemeBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--primary-color', '#000');
  document.documentElement.style.setProperty('--secondary-color', '#fff');
  document.documentElement.style.setProperty('--border-color', '#000');
  document.documentElement.style.setProperty('--text-color', '#fff');
  document.documentElement.style.setProperty('--number-color', '#343434');
  document.documentElement.style.setProperty('--operation-color', '#ff9601');
  document.documentElement.style.setProperty('--equal-bg-color', '#a7a7a7');
  document.documentElement.style.setProperty('--clear-color', '#f00');
  localStorage.setItem('theme', 'dark');
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  darkThemeBtn.click();
}
