# Engineering Research Portfolio

A static site (plain HTML + CSS, no build step) ready for GitHub Pages.

```
.
├── index.html              ← homepage (name, bio, featured study, research list, about, contact)
├── papers/
│   └── paper-1.html        ← paper page template — copy for each paper
├── assets/
│   ├── css/style.css       ← all styling; colors are at the top
│   ├── js/main.js          ← BibTeX copy button
│   └── img/                ← put your images here
└── .nojekyll               ← tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages

1. Create a new repository on GitHub.
   - Name it **`<your-username>.github.io`** to get the site at `https://<your-username>.github.io`
   - or any name (e.g. `portfolio`) to get `https://<your-username>.github.io/portfolio`
2. Upload these files to the repo root (drag-and-drop on github.com → **Add file › Upload files**, or with git):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo go to **Settings › Pages**, set **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, and **Save**.
4. Wait a minute or two — the URL appears at the top of the Pages settings.

## Filling it in

- Replace every `[bracketed placeholder]` with your own text.
- **Images:** drop files in `assets/img/` and swap each `<div class="placeholder">…</div>` for
  `<img class="media" src="assets/img/your-file.jpg" alt="what it shows">`
  (on paper pages, use `../assets/img/...`).
- **CV:** save it as `assets/cv.pdf`.
- **Paper PDFs:** save them in `assets/papers/` (e.g. `assets/papers/paper-1.pdf`).
- **More papers:** copy `papers/paper-1.html` to `papers/paper-2.html` etc., then edit. Each row in the homepage's "Selected research" list already points to `papers/paper-N.html`; add or remove `<li>` rows to match.
- **Colors:** change `--accent` (gold) or `--bg` (black) at the top of `assets/css/style.css`.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
