(function($) {

// ==== SELECTS =====

$(function() {
  $('#selectric-select').selectric();
});

$('#selectBox-select').selectBox();

var $selectValue = $('#selectric-value');

// Get initial value
$selectValue.text($('#selectric-select').val());

$('#selectric-select').selectric().on('change', function () {
  $selectValue.text($(this).val());
});

$('#buttonka').click(function () {
  var value = $('#inputik').val();
  $('#selectric-select').append('<opion>' + (value ? value : "Empty") + '</option>');
  $('#selectric-select').selectric('refresh');
  $('#inputik').val('');
});

$("#inputik").keyup(function(event){
    if(event.keyCode == 13){
        $("#buttonka").click();
    }
});

// ===== CHECKBOX ===


// ==== CAROUSEL ====

$(function() {
    $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev').jcarouselControl({
            target: '-=1'
        });

        $('.jcarousel-control-next').jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();
});

})(jQuery);

$( '.dropdown' ).mouseenter(
    function(){
      var ul = $(this).children('.sub-menu')
        ul.animate({
          height: "toggle",
          backgroundColor: "#fff",
          opacity: .55,
        }, 500)
    }
);

$( '.dropdown' ).mouseleave(
    function(){
      var ul = $(this).children('.sub-menu')
        ul.animate({
          height: "toggle",
          backgroundColor: "#fff",
          opacity: 1,
        }, 500)
    }
);