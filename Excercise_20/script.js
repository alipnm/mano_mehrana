let timeComplexity = 7;
let secretNumber = Math.round (Math.random () * 100);
const buttonElement = document.getElementsByTagName ('button')[0];
const numberElement = document.getElementById ('number');
const rootElement = document.getElementById ('root');

console.log (secretNumber);

buttonElement.addEventListener ('click', () => {
  if (timeComplexity > 0) {
    timeComplexity--;
    let number = Number (numberElement.value);
    if (number < secretNumber) {
      rootElement.innerHTML += `<h1>Your guess: ${number}</h1>
      gusses left: ${timeComplexity}
        <h1>Your guess is lower than the secret number!</h1>
        `;
    } else if (number > secretNumber) {
      rootElement.innerHTML += `<h1>Your guess: ${number}</h1>
      gusses left: ${timeComplexity}
        <h1>Your guess is higher than the secret number!</h1>
        `;
    } else {
      buttonElement.disabled = true;
      rootElement.innerHTML += '<h1>Your number was correct!!</h1>';
    }
  } else {
    buttonElement.disabled = true;
    rootElement.innerHTML = `<h1>Your guesses are over!
    The number was ${secretNumber}</h1>
    `;
  }
});
