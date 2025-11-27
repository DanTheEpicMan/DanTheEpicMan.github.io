// Subteam cards component for Team 3637 website

export class SubteamCards {
    constructor() {
        this.data = null;
    }

    async loadData() {
        try {
            const response = await fetch('data/subteams.json');
            this.data = await response.json();
        } catch (error) {
            console.error('Error loading subteams data:', error);
        }
    }

    render() {
        if (!this.data) return '';

        const cardsHTML = this.data.subteams.map((subteam, index) => `
      <div class="subteam-card fade-in" style="animation-delay: ${index * 100}ms">
        <span class="subteam-icon">${subteam.icon}</span>
        <h3 class="subteam-name">${subteam.name}</h3>
        <p class="subteam-description">${subteam.description}</p>
        ${subteam.subteams ? `
          <ul class="subteam-list">
            ${subteam.subteams.map(sub => `<li>${sub}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `).join('');

        return `
      <section id="about" class="section">
        <div class="container">
          <div class="section-title">
            <h2>Our Subteams</h2>
          </div>
          <p class="section-subtitle">
            Team 3637 is organized into specialized subteams, each contributing unique skills and expertise to build championship-winning robots.
          </p>
          
          <div class="subteam-grid">
            ${cardsHTML}
          </div>
        </div>
      </section>
    `;
    }

    async init() {
        await this.loadData();
    }
}
