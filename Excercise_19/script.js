const numberElement = document.getElementById ('number');
const buttonElement = document.getElementsByTagName ('button')[0];
const rootElement = document.getElementById ('root');

buttonElement.addEventListener ('click', () => {
  const number = Number (numberElement.value);
  if (number > 0 && Number.isInteger (number)) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    rootElement.innerHTML = `<h1>${result}</h1>`;
  } else {
    rootElement.innerHTML = '<h1>ERROR</h1>';
  }
});
