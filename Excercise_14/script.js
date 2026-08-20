const enterElement = document.getElementsByTagName ('button')[0];
const passwordElement = document.getElementById ('passwordElement');
const rootElement = document.getElementById ('root');
let realPassword = '1234';

let login = () => {
  let password = passwordElement.value;
  rootElement.innerHTML = '';
  if (password == realPassword) {
    rootElement.innerHTML += 'OK';
  } else {
    rootElement.innerHTML += 'Try again';
  }
};

enterElement.addEventListener ('click', login);
