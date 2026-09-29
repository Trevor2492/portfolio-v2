# Trevor Allen — Portfolio

Personal portfolio site built with vanilla HTML, SCSS, and JavaScript. Hosted on GitHub Pages.

**Live site:** [https://trevdev.site](https://trevdev.site)


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