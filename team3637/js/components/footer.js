// Footer component for Team 3637 website

export class Footer {
    render() {
        return `
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Team 3637</h3>
              <p>The Daleks</p>
              <p>Hunterdon Central Regional High School</p>
              <p>Flemington, NJ 08822</p>
            </div>
            
            <div class="footer-section">
              <h3>Quick Links</h3>
              <p><a href="#about">About Us</a></p>
              <p><a href="#history">Our History</a></p>
              <p><a href="#outreach">Outreach</a></p>
              <p><a href="#awards">Awards</a></p>
            </div>
            
            <div class="footer-section">
              <h3>Connect</h3>
              <p><a href="mailto:team3637@hunterdoncentral.org">team3637@hunterdoncentral.org</a></p>
              <p><a href="https://www.thebluealliance.com/team/3637" target="_blank">The Blue Alliance</a></p>
              <p><a href="https://www.firstinspires.org/" target="_blank">FIRST Robotics</a></p>
            </div>
            
            <div class="footer-section">
              <h3>Our Mission</h3>
              <p style="font-style: italic; color: var(--color-primary);">
                "Foster STEM Locally, Make a Difference Globally"
              </p>
              <p>
                Team 3637 is dedicated to inspiring the next generation of STEM leaders through robotics, outreach, and community engagement.
              </p>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} FRC Team 3637 - The Daleks. All rights reserved.</p>
            <p style="margin-top: var(--space-2);">
              Built with ❤️ by Team 3637 | 
              <a href="https://www.firstinspires.org/" target="_blank" style="color: var(--color-primary);">
                FIRST® Robotics Competition
              </a>
            </p>
          </div>
        </div>
      </footer>
    `;
    }
}
