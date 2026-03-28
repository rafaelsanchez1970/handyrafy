let currentSlide = 0;

function moveSlide(direction) {
    const wrapper = document.getElementById('sliderWrapper');
    const slides = document.querySelectorAll('.slider-slide');
    const totalSlides = slides.length;
    
    // Detectar cuántas fotos se ven (PC = 2, Celular = 1)
    const visibleSlides = window.innerWidth <= 768 ? 1 : 2;
    const maxIndex = totalSlides - visibleSlides;

    currentSlide += direction;

    // Loop infinito
    if (currentSlide < 0) {
        currentSlide = maxIndex;
    } else if (currentSlide > maxIndex) {
        currentSlide = 0;
    }

    // CÁLCULO CLAVE: 
    // En PC, cada foto es 50%, así que movemos de 50 en 50.
    // En Celular, cada foto es 100%, movemos de 100 en 100.
    const step = 100 / visibleSlides;
    const offset = -(currentSlide * step);
    
    wrapper.style.transform = `translateX(${offset}%)`;
}

// Función para abrir la ventana
function openWho() {
    document.getElementById('whoWeAreModal').style.display = 'flex';
}
// Función para cerrar la ventana
function closeWho() {
    document.getElementById('whoWeAreModal').style.display = 'none';
}
// Cerrar si hacen clic fuera de la caja blanca
window.onclick = function(event) {
    let modal = document.getElementById('whoWeAreModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openPaymentFaq() {
    document.getElementById("paymentFaqModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Prevents background scroll
}

function closePaymentFaq() {
    document.getElementById("paymentFaqModal").style.display = "none";
    document.body.style.overflow = "auto"; // Re-enables background scroll
}

// Close modal if user clicks outside of the box
window.onclick = function(event) {
    let modal = document.getElementById("paymentFaqModal");
    if (event.target == modal) {
        closePaymentFaq();
    }
}


