# Portfolio (GitHub Pages)

Static portfolio site. **Edit `js/content.js`** with your details. Your Canva CV PDFs are image-based (no selectable text), so experience and skills must be typed in by hand. `**resume.pdf**` in this folder is a copy of `DOC-20251218-WA0001.PDF` for the “CV (PDF)” link — replace it when your CV updates.

## Publish on GitHub Pages

1. Create a new repository on GitHub and push this folder:
  ```bash
   cd /Users/jitendra/portfolio-github-pages
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
  ```
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**: **Deploy from a branch**, branch **main**, folder **/ (root)**.
3. After a minute, the site is available at `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

If you use a **project site** (URL with repo name), asset paths in this template are relative and work as-is. For a **user site** (`username.github.io` repo), put these files in the root of that repository.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
```

## Files

- `index.html` — layout
- `css/styles.css` — styling
- `js/content.js` — **your copy and links**
- `js/main.js` — fills the page from `content.js`

