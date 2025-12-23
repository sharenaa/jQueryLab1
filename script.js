function hideAll() {
  $(".plan").fadeOut(300);
}

$("#missionBtn").click(function(e) {
  e.preventDefault();
  hideAll();

  //  colors for heading and style
  $("#mission h1").text("Our Mission").css("color", "#89CE9A");

  $("#mission").delay(300).fadeIn(800);
});

$("#whyBtn").click(function(e) {
  e.preventDefault();
  hideAll();

  $("#why h1").text("Why We Build").css("color", "#66AAEE");

  $("#why").delay(300).slideDown(700);
});

$("#advocacyBtn").click(function(e) {
  e.preventDefault();
  hideAll();

  $("#advocacy h1").text("Advocacy in Action");
  $("#advocacy h1").css({
    "color": "#555",
    "font-size": "36px"
  });

  $("#advocacy").delay(300).fadeIn(600);
});
