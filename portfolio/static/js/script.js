// Grab all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Scroll-Spy: highlight active link
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Smooth Scrolling
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60, // offset for sticky navbar
      behavior: "smooth"
    });
  });
});

// Apply ripple to interactive elements
document.querySelectorAll('.btn, .nav-link, .project-card, .skills-list li')
  .forEach(el => {
    el.classList.add('ripple-container');
    el.style.position = 'relative';
    el.style.overflow = 'hidden';

    el.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
      ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

// Hero water ripple background
$(document).ready(function() {
  $('.hero').ripples({
    resolution: 256,
    dropRadius: 12,
    perturbance: 0.03
  });

  $('.hero').on('mousemove', function(e) {
    $(this).ripples('drop', e.pageX, e.pageY, 0, 0.02);
  });
});
