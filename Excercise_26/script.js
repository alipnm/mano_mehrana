const arrayContainerElement = document.getElementById("array");
const addNameBtnElement = document.getElementById("add");
const deleteNameBtnElement = document.getElementById("delete");
const nameInputElement = document.getElementById("name");
let names = ["ali", "sara", "sina", "reza", "hana", "mostafa"];

let addName = () => {
  let name = nameInputElement.value.toLowerCase().trim();
  names.push(name);
  nameInputElement.value = "";

  showArray();
};
let deleteName = () => {
  let name = nameInputElement.value;
  if (names.find((n) => n.toLowerCase() === name) !== undefined) {
    names.splice(names.indexOf(name), 1);
  }

  nameInputElement.value = "";
  showArray();
};
let showArray = () => {
  let result = [];
  names.forEach((n) => {
    result.push(`<h3>${n}</h3>`);
  });

  arrayContainerElement.innerHTML = result.join("");
};

addNameBtnElement.addEventListener("click", addName);
deleteNameBtnElement.addEventListener("click", deleteName);

window.onload = () => {
  showArray();
};
