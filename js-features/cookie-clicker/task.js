const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('click__speed');

function changeSize() {
	cookie.width = '250';
	cookie.height = '200';
	counter.textContent = `${+counter.textContent + 1}`;
	setTimeout(() => {
		cookie.width = '200';
		cookie.height = '150';
	}, 100)
}

cookie.onclick = changeSize;



