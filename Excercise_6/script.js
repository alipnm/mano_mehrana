const numberInputElement = document.getElementById ('numberInput');
const resultElement = document.getElementById ('result');

let oddEven = () => {
  let number = numberInputElement.value;

  if (number % 2 == 0) {
    resultElement.innerHTML = 'Even';
  } else {
    resultElement.innerHTML = 'Odd';
  }
};
