const pantalla = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');

btn.forEach(button => {
	button.addEventListener('click', ()=> {
		const pushedButton = button.textContent;

		if (button.id === 'C') {
			pantalla.textContent = '0';
			return;
		}

		if(button.id === 'delete') {
			if (pantalla.textContent.length === 1 || pantalla.textContent === 'Error!') {
				pantalla.textContent = '0';
			}

			else {
				pantalla.textContent = pantalla.textContent.slice(0, -1);
			}

			return;
		}

		if (button.id === 'equal') {
			try {
				pantalla.textContent = eval(pantalla.textContent);
			} 

			catch {
				pantalla.textContent = 'Error!';
			}
			
			return;
		}


		if(pantalla.textContent === '0' || pantalla.textContent === 'Error!') {
			pantalla.textContent = pushedButton;
		}

		else {
			pantalla.textContent += pushedButton;
		}
		
	})
})