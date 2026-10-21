# Habbah Innovations Limited website

A static GitHub Pages draft for Habbah Innovations Limited. The homepage introduces the company. A separate business directory presents seven vertical image cards, and each business has its own page.

## Pages

- `index.html` — company homepage
- `pages/businesses.html` — illustrated business directory
- `pages/about.html` — mission, vision and values
- `pages/contact.html` — direct email enquiry
- `pages/restaurant-catering.html`
- `pages/maternity-store.html`
- `pages/medicare.html`
- `pages/esca-baby-porridge.html`
- `pages/haled-program.html`
- `pages/primary-school.html`
- `pages/medical-training.html`

`pages/activities.html` redirects visitors from the former activities page to the business directory.

## Source and maintenance

The business names and descriptions are based on `Profile Habbah Innovations Limited_084049 (1).docx`, supplied by the client. The email address was retained from the previous website. The site does not claim specific clinic locations, school courses, food ingredients, accreditations or opening hours, because those details were not supplied.

Edit `scripts/build-pages.cjs` for page content, then run `node scripts/build-pages.cjs` to regenerate the static HTML. Styling is in `assets/css/site-v2.css`; interaction code is in `assets/js/site-v2.js`.

The `habbah-*-ug.jpg` images are AI-generated illustrative scenes set in Uganda and featuring Black Ugandan people. They are visual concepts, not documentary photos of Habbah facilities, staff, customers or products. Older contextual stock images remain in `assets/images/` for provenance; the business directory and individual venture pages use the generated image set.

## Deployment

The site is configured as a static GitHub Pages draft. After pushing changes to the repository's `main` branch, GitHub Pages serves the site from the configured publishing source. The current workspace can regenerate the pages with `node scripts/build-pages.cjs`.

Before final client approval, confirm each venture's current operating status, contact details, location, approved photography and any regulatory claims.
