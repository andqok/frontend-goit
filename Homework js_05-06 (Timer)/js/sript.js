var seconds = 0,
      miliseconds = 0;
var ms = document.getElementById("ms");
var sec = document.getElementById("sec");

function timer () {
	document.getElementById("start").onclick = pause;
	document.getElementById("start").innerHTML = "Stop";
	action = setInterval(times, 41);

	function times () {
		miliseconds += 41;
		ms.innerHTML = miliseconds;
		if (miliseconds >=1000) {
			miliseconds = miliseconds - 1000;
			seconds = seconds + 1;
			sec.innerHTML = getFormattedTime();
		}
	}
};

function pause() {
	clearTimeout(action);
	document.getElementById("start").onclick = timer;
	document.getElementById("start").innerHTML = "Start";
};

function stopBinge() {
	pause();
	seconds = 0;
	sec.innerHTML = "00:00:00";
	ms.innerHTML = "";
};

function getFormattedTime () {
	return getHours(seconds) + ":" + getMinutes(seconds) + ":" + getSeconds(seconds);
};

function getSeconds(seconds) {
	if ((seconds % 60) < 10) {
		return "0" + seconds % 60;
	} else {
		return seconds % 60 }
};

function getMinutes(seconds) {
	console.log("entered minutes");
	if (Math.floor(seconds / 60) < 10) {
		return "0" + Math.floor(seconds / 60);
	} else {
		return Math.floor(seconds / 60) }
};

function getHours(seconds) {
	if (Math.floor(seconds / 3600) < 10) {
		return "0" + Math.floor(seconds / 3600);
	} else {
		return Math.floor(seconds / 3600);
	}
};

document.getElementById("start").onclick = timer;

document.getElementById("clear").onclick = stopBinge;

//document.getElementById("split").onclick = function () {
//	console.log("done");
//	setTimeout(inner, 2000);
//};
//
//document.getElementById("stop").onclick = function () {
//	console.log("done");
//	setTimeout(inner, 2000);
//};
//document.getElementById("reset").onclick = function () {
//	console.log("done");
//	setTimeout(inner, 2000);
//};


// error: onClick in lieu of onclick
// 
//	function translateSeconds () {
//		if (seconds < 10) {
//			return "00:00:0" + seconds;
//		} else if (seconds < 60) {
//			return "00:00:" + seconds;
//		} else if (seconds < 3600) {
//			if (Math.floor(seconds / 60) < 10) {
//				if ((seconds % 60) < 10) {
//					return "00:0" + Math.floor(seconds / 60) + ":0" + seconds % 60;
//				} else {
//					return "00:0" + Math.floor(seconds / 60) + ":" + seconds % 60;
//				}
//			} else {
//			return "00:" + Math.floor(seconds / 60) + ":" + seconds % 60;
//			}
//		} else {
//			if (Math.floor(seconds / 3600) < 10) {
//				return "0" + Math.floor(seconds / 3600) + ":0" + (Math.floor(seconds / 3600) / 60) + ":" + seconds % 60;
//			} else {
//				return Math.floor(seconds / 3600) + ":0" + (Math.floor(seconds / 3600) / 60) + ":" + seconds % 60;
//			}
//		}
//	};
