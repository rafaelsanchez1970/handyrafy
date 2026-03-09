# Raphael’s Handyman — Static Site Starter

A clean, responsive single-page site for a Marietta, GA handyman business. Pure HTML/CSS/JS with image placeholders you can replace later.

## Run Locally

Option 1 — VS Code Live Server (recommended):
1. Open this folder in VS Code.
2. Install the "Live Server" extension.
3. Right-click `index.html` → "Open with Live Server".

Option 2 — Quick local server (Node):
```bash
npm -g install serve
serve .
```

## Replace Image Placeholders
- Search for elements with class `imgHolder` in `index.html`.
- Swap each placeholder with real `<img src="..." alt="...">` tags once you have images.

## Customize Contact Info
- Update phone/email in `index.html` (topbar and Contact section).
- Update the `LocalBusiness` JSON-LD in the document `<head>` with your URLs and social profiles.

## Structure
- `index.html` — page markup + LocalBusiness schema
- `styles.css` — responsive styling
- `script.js` — mobile nav toggle + footer year

## Next Steps (optional)
- Hook the Contact form to a backend (e.g., Netlify Forms, Formspree, or your own API).
- Add a dedicated Reviews section pulling real testimonials.
- Split into multiple pages (Services, About, Reviews) if needed.
