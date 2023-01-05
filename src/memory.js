const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  cards.forEach((card) => {
    if (card === this) {
      card.classList.add("flip");
    }
  });
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach((card) => {
    const randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}
shuffle();
cards.forEach((card) => card.addEventListener("click", flipCard));

function removeFlip() {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains("flip")) {
      cards[i].classList.remove("flip");
    }
    cards[i].addEventListener("click", flipCard);
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));

const displayBlockOrNone = {
  displayBlock: "block",
  displayNone: "none",
  classBlock: "#block_",
};

const numberOfCards = 12;

function addClass(className) {
  const card = document.querySelector(".container");
  card.classList.add(className);
}

function removeClass() {
  const card = document.querySelector(".container");
  card.classList.remove("four");
  card.classList.remove("six");
  card.classList.remove("twelve");
}
function noGrids() {
  for (let i = 1; i <= numberOfCards; i++) {
    let all = document.querySelector(displayBlockOrNone.classBlock + i);
    all.style.display = displayBlockOrNone.displayNone;
  }
}

function grid4() {
  removeFlip();
  for (let i = 1; i <= numberOfCards; i++) {
    let all = document.querySelector(displayBlockOrNone.classBlock + i);
    if (i <= selected) {
      all.style.display = displayBlockOrNone.displayBlock;
    } else {
      all.style.display = displayBlockOrNone.displayNone;
    }
  }
}

function grid6() {
  removeFlip();
  for (let i = 1; i <= numberOfCards; i++) {
    let all = document.querySelector(displayBlockOrNone.classBlock + i);
    all.style.display = displayBlockOrNone.displayNone;
  }
  for (let i = 1; i <= numberOfCards; i++) {
    let all = document.querySelector(displayBlockOrNone.classBlock + i);
    if (i <= selected) {
      all.style.display = displayBlockOrNone.displayBlock;
    } else {
      all.style.display = displayBlockOrNone.displayNone;
    }
  }
}

function grid12() {
  removeFlip();
  for (let i = 1; i <= numberOfCards; i++) {
    let all = document.querySelector(displayBlockOrNone.classBlock + i);
    all.style.display = displayBlockOrNone.displayBlock;
  }
}

const results = document.querySelector("#dropdown_result");
const set = document.querySelector("#button");
let selected;


  set.addEventListener("click", (event) => {
    selected = Number(results.options[results.selectedIndex].value);
    if (selected === 0) {
      noGrids();
    } else if (selected === 4) {
      removeClass();
      addClass("four");
      grid4();
    } else if (selected === 6) {
      removeClass();
      addClass("six");
      grid6();
    } else if (selected === 12) {
      removeClass();
      addClass("twelve");
      grid12();
    }
    event.preventDefault();
  });

module.exports = { flipCard };
