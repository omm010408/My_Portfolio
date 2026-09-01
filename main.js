// ============================================
// EXTRA SMOOTH SCROLLING (Enhanced Version)
// ============================================

// Custom smooth scroll function with easing
const smoothScrollTo = (target, duration = 1200) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Easing function for buttery smooth animation
    const easeInOutCubic = (t) => {
        return t < 0.5 
            ? 4 * t * t * t 
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

// Apply to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            smoothScrollTo(target, 1200); // 1200ms = 1.2 seconds (extra smooth)
        }
    });
});

// ============================================
// HEADER BACKGROUND CHANGE ON SCROLL
// ============================================
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(20, 18, 18, 0.65)';
        header.style.backdropFilter = 'blur(12px)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.10)';
        header.style.backdropFilter = 'blur(12px)';
        header.style.boxShadow = 'none';
    }
});

// ============================================
// FORM SUBMISSION HANDLER
// ============================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ============================================
// OPTIONAL: Adjust scroll duration based on distance
// ============================================
/*
// Uncomment this if you want variable speed based on distance

const smoothScrollToAdaptive = (target) => {
    const distance = Math.abs(target.getBoundingClientRect().top);
    const duration = Math.min(Math.max(distance / 2, 800), 2000); // 800ms to 2000ms
    smoothScrollTo(target, duration);
};

// Then replace in the anchor click handler:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            smoothScrollToAdaptive(target);
        }
    });
});
*/