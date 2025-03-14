// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1000);
});

// Scroll Reveal
window.addEventListener('DOMContentLoaded', () => {
    // Target all major sections and cards
    const revealElements = document.querySelectorAll('.hero, .content section, .header, footer, .card');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('hero')) {
                    entry.target.style.transform = 'translateX(0)';
                } else if (entry.target.classList.contains('header')) {
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('card')) {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                } else {
                    entry.target.style.transform = 'translateY(0)';
                }
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach((element, index) => {
        element.style.opacity = 0;
        element.style.transition = 'all 0.8s ease-out';
        
        if (element.classList.contains('hero')) {
            element.style.transform = 'translateX(-50px)';
        } else if (element.classList.contains('header')) {
            element.style.transform = 'translateY(-20px)';
        } else if (element.classList.contains('card')) {
            element.style.transform = 'translateY(50px)';
            element.style.transitionDelay = `${index * 0.1}s`; // Add stagger effect
        } else {
            element.style.transform = 'translateY(50px)';
        }
        
        observer.observe(element);
    });
});

// Page transition
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href.includes('html')) {  // Only for internal page links
            e.preventDefault();
            const loader = document.querySelector('.loader-wrapper');
            loader.style.display = 'flex';
            loader.style.opacity = '1';
            
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        }
    });
});
