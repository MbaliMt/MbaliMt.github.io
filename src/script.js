// const navbar = document.querySelector(".navbar");
// const menuToggle = document.querySelector(".menu-toggle");
// menuToggle.addEventListener("click", () => {
//   navbar.classList.toggle("open");
// });

// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// // add event listener
navToggle.addEventListener("click", () => {
nav.classList.toggle('nav-open')
})