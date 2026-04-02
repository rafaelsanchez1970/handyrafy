// --- 1. SLIDER LOGIC ---
let currentSlide = 0;
function moveSlide(direction) {
    const wrapper = document.getElementById('sliderWrapper');
    if (!wrapper) return;
    
    const slides = document.querySelectorAll('.slider-slide');
    const totalSlides = slides.length;
    const visibleSlides = window.innerWidth <= 768 ? 1 : 2;
    const maxIndex = totalSlides - visibleSlides;

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = maxIndex;
    else if (currentSlide > maxIndex) currentSlide = 0;

    const step = 100 / visibleSlides;
    wrapper.style.transform = `translateX(${-currentSlide * step}%)`;
}

// --- 2. UNIVERSAL MODAL TOGGLE ---
// This single function handles opening ANY modal by ID
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = (id === 'whoWeAreModal') ? 'flex' : 'block';
        document.body.style.overflow = "hidden"; // Stop background scroll
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = "auto"; // Restore scroll
    }
}

// Shortcut functions for your existing HTML calls
function openWho() { openModal('whoWeAreModal'); }
function closeWho() { closeModal('whoWeAreModal'); }
function openPaymentFaq() { openModal('paymentFaqModal'); }
function closePaymentFaq() { closeModal('paymentFaqModal'); }
function openTestimonials() { openModal('testimonialModal'); }
function closeTestimonials() { closeModal('testimonialModal'); }
function openPrivacy() { openModal('privacyModal'); }
function closePrivacy() { closeModal('privacyModal'); }

// --- 3. UNIVERSAL CLICK-OUTSIDE-TO-CLOSE ---
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
// Inicializa los iconos de Lucide al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

/* para que las tarjetas aparezcan suavemente efecto*/
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.15 // Se activa cuando el 15% de la tarjeta es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Opcional: dejar de observar una vez que ya apareció
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos todas las tarjetas para observar
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => observer.observe(card));
});

























/*
// Función para abrir cualquier modal por su ID
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
    }
}

// Función para cerrar cualquier modal por su ID
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Devuelve el scroll
    }
}

// Cerrar automáticamente si hacen clic en el fondo oscuro
window.onclick = function(event) {
    if (event.target.classList.contains('modal-container')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};
*/