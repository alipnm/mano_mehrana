const num1Element = document.getElementById ('num1');
const num2Element = document.getElementById ('num2');
const comeDownButton = document.getElementById ('mmoz');
const operationSelectorDivElement = document.getElementById ('selector');
const operationSpanElement = document.getElementById ('operation');
const resultSpanElement = document.getElementById ('result');

const operations = ['×', '÷', '+', '-'];

let selectOperation = () => {
  let elementsArray = [];
  for (let operation of operations) {
    const buttonOperationElement = document.createElement ('button');
    buttonOperationElement.innerHTML = operation;
    buttonOperationElement.onclick = () => {
      operationSpanElement.innerHTML = operation;
    };
    operationSelectorDivElement.append (buttonOperationElement);
  }
};

let calculate = () => {
  let num1 = Number (num1Element.value);
  let num2 = Number (num2Element.value);
  let operation = operationSpanElement.innerHTML;
  let result = NaN;

  if (operation == '+') {
    result = String (num1 + num2);
  } else if (operation == '-') {
    result = String (num1 - num2);
  } else if (operation == '×') {
    result = String (num1 * num2);
  } else if ((operation == '÷') & (num2 != 0)) {
    result = String (num1 / num2);
  } else {
    result = `You can't divide ${num1} by zero!`;
  }

  resultSpanElement.innerHTML = result;
};

comeDownButton.addEventListener ('click', selectOperation);
