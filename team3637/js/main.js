// Main application file for Team 3637 website

import { Navbar } from './components/navbar.js';
import { Hero } from './components/hero.js';
import { SubteamCards } from './components/subteam-cards.js';
import { SeasonTimeline } from './components/season-timeline.js';
import { OutreachGrid } from './components/outreach-grid.js';
import { AwardsList } from './components/awards-list.js';
import { SponsorsGrid } from './components/sponsors-grid.js';
import { Blog } from './components/blog.js';
import { Footer } from './components/footer.js';
import { AnimationController } from './utils/animations.js';
import { ScrollEffects, initScrollProgress } from './utils/scroll-effects.js';

class App {
    constructor() {
        this.components = {
            navbar: new Navbar(),
            hero: new Hero(),
            subteamCards: new SubteamCards(),
            seasonTimeline: new SeasonTimeline(),
            outreachGrid: new OutreachGrid(),
            awardsList: new AwardsList(),
            sponsorsGrid: new SponsorsGrid(),
            blog: new Blog(),
            footer: new Footer()
        };

        this.animationController = null;
        this.scrollEffects = null;
    }

    async init() {
        try {
            // Show loading state
            this.showLoading();

            // Load all data first
            await Promise.all([
                this.components.subteamCards.init(),
                this.components.seasonTimeline.initialize(),
                this.components.outreachGrid.init(),
                this.components.awardsList.init(),
                this.components.sponsorsGrid.init(),
                this.components.blog.init()
            ]);

            // Render all components
            await this.render();

            // Initialize interactive features
            this.initializeFeatures();

            // Hide loading state
            this.hideLoading();

        } catch (error) {
            console.error('Error initializing app:', error);
            this.showError();
        }
    }

    async render() {
        const mainContent = document.getElementById('app');
        if (!mainContent) return;

        // Build the page content
        const content = `
      ${this.components.hero.render()}
      ${this.components.subteamCards.render()}
      ${this.components.seasonTimeline.render()}
      ${this.components.outreachGrid.render()}
      ${this.components.awardsList.render()}
      ${this.components.sponsorsGrid.render()}
      ${this.components.blog.render()}
      ${this.components.footer.render()}
    `;

        mainContent.innerHTML = content;

        // Render navbar (it inserts itself at the top)
        this.components.navbar.render();
    }

    initializeFeatures() {
        // Initialize hero parallax
        this.components.hero.init();

        // Initialize season timeline interactions
        this.components.seasonTimeline.init();

        // Initialize scroll effects
        this.scrollEffects = new ScrollEffects();
        initScrollProgress();

        // Initialize animations
        this.animationController = new AnimationController();
        this.animationController.observeAll();

        // Add smooth scroll behavior to all anchor links
        this.initSmoothScroll();
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);

                if (target) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    showLoading() {
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; flex-direction: column; gap: var(--space-6);">
          <div style="font-size: var(--font-size-6xl); font-family: var(--font-heading); font-weight: var(--font-weight-black); background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: glow 2s ease-in-out infinite alternate;">
            3637
          </div>
          <div style="font-size: var(--font-size-2xl); color: var(--color-gray-light);">
            Loading...
          </div>
          <div class="skeleton" style="width: 200px; height: 4px;"></div>
        </div>
      `;
        }
    }

    hideLoading() {
        // Fade in the content
        const app = document.getElementById('app');
        if (app) {
            app.style.opacity = '0';
            setTimeout(() => {
                app.style.transition = 'opacity 0.5s ease-in';
                app.style.opacity = '1';
            }, 100);
        }
    }

    showError() {
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; flex-direction: column; gap: var(--space-6); text-align: center; padding: var(--space-8);">
          <div style="font-size: var(--font-size-5xl);">⚠️</div>
          <h1 style="color: var(--color-primary);">Oops! Something went wrong</h1>
          <p style="color: var(--color-gray-light); max-width: 500px;">
            We're having trouble loading the website. Please try refreshing the page.
          </p>
          <button onclick="location.reload()" class="btn btn-primary">
            Refresh Page
          </button>
        </div>
      `;
        }
    }
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new App();
        app.init();
    });
} else {
    const app = new App();
    app.init();
}
