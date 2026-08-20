const scoreElement = document.getElementById ('scoreElement');
const resultH1Element = document.getElementsByTagName ('h1')[0];

let giveScore = () => {
  let score = scoreElement.value;
  let text = '';

  if (score <= 20) {
    if (score >= 15) {
      text = 'Great';
    } else if (score >= 10) {
      text = 'Good';
    } else if (score >= 5) {
      text = 'Accepted';
    } else {
      text = 'Declined';
    }
  } else {
    text = 'Not Valid';
  }

  resultH1Element.innerHTML = text;
};
