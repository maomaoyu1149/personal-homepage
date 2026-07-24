document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle) {
    navToggle.addEventListener("click", function() {
      navLinks.classList.toggle("open");
    });
  }
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");
  function updateActiveLink() {
    let current = "";
    sections.forEach(function(section) {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute("id");
      }
    });
    navAnchors.forEach(function(link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
  navAnchors.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    });
  });
});
