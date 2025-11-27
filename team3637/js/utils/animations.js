// Animation utilities for Team 3637 website

export class AnimationController {
    constructor() {
        this.observers = new Map();
        this.init();
    }

    init() {
        // Intersection Observer for fade-in animations
        this.createObserver('fade-in', {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        }, (entry) => {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });

        // Intersection Observer for slide-in animations
        this.createObserver('slide-in-left', {
            threshold: 0.1
        }, (entry) => {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateX(-50px)';
            entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });

        this.createObserver('slide-in-right', {
            threshold: 0.1
        }, (entry) => {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateX(50px)';
            entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }

    createObserver(className, options, callback) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(callback);
        }, options);

        this.observers.set(className, observer);
    }

    observe(elements, className) {
        const observer = this.observers.get(className);
        if (!observer) return;

        elements.forEach(el => observer.observe(el));
    }

    observeAll() {
        this.observers.forEach((observer, className) => {
            const elements = document.querySelectorAll(`.${className}`);
            elements.forEach(el => observer.observe(el));
        });
    }
}

// Stagger animation for lists
export function staggerAnimation(elements, delay = 100) {
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * delay}ms`;
    });
}

// Parallax scroll effect
export function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = el.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Smooth scroll to section
export function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    const targetPosition = target.offsetTop - navbarHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Count up animation for numbers
export function countUp(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target).toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Typing effect
export function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}
