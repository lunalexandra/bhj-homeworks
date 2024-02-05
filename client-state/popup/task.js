const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
let windowState = modal.classList.add('modal_active');

if (document.cookie.includes('state=close')) {
	windowState = modal.classList.remove('modal_active');
}

modalClose.addEventListener('click', () => {
	windowState = modal.classList.remove('modal_active');
	document.cookie = 'state=close';
});