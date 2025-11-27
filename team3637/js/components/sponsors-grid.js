// Sponsors grid component for Team 3637 website

export class SponsorsGrid {
    constructor() {
        this.data = null;
    }

    async loadData() {
        try {
            const response = await fetch('data/sponsors.json');
            this.data = await response.json();
        } catch (error) {
            console.error('Error loading sponsors data:', error);
        }
    }

    renderTier(tierName, sponsors, badgeClass = 'badge-primary') {
        if (!sponsors || sponsors.length === 0) return '';

        const isIndividual = typeof sponsors[0] === 'string';

        return `
      <div class="sponsor-tier" style="margin-bottom: var(--space-12);">
        <h3 style="font-family: var(--font-heading); font-size: var(--font-size-2xl); margin-bottom: var(--space-6); text-align: center;">
          <span class="badge ${badgeClass}" style="font-size: var(--font-size-lg); padding: var(--space-3) var(--space-6);">
            ${tierName}
          </span>
        </h3>
        <div class="grid-auto-sm">
          ${isIndividual ?
                sponsors.map(name => `
              <div class="glass-card" style="text-align: center; padding: var(--space-6);">
                <p style="font-weight: var(--font-weight-semibold); color: var(--color-white);">
                  ${name}
                </p>
              </div>
            `).join('') :
                sponsors.map(sponsor => `
              <div class="glass-card" style="text-align: center; padding: var(--space-8);">
                <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-white);">
                  ${sponsor.name}
                </h4>
              </div>
            `).join('')
            }
        </div>
      </div>
    `;
    }

    render() {
        if (!this.data) return '';

        return `
      <section id="sponsors" class="section">
        <div class="container">
          <div class="section-title">
            <h2>Our Sponsors</h2>
          </div>
          <p class="section-subtitle">
            Team 3637 is grateful for the generous support of our sponsors, whose contributions make our success possible. Thank you for believing in our mission!
          </p>
          
          ${this.renderTier('💎 Diamond Sponsors', this.data.sponsors.diamond, 'badge-primary')}
          ${this.renderTier('🥇 Gold Sponsors', this.data.sponsors.gold, 'badge-gold')}
          ${this.renderTier('🥈 Silver Sponsors', this.data.sponsors.silver)}
          ${this.renderTier('🥉 Bronze Sponsors', this.data.sponsors.bronze)}
          
          <div class="divider"></div>
          
          <h3 style="font-family: var(--font-heading); font-size: var(--font-size-3xl); text-align: center; margin-bottom: var(--space-8); color: var(--color-primary);">
            Individual Supporters
          </h3>
          
          ${this.renderTier('Century Friend', this.data.sponsors.centuryFriend)}
          ${this.renderTier('Century Plus Friend', this.data.sponsors.centuryPlusFriend)}
          ${this.renderTier('Loyal Friend', this.data.sponsors.loyalFriend)}
          
          <div style="text-align: center; margin-top: var(--space-16);">
            <p style="font-size: var(--font-size-lg); color: var(--color-gray-light); margin-bottom: var(--space-6);">
              Interested in supporting Team 3637?
            </p>
            <a href="mailto:team3637@hunterdoncentral.org" class="btn btn-primary">
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>
    `;
    }

    async init() {
        await this.loadData();
    }
}
