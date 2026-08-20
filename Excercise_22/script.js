let scores = [];
let sum = 0;
const len = Math.round (Math.random () * 10) + 1;
const rootElement = document.getElementById ('root');

for (let i = 0; i < len; i++) {
  let score = Math.round (Math.random () * 20);
  scores.push (score);
}

console.log (scores);

scores.forEach (score => {
  sum += score;
});
rootElement.innerHTML = `The grade point average of class is: ${sum / len}`;
