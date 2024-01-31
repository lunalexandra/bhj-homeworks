const request = new XMLHttpRequest();
const loader = document.getElementById('loader');
const items = document.getElementById('items');

request.addEventListener('readystatechange', () => {
	if (request.readyState === request.DONE) {
		loader.classList.remove('loader_active');
		let data = JSON.parse(request.responseText);
		Object.keys(data.response.Valute).forEach(key => {
			items.innerHTML += `
      <div class="item">
      <div class="item__code">
        ${data.response.Valute[key].CharCode}
      </div>
      <div class="item__value">
        ${data.response.Valute[key].Value}
      </div>
      <div class="item__currency">
        руб.
        </div>
      </div>`
		})
	}
})

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
request.send();