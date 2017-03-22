"use strict";

$(document).ready(function(){


  $('#buttonka').click(function(){
    let searchTerm = $('.searchbox').val();
    let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json";
    console.log(url);
    $.ajax({
      url: url,
      contentType: "application/json; charset=utf-8",
      async: true,
      dataType: "jsonp",

      success: function (data) {
        console.log(data);
        $('.result').html('');
        for (let i=0; i< data[1].length; i += 1) {
          console.log(data[0]);
          console.log(data[1][i]);
          $('.results').prepend("<div><div class='btn-primary'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div><hr>" );
        }
      },
      error: function (errorMessage) {
        console.log(errorMessage);
      }
    });
    return false
  });

});

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