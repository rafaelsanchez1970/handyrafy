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
