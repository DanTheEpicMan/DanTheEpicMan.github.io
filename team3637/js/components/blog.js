// Blog component for Team 3637 website

export class Blog {
    constructor() {
        this.data = null;
    }

    async loadData() {
        try {
            const response = await fetch('data/blog.json');
            this.data = await response.json();
        } catch (error) {
            console.error('Error loading blog data:', error);
        }
    }

    render() {
        if (!this.data || !this.data.posts || this.data.posts.length === 0) return '';

        const postsHTML = this.data.posts.map((post, index) => `
      <article class="glass-card fade-in" style="animation-delay: ${index * 100}ms; max-width: 900px; margin: 0 auto;">
        <div style="padding: var(--space-8);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6); flex-wrap: wrap; gap: var(--space-4);">
            <div>
              <span class="badge badge-primary">${post.author}</span>
              <span class="badge" style="margin-left: var(--space-2);">${post.date}</span>
            </div>
            <span style="color: var(--color-gray-light); font-size: var(--font-size-sm);">
              ${post.readTime}
            </span>
          </div>
          
          <h3 style="font-size: var(--font-size-3xl); margin-bottom: var(--space-6);">
            ${post.title}
          </h3>
          
          ${post.images && post.images.length > 0 ? `
            <div class="blog-images" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
              ${post.images.map(img => `
                <div class="img-container" style="height: 200px;">
                  <img src="images/${img}" alt="${post.title}" loading="lazy">
                </div>
              `).join('')}
            </div>
          ` : ''}
          
          <p style="color: var(--color-gray-light); line-height: var(--line-height-relaxed); font-size: var(--font-size-lg); margin-bottom: var(--space-6);">
            ${post.content}
          </p>
          
          ${post.stats ? `
            <div class="blog-stats" style="display: flex; gap: var(--space-8); flex-wrap: wrap; padding: var(--space-6); background: rgba(220, 20, 60, 0.1); border-radius: var(--radius-lg); border-left: 4px solid var(--color-primary);">
              ${Object.entries(post.stats).map(([key, value]) => `
                <div>
                  <div style="font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); color: var(--color-primary); font-family: var(--font-heading);">
                    ${value}
                  </div>
                  <div style="font-size: var(--font-size-sm); color: var(--color-gray-light); text-transform: uppercase; letter-spacing: 0.05em;">
                    ${key}
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </article>
    `).join('');

        return `
      <section id="blog" class="section" style="background: var(--color-black-soft);">
        <div class="container">
          <div class="section-title">
            <h2>Latest Updates</h2>
          </div>
          <p class="section-subtitle">
            Stay up to date with Team 3637's latest activities, events, and achievements.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: var(--space-12);">
            ${postsHTML}
          </div>
        </div>
      </section>
    `;
    }

    async init() {
        await this.loadData();
    }
}
