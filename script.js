function hideAll() {
  // Smooth fade out
  $(".plan").fadeOut(400);
}

$("#missionBtn").click(function(e) {
  e.preventDefault();
  hideAll();

  // Highlight button change text
  $("#mission h1").css("color", "#89CE9A"); // Soft Green

  // Fade in move 
  $("#mission").delay(400).fadeIn(600);
});

$("#whyBtn").click(function(e) {
  e.preventDefault();
  hideAll();

  $("#why h1").css("color", "#66AAEE"); // Soft Blue

  // Slide down 
  $("#why").delay(400).slideDown(600);
});

$("#advocacyBtn").click(function(e) {
  e.preventDefault();
  hideAll();

  $("#advocacy h1").css("color", "#333");

  // Fade In
  $("#advocacy").delay(400).fadeIn(800);
});

//  Image Hover Animation
$(".modern-img").hover(
    function() { $(this).css("transform", "scale(1.05)"); },
    function() { $(this).css("transform", "scale(1)"); }
);
