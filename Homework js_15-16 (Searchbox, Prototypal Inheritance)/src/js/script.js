"use strict";

$(document).ready(function(){
/*
  $('.searchbox').autocomplete({
      source: function(request, response) {
          $.ajax({
              url: "http://en.wikipedia.org/w/api.php",
              dataType: "jsonp",
              data: {
                  'action': "opensearch",
                  'format': "json",
                  'search': request.term
              },
              success: function(data) {
                  response(data[1]);
              }
          });
      }
  });*/

  $('#buttonka').click(function(){
    let searchTerm = $('.searchbox').val();
    let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    console.log(url);
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function (data, textStatus, jqXHR) {
        console.log(textStatus);
        $('.result').html('');
        for (let i=0; i< data[1].length; i += 1) {
          $('.result').prepend("<div><div class='btn-primary'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>" );
        }
    $('.searchbox').val('');
      },
      error: function (errorMessage) {
        console.log(errorMessage);
      }
    });
  });

  $('.searchbox').keypress(function(e){
    if (e.which === 13){
      $('#buttonka').click();
    }
  });

});

//    $.ajax({
//        type: "GET",
//        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
//        contentType: "application/json; charset=utf-8",
//        async: false,
//        dataType: "json",
//        success: function (data, textStatus, jqXHR) {
//            console.log(data);
//        },
//        error: function (errorMessage) {
//        }
//    });