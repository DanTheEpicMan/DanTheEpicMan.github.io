// Navbar component for Team 3637 website

export class Navbar {
    constructor() {
        this.navbar = null;
        this.toggle = null;
        this.menu = null;
        this.links = [];
    }

    render() {
        const navbarHTML = `
      <nav class="navbar">
        <div class="navbar-container">
          <a href="#home" class="navbar-logo">
            <span>3637</span> The Daleks
          </a>
          
          <div class="navbar-toggle" id="navbar-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div class="navbar-menu" id="navbar-menu">
            <a href="#home" class="navbar-link">Home</a>
            <a href="#about" class="navbar-link">About</a>
            <a href="#history" class="navbar-link">History</a>
            <a href="#outreach" class="navbar-link">Outreach</a>
            <a href="#awards" class="navbar-link">Awards</a>
            <a href="#sponsors" class="navbar-link">Sponsors</a>
            <a href="#blog" class="navbar-link">Blog</a>
          </div>
        </div>
      </nav>
    `;

        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        this.init();
    }

    init() {
        this.navbar = document.querySelector('.navbar');
        this.toggle = document.getElementById('navbar-toggle');
        this.menu = document.getElementById('navbar-menu');
        this.links = document.querySelectorAll('.navbar-link');

        this.attachEventListeners();
    }

    attachEventListeners() {
        // Mobile menu toggle
        this.toggle?.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Smooth scroll on link click
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
                this.closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar?.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.menu?.classList.toggle('active');
        this.toggle?.classList.toggle('active');
    }

    closeMenu() {
        this.menu?.classList.remove('active');
        this.toggle?.classList.remove('active');
    }

    scrollToSection(targetId) {
        const target = document.getElementById(targetId);
        if (!target) return;

        const navbarHeight = this.navbar?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}
