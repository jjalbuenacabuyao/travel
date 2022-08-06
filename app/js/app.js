const hamburgerMenu = document.getElementById('hamburger');
const mobileOverlay = document.getElementById('mobile-overlay');

hamburgerMenu.addEventListener('click', () => {
    let isVIsible = mobileOverlay.getAttribute('data-visible');

    if (isVIsible === 'false'){
        mobileOverlay.setAttribute('data-visible', true);
    }else{
        mobileOverlay.setAttribute('data-visible', false);
    }
});

iconToggle = (icon) => {
    icon.classList.toggle('fa-xmark');
}