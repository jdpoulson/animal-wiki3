$(document).ready(function() {

  $(".dogs").click(function() {
    $("#dogs").toggle();
    $("#cats").hide();
    $("#rats").hide();
  });

  $(".cats").click(function() {
    $("#dogs").hide();
    $("#cats").toggle();
    $("#rats").hide();
  });

  $('.rats').click(function() {
   $("#rats").toggle();
   $("#dogs").hide();
   $("#cats").hide();
  });
})
