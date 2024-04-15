import {
  getNumberOfChars,
  getFirstChar,
  getLastChar,
  getLower,
  getUpper,
  getCapitalized,
} from "./variation.js";

function updateNameVariations(name) {
  document.getElementById("answer1").textContent = getNumberOfChars(name);
  document.getElementById("answer2").textContent = getFirstChar(name);
  document.getElementById("answer3").textContent = getLastChar(name);
  document.getElementById("answer4").textContent = getLower(name);
  document.getElementById("answer5").textContent = getUpper(name);
  document.getElementById("answer6").textContent = getCapitalized(name);
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("your-name");

  inputField.addEventListener("input", (event) => {
    updateNameVariations(event.target.value);
  });
});
