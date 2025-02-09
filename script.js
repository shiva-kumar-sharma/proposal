const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'cGFyaQ==';
const nextPageUrl = 'main.html';

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (btoa(userInput) === secretCode) {
		sessionStorage.setItem('username', btoa(userInput));
		window.location.href = nextPageUrl;
	} else {
		resultDiv.innerHTML = 'Tum meri pari nhi hoo... kon hooo tum.... kaha hai meri pari';
	}
});