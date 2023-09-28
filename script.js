var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.book-content');
var uno = document.querySelectorAll('.book');
var portada = document.querySelectorAll('#portada');

var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < uno.length; i++) {
	uno[i].style.zIndex = customZindex;
	customZindex--;

	uno[i].addEventListener('click', function(e){

		var tgt = e.target;
		var unoThis = this;

		unoThis.style.zIndex = contZindex;
		contZindex++;

		if (tgt.getAttribute('class') == 'face-front') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;
			setTimeout(function(){
				unoThis.style.transform = 'rotateY(-180deg)';
			}, 500);
		}
		if (tgt.getAttribute("class") == 'face-back') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;

			setTimeout(function(){
				unoThis.style.transform = 'rotateY(0deg)';
			}, 500);
		}

		if (tgt.getAttribute('id') == 'portada') {
			flip.classList.remove("trnsf-reset");
			flip.classList.add("trnsf");
		}
		if (tgt.getAttribute('id') == 'trsf') {
			flip.classList.remove("trnsf");
			flip.classList.add("trnsf-reset");
		}

	});
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const currentHour = new Date().getHours();

    // Cambia el fondo según la hora
    if (currentHour >= 7 && currentHour < 18) {
        // Es de día, establece la imagen de fondo para el día
        body.style.backgroundImage = 'url("img/d5.jpg")';
    } else {
        // Es de noche, establece la imagen de fondo para la noche
        body.style.backgroundImage = 'url("img/d6.jpg")';
    }
	body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
});


const saludoDiv = document.getElementById('saludo');

function obtenerSaludo() {
  const horaActual = new Date().getHours();

  if (horaActual >= 5 && horaActual < 18) {
    return 'Buenos días!!';
  } else {
    return 'Buenas noches';
  }
}

const saludo = obtenerSaludo();
saludoDiv.innerHTML = `<a href="#" class="ssaludo">${saludo}</a>`;