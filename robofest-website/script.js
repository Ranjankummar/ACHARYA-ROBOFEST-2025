// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(box => {
    const top = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      box.classList.add('active');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// Run once on page load
revealOnScroll();
