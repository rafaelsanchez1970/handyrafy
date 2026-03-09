// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.style.display === 'block';
    mobileNav.style.display = open ? 'none' : 'block';
    menuBtn.setAttribute('aria-expanded', (!open).toString());
  });
}
// Close mobile nav when a link is clicked
if (mobileNav) {
  const navLinks = mobileNav.querySelectorAll('a');
  navLinks.forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.style.display = 'none';
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple slider
(function(){
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.sliderPrev');
  const nextBtn = slider.querySelector('.sliderNext');
  const dots = Array.from(slider.querySelectorAll('.sliderDots button'));
  let index = 0;
  let timer = null;

  function show(i){
    index = (i + slides.length) % slides.length;
    slides.forEach((s, si) => s.classList.toggle('is-active', si === index));
    dots.forEach((d, di) => d.classList.toggle('is-active', di === index));
  }

  function next(){ show(index + 1); }
  function prev(){ show(index - 1); }

  function start(){ stop(); timer = setInterval(next, 6000); }
  function stop(){ if (timer) { clearInterval(timer); timer = null; } }

  // Init
  show(0); start();

  // Controls
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); start(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); start(); });
  dots.forEach((d, di) => d.addEventListener('click', () => { show(di); start(); }));

  // Pause on hover/focus
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);
})();

// Quote form validation + clear (attach to any form)
(function(){
  function attachQuoteForm(form){
    if (!form) return;
    const nameEl = form.querySelector('[name=name]');
    const phoneEl = form.querySelector('[name=phone]');
    const emailEl = form.querySelector('[name=email]');
    const messageEl = form.querySelector('[name=message]');
    const clearBtn = form.querySelector('#clearForm') || form.querySelector('#clearFormModal');
    const phoneError = phoneEl ? phoneEl.parentElement.querySelector('.error') : null;
    const emailError = emailEl ? emailEl.parentElement.querySelector('.error') : null;

    function resetErrors(){
      if (phoneError) phoneError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (phoneEl) phoneEl.setCustomValidity('');
      if (emailEl) emailEl.setCustomValidity('');
    }

    function formatPhone(raw){
      const digits = (raw || '').replace(/\D/g, '');
      if (digits.length === 0) return '';
      if (digits.length === 11 && digits.startsWith('1')){
        const d = digits.slice(1);
        return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`;
      }
      if (digits.length !== 10) return null;
      return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
    }

    if (phoneEl){
      phoneEl.addEventListener('blur', () => {
        resetErrors();
        const formatted = formatPhone(phoneEl.value);
        if (formatted === null){
          phoneEl.value = '';
          if (phoneError) phoneError.textContent = 'Invalid phone; cleared.';
        } else {
          phoneEl.value = formatted;
        }
      });
    }

    function validate(){
      resetErrors();
      const phone = phoneEl ? phoneEl.value.trim() : '';
      const email = emailEl ? emailEl.value.trim() : '';
      let ok = true;

      if (!phone && !email){
        if (phoneError) phoneError.textContent = 'Provide phone or email.';
        if (emailError) emailError.textContent = 'Provide phone or email.';
        ok = false;
      }

      if (phone){
        const formatted = formatPhone(phone);
        if (formatted === null){
          if (phoneEl) phoneEl.value = '';
          if (phoneError) phoneError.textContent = 'Invalid phone; cleared.';
        } else {
          if (phoneEl) phoneEl.value = formatted;
        }
      }

      if (email){
        if (emailEl && !emailEl.checkValidity()){
          ok = false;
          if (emailError) emailError.textContent = 'Enter a valid email.';
          emailEl.setCustomValidity('Invalid email');
        }
      }

      return ok;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = validate();
      if (ok){
        const name = nameEl ? nameEl.value.trim() : '';
        const phone = phoneEl ? phoneEl.value.trim() : '';
        const email = emailEl ? emailEl.value.trim() : '';
        const message = messageEl ? messageEl.value.trim() : '';
        const subject = "Estimate Request — Raphael's Handyman";
        const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailto = `mailto:rocky8214@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
      } else {
        if (phoneEl) phoneEl.reportValidity();
        if (emailEl) emailEl.reportValidity();
      }
    });

    if (clearBtn){
      clearBtn.addEventListener('click', () => { form.reset(); resetErrors(); });
    }
  }

  // Attach to page form and modal form
  attachQuoteForm(document.getElementById('quoteForm'));
  attachQuoteForm(document.getElementById('quoteFormModal'));

  // Modal open/close
  const quoteOpenBtn = document.getElementById('quoteOpenBtn');
  const modal = document.getElementById('quoteModal');
  const modalCloseBtn = document.getElementById('quoteCloseBtn');
  const quoteOpeners = Array.from(document.querySelectorAll('.quoteOpen'));
  if (quoteOpenBtn) quoteOpeners.push(quoteOpenBtn);
  if (modal && quoteOpeners.length){
    quoteOpeners.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('is-open');
        const first = modal.querySelector('input, textarea, button');
        if (first) first.focus();
      });
    });
  }
  if (modal && modalCloseBtn){
    modalCloseBtn.addEventListener('click', () => { modal.classList.remove('is-open'); });
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('is-open'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('is-open'); });
  }
})();
