$(document).ready(function() {
  $(".clickable-walrus").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  })

  $(".clickable-emu").click(function() {
    $("#emu-showing").toggle();
    $("#emu-hidden").toggle();
  })

  $(".show_all_images").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $("#emu-showing").toggle();
    $("#emu-hidden").toggle();
    $("#both-showing").toggle();
    $("#both-hidden").toggle();
  })

  $(".clickable-kitten").click(function() {
    $("#kitten-showing").fadeToggle();
    $("#kitten-hidden").fadeToggle();
  })

  $(".clickable-puppy").click(function() {
    $("#puppy-showing").slideToggle();
    $("#puppy-hidden").slideToggle();
  })
});
