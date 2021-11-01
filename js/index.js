$(document).ready(function () {

  var position = 0;
  var bts = document.getElementsByClassName('bt');


  $(bts[0]).click(function() {
    position = $("header").offset();
    scroll_ani();
  });
  $(bts[1]).click(function() {
    position = $("section").offset();
    scroll_ani();
  });
  $(bts[2]).click(function() {
    position = $("article").offset();
    scroll_ani();
  });
  $(bts[3]).click(function() {
    position = $("footer").offset();
    scroll_ani();
  });

  function scroll_ani() {
    $(".text").html("left:"+position.left+"<br>"+"top:"+position.top);
    $("html").stop().animate({scrollLeft:position.left},500);
  }


});
