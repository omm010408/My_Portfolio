// src/hooks/useSmoothScroll.js
import { useEffect } from 'react';

const smoothScrollTo = (target, duration = 800) => {
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  // Easing function for buttery smooth animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
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

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      // Find if clicked element is a link or inside a link
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        smoothScrollTo(target, 1200);
        // Update URL without jumping
        window.history.pushState(null, '', href);
      }
    };

    // Add click listener to entire document
    document.addEventListener('click', handleClick);
    
    // Cleanup function
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

export default useSmoothScroll;