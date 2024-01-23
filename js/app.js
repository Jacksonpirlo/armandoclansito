let btn = document.querySelector('button');
let img = document.getElementById('img');

btn.addEventListener('click', () => {

	alert('Gracias por entrar');
	
	if (img.style.display === 'none') {
		img.style.display = 'block'
		img.style.width = '200px'
	}

	else {
		 img.style.display = 'none';
	}
})