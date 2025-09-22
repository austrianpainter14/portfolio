const startDate = new Date("2025-09-01");
const endDate = new Date("2026-06-30");

function getCurrentPercent() {
  const today = new Date();
  const totalTime = endDate - startDate;
  const elapsed = today - startDate;
  let percent = (elapsed / totalTime) * 100;
  if (percent < 0) percent = 0;
  if (percent > 100) percent = 100;
  return percent;
}

// nastaví progress bar a text současně
function setProgress(percent) {
  document.querySelector(".timeline-progress").style.width = percent + "%";
  document.getElementById("percent-text").textContent = percent.toFixed(1) + "% uplynulo ze školního roku 2025/2026";
}

// ease-in-out cubic funkce
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// animace od nuly do cílového procenta
function animateProgress(duration = 2000) { // duration v ms
  const targetPercent = getCurrentPercent();
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1); // 0 → 1
    const eased = easeInOutCubic(progress);
    const currentPercent = eased * targetPercent;

    setProgress(currentPercent);

    if (progress < 1) {
      requestAnimationFrame(animate); // animuje dokud nedosáhne targetu
    }
  }

  requestAnimationFrame(animate);
}

// spustí synchronní animaci při načtení stránky
window.addEventListener("load", () => {
  animateProgress();
});

// každou hodinu aktualizuje progress a text na aktuální procenta
setInterval(() => {
  setProgress(getCurrentPercent());
}, 60 * 60 * 1000);
