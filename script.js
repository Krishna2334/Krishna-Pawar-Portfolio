/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".navbar nav a");

if (menuButton) {
  menuButton.addEventListener("click", () => {

    const isOpen = navbar.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";

  });
}


/* Close mobile menu after clicking a link */

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navbar.classList.remove("open");

    if (menuButton) {

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.textContent = "☰";

    }

  });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
  ".section, .project, .experience-card, .skill-card, .cert-grid > div, .edu"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.1
  }
);


revealElements.forEach((element) => {

  element.classList.add("reveal");

  observer.observe(element);

});


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

const topButton = document.querySelector("#top");

if (topButton) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

      topButton.style.display = "grid";

    } else {

      topButton.style.display = "none";

    }

  });


  topButton.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.querySelector("#year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}
