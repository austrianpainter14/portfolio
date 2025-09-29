// Cycle themes: dark → light → blue
const themes = ["dark", "white", "blue"];
let current = 0; // starts at 0 = dark

const themeBtn = document.getElementById("themeToggle");
const body = document.body;

// Optional: set initial button text
themeBtn.textContent = `Theme: ${themes[current].charAt(0).toUpperCase() + themes[current].slice(1)}`;

themeBtn.addEventListener("click", () => {
    current = (current + 1) % themes.length;
    body.setAttribute("data-theme", themes[current]);
    
    // Update button text to show current theme
    themeBtn.textContent = `Theme: ${themes[current].charAt(0).toUpperCase() + themes[current].slice(1)}`;
});
