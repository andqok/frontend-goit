'use strict;'

$(document).ready( function() {

  (function   mainProcedure() {

  setStartClick();
  writeToLocalStorage();
  let questions = JSON.parse( localStorage.getItem( "questions" ) );
  nextQuestion( questions, 1 , makeTrackRecordObject() );
  $( '#questions' ).addClass( "hidden" );

    function setStartClick() {
      $(".test-view").one("click", function( event ) {
        event.stopPropagation();
        $( ".test-view"        ).css( "cursor" , "default" );
        $( ".take-test-button" ).remove();
        $( ".test-view"        ).animate({
          height: "300px",
        }, 500)
        $('#questions').removeClass("hidden");
      });
    }

    function makeTrackRecordObject() {
      let b = {};
      Object.keys(questions).forEach(function(x) {
        b[x] = {fauxAttempts: undefined};
      })
      return b    // Perhaps shorter...? 5 lines, yo
    }

    function writeToLocalStorage () {
      let questions = {
      "1": {
        question: "Who is the world's most successful musician in history?",
        variants: ["Eminem", "Michael Jackson", "Madonna", "Bob Dylan", "Stevie Wonder", "David Bowie"],
        answer:   "Michael Jackson"
      },
      "2": {
        question: "Which DOM attribute doesn't exist?",
        variants: ["addAttribute", "hasAttribute", "removeAttribute"],
        answer:   "addAttribute"
      },
      "3": {
        question: "Which number of month was November initially?",
        variants: ["2", "8", "10", "6"],
        answer:   "8"
      },
      "4": {
        question: "Who is the longest reigning monarch of the United Kingdom?",
        variants: ["Queen Victoria", "Queen Elizabeth I", "Queen Elizabeth II", "King George V"],
        answer:   "Queen Elizabeth II"
      },
      "5": {
        question: "What makes the world go round?",
        variants: ["money", "women", "men", "governments", "mysticism", "information", "knowledge", "idiocy"],
        answer:   "money"
      }
    };
  
    try {
      localStorage.setItem( "questions", JSON.stringify( questions ) );
    } catch  ( e ) {
        alert( 'Something went wrong! ' + e );
        return false;
    }
  };   // END writeToLocalStorage()
  })(); // END mainProcedure

  function waitForInput( questions, index, trackRecord ) {           // after templating is done, listeners should be set
    $( "#submit" ).click(function( event ) {
      let chbx_id = $( 'input[name=checkbx]:checked' ).attr( 'id' );
        if ( checkAnswer( chbx_id.slice( -1 ) ) == true ) {
          nextQuestion(  questions, ++index, trackRecord );
        };
    
    function checkAnswer( answer ) {
      let currentQuestion = trackRecord[ index.toString() ]
      if ( getTrueAnswerNumber( answer )   == answer 
           && currentQuestion.fauxAttempts == undefined) {
        currentQuestion.fauxAttempts  = 0;
        alert( "What more can I say?" );
        return true
      } 
      else {
        currentQuestion.fauxAttempts += 1;
        alert( "try again" );
        return false
      };
  
      function getTrueAnswerNumber() {
        let question = questions[ index ];
        return question.variants.indexOf( question.answer ); 
        }
      } // END checkAnswer

    }); // END click handler()
  }     // END waitForInput()
  
  function nextQuestion( questions, index, trackRecord ) {
    checkIfCleared();
    appendTemplate();
    waitForInput(        questions, index, trackRecord );

    function checkIfCleared() {
    if (document.getElementById('questions') !== null) {
      $( '#questions' ).remove();
    } else {
      console.log( "already" );
      } 
    }

    function appendTemplate() {
      const      questionView = document.createElement(  "div"  );
      const          testView = document.getElementById( "tost" );
      $.extend(  questionView, { innerHTML: cookTemplate(), id: "questions" })
      testView.appendChild(   questionView    );

      function cookTemplate() {
        const template = '<h2><%=question%></h2> \
        <table> <% for (let i=0; i<variants.length; i++) { %> \
        <tr> <td> <input class="checkbox" name="checkbx" type="radio" id="chbx-<%=i%>"> </td> \
        <td> <label class="checkbox-label" for="chbx-<%=i%>"><%=variants[i]%></label> </td> </tr> <% } %> </table> \
        <button id="submit">Submeat</button>'
        return   _.template( template )( questions[index]);
      }
    }

  }  // END nextOuestion()

    function finishTheOrdeal( trackRecord ) {
      console.log( trackRecord )
    }
});

