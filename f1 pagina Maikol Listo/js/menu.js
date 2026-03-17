const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle && toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

function toggleInfo(card) {
  card.classList.toggle("active");
}