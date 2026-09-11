const rootElement = document.getElementById("root");
const addNumberBtn = document.getElementById("add");
const countEvenNumberBtn = document.getElementById("count");
const evenInputElement = document.getElementById("evenFinder");

let numbers = [];

let addNumber = () => {
  let num = evenInputElement.value;
  evenInputElement.value = "";
  if (Number.isNaN(Number(num)) || num.trim() === "") {
    console.error("pls enter valid value.");
  } else {
    let num = Number(evenInputElement.value);
    numbers.push(num);
  }
};
let countEven = () => {
  let count = numbers.filter((n) => n % 2 === 0).length;
  rootElement.innerHTML = `<h1>The count of even numbers is: ${count}</h1>`;
  evenInputElement.value = "";
  numbers = [];
};

addNumberBtn.addEventListener("click", addNumber);
countEvenNumberBtn.addEventListener("click", countEven);
