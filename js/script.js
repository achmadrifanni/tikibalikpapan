// navbar
const navToggle = document.querySelector(".nav__toggle");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
const closeMenu = () => {
  navbar.classList.remove("active");
};

document.addEventListener("click", (event) => {
  const clickedInsideNav = navbar.contains(event.target);
  const clickedHamburger = navToggle.contains(event.target);

  if (!clickedInsideNav && !clickedHamburger) {
    closeMenu();
  }
});

// Select the header element
const header = document.querySelector(".header");

// Listen for the scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    // Add the shadow class if scrolled down
    header.classList.add("header-scrolled");
  } else {
    // Remove the shadow class if at the very top
    header.classList.remove("header-scrolled");
  }
});

// product modal
const termModal = document.getElementById("termModal");
const termBtnOpen = document.getElementById("termBtnOpen");
const termBtnClose = document.getElementById("termBtnClose");

termBtnOpen.addEventListener("click", () => {
  termModal.showModal();
});

termBtnClose.addEventListener("click", () => {
  termModal.close();
});

window.addEventListener("click", (event) => {
  if (event.target === termModal) {
    termModal.close();
  }
});

// stat counter
const statNumbers = document.querySelectorAll("[data-target]");

const animateCounter = (element) => {
  const target = Number(element.dataset.target);
  const duration = 1500;
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const currentValue = Math.floor(progress * target);

    element.textContent = currentValue.toLocaleString("id-ID");

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString("id-ID") + "+";
    }
  };

  requestAnimationFrame(updateCounter);
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statNumbers.forEach(animateCounter);

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

const statsSection = document.querySelector(".partner");

observer.observe(statsSection);

const picWrapper = document.querySelector(".pic__wrapper");
console.log(picWrapper);
