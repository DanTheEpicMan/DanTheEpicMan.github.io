// Hero component for Team 3637 website

export class Hero {
    constructor() {
        this.heroSection = null;
    }

    render() {
        const heroHTML = `
      <section id="home" class="hero">
        <div class="hero-background" data-parallax="0.5">
          <img src="images/teamphoto2025.avif" alt="Team 3637 - The Daleks">
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content fade-in">
          <div class="hero-team-number">3637</div>
          <h1 class="hero-title">The Daleks</h1>
          <p class="hero-subtitle">Hunterdon Central Regional High School</p>
          <p class="hero-subtitle">Flemington</p>
          <p class="hero-tagline">"Foster STEM Locally, Make a Difference Globally"</p>
          
          <div class="hero-cta">
            <a href="#about" class="btn btn-primary">Learn More</a>
            <a href="#sponsors" class="btn btn-outline">Support Us</a>
          </div>
        </div>
        
        <div class="scroll-indicator">
          <span></span>
        </div>
      </section>
    `;

        return heroHTML;
    }

    init() {
        this.heroSection = document.getElementById('home');
        this.initParallax();
    }

    initParallax() {
        const parallaxElement = document.querySelector('[data-parallax]');
        if (!parallaxElement) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const speed = parseFloat(parallaxElement.dataset.parallax) || 0.5;
            const yPos = -(scrolled * speed);
            parallaxElement.style.transform = `translateY(${yPos}px)`;
        });
    }
}
