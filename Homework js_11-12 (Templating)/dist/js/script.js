(function ( $ ) {

$.fn.clickButton = function(button) {
  var kind = button;
  this.on("click", function () {
      if (kind == "left") {
      console.log("clicked left");
      currentLeftValue += 125;
      } else
      if (kind == "right") {
      console.log("clicked right");
      currentLeftValue -= 125;
      }
      list.animate({ left : currentLeftValue + "px" }, 500);
  });
  };

})( jQuery );

var list = $('.carousel-list');
var pixelOffset = 125;
var currentLeftValue = 0;
var leftUIEl  = $('.carousel-switch-left' );
var rightUIEl = $('.carousel-switch-right');

$(leftUIEl).clickButton("left");
$(rightUIEl).clickButton("right");

$(function() {
  var dataObject = {
    artists:[
      beethoven = {
        name: "Lidwig van Beethoven",
        lived: "1770-1827",
        notableWorks: ["Fidelio", "Diabelli Variations", "Symphony #9"]
      },
      bach = {
        name: "Johann Sebastian Bach",
        lived: "1685-1750",
        notableWorks: ["Brandenburg Concertos", "Art of Fugue", "Goldberg Variations"]
      }
    ]
  }
var results = document.getElementById('sub-two');
//console.log(results);
//  for ( u = 0; u < dataObject.artists.length; u++) {
//    obj = dataObject.artists[u];
//    console.log(obj.name);
results.innerHTML = tmpl('item_tmpl', dataObject);
});
