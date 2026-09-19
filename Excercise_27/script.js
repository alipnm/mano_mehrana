let names = [
  "Ali",
  "Sara",
  "Nika",
  "Mostafa",
  "Nahid",
  "Sina",
  "Zoya",
  "Shahab",
  "Mohammadreza",
  "Reza",
  "Mohammad",
  "Ladan",
  "Bahar",
  "Ahmad",
  "Havva",
  "Roozbeh",
  "Reyhaneh",
  "Amirreza",
  "Mahroo",
  "Zohre",
  "Hedieh",
  "Mahmood",
  "Mehrana",
  "Radmehr",
  "Kian",
  "Sepanta",
  "Adrian",
  "Faryan",
  "Korosh",
  "Arsam",
  "Amirsam",
  "Fatemeh",
];
const nameSearchInputElement = document.getElementById("nameSearch");
const searchBtnElement = document.getElementById("search");
const resultElement = document.getElementById("result");

window.onload = () => {
  resultElement.innerHTML = "";
};

function searchName() {
  console.log(nameSearchInputElement);
  let mozmakhoreydel = nameSearchInputElement.value;
  console.log(mozmakhoreydel.trim().toLowerCase());
  if (
    names.some((i) => mozmakhoreydel.trim().toLowerCase() === i.toLowerCase())
  ) {
    resultElement.innerHTML = "Name Finded in List";
  } else {
    resultElement.innerHTML = "Name was not found.";
  }
}
searchBtnElement.addEventListener("click", searchName);
