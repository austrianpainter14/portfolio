const checkbox = document.getElementById("menu_checkbox");
const mobileMenu = document.querySelector(".mobile-links");
const mobileLinksInner = document.querySelector(".mobile-links-inner");

checkbox.addEventListener("change", () => {
  mobileMenu.classList.toggle("open", checkbox.checked);
});

mobileMenu.addEventListener("click", (e) => {
  if (!mobileLinksInner.contains(e.target)) {
    checkbox.checked = false;
    mobileMenu.classList.remove("open");
  }
});
