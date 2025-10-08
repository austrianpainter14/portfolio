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


// Select elements
const menuCheckbox = document.getElementById('menu_checkbox');
const mobileLinks = document.querySelector('.mobile-links');
const html = document.documentElement;

// Listen for checkbox toggle
menuCheckbox.addEventListener('change', () => {
    if (menuCheckbox.checked) {
        // Menu is active
        mobileLinks.classList.add('open');
        html.style.overflow = 'hidden'; // Disable scrolling
    } else {
        // Menu is inactive
        mobileLinks.classList.remove('open');
        html.style.overflow = ''; // Re-enable scrolling
    }
});

// (Optional) Close menu when any link is clicked
document.querySelectorAll('.mobile-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuCheckbox.checked = false;
        mobileLinks.classList.remove('open');
        html.style.overflow = '';
    });
});
