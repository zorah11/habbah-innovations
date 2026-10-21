# Habbah Innovations Limited website

A static GitHub Pages draft for Habbah Innovations Limited. The homepage presents all seven businesses named in the client-provided company profile, and each business has its own page.

## Pages

- `index.html` — group homepage and business directory
- `pages/about.html` — mission, vision and values
- `pages/contact.html` — direct email enquiry
- `pages/restaurant-catering.html`
- `pages/maternity-store.html`
- `pages/medicare.html`
- `pages/esca-baby-porridge.html`
- `pages/haled-program.html`
- `pages/primary-school.html`
- `pages/medical-training.html`

`pages/activities.html` redirects visitors from the former rice-only activities page to the business directory.

## Source and maintenance

The business names and descriptions are based on `Profile Habbah Innovations Limited_084049 (1).docx`, supplied by the client. The email address was retained from the previous website. The site does not claim specific clinic locations, school courses, food ingredients, accreditations or opening hours, because those details were not supplied.

Edit `scripts/build-pages.cjs` for page content, then run `node scripts/build-pages.cjs` to regenerate the static HTML. Styling is in `assets/css/site-v2.css`; interaction code is in `assets/js/site-v2.js`.

The four `habbah-*.jpg` photos are contextual Unsplash stock used as illustrative imagery, not verified Habbah facilities, staff, products or operations. The legacy rice photographs are retained for provenance; `brown-rice-texture.jpg` is used as contextual imagery for agro-processing. See the repository history for the legacy photo source notes.

## Deployment

The site is configured as a static GitHub Pages draft. After pushing changes to the repository's `main` branch, GitHub Pages serves the site from the configured publishing source. The current workspace can regenerate the pages with `node scripts/build-pages.cjs`.

Before final client approval, confirm each venture's current operating status, contact details, location, approved photography and any regulatory claims.
