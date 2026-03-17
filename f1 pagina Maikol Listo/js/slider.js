const slides = document.querySelectorAll('.slides img');
let index = 0;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
}

function next() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

nextBtn && nextBtn.addEventListener('click', next);
prevBtn && prevBtn.addEventListener('click', prev);

// Autoplay
setInterval(next, 4000);
