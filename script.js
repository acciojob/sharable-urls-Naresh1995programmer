// your code here
document.addEventListener('DOMContentLoaded', function(){
	const urlForm = document.getElementById('urlForm');
	const heading3 = document.getElementById('url');

	urlForm.addEventListener('submit', function(e){
		e.preventDefault(); 
		const nameValue = document.getElementById('name').value;
		const yearValue = document.getElementById('year').value;
		const newURL = `https://localhost:8080/?name=${encodeURIComponent(nameValue)}&year=${encodeURIComponent(yearValue)}`
		heading3.textContent = newURL;
	})
})