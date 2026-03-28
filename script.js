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


// Función para la Política de Privacidad
document.getElementById('privacyBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert(
       "HANDY RAFY LLC - SERVICE & PRIVACY POLICY\n\n" +
        "1. INTERNAL RECORDS: We collect your name, phone, and address to maintain a private customer history. This helps us track your warranties and past projects.\n\n" +
        "2. DATA SAFETY: We NEVER sell your data to third parties.\n\n" +
        "3. OPT-OUT: You can stop receiving SMS at any time by replying 'STOP'.\n\n" +
        "4. SMS CONSENT: By texting us, you agree to receive a reply and service-related messages.\n\n" +
        "5. SERVICE FOLLOW-UP: We may send a text a few days after completion to ensure you are 100% satisfied with the work.\n\n" +
        "6. ESTIMATES: Estimates are based on initial photos. Final pricing may change if unforeseen issues are discovered during the repair.\n\n" +
        "7. PROJECT PHOTOS: We take 'Before & After' photos of our work and may display them in our gallery to showcase our services.\n\n" +
        "8. YOUR RIGHT TO REMOVE: If you do not want your project photos online, text us at +1 (678) 698-7649 and we will remove them immediately.\n\n" +
        "9. SECURITY: We take reasonable steps to protect your data. However, no mobile transmission is 100% secure."
    );
}
);

// Funciones para los enlaces del Menú (Navbar)
function openPaymentFaq() {
    alert("PAYMENTS & FAQ:\n- We accept Zelle, Cash, and Credit Cards.\n- Estimates are always free via text!");
}

function openWho() {
    alert("WHO WE ARE:\nHandy Rafy LLC is a local Marietta business. We focus on high-quality home repairs and transparent pricing.");
}

