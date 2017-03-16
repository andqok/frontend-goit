'use strict'
$(document).ready ->

  makeTrackRecordObject = (questions) ->
    b      = {}
    Object.keys(questions).forEach (x) ->
      b[x] = fauxAttempts: 0
      return
    b

  waitForInput = (questions, index, trackRecord) ->
    $('#submit').click ->
      chbx_id  = $('input[name=checkbx]:checked').attr('id')

      checkAnswer  = (answer) ->

        getTrueAnswerNumber = ->
          question = questions[index]
          question.variants.indexOf question.answer

        if getTrueAnswerNumber() == answer
          true
        else
          trackRecord[index.toString()].fauxAttempts += 1
          false

      if checkAnswer(chbx_id.slice(-1)) == true
        $('#failure').addClass 'hidden'
        $('#success').removeClass 'hidden'
        setTimeout (->
          $('#success').addClass 'hidden'
          return
        ), 800
        setTimeout (->
          nextQuestion questions, index + 1, trackRecord
          return
        ), 800
      else
        $('#failure').removeClass 'hidden'
        setTimeout (->
          $('#failure').addClass 'hidden'
          return
        ), 800
      return
    return

  nextQuestion = (questions, index, trackRecord) ->

    checkIfCleared = ->
      if document.getElementById('questions')  != null
        $('#questions').remove()
      if document.getElementById('modal-body') != null
        $('#modal-body').remove()
      if document.getElementById('results')    != null
        $('#results').remove()
      return

    appendTemplate = ->
      questionView = document.createElement('div')
      testView     = document.getElementById('tost')

      cookTemplate = ->
        template   = '<h2><%=question%></h2><table> <% for (let i=0; i<variants.length; i += 1) { %><tr> <td> <input class="checkbox" name="checkbx" type="radio" id="chbx-<%=i%>"> </td> <td> <label class="checkbox-label" for="chbx-<%=i%>"><%=variants[i]%></label> </td> </tr> <% } %> </table> <button id="submit" type="button" class="btn btn-primary btn-lg">Submeat</button>'
        _.template(template) questions[index]

      $.extend questionView,
        innerHTML: cookTemplate()
        id:        'questions'
      testView.appendChild questionView
      return

    if index > Object.keys(questions).length
      finishTheOrdeal questions, index, trackRecord
    else
      checkIfCleared()
      appendTemplate()
      waitForInput questions, index, trackRecord
    return

  finishTheOrdeal = (questions, index, trackRecord) ->
    $('#questions').remove()
    button           = document.createElement('button')
    testView         = document.getElementById('tost')
    modal            = document.getElementById('modalbody')
    button.innerHTML = '<button id="results" type="button" class="btn btn-primary btn-lg"> Show results</button>'
    testView.appendChild button
    trueAnswers      = 0
    answersAmount    = Object.keys(trackRecord).length
    i = 1
    while i <= answersAmount
      if trackRecord[i.toString()].fauxAttempts == 0
        trueAnswers += 1
      i += 1
    modal.innerHTML = '<p> True answers: ' + trueAnswers + ' of ' + answersAmount + '</p>'
    $('#results').click ->
      $('#myModal').modal 'show'
      return
    $('#reload').click ->
      $('#myModal').modal 'hide'
      nextQuestion questions, 1, makeTrackRecordObject(questions)
      return
    return

  do ->

    setStartClick = ->
      $('.test-view').one 'click', (event) ->
        event.stopPropagation()
        $('.test-view').css 'cursor', 'default'
        $('.take-test-button').remove()
        $('.test-view').animate { height: '400px' }, 500
        $('#questions').removeClass 'hidden'
        return
      return

    writeToLocalStorage = ->
      questions$wtls = 
        '1':
          question: 'Who is the world\'s most successful musician in history?'
          variants: [
            'Eminem'
            'Michael Jackson'
            'Madonna'
            'Bob Dylan'
            'Stevie Wonder'
            'David Bowie'
          ]
          answer: 'Michael Jackson'
        '2':
          question: 'Which DOM attribute doesn\'t exist?'
          variants: [
            'addAttribute'
            'hasAttribute'
            'removeAttribute'
          ]
          answer: 'addAttribute'
        '3':
          question: 'Which number of month was November initially?'
          variants: [
            '2'
            '8'
            '10'
            '6'
          ]
          answer: '8'
        '4':
          question: 'Who is the longest reigning monarch of the United Kingdom?'
          variants: [
            'Queen Victoria'
            'Queen Elizabeth I'
            'Queen Elizabeth II'
            'King George V'
          ]
          answer: 'Queen Elizabeth II'
        '5':
          question: 'What makes the world go round?'
          variants: [
            'money'
            'women'
            'men'
            'governments'
            'mysticism'
            'information'
          ]
          answer: 'money'
      try
        localStorage.setItem 'questions', JSON.stringify(questions$wtls)
      catch e
        alert 'Something went wrong! ' + e
        return false
      return

    setStartClick()
    writeToLocalStorage()
    questions = JSON.parse(localStorage.getItem('questions'))
    nextQuestion questions, 1, makeTrackRecordObject(questions)
    $('#questions').addClass 'hidden'
    return
  return
