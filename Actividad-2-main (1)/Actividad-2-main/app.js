document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove('active');  // Ocultar la imagen actual
        currentIndex = (currentIndex + 1) % totalImages;  // Ir a la siguiente imagen
        images[currentIndex].classList.add('active');  // Mostrar la nueva imagen
    }

    setInterval(showNextImage, 3000);  // Cambiar cada 3 segundos
});
