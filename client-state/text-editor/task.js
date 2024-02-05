let textarea = document.getElementById('editor');
const clear = document.getElementById('clear');

textarea.value = localStorage.getItem('text');

textarea.oninput = () => {
  localStorage.setItem('text', textarea.value)
};

clear.addEventListener('click', () => {
  textarea.value = '';
  localStorage.removeItem('text')
})
