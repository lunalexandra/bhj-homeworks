const cartProducts = document.querySelector('.cart__products');
const productCollection = document.querySelectorAll('.product');
const value = document.querySelectorAll('.product__quantity-value');
const btnMinus = document.querySelectorAll('.product__quantity-control_dec');
const btnPlus = document.querySelectorAll('.product__quantity-control_inc');
const btnAdd = document.querySelectorAll('.product__add');
let img = null;
let id = null;
let count = 1;

productCollection.forEach((element, index) => {
	value[index].textContent = `${count}`;

	btnPlus[index].addEventListener('click', () => {
		count++;
		value[index].textContent = `${count}`;
		return count;
	});
	btnMinus[index].addEventListener('click', () => {
		count--;
		if (count < 1) {
			count = 1;
		}
		value[index].textContent = `${count}`;
		return count;
	});

	btnAdd[index].addEventListener('click', () => {
		id = element.getAttribute('data-id');
		img = element.children[1].getAttribute('src');

		const products = [...document.getElementsByClassName('cart__product')];
		const product = products.find(product => product.dataset.id == id);

		if (product) {
			let child = product.children[1];
			child.textContent = +child.textContent + count;
		} else {
			cartProducts.insertAdjacentHTML('afterBegin', `
    <div class="cart__product" data-id="${id}">
      <img class="cart__product-image" src="${img}">
      <div class="cart__product-count">${count}</div>
    </div>`);
		}
		count = 1;
		value[index].textContent = `${count}`;
		return count;
	});
});