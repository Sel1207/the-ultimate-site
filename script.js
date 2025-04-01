// SCROLL REVEAL
document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('in-view');
      }
    });
  
    const btn = document.getElementById('back-to-top');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
  // BACK TO TOP
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // NAV MENU TOGGLE
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
  });
  
  // FUTURISTIC THEME TOGGLE
  const toggleInput = document.getElementById('theme-toggle');
  
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      toggleInput.checked = true;
    }
  });
  
  toggleInput.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });
  