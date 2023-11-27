$(document).ready(function () {
  $(".clickable").click(function () {
    $("#walrus-showing").toggle().fadeIn();
    $("#walrus-hidden").toggle().fadeOut();
  });

  $(".clickable").click(function () {
    $("#walrus-showing").slideToggle().slideDown();
    $("#walrus-hidden").slideToggle().slideUp();
  });
})