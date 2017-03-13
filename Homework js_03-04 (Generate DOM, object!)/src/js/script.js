
var goldenEgg = {
	div: '<div class="col-md-4 col-md-offset-5"><h3 class="starter-template">Тест по программированию</h3></br><ol class="list-group row" id="list"></ol></div>',

	generateTestItem : function(currentQuestion) {
		console.log("entered generateTestItem");

		var li = document.createElement('li');
		document.getElementById('list').appendChild(li);

		var h = document.createElement('h4');
		li.appendChild(h);
		h.innerHTML = 'Вопрос №' + currentQuestion;

		for (i = 1; i < 4; i++) {
			var checkbox = document.createElement('input');
		//	console.log(checkbox);
			checkbox.setAttribute('type', 'checkbox');
			document.getElementById('list').appendChild(checkbox);

			var label = document.createElement('label');
		//	console.log(label);
			label.innerHTML = 'Вариант ответа №' + i;
			label.setAttribute('for', 'q' + currentQuestion + '-input' + i);
			document.getElementById('list').appendChild(label);

			var br = document.createElement('br');
			document.getElementById('list').appendChild(br);
		};
		console.log('exited generateTestItem');
		return 1;
	},

	generateTestPage : function(itemsCount) {
		console.log("entered func");
		document.write(this.div);
		for (a = 1; a < itemsCount + 1; a++) {
			console.log("entered for");
			this.generateTestItem(a);
		};
		var button = document.createElement('button');
		button.setAttribute('type', 'submit');
		button.innerHTML = 'Проверить мои результаты'
		document.getElementById('list').appendChild(button);
  }
}

goldenEgg.generateTestPage(3);