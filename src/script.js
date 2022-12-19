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

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("li").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
