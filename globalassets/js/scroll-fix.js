const setBackgroundHeight = () => {
  const background = document.querySelector('.background');
  background.style.height = window.innerHeight + 'px';
};

setBackgroundHeight();

window.addEventListener('resize', setBackgroundHeight);