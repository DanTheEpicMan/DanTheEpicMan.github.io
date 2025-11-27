// Season timeline component for Team 3637 website

export class SeasonTimeline {
  constructor() {
    this.data = null;
    this.expandedYears = new Set();
  }

  async loadData() {
    try {
      const response = await fetch('data/seasons.json');
      this.data = await response.json();
    } catch (error) {
      console.error('Error loading seasons data:', error);
    }
  }

  render() {
    if (!this.data) return '';

    const timelineHTML = this.data.seasons.map((season, index) => `
      <div class="timeline-item fade-in" style="animation-delay: ${index * 50}ms" data-year="${season.year}">
        <div class="timeline-year">${season.year}</div>
        <div class="timeline-content">
          <h3>${season.name}</h3>
          ${season.image ? `
            <div style="margin: var(--space-6) 0; width: 100%; aspect-ratio: 16/9; overflow: hidden; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
              <img src="images/${season.image}" alt="${season.year} Robot" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
            </div>
          ` : ''}
          <p class="timeline-description" data-full="${season.description}">
            ${this.truncateText(season.description, 200)}
          </p>
          ${season.description.length > 200 ? `
            <button class="btn btn-ghost btn-sm toggle-description" data-year="${season.year}">
              Read More
            </button>
          ` : ''}
          ${season.highlights && season.highlights.length > 0 ? `
            <div class="timeline-highlights" style="margin-top: var(--space-4);">
              <strong style="color: var(--color-primary);">Highlights:</strong>
              <ul style="margin-top: var(--space-2); padding-left: var(--space-6);">
                ${season.highlights.map(h => `<li style="color: var(--color-gray-light); margin-bottom: var(--space-2);">• ${h}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');

    return `
      <section id="history" class="section" style="background: var(--color-black-soft);">
        <div class="container">
          <div class="section-title">
            <h2>Our History</h2>
          </div>
          <p class="section-subtitle">
            From our rookie season in 2011 to today, Team 3637 has grown into a championship-winning team with a legacy of innovation and community impact.
          </p>
          
          <div class="timeline">
            ${timelineHTML}
          </div>
        </div>
      </section>
    `;
  }

  truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  init() {
    // Add event listeners for "Read More" buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('toggle-description')) {
        const year = e.target.dataset.year;
        const timelineItem = document.querySelector(`.timeline-item[data-year="${year}"]`);
        const description = timelineItem.querySelector('.timeline-description');
        const fullText = description.dataset.full;

        if (this.expandedYears.has(year)) {
          description.textContent = this.truncateText(fullText, 200);
          e.target.textContent = 'Read More';
          this.expandedYears.delete(year);
        } else {
          description.textContent = fullText;
          e.target.textContent = 'Read Less';
          this.expandedYears.add(year);
        }
      }
    });
  }

  async initialize() {
    await this.loadData();
  }
}
