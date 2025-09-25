// theme-switch.js

// --- Cookie helper functions ---
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// --- Theme switch ---
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".switch__input");
    if (!toggle) return;

    // Load theme from cookie, default to dark
    const savedTheme = getCookie("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggle.checked = savedTheme === "dark";

    // Listen for toggle changes
    toggle.addEventListener("change", () => {
        const theme = toggle.checked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        setCookie("theme", theme, 365); // remember for 1 year
    });
});
