$(document).ready(function() {
    var leftUIEl = $('.carousel-switch-left');
    var rightUIEl = $('.carousel-switch-right');
    var list = $('.carousel-list');

    var pixelOffset = 125;
    var currentLeftValue = 0;

    console.log("click");

    leftUIEl.click(function() {
      console.log("clicked left");
      currentLeftValue += 125;
      list.animate({ left : currentLeftValue + "px" }, 500);
    });
 
    rightUIEl.click(function() {
      console.log(list);
      currentLeftValue -= 125;
      list.animate({ left : currentLeftValue + "px" }, 500 );
    });
 
});