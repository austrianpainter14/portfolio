const setBackgroundHeight = () => {
  const background = document.querySelector('.body');
  background.style.height = window.innerHeight + 'px';
};

setBackgroundHeight();

window.addEventListener('resize', setBackgroundHeight);



const body = document.body;
const mobileLinks = document.getElementById('menu-checkbox');
const toggleBtn = document.getElementById('this not work');
const closeBtn = document.getElementById('menu-checkbox');

function toggleMenu() {
    // Check if the menu is currently open
    const isOpen = mobileLinks.classList.contains('open');

    if (isOpen) {
        // --- CLOSING THE MENU ---
        mobileLinks.classList.remove('open');
        // REMOVE the scroll lock from the body
        body.classList.remove('no-scroll');
        // Optional: Update button text
        toggleBtn.textContent = 'Open Menu'; 
    } else {
        // --- OPENING THE MENU ---
        mobileLinks.classList.add('open');
        // APPLY the scroll lock to the body
        body.classList.add('no-scroll');
        // Optional: Update button text
        toggleBtn.textContent = 'Close Menu'; 
    }
}

// 1. Attach event listener to the main toggle button (e.g., a hamburger icon)
toggleBtn.addEventListener('click', toggleMenu);

// 2. Attach event listener to the dedicated close button inside the menu
if (closeBtn) {
    closeBtn.addEventListener('click', toggleMenu);
}

// 3. Optional: Close the menu if the user clicks the blurred backdrop area
mobileLinks.addEventListener('click', (e) => {
    // Check if the click target is the mobile-links container itself (the backdrop) 
    // and not an inner element like a link or the inner div.
    if (e.target === mobileLinks) {
        toggleMenu();
    }
});