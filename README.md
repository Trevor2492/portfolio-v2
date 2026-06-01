# Trevor Allen — Portfolio

Personal portfolio site built with vanilla HTML, SCSS, and JavaScript. Hosted on GitHub Pages.

**Live site:** [https://Trevor2492.github.io/portfolio-v2](https://Trevor2492.github.io/portfolio-v2)

---

## Project Structure

```
portfolio-v2/
├── index.html              # Main single-page site
├── css/
│   └── main.css            # Compiled CSS (from SCSS — do not edit directly)
├── scss/
│   └── main.scss           # Source styles — edit this
├── js/
│   ├── projects.js         # Project data + grid renderer
│   └── main.js             # Nav, scroll animations, misc
├── projects/
│   ├── connexus.html       # Connexus Credit Union case study
│   ├── meal-prep.html      # Project page
│   ├── chat-app.html       # Project page
│   ├── movie-api.html      # Project page
│   ├── myflix-client.html  # Project page
│   ├── amazon-price-checker.html
│   └── _template.html      # Copy this to add new project pages
└── README.md
```

---

## Dev Setup

You'll need **Node.js** installed for the SCSS compiler. No build framework required — it's just `sass`.

### 1. Install the SCSS compiler

```bash
npm install -g sass
```

### 2. Clone the repo

```bash
git clone https://github.com/Trevor2492/portfolio-v2.git
cd portfolio-v2
```

### 3. Watch SCSS for changes

```bash
sass --watch scss/main.scss css/main.css
```

This compiles `scss/main.scss` → `css/main.css` on every save.

### 4. Serve locally

Use any static file server. Recommended options:

**VS Code Live Server extension** — right-click `index.html` → Open with Live Server.

**Or via npx:**
```bash
npx serve .
```

Then visit `http://localhost:3000`.

> No framework, no bundler, no build step beyond SCSS compilation.

---

## Updating Content

### Edit your info
- **Hero section** — edit `index.html` directly (name, bio, stack tags)
- **Contact email** — find `href="mailto:your@email.com"` in `index.html` and `projects/connexus.html`
- **LinkedIn URL** — find `linkedin.com/in/trevorallen` and update to your actual URL

### Add / edit projects
Open `js/projects.js` and update the `PROJECTS` array:

```js
{
  id: 'my-project',
  title: 'My Project',
  desc: 'Short description shown on the card.',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/Trevor2492/my-project',
  live: 'https://myproject.com',       // or null
  page: 'projects/my-project.html',
}
```

Then create a matching page in `projects/` using `_template.html` as a starting point.

### Update Connexus work details
Edit `projects/connexus.html` directly — add real dates, specific metrics, or screenshots as you're able.

---

## Deploying to GitHub Pages

### First-time setup

1. Push the repo to GitHub under your account (repo name: `portfolio-v2` or similar)
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → `main` → `/ (root)`
4. Save — GitHub will give you a URL like `https://Trevor2492.github.io/portfolio-v2`

### Custom domain (later)

1. Buy your domain (e.g. via Namecheap, Google Domains)
2. In repo Settings → Pages → Custom domain, enter your domain
3. Add a `CNAME` file at the root with just your domain:
   ```
   yourdomain.com
   ```
4. Point your DNS: add a `CNAME` record → `Trevor2492.github.io`

GitHub will handle the HTTPS cert automatically.

---

## Version Control Workflow

```bash
# Create a feature branch for any changes
git checkout -b feature/update-projects

# Stage and commit
git add .
git commit -m "feat: add myFlix project page"

# Push and open a PR (or merge directly to main for solo work)
git push origin feature/update-projects
```

Commits to `main` automatically redeploy the GitHub Pages site within ~60 seconds.

---

## License

MIT — feel free to fork and adapt for your own portfolio.
