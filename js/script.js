// Home

function answer() {
  document.getElementById("navBody").innerHTML = "Yes I am!";
  document.getElementById("navBody").style.transition = ".5s ease";
}

function noAnswer() {
  document.getElementById("navBody").innerHTML = "Are you ready for an adventure?";
  document.getElementById("navBody").style.color = "#FFFFFF";
}

function enterSite() {
  window.location.href = "work.html";
}


// Close Home

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.body.scrollBottom > 1) {
}
}

// Open Home

// function openHome() {
// }

// Close Home

function closeHome() {
  document.getElementById("home").style.height = "0%";
}

// Menu Overlay

/* Open */
function openNav() {
  document.getElementById("menuOverlay").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("menuOverlay").style.height = "0%";
  document.getElementById("click").innerHTML = "click to copy";
}

// Select Contact

function selectContact() {
  document.getElementById("click").style.color = "#6AEBF7";
}

function deselectContact() {
  document.getElementById("click").style.color = "#567582";
}

// Copy Contact

function copiedConfirmation() {
  document.getElementById("click").innerHTML = "copied!";
}

// Image Slider

var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
