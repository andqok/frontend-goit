var button = document.getElementById('faith');

button.onclick = function() {

var number = prompt("Hi there! Please write the number which will should be power-ed", 'number');
var power = prompt('And now when we`re familiar, enter power', 'power');
var res;
res = number;

var pow = function (number, power) {
	for (var i = 1; i < power; i++) {
		res = number * res;
	}
	return res;
};

var result = pow(number, power);

alert(result);

var newDiv = document.createElement("div");
newDiv.innerHTML = '<p>Number: ' 
					+ number + 
					' and power ' 
					+ power + 
					' equals ' 
					+ result + 
					'</p>';
document.body.appendChild(newDiv);
};

