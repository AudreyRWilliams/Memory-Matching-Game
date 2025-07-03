const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

fetch("./files/gamecards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...files, ...files];
    shuffleCards();
    generateCards();
  });
