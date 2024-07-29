// your code here
document.addEventListemer('DOMContentLoaded', function(){
	const urlForm = document.getElementById('urlForm');
	const heading3 = document.getElementById('url');

	urlForm.addEventListemer('submit', function(){
		const nameValue = document.getElementById('name').value;
		const yearValue = document.getElementById('year').value;
		const newURL = `https://localhost:8080/?$name{encodeURLComponent(nameValue)}&year{encodeURLComponent(yearValue)}`
		heading3.textContent = newURL;
	})
})