document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
});

/* 1. Mobile Navigation Toggle */
function initMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* 2. Catalog Filter Tabs */
function filterCatalog(category, button) {
  const items = document.querySelectorAll('.catalog-item');
  const buttons = document.querySelectorAll('.tab-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  if (button) {
    button.classList.add('active');
  }

  items.forEach(item => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

/* 3. Contact & Inquiry Modal Handling */
function openContactModal(modelName = '') {
  const modal = document.getElementById('contactModal');
  const select = document.getElementById('modelSelect');

  if (modelName && select) {
    select.value = modelName;
  }

  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

window.onclick = function(event) {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    closeContactModal();
  }
};

/* 4. Form Submission Handling */
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name') ? document.getElementById('name').value : '';
  const company = document.getElementById('company') ? document.getElementById('company').value : '';
  const model = document.getElementById('modelSelect') ? document.getElementById('modelSelect').value : '';

  alert(`Terima kasih Bapak/Ibu ${name} dari ${company}.\nPermintaan penawaran/konsultasi untuk (${model}) telah kami terima. Tim Tsubasa Aircraft akan segera menghubungi Anda.`);

  closeContactModal();
  const form = document.getElementById('inquiryForm');
  if (form) {
    form.reset();
  }
}