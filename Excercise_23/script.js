const rootElement = document.getElementById("root");
const scoreElement = document.getElementById("score");
const submitBtnElement = document.getElementById("submit");
const getMaxBtnElement = document.getElementById("getMax");
let scores = [];

let submit = () => {
  let score = Number(scoreElement.value);
  scores.push(score);
  scoreElement.value = "";
};
let getMax = () => {
  let max = Math.max(...scores);
  rootElement.innerHTML = `<h2>The max number is ${max}</h2>`;
  scores = [];
};

submitBtnElement.addEventListener("click", submit);
getMaxBtnElement.addEventListener("click", getMax);
