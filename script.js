const cardArray = [
  { name: "fries", img: "images/fries.png" },
  { name: "cheese", img: "images/cheeseburger.png" },
  { name: "Pancake", img: "images/pancake.webp" },
  { name: "hotdog", img: "images/hotdog.png" },
  { name: "ice-cream", img: "images/ice-cream.png" },
  { name: "milkshake", img: "images/milkshake.png" },
  { name: "pizza", img: "images/pizza.png" },
  { name: "Pancake", img: "images/pancake.webp" },
  { name: "fries", img: "images/fries.png" },
  { name: "cheese", img: "images/cheeseburger.png" },
  { name: "Sea Food", img: "images/seafood.png" },
  { name: "hotdog", img: "images/hotdog.png" },
  { name: "ice-cream", img: "images/ice-cream.png" },
  { name: "milkshake", img: "images/milkshake.png" },
  { name: "pizza", img: "images/pizza.png" },
  { name: "Sea Food", img: "images/seafood.png" },
  { name: "milkshake", img: "images/milkshake.png" },
  { name: "cheese", img: "images/cheeseburger.png" },
];

const grid = document.getElementById("grid");
const cardsChosen = [];
const chosenCardsId = [];
const scoreId = document.getElementById("value");
let obj = { score: 0 };
let entries = 12;
let count = 0;
const buttonId = document.querySelector(".again");
const imageId = document.querySelector(".image");
console.log(buttonId);

scoreId.textContent = obj.score;

cardArray.sort(() => 0.5 - Math.random());

function createBoard(entries) {
  for (let i = 0; i < entries; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", () => flipCard(obj, card));
    grid.append(card);
  }
}

function flipCard(obj, card) {
  const cardId = card.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  chosenCardsId.push(cardId);
  card.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(() => {
      let newCards = document.querySelectorAll("img");

      if (cardsChosen[0] === cardsChosen[1]) {
        alert("Found");
        obj.score++; // Increment the score within the object
        newCards[chosenCardsId[0]].setAttribute("src", "images/white.png");
        newCards[chosenCardsId[1]].setAttribute("src", "images/white.png");
        newCards[chosenCardsId[0]].removeEventListener("click", flipCard);
        newCards[chosenCardsId[1]].removeEventListener("click", flipCard);
      } else {
        newCards[chosenCardsId[0]].setAttribute("src", "images/blank.png");
        newCards[chosenCardsId[1]].setAttribute("src", "images/blank.png");
      }

      cardsChosen.length = 0;
      chosenCardsId.length = 0;
      scoreId.textContent = obj.score;
      if (obj.score >= 2) {
        count++;
        if (count === 1) {
          imageId.style.display = "flex";
          buttonId.addEventListener("click", () => {
            imageId.style.display = "none";
            entries = 18;
            grid.style.width = "500px";
            cardsChosen.length = 0;
            chosenCardsId.length = 0;
            if (count === 1) {
              resetBoard();
              createBoard(entries);
            }
          });
        }
      }
    }, 500);
  }
}
function resetBoard() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}
createBoard(entries);
