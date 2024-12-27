function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const scrollArrow = document.getElementById('scrollArrow');

// Show the arrow when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollArrow.classList.add('show');
  } else {
    scrollArrow.classList.remove('show');
  }
});

// Smooth scroll back to top
scrollArrow.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

