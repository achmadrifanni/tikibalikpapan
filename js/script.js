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
