// let trigger = document.querySelector(".nav-link");
// trigger.addEventListener("click", (e) => {
//   e.preventDefault();

//   console.log("Clicked");
// });

$("[data-trigger]").on("click", function () {
  var trigger_id = $(this).attr("data-trigger");
  $(trigger_id).toggleClass("show");
  $("body").toggleClass("offcanvas-active");
  // $(".book").hide();
  $(".navbar-nav").addClass('text-center')
});

// close button
$(".btn-close").click(function (e) {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
});

// When the user scrolls the page, execute myFunction
window.onscroll = () => {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("container1");
  } else {
    navbar.classList.remove("sticky");
    // console.log(sticky);
  }
}
