const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

// Small reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .project, .timeline-item, .resume-card")
  .forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
