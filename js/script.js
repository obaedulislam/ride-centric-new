$(document).ready(function () {
  $("body").on("click", "#toggleMenu", function () {
    if ($(this).hasClass("close")) {
      $("#toggleMenuItem")
        .removeClass("d_visible")
        .delay(500)
        .removeClass("show");
      $(this).removeClass("close");
    } else {
      $("#toggleMenuItem").addClass("show").delay(500).addClass("d_visible");
      $(this).addClass("close");
    }
  });
});
