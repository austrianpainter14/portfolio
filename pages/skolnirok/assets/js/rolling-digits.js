document.addEventListener("DOMContentLoaded", () => {
  const endDate = new Date("2026-06-30T23:59:59");

  const secondsCol = document.getElementById("seconds").querySelector(".roller");
  const minutesCol = document.getElementById("minutes").querySelector(".roller");
  const hoursCol = document.getElementById("hours").querySelector(".roller");
  const daysCol = document.getElementById("days").querySelector(".roller");

  const digitHeight = 60;

  const createDigits = (roller, max) => {
    roller.innerHTML = '';
    for (let i = 0; i <= max; i++) {
      const div = document.createElement('div');
      div.textContent = i;
      div.style.height = digitHeight + 'px';
      div.style.lineHeight = digitHeight + 'px';
      div.style.textAlign = 'center';
      div.style.fontSize = '48px';
      div.style.color = "var(--countdown-text-color)";
      roller.appendChild(div);
    }
  }

  createDigits(secondsCol, 59);
  createDigits(minutesCol, 59);
  createDigits(hoursCol, 23);
  createDigits(daysCol, 365);

  let lastValues = { days: -1, hours: -1, minutes: -1, seconds: -1 };

  function updateCountdown() {
    const now = new Date();
    const totalSeconds = Math.max(0, Math.floor((endDate - now) / 1000));
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 86400);

    // jen když se změní hodnota
    if (seconds !== lastValues.seconds) {
      secondsCol.style.transition = "transform 0.5s ease-in-out";
      secondsCol.style.transform = `translateY(-${seconds * digitHeight}px)`;
      lastValues.seconds = seconds;
    }

    if (minutes !== lastValues.minutes) {
      minutesCol.style.transition = "transform 0.5s ease-in-out";
      minutesCol.style.transform = `translateY(-${minutes * digitHeight}px)`;
      lastValues.minutes = minutes;
    }

    if (hours !== lastValues.hours) {
      hoursCol.style.transition = "transform 0.5s ease-in-out";
      hoursCol.style.transform = `translateY(-${hours * digitHeight}px)`;
      lastValues.hours = hours;
    }

    if (days !== lastValues.days) {
      daysCol.style.transition = "transform 0.5s ease-in-out";
      daysCol.style.transform = `translateY(-${days * digitHeight}px)`;
      lastValues.days = days;
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
