let currentSlideIndex = 1;

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) {
    currentSlideIndex = 1;
  }

  if (n < 1) {
    currentSlideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active-dot', '');
  }

  slides[currentSlideIndex - 1].style.display = 'block';
  dots[currentSlideIndex - 1].className += ' active-dot';
}

function changeSlide(n) {
  showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
  showSlides(currentSlideIndex = n);
}

// Autoplay
let slideInterval = setInterval(() => {
  changeSlide(1);
}, 3000);

// Pause autoplay on hover
document.querySelector('.carousel').addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

// Resume autoplay on mouse leave
document.querySelector('.carousel').addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 3000);
});

showSlides(currentSlideIndex);
          
   // Inicializar ScrollReveal
   ScrollReveal().reveal('.scroll-reveal-section', {
    delay: 50,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false
});



function cambiarContenido(opcion) {
  // Define el contenido de la imagen y el texto según la opción seleccionada
  var imagenSrc, texto;

  switch (opcion) {
      case 1:
          imagenSrc = "/assets/img-index/Cruz_roja_Chilena_Logo.jpg";
          texto = "Gracias por su donación";
          break;
      case 2:
          imagenSrc = "/assets/img-index/Logo_Dhermes.webp";
          texto = "Gracias por su donación";
          break;
      case 3:
          imagenSrc = "/assets/img-index/398616221_642102724763970_6512310732122997937_n.jpg";
          texto = "Gracias por su donación";
          break;
      case 4:
          imagenSrc = "/assets/img-index/2023-11-12.jpg";
          texto = "Gracias por su donación";
          break;
      // Agrega más casos según sea necesario
      default:
          imagenSrc = "default.jpg";
          texto = "Texto predeterminado.";
  }

  // Almacena la información en el almacenamiento local para que se pueda acceder desde la página de donación
  localStorage.setItem("imagenSrc", imagenSrc);
  localStorage.setItem("texto", texto);
}


function mostrarContenido(id) {
  // Configurar contenido personalizado según el ID
  switch (id) {
      case 1:
        infoImage.src = "/assets/img-index/Cruz_roja_Chilena_Logo.jpg";
        infoText.textContent = 'La Cruz Roja Chilena es una institución humanitaria y voluntaria que brinda apoyo en situaciones de emergencia y promueve la salud y el bienestar de la sociedad.';
        break;
      case 2:
        infoImage.src = "/assets/img-index/Logo_Dhermes.webp";
        infoText.textContent = 'DHERMES es un Refugio de Animales con 19 años resguardando a cientos de perritos abandonados y vulnerables que buscan hogar.';
        break;
      case 3:
        infoImage.src = "/assets/img-index/398616221_642102724763970_6512310732122997937_n.jpg";
        infoText.textContent = 'La Primera Compañía de Bomberos de Valparaiso fue fundada en 1851.Comenzó con 151 voluntarios, todos connotados porteños y en su mayoría ingleses y norteamericanos.\nEn la actualidad están conformadas por más de 50 primerinos, quienes día a día permanecen atentos al ulular de la sirena para responder si el deber llama.';
        break;
      case 4:
        infoImage.src = "/assets/img-index/2023-11-12.jpg";
        infoText.textContent = 'Fundación Apoyándote</span> está conformada por padres con hijos en condición de Espectro Autista y fue creada con el objetivo de apoyar a las familias que no puedan costear los tratamientos que tanto cuesta pagar.';
        break;
      // Agrega más casos según la cantidad de elementos "info"
  }




  // Mostrar la superposición y el contenido
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('infoContent').style.display = 'block';
}

document.addEventListener('click', function (event) {
  var overlay = document.getElementById('overlay');
  var infoContent = document.getElementById('infoContent');
  
  // Verificar si el clic no ocurrió dentro del contenedor "info" o en el ícono
  var isInfoContainer = event.target.closest('.info');
  var isIconContainer = event.target.closest('.icon-container');
  
  if (!isInfoContainer && !isIconContainer) {
      overlay.style.display = 'none';
      infoContent.style.display = 'none';
  }
});











