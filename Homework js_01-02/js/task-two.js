var bu = document.getElementById('mal');

bu.onclick = function() {

var names = [];
var current;

for (i = 0; i < 5; i++) {
	current = prompt('Enter 5 names', 'name');
	names.push(current);
};

username = prompt('Your name?', 'Иван Васильевич');
alert(names + username);

for (i = 0; names.length; i++) {
	if (names[i] == username) {
		alert(username + ' Вы успешно вошли');
		break;
	};
	if (i == 4) {
		alert('Что-то пошло не так, мы работаем... над.... ох');
		break;
	}
  };
};