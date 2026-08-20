let dateOfBirth = '2013/11/11';
let temp1 = dateOfBirth.split ('/');
let dateParts = temp1.map (numb => Number (numb));

let dateOfToday = '2026/8/12';
let temp2 = dateOfToday.split ('/');
let dateOfTodayParts = temp2.map (numb => Number (numb));

let daysBirth = dateParts[2];
for (let i = 0; i + 1 < dateParts.length; i++) {
  let date = dateParts[i];

  if (i == 0) {
    daysBirth += date * 365;
  } else {
    daysBirth += date * 30;
  }
}

let daysNow = dateOfTodayParts[2];
for (let i = 0; i + 1 < dateOfTodayParts.length; i++) {
  let date = dateOfTodayParts[i];

  if (i == 0) {
    daysNow += date * 365;
  } else {
    daysNow += date * 30;
  }
}

let space = daysNow - daysBirth;

let years = space / 365;
let yelse = space % 365;
let months = yelse / 30;
let days = yelse % 30;

console.log (
  `You are ${parseInt (String (years))} years and ${parseInt (String (months))} months and ${days} days old.`
);
