const numberElement = document.getElementById ('number');
const rootElement = document.getElementById ('root');
const submitElement = document.getElementById ('submit');

let multiple = () => {
  let number = numberElement.value;
  rootElement.innerHTML = ''

  for (let i = 1; i <= 10; i++) {
    const multipleElement = document.createElement ('h3');
    multipleElement.innerHTML = Number (`${number * i}`);
    rootElement.append (multipleElement);
  }
};
submitElement.addEventListener ('click', multiple);
