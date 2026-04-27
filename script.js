document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq__item').forEach(function (item) {
    const answer = item.querySelector('.faq__answer');
    const arrow = item.querySelector('.faq__arrow');
    answer.style.display = 'none';
    item.querySelector('.faq__q-row').style.cursor = 'pointer';
    arrow.style.cursor = 'pointer';

    function toggle() {
      const isOpen = item.classList.toggle('faq__item--open');
      answer.style.display = isOpen ? 'block' : 'none';
    }

    item.querySelector('.faq__q-row').addEventListener('click', toggle);
    arrow.addEventListener('click', toggle);
  });
});
