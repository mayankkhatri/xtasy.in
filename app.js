// Flickity Carousels
$(document).ready(function () {
  // Initialize Flickity on the .carousel element
  $(".c-case").flickity({
    cellAlign: "left",
    wrapAround: true,
    autoPlay: 3500,
    pageDots: false,
    contain: false, // Set contain to false
  });

  $(".s-case").flickity({
    wrapAround: true,
    autoPlay: 2000,
  });

  // Case 1st Margin
  var specificElement = document.querySelector(".c-tile.is-selected");

  // Check if the element exists before applying styles
  if (specificElement) {
    // Change the margin of the selected element
    specificElement.style.marginLeft = "2.5rem";

    // photo enlarge
    var $carousel = $(".s-case").flickity({
      // Flickity options here
    });

    $carousel.on("click", ".s-tile img", function () {
      var $img = $(this);
      var currentIndex = $img.data("index");

      $img.toggleClass("enlarged");
      $carousel.flickity("select", currentIndex, false, true);
    });
  }
});
