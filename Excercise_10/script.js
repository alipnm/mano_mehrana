const num1Element = document.getElementById ('num1');
const num2Element = document.getElementById ('num2');
const num3Element = document.getElementById ('num3');
const spanResultElement = document.getElementById ('result');

let maxFind = () => {
  let num1 = Number (num1Element.value);
  let num2 = Number (num2Element.value);
  let num3 = Number (num3Element.value);

  spanResultElement.innerHTML = Math.max (num1, num2, num3);
};
