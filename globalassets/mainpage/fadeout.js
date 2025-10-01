document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector('.introduction');
    
    const fadeStart = 200; // distance from top where fade begins (px)
    const fadeEnd = 100;    // distance from top where fade is complete (px)

    function handleFade() {
        const introTop = intro.getBoundingClientRect().top;

        if (introTop <= fadeStart) {
            // map opacity to range between fadeStart and fadeEnd
            let opacity = (introTop - fadeEnd) / (fadeStart - fadeEnd);
            if (opacity < 0) opacity = 0;
            intro.style.opacity = opacity;
            intro.style.transform = `translateY(${-(1 - opacity) * 20}px)`; // smooth upward movement
        } else {
            intro.style.opacity = 1;
            intro.style.transform = 'translateY(0)';
        }
    }

    handleFade();
    window.addEventListener('scroll', handleFade);
});
