const usernameElement = document.getElementById ('usernameElement');
const passwordElement = document.getElementById ('passwordElement');
const rootElement = document.getElementById ('root');
let account = {
  username: 'Alipnm110',
  password: '1234',
};
let tries = 0;

let login = () => {
  tries++;
  let username = usernameElement.value;
  let password = passwordElement.value;
  rootElement.innerHTML = '';

  if (tries < 3) {
    if ((username == account['username']) & (password == account['password'])) {
      rootElement.innerHTML += '<h1>Login Sucessfull</h1>';
    } else {
      rootElement.innerHTML += '<h1>Incorrect Password, Try again</h1>';
    }
  }
};
