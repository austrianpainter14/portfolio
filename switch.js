(function() {
    // Wait until DOM is fully loaded
    function initThemeSwitch() {
        const toggle = document.querySelector(".switch__input");
        if (!toggle) return; // Exit if switch is not present

        // Default theme fallback
        const savedTheme = localStorage.getItem("theme") || "dark";
        document.documentElement.setAttribute("data-theme", savedTheme);
        toggle.checked = savedTheme === "dark";

        // Observe changes safely
        toggle.addEventListener("change", () => {
            const theme = toggle.checked ? "dark" : "white"; // use "light" consistently
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        });
    }

    // If DOM is already loaded, run immediately, otherwise wait
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initThemeSwitch);
    } else {
        initThemeSwitch();
    }
})();
