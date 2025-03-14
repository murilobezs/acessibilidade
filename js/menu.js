document.addEventListener('DOMContentLoaded', () => {
    try {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.header nav');
        const closeBtn = document.querySelector('.close-btn');

        if (!hamburger || !nav || !closeBtn) {
            console.error('Required elements not found');
            return;
        }

        const closeMenu = () => {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        };

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        closeBtn.addEventListener('click', closeMenu);

        document.body.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.header nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

    } catch (error) {
        console.error('Error initializing menu:', error);
    }
});
