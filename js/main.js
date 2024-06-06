const elBtn = document.querySelector('.btn');
const elBody = document.querySelector('body');

elBtn.addEventListener('click', () => {
	elBody.classList.toggle('dark-mode');
});
