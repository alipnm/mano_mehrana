const leapEnteryInputElement = document.getElementById ('leapentery');
const h1ResultElement = document.getElementById ('result');

let leapOrNot = () => {
  let year = leapEnteryInputElement.value;
  if (year < 0) {
    h1ResultElement.innerHTML = 'ERROR';
  } else if (year % 4 == 0) {
    h1ResultElement.innerHTML = 'Leap';
  } else {
    h1ResultElement.innerHTML = 'Not Leap';
  }
};
