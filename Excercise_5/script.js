const celsiusElement = document.getElementById ('celsiusDegree');
const farenheitKeeperElement = document.getElementById ('farenheit');

const convert = () => {
  let celsius = Number (celsiusElement.value);
  const farenheitElement = document.createElement ('span');
  farenheitElement.innerHTML = `${celsius * 1.8 + 32} F`;
  farenheitKeeperElement.innerHTML = '';
  farenheitKeeperElement.append (farenheitElement);
};
