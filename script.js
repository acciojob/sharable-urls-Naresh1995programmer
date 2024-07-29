// your code here
document.addEventListemer('DOMContentLoaded', function(){
	const urlForm = document.getElementById('urlForm');
	const heading3 = document.getElementById('url');

	urlForm.addEventListemer('submit', function(e){
		event.preventDefault(); 
		const nameValue = document.getElementById('name').value;
		const yearValue = document.getElementById('year').value;
		const newURL = `https://localhost:8080/?$name{encodeURIComponent(nameValue)}&year{encodeURIComponent(yearValue)}`
		heading3.textContent = newURL;
	})
})