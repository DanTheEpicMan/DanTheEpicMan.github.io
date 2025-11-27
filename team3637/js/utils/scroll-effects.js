// Scroll effects for Team 3637 website

export class ScrollEffects {
    constructor() {
        this.navbar = null;
        this.sections = [];
        this.init();
    }

    init() {
        this.navbar = document.querySelector('.navbar');
        this.sections = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', () => {
            this.handleNavbarScroll();
            this.handleActiveSection();
        });
    }

    handleNavbarScroll() {
        if (!this.navbar) return;

        if (window.scrollY > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    handleActiveSection() {
        const scrollY = window.pageYOffset;
        const navbarHeight = this.navbar?.offsetHeight || 0;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                document.querySelectorAll('.navbar-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Progress bar on scroll
export function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #DC143C, #FF1744);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

// Reveal elements on scroll
export function revealOnScroll(selector, options = {}) {
    const elements = document.querySelectorAll(selector);
    const defaultOptions = {
        threshold: 0.15,
        rootMargin: '0px',
        ...options
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                if (options.once !== false) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, defaultOptions);

    elements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}
