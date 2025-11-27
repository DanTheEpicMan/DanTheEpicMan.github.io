// Outreach grid component for Team 3637 website

export class OutreachGrid {
    constructor() {
        this.data = null;
    }

    async loadData() {
        try {
            const response = await fetch('data/outreach.json');
            this.data = await response.json();
        } catch (error) {
            console.error('Error loading outreach data:', error);
        }
    }

    render() {
        if (!this.data) return '';

        const gridHTML = this.data.outreach.map((event, index) => `
      <div class="glass-card fade-in" style="animation-delay: ${index * 80}ms">
        ${event.image ? `
          <div class="img-container" style="margin-bottom: var(--space-6); height: 250px;">
            <img src="images/${event.image}" alt="${event.title}" loading="lazy">
            <div class="img-overlay">
              ${event.stats ? `<span class="badge badge-primary">${event.stats}</span>` : ''}
            </div>
          </div>
        ` : ''}
        <div style="padding: var(--space-2);">
          <span class="badge" style="margin-bottom: var(--space-4);">${event.category}</span>
          <h3 style="font-size: var(--font-size-xl); margin-bottom: var(--space-4);">${event.title}</h3>
          <p style="color: var(--color-gray-light); line-height: var(--line-height-relaxed);">
            ${event.description}
          </p>
        </div>
      </div>
    `).join('');

        return `
      <section id="outreach" class="section">
        <div class="container">
          <div class="section-title">
            <h2>Community Outreach</h2>
          </div>
          <p class="section-subtitle">
            Our commitment to "Foster STEM Locally, Make a Difference Globally" drives our extensive outreach programs, impacting thousands of lives each year.
          </p>
          
          <div class="grid-auto">
            ${gridHTML}
          </div>
        </div>
      </section>
    `;
    }

    async init() {
        await this.loadData();
    }
}
