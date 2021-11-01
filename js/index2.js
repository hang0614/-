$(document).ready(function () {//html이 먼저 기동하고 나중에 자바스크립트를 작동시키기 위해 사용

var position = 0;

position = $("footer").offset();
$("html").stop().animate({scrollTop:position.top}, 0 );
position = $("header").offset();
$("html").stop().animate({scrollTop:position.top}, 1000 );
//$()//누구를 불러올것이냐 click()안에는 함수를 넣을것.
$("#bt1").click(function(){//function은 지역함수
  position = $("header").offset();//좌표얻는 offset
  $("html").stop().animate({scrollTop:position.top} );//.top .left두개있는데 위아래로만 움직이므로 top을쓴)
});

$("#bt2").click(function(){//function은 지역함수
  position = $("section").offset();//좌표얻는 offset
  $("html").stop().animate({scrollTop:position.top});//.top .left두개있는데 위아래로만 움직이므로 top을쓴)
});

$("#bt3").click(function(){//function은 지역함수
  position = $("footer").offset();//좌표얻는 offset
  $("html").stop().animate({scrollTop:position.top});//.top .left두개있는데 위아래로만 움직이므로 top을쓴)
});






});
