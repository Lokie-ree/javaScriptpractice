function toUpper(string) {
  return string.toUpperCase();
}

function modifyCatDiv () {
  const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  const upperCats = cats.map(toUpper).join(" *** ");
  const catsDiv = document.getElementById("cats-div");
  catsDiv.innerHTML = upperCats;
  catsDiv.style.color = "orange";
  document.getElementById("cats-h2").style.color = "blue";
}

const changeToLower = (string) => {
  return string.toLowerCase();
}

function modifyFruitDiv() {
  const fruit = ["Apple", "Banana", "Grapes", "Strawberry"];
  const lowerFruit = fruit.map(changeToLower).join(" $$$ ");
  const fruitDiv = document.getElementById("fruit-div");
  fruitDiv.innerHTML = lowerFruit;
  fruitDiv.style.color = "blue"
  document.getElementById("fruit-h2").style.color = "orange";
}

const getCats = document.getElementById("cats-btn");
const getFruit = document.getElementById("fruit-btn");

getCats.addEventListener("click", modifyCatDiv);
getFruit.addEventListener("click", modifyFruitDiv);
