const timer = document.getElementById("timer");
let seconds = +timer.textContent;
let minutes = 0;
let hours = 0;

if (seconds > 59) {
	minutes = Math.floor(seconds / 60);
	seconds = seconds - 60 * minutes;
}

if (minutes > 59) {
	hours = Math.floor(minutes / 60);
	minutes = minutes - 60 * hours;
}

const reduceTime = function() {
	seconds -= 1;

	if (hours === 0 && minutes === 0 && seconds === 0) {
		alert('Вы победили в конкурсе!');
		clearInterval(intervalId);
	}

	if (seconds < 0) {
		minutes -= 1;
		seconds = 59;
	}
	if (minutes < 0) {
		hours -= 1;
		minutes = 59;
	}

	timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
};

const intervalId = setInterval(reduceTime, 1000);
