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
