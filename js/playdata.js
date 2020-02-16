// document.getElementById("graphic").style.width = 500 + 'px';
// document.getElementById("norinuri").style.width = 300 + 'px';
// document.getElementById("journey").style.width = 400 + 'px';
// document.getElementById("comine").style.width = 400 + 'px';
// document.getElementById("algo").style.width = 400 + 'px';

$(document).ready(function() {
  var next = document.getElementById("next");

  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item").click(function(){
    $("#myCarousel").carousel(1);
  });

  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
)}
