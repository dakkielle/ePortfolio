function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// JavaScript Typewriting Effect
document.addEventListener("DOMContentLoaded", function () {
  const typewriterElement = document.getElementById('typewriter');
  const text = "Shan Chai"; // Text to type
  let index = 0;

  function typeWriterEffect() {
    if (index < text.length) {
      typewriterElement.textContent += text.charAt(index); // Add one character at a time
      index++;
      setTimeout(typeWriterEffect, 150); // Adjust typing speed (150ms per character)
    }
  }

  typeWriterEffect();
});


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

