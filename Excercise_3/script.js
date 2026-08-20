const productNameElement = document.getElementById ('productName');
const productCountElement = document.getElementById ('productCount');
const productPriceElement = document.getElementById ('productPrice');
const finalElement = document.getElementById ('final');

let givePrice = () => {
  let price = Number (productPriceElement.value);
  let name = productNameElement.value;
  let count = Number (productCountElement.value);

  let finalprice = price * count;

  const h3Element = document.createElement ('h3');
  h3Element.innerHTML = `Your request about ${name} is ${finalprice}$`;
  finalElement.append (h3Element);
};
