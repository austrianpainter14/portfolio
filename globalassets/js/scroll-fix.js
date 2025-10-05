const setBackgroundHeight = () => {
  const background = document.querySelector('.body');
  background.style.height = window.innerHeight + 'px';
};

setBackgroundHeight();

window.addEventListener('resize', setBackgroundHeight);