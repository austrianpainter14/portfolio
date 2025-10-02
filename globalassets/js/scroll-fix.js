function setVH() {
  // vezme skutečnou výšku okna
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH(); // zavoláme při startu
window.addEventListener('resize', setVH); // a při změně velikosti okna
