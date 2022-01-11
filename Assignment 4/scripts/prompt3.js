let form = document.querySelector('form');
form.addEventListener('submit', (check) => {
	console.log(check);
	if (document.getElementById('password').value != 123456789) alert(`Incorrect password`);
	else document.querySelector('h1').innerText = 'Correct!';
});