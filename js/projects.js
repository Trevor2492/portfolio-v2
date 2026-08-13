/**
 * projects.js
 * Defines project data and renders the project grid on the main page.
 * To add/edit projects, update the PROJECTS array below.
 */

const PROJECTS = [
  {
    id: 'meal-planner',
    title: 'Meal Planner App',
    desc: 'Helps users plan daily meals with a randomized list. Firestore as the database for real-time add/remove of meals.',
    tags: ['React', 'Firebase', 'Firestore'],
    github: 'https://github.com/Trevor2492/meal-prep',
    live: 'https://trevor2492.github.io/upgraded-meal-planner/',
    page: 'projects/meal-planner',
  },
  {
    id: 'chat-app',
    title: 'Chat App',
    desc: 'A mobile chat application built with React Native and Expo, using Firebase/Firestore for real-time messaging.',
    tags: ['React Native', 'Expo', 'Firebase'],
    github: 'https://github.com/Trevor2492/Chat-app',
    live: null,
    page: 'projects/chat-app.html',
  },
  {
    id: 'movie-api',
    title: 'Movie API',
    desc: 'RESTful API for a movie database application, providing endpoints for movies, genres, and directors.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Trevor2492/movie_api',
    live: null,
    page: 'projects/movie-api.html',
  },
  {
    id: 'myflix-client',
    title: 'myFlix Client',
    desc: 'Front-end React client for the Movie API — users can browse films, filter by genre, and manage a favorites list.',
    tags: ['React', 'Redux', 'Bootstrap'],
    github: 'https://github.com/Trevor2492/myFlix-client',
    live: null,
    page: 'projects/myflix-client.html',
  },
  {
    id: 'amazon-price-checker',
    title: 'Amazon Price Checker',
    desc: 'Command-line tool that scrapes Amazon product URLs and logs their current prices for comparison.',
    tags: ['Node.js', 'Puppeteer', 'CLI'],
    github: 'https://github.com/Trevor2492/amazon-price-checker',
    live: null,
    page: 'projects/amazon-price-checker.html',
  },
];

// SVG icon for all project cards
const FOLDER_ICON = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
</svg>`;

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <a href="${p.page}" class="project-card fade-in">
      <div class="project-card__header">
        <div class="project-card__icon">${FOLDER_ICON}</div>
        <span class="project-card__arrow">↗</span>
      </div>
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__desc">${p.desc}</p>
      <div class="project-card__tags">
        ${p.tags.map(t => `<span class="project-card__tag">${t}</span>`).join('')}
      </div>
    </a>
  `).join('');
}

renderProjects();
