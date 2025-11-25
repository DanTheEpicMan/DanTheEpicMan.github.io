// ===================================
// PROJECTS DATA
// ===================================

const projects = [
  // FRC Robotics Projects
  {
    title: "2025 FRC Robot Code",
    description: "Competition robot code for the 2025 FIRST Robotics season. Features advanced autonomous routines, computer vision integration, and optimized control systems that helped win Excellence in Engineering.",
    tags: ["Java", "WPILib", "Robotics", "Computer Vision"],
    link: "https://github.com/FRC-3637-Daleks/Ichbiah",
    linkText: "View Code",
    category: "robotics"
  },
  {
    title: "2024 FRC Robot Code",
    description: "World Championship-level robot code from the 2024 season. Implemented path planning, real-time object detection, and precision control algorithms for competitive gameplay.",
    tags: ["Java", "WPILib", "Autonomous Navigation", "PathPlanner"],
    link: "https://github.com/FRC-3637-Daleks/Hopper",
    linkText: "View Code",
    category: "robotics"
  },

  // Personal Projects
  {
    title: "danApex",
    description: "Linux cheat for Apex Legends with 18 GitHub stars. Features advanced memory manipulation, ESP overlays, and aimbot functionality for competitive gameplay analysis.",
    tags: ["C++", "Linux", "Game Hacking", "Reverse Engineering"],
    link: "https://github.com/DanTheEpicMan/danApex",
    linkText: "View Code",
    category: "personal"
  },
  {
    title: "CS2 Kernel Driver",
    description: "Kernel-level cheat for Counter-Strike 2. Implements driver-based memory access for undetected game manipulation and advanced anti-cheat bypass techniques.",
    tags: ["C++", "Kernel Development", "Windows Drivers", "Game Hacking"],
    link: "https://github.com/DanTheEpicMan/cs2-kernel",
    linkText: "View Code",
    category: "personal"
  },
  {
    title: "danRivals",
    description: "Linux cheat for Marvel Rivals. Custom-built game manipulation tool featuring ESP, aimbot, and memory editing capabilities for competitive analysis.",
    tags: ["C++", "Linux", "Game Hacking", "Memory Manipulation"],
    link: "https://github.com/DanTheEpicMan/DanRivals",
    linkText: "View Code",
    category: "personal"
  },
  {
    title: "CSGO YOLOv5 AI Cheat",
    description: "Computer vision-based CS:GO cheat using YOLOv5 for real-time player detection and automated targeting. Demonstrates ML/AI application in game analysis.",
    tags: ["Python", "YOLOv5", "Computer Vision", "Machine Learning"],
    link: "https://github.com/DanTheEpicMan/Nural-Network-Aim-Trigger-Bot",
    linkText: "View Code",
    category: "personal"
  },
  {
    title: "DABPlayer",
    description: "Custom audiobook player built with Flutter that syncs playback position across multiple devices. Features cloud synchronization and offline playback support.",
    tags: ["Flutter", "Dart", "Mobile Development", "Cloud Sync"],
    link: "https://github.com/DanTheEpicMan/DABPlayer",
    linkText: "View Code",
    category: "personal"
  },
  {
    title: "NixOS Configuration",
    description: "Declarative NixOS system configuration with custom modules, reproducible development environments, and automated deployment workflows.",
    tags: ["NixOS", "Linux", "DevOps", "System Administration"],
    link: "https://github.com/DanTheEpicMan/nix-config",
    linkText: "View Config",
    category: "personal"
  }
];

// ===================================
// CATEGORY STYLES
// ===================================

const categoryStyles = {
  robotics: {
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '🤖',
    iconBg: 'rgba(102, 126, 234, 0.2)'
  },
  'game-hacking': {
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '🎮',
    iconBg: 'rgba(240, 147, 251, 0.2)'
  },
  ai: {
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '🧠',
    iconBg: 'rgba(79, 172, 254, 0.2)'
  },
  mobile: {
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: '📱',
    iconBg: 'rgba(67, 233, 123, 0.2)'
  },
  system: {
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: '⚙️',
    iconBg: 'rgba(250, 112, 154, 0.2)'
  }
};

// Determine category based on project content
function getProjectCategory(project) {
  const title = project.title.toLowerCase();
  const tags = project.tags.join(' ').toLowerCase();
  const desc = project.description.toLowerCase();
  const combined = title + ' ' + tags + ' ' + desc;

  if (project.category === 'robotics' || combined.includes('frc') || combined.includes('wpilib')) {
    return 'robotics';
  }
  if (combined.includes('yolo') || combined.includes('computer vision') || combined.includes('machine learning')) {
    return 'ai';
  }
  if (combined.includes('flutter') || combined.includes('mobile') || combined.includes('audiobook')) {
    return 'mobile';
  }
  if (combined.includes('nixos') || combined.includes('system') || combined.includes('devops')) {
    return 'system';
  }
  if (combined.includes('cheat') || combined.includes('game') || combined.includes('kernel driver')) {
    return 'game-hacking';
  }

  return 'system'; // default
}

// ===================================
// RENDER PROJECTS
// ===================================

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');

  if (!projectsGrid) {
    console.error('Projects grid element not found');
    return;
  }

  projectsGrid.innerHTML = '';

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.style.opacity = '0';
    projectCard.style.transform = 'translateY(30px)';
    projectCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    const category = getProjectCategory(project);
    const style = categoryStyles[category];

    const tagsHTML = project.tags.map(tag =>
      `<span class="project-tag">${tag}</span>`
    ).join('');

    projectCard.innerHTML = `
      <div class="project-image" style="background: ${style.gradient};">
        <div class="project-icon" style="background: ${style.iconBg};">
          ${style.icon}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${tagsHTML}
        </div>
        <div class="project-links">
          <a href="${project.link}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> ${project.linkText}
          </a>
        </div>
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });

  // Re-observe new cards for animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });
}

// Initialize projects when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderProjects);
} else {
  renderProjects();
}
