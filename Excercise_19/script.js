const numberElement = document.getElementById ('number');
const buttonElement = document.getElementsByTagName ('button')[0];
const rootElement = document.getElementById ('root');

buttonElement.addEventListener ('click', () => {
  let result = 0;
  let number = Number (numberElement.value);
  for (let i = 1; i < Number (numberElement.value); i++) {
    let factorialResult = number * (number - i);
    result += factorialResult;
  }
  rootElement.innerHTML += `<h1></h1>`
});
