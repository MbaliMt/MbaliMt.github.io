const { JSDOM } = require("jsdom");
const fs = require("fs");
const index = fs.readFileSync("./index.html");
const { document } = new JSDOM(index).window;
global.document = document;
const { flipCard } = require("../src/memory");
const cardOne = document.querySelectorAll(".memory-card");
const firstCard = document.getElementsByClassName("memory-card")[0];
const select = document.querySelector("#dropdown_result");
const btn = document.querySelector("#button");
let displayBlockCard = [];

describe("dom manipulation", () => {
  const cardArr = [...cardOne];
  it("should check if flipped is added when the card is clicked", () => {
    cardArr[1].click();
    expect(cardArr[1].classList.contains("flip")).toBe(true);
  });
});

describe("Tests if the checkForMatch() is called", function () {
  it("calls checkForMatch", () => {
    expect(firstCard.className).not.toBe("memory-card flip");
    firstCard.click();
    expect(firstCard.className).toBe("memory-card flip");
  });
});

function clearArr() {
  return displayBlockCard.splice(0, displayBlockCard.length);
}

function checkStyleDisplayBlock() {
  let containerDiv = document.querySelector(".container");
  const containerDivChildren = containerDiv.querySelectorAll(".memory-card");
  const containerArr = [...containerDivChildren];
  for (let i = 0; i < containerArr.length; i++) {
    let thisElement = containerArr[i];
    if (thisElement.style.display == "block") {
      displayBlockCard.push(thisElement);
    }
  }
  return displayBlockCard;
}

describe("Number of cards", function () {
  it("should have 0 cards displayed when no option in selected from dropdown menu", () => {
    clearArr();
    select.value = "0";
    btn.click();
    const grid0 = checkStyleDisplayBlock();
    expect(grid0.length).toBe(0);
  });
});

describe("Number of cards", function () {
  it("should have 4 cards displayed when the 2X2 option in selected from the dropdown menu", () => {
    clearArr();
    select.value = "4";
    btn.click();
    const grid4 = checkStyleDisplayBlock();
    expect(grid4.length).toBe(4);
  });
});

describe("Number of cards", function () {
  it("should have 6 cards displayed when the 2X3 option in selected from the dropdown menu", () => {
    clearArr();
    select.value = "6";
    btn.click();
    const grid6 = checkStyleDisplayBlock();
    expect(grid6.length).toBe(6);
  });
});

describe("Number of cards in grid12", function () {
  it("should have 12 cards displayed when the 3X3 option in selected from the dropdown menu", () => {
    clearArr();
    select.value = "12";
    btn.click();
    const grid12 = checkStyleDisplayBlock();
    expect(grid12.length).toBe(12);
  });
});
