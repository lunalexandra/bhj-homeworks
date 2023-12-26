let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function getHole(index) {
	return document.getElementById(`hole${index}`)
}

for (holeindex = 1; holeindex < 10; holeindex++) {
	let hole = getHole(holeindex);
	hole.addEventListener('click', function() {
		if (hole.className.includes('hole_has-mole')) {
			dead.textContent++;
		} else {
			lost.textContent++;
		}
		if (dead.textContent == 10) {
			alert('Вы победили!');
			playing = false;
			lost.textContent = 0;
			dead.textContent = 0;
		} else if (lost.textContent == 5) {
			alert('Вы проиграли :(');
			playing = false;
			lost.textContent = 0;
			dead.textContent = 0;
		}
	})
}