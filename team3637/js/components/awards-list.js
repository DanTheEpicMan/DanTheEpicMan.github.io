// Awards list component for Team 3637 website

export class AwardsList {
    constructor() {
        this.data = null;
    }

    async loadData() {
        try {
            const response = await fetch('data/awards.json');
            this.data = await response.json();
        } catch (error) {
            console.error('Error loading awards data:', error);
        }
    }

    render() {
        if (!this.data) return '';

        const awardsHTML = this.data.awards.map((yearData, index) => `
      <div class="awards-year fade-in" style="animation-delay: ${index * 50}ms">
        <h3 style="font-family: var(--font-heading); font-size: var(--font-size-3xl); color: var(--color-primary); margin-bottom: var(--space-6);">
          🏆 ${yearData.year}
        </h3>
        <div class="awards-grid" style="display: grid; gap: var(--space-4);">
          ${yearData.awards.map(award => `
            <div class="glass-card" style="padding: var(--space-6); display: flex; align-items: start; gap: var(--space-4);">
              <span style="font-size: var(--font-size-2xl); flex-shrink: 0;">🏅</span>
              <div>
                <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-white); margin-bottom: var(--space-2);">
                  ${award.name}
                </h4>
                <p style="color: var(--color-gray-light); font-size: var(--font-size-sm);">
                  ${award.event}
                </p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

        return `
      <section id="awards" class="section" style="background: var(--color-black-soft);">
        <div class="container">
          <div class="section-title">
            <h2>Awards & Recognition</h2>
          </div>
          <p class="section-subtitle">
            Over the years, Team 3637 has been honored with numerous awards recognizing our technical excellence, community impact, and dedication to FIRST values.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: var(--space-16);">
            ${awardsHTML}
          </div>
        </div>
      </section>
    `;
    }

    async init() {
        await this.loadData();
    }
}
