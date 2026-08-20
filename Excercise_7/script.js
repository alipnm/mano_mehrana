const num1Elememt = document.getElementById ('numberNoOne');
const num2Elememt = document.getElementById ('numberNoTwo');

let compare = () => {
  let num1 = num1Elememt.value;
  let num2 = num2Elememt.value;
  const resultElement = document.createElement ('h3');
  resultElement.innerHTML = Math.max (num1, num2);
  const resultKeeperElement = document.getElementsByClassName ('result')[0];
  resultKeeperElement.innerHTML = '';
  resultKeeperElement.append (resultElement);
};
