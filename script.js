document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = menuToggle.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');

            if (isActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (navMenu && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('is-active');
            menuToggle?.classList.remove('is-active');
            document.body.style.overflow = '';
        }
    });
});