const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('click__speed');
let clickTime = Date.now();

function changeSize() {
	let timeDifference = Date.now() - clickTime;
	cookie.width = '250';
	cookie.height = '200';
	counter.textContent = `${+counter.textContent + 1}`;
	setTimeout(() => {
		cookie.width = '200';
		cookie.height = '150';
	}, 100)
	clickSpeed.textContent = `${(1 / timeDifference * 1000).toFixed(2)}`
	clickTime = Date.now();
}

cookie.onclick = changeSize;



