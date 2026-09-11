const rootElement = document.getElementById("root");
const scoreElement = document.getElementById("score");
const submitBtnElement = document.getElementById("submit");
const getMinBtnElement = document.getElementById("getMin");
let scores = [];

let submit = () => {
  let score = Number(scoreElement.value);
  scores.push(score);
  scoreElement.value = "";
};
let getMin = () => {
  let min = Math.min(...scores);
  rootElement.innerHTML = `<h2>The min number is ${min}</h2>`;
  scores = [];
};

submitBtnElement.addEventListener("click", submit);
getMinBtnElement.addEventListener("click", getMin);
