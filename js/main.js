/* 
   Perfect Health Center - Homeopathy & General Practice
   Interactive Functionality & Component Scripts
*/

document.addEventListener('DOMContentLoaded', () => {
  
  /* -------------------------------------------------------------
     1. STICKY NAVBAR & SCROLLSPY ACTIVE INDICATOR
  ------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  function handleScroll() {
    // Navbar glass state on scroll
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // ScrollSpy active link highlighting
    let currentSection = '';
    const scrollPosition = window.scrollY + 120;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger initial check

  /* -------------------------------------------------------------
     2. MOBILE MENU DRAWER TOGGLE
  ------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  /* -------------------------------------------------------------
     3. GALLERY LIGHTBOX MODAL
  ------------------------------------------------------------- */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.getAttribute('data-title') || 'Perfect Health Center';
      
      if (lightboxImg && img) {
        lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.textContent = title;
        lightboxModal.classList.add('active');
      }
    });
  });
  
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });
  }
  
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  /* -------------------------------------------------------------
     4. FAQ ACCORDION
  ------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items
      faqItems.forEach(i => {
        i.classList.remove('active');
        const body = i.querySelector('.faq-body');
        if (body) body.style.maxHeight = 0;
      });
      
      // If was not active, open clicked item
      if (!isActive) {
        item.classList.add('active');
        const body = item.querySelector('.faq-body');
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  /* -------------------------------------------------------------
     5. BOOK APPOINTMENT MODAL & FORMS
  ------------------------------------------------------------- */
  const appointmentBtns = document.querySelectorAll('.btn-book-appointment');
  const appointmentModal = document.getElementById('appointmentModal');
  const modalClose = document.getElementById('modalClose');
  
  appointmentBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (appointmentModal) {
        appointmentModal.classList.add('active');
      }
    });
  });
  
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      appointmentModal.classList.remove('active');
    });
  }
  
  if (appointmentModal) {
    appointmentModal.addEventListener('click', (e) => {
      if (e.target === appointmentModal) {
        appointmentModal.classList.remove('active');
      }
    });
  }
  
  // WhatsApp number for Perfect Health Center
  const WA_NUMBER = '919273431261';

  function sendToWhatsApp(message) {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  // ── Modal: Book Appointment form ──
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = document.getElementById('m-name')?.value  || '';
      const phone   = document.getElementById('m-phone')?.value || '';
      const date    = document.getElementById('m-date')?.value  || '';
      const type    = document.getElementById('m-type')?.value  || '';

      const msg =
        `🏥 *Appointment Request – Perfect Health Center*\n\n` +
        `👤 *Patient Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📅 *Preferred Date:* ${date}\n` +
        `🩺 *Consultation Type:* ${type}\n\n` +
        `Please confirm my appointment. Thank you!`;

      sendToWhatsApp(msg);
      appointmentForm.reset();
      if (appointmentModal) appointmentModal.classList.remove('active');
    });
  }

  // ── Contact / Appointment Request form ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = document.getElementById('c-name')?.value    || '';
      const phone   = document.getElementById('c-phone')?.value   || '';
      const email   = document.getElementById('c-email')?.value   || '';
      const service = document.getElementById('c-service')?.value || '';
      const message = document.getElementById('c-message')?.value || '';

      const msg =
        `🏥 *Consultation Request – Perfect Health Center*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        (email   ? `📧 *Email:* ${email}\n`   : '') +
        `🩺 *Specialty:* ${service}\n` +
        (message ? `📝 *Details:* ${message}\n` : '') +
        `\nPlease get back to me at the earliest. Thank you!`;

      sendToWhatsApp(msg);
      contactForm.reset();
    });
  }
});
