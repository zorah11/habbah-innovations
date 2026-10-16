const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const ventures = [
  {
    slug: 'restaurant-catering', name: 'Habbah Restaurant and Catering Services',
    sector: 'Hospitality & dining', mark: 'HR', tone: 'ochre',
    summary: 'Meals and welcoming spaces for families and communities.',
    lead: 'Habbah’s hospitality business brings people together around quality food and a warm dining experience.',
    points: [
      ['Restaurant dining', 'A welcoming place to enjoy meals and time together.'],
      ['Catering services', 'Food service for gatherings and shared occasions.'],
      ['Community hospitality', 'An approach centred on comfort, quality and connection.'],
    ],
  },
  {
    slug: 'maternity-store', name: 'Habbah Maternity Store',
    sector: 'Maternal & family care', mark: 'HM', tone: 'clay',
    summary: 'Everyday essentials for expectant mothers, newborns and growing families.',
    lead: 'The maternity store is designed around safe, reliable and affordable products for families at important stages of life.',
    points: [
      ['For expectant mothers', 'Products intended to support preparation for a new arrival.'],
      ['For newborns', 'Practical items for the early days of family care.'],
      ['For growing families', 'An accessible place to find family essentials.'],
    ],
  },
  {
    slug: 'medicare', name: 'Habbah Medicare',
    sector: 'Healthcare services', mark: 'HM', tone: 'sea',
    summary: 'Accessible clinic-based care and community wellness support.',
    lead: 'Habbah Medicare is the group’s healthcare division, described in the company profile as providing diagnostics, treatment and wellness support.',
    points: [
      ['Diagnostics', 'Helping people understand health concerns through clinic services.'],
      ['Treatment', 'Care delivered through the healthcare division.'],
      ['Community wellness', 'Support for healthier families and communities.'],
    ],
  },
  {
    slug: 'esca-baby-porridge', name: 'ESCA Baby Porridge',
    sector: 'Agro-processing', mark: 'ES', tone: 'sage',
    summary: 'An agro-processing venture connecting agricultural value to families.',
    lead: 'ESCA Baby Porridge sits within Habbah’s agro-processing work: adding value to agricultural produce through processing, packaging and supply-chain connections.',
    points: [
      ['Value addition', 'Processing agricultural produce into a market-ready offering.'],
      ['Packaging', 'Presenting products with quality and reliability in mind.'],
      ['Farmer connections', 'Linking local agricultural production with broader markets.'],
    ],
  },
  {
    slug: 'haled-program', name: 'HALED Program',
    sector: 'Youth development', mark: 'HA', tone: 'ochre',
    summary: 'Practical leadership and entrepreneurship development for young people.',
    lead: 'HALED is Habbah’s youth-focused program, built around action, mentorship and the skills needed to pursue ideas with confidence.',
    points: [
      ['Leadership', 'Helping young people develop the confidence to lead.'],
      ['Entrepreneurship', 'Building practical business understanding and initiative.'],
      ['Mentorship', 'Learning through guidance, exchange and experience.'],
    ],
  },
  {
    slug: 'primary-school', name: 'Habbah Primary School',
    sector: 'Primary education', mark: 'HP', tone: 'clay',
    summary: 'Strong academic foundations for young learners.',
    lead: 'Habbah Primary School represents the group’s commitment to education at the stage where curiosity, confidence and core learning habits begin.',
    points: [
      ['Foundational learning', 'A focus on the early academic building blocks.'],
      ['Growing confidence', 'Supporting young learners as they develop.'],
      ['Community future', 'Education as part of Habbah’s wider commitment to opportunity.'],
    ],
  },
  {
    slug: 'medical-training', name: 'Habbah School of Medical Training',
    sector: 'Medical education', mark: 'MT', tone: 'sea',
    summary: 'Training the next generation of healthcare professionals.',
    lead: 'The school of medical training is Habbah’s specialist education venture, focused on building skills for healthcare practice.',
    points: [
      ['Specialist learning', 'Education directed toward the medical field.'],
      ['Practical capability', 'Developing the knowledge and skills healthcare work calls for.'],
      ['Long-term impact', 'Strengthening the people behind future care.'],
    ],
  },
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const pageLink = (prefix, slug) => `${prefix}pages/${slug}.html`;

function header(prefix, active) {
  const links = [
    ['Home', `${prefix}index.html`, 'home'],
    ['Businesses', `${prefix}index.html#businesses`, 'businesses'],
    ['About', `${prefix}pages/about.html`, 'about'],
    ['Contact', `${prefix}pages/contact.html`, 'contact'],
  ];
  return `<a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header"><div class="wrap header-inner">
    <a class="brand" href="${prefix}index.html" aria-label="Habbah Innovations home"><span class="brand-mark">H<span class="brand-dot">.</span></span><span class="brand-name">Habbah <small>Innovations Limited</small></span></a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">Menu <span aria-hidden="true">☰</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">${links.map(([label, href, key]) => `<a href="${href}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
  </div></header>`;
}

function footer(prefix) {
  return `<footer class="site-footer"><div class="wrap footer-grid">
    <div><a class="footer-brand" href="${prefix}index.html">Habbah Innovations Limited</a><p>One company. Many ways to serve communities.</p></div>
    <div><span class="footer-label">Explore</span><a href="${prefix}index.html#businesses">Our businesses</a><a href="${prefix}pages/about.html">About Habbah</a><a href="${prefix}pages/contact.html">Contact</a></div>
    <div><span class="footer-label">Get in touch</span><a href="mailto:habagayamwesi@yahoo.com">habagayamwesi@yahoo.com</a><span>Uganda</span></div>
  </div><div class="wrap footer-bottom"><span>© <span data-year>2026</span> Habbah Innovations Limited</span><span>Care · Growth · Opportunity</span></div></footer>`;
}

function document(title, description, body, active, prefix = '') {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#102d36"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="icon" href="${prefix}assets/images/favicon.svg"><link rel="stylesheet" href="${prefix}assets/css/site-v2.css?v=20261016">
</head><body>${header(prefix, active)}<main id="main">${body}</main>${footer(prefix)}
<script src="${prefix}assets/js/site-v2.js?v=20261016"></script></body></html>\n`;
}

const directory = ventures.map((venture, index) => `<a class="business-row tone-${venture.tone}" href="${pageLink('', venture.slug)}" aria-label="Explore ${escapeHtml(venture.name)}">
  <span class="business-number">${String(index + 1).padStart(2, '0')}</span><span class="business-mark" aria-hidden="true">${venture.mark}</span>
  <span class="business-details"><small>${escapeHtml(venture.sector)}</small><strong>${escapeHtml(venture.name)}</strong><span>${escapeHtml(venture.summary)}</span></span><span class="business-arrow" aria-hidden="true">↗</span>
</a>`).join('');

const home = `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy">
  <p class="eyebrow">Habbah Innovations Limited / Uganda</p><h1>Different ventures.<br><em>One shared purpose.</em></h1>
  <p class="hero-lead">From family care and healthcare to food, learning and youth development, Habbah brings its businesses together around everyday needs and long-term opportunity.</p>
  <a class="text-link" href="#businesses">Explore the businesses <span aria-hidden="true">↘</span></a>
</div><div class="hero-map" aria-label="Habbah works across food, care, health, agriculture, leadership and education"><div class="hero-map-inner">
  <span>Food</span><span>Care</span><span>Health</span><b>H.</b><span>Growth</span><span>Learning</span><span>Leadership</span>
</div><p>One connected company<br>Seven distinct businesses</p></div></div></section>
<section class="opening-note"><div class="wrap opening-grid"><span class="section-index">The group at a glance</span><p>Habbah Innovations Limited is a multi-disciplinary enterprise working across the services that help communities live, learn and grow.</p></div></section>
<section class="businesses section" id="businesses"><div class="wrap"><div class="section-heading"><div><span class="section-index">Explore Habbah</span><h2>Seven businesses.<br>Seven points of entry.</h2></div><p>Choose a business to see its focus and how it fits within the wider Habbah family.</p></div><div class="business-list">${directory}</div></div></section>
<section class="purpose-band"><div class="wrap purpose-grid"><span class="section-index">Our purpose</span><div><blockquote>Enhancing quality of life through trusted services under one umbrella.</blockquote><p>Habbah’s mission spans health, education, hospitality and development. The businesses are distinct; the commitment to quality, integrity and community is shared.</p><a class="light-link" href="pages/about.html">Read about Habbah <span aria-hidden="true">↗</span></a></div></div></section>
<section class="closing section"><div class="wrap closing-grid"><div><span class="section-index">Start a conversation</span><h2>Interested in one of our businesses?</h2></div><div><p>Tell us which Habbah venture you would like to discuss, and we’ll take the conversation from there.</p><a class="button" href="pages/contact.html">Contact Habbah <span aria-hidden="true">↗</span></a></div></div></section>`;

const about = `<section class="interior-hero"><div class="wrap interior-grid"><div><p class="eyebrow">The company</p><h1>One name.<br>Many ways to contribute.</h1></div><p>Habbah Innovations Limited connects businesses in care, health, food, education, agriculture and youth development.</p></div></section>
<section class="section"><div class="wrap statement-grid"><span class="section-index">Our mission</span><div><h2>Make useful services part of everyday progress.</h2><p>To enhance quality of life by providing trusted health, educational, culinary and developmental services under one unified umbrella.</p></div></div></section>
<section class="vision"><div class="wrap statement-grid"><span class="section-index">Our vision</span><div><h2>A community-driven future.</h2><p>To be a leading catalyst for sustainable growth, human well-being and youth innovation.</p></div></div></section>
<section class="section"><div class="wrap"><div class="section-heading"><div><span class="section-index">How we work</span><h2>Values that travel across every business.</h2></div></div><div class="value-list"><article><span>01</span><h3>Integrity</h3><p>Transparency, honesty and ethical responsibility.</p></article><article><span>02</span><h3>Quality</h3><p>High standards across services, schools, clinics, restaurants and products.</p></article><article><span>03</span><h3>Community first</h3><p>Putting people’s health, growth and well-being at the centre.</p></article><article><span>04</span><h3>Innovation & growth</h3><p>Adapting and adding value across agriculture, business and education.</p></article></div></div></section>
<section class="closing section"><div class="wrap closing-grid"><div><span class="section-index">The businesses</span><h2>Explore the people and purposes behind the name.</h2></div><div><p>Each Habbah business has its own focus and a place within the wider company.</p><a class="button" href="../index.html#businesses">View all businesses <span aria-hidden="true">↗</span></a></div></div></section>`;

const contact = `<section class="interior-hero"><div class="wrap interior-grid"><div><p class="eyebrow">Contact</p><h1>Start with the business that matters to you.</h1></div><p>Whether your question is about a Habbah service, product, school or program, tell us what you are looking for.</p></div></section>
<section class="section"><div class="wrap contact-grid"><div><span class="section-index">Direct enquiry</span><h2>Write to Habbah.</h2><p>The best first step is an email describing the business you want to reach and your question.</p></div><div class="contact-card"><span>Email</span><a class="contact-email" href="mailto:habagayamwesi@yahoo.com">habagayamwesi@yahoo.com</a><p>Suggested details: your name, the relevant Habbah business, your question and how best to reply.</p><a class="button" href="mailto:habagayamwesi@yahoo.com?subject=Enquiry%20for%20Habbah%20Innovations%20Limited">Open email draft <span aria-hidden="true">↗</span></a></div></div></section>
<section class="businesses section muted"><div class="wrap"><div class="section-heading"><div><span class="section-index">Not sure which business?</span><h2>Find the right starting point.</h2></div><p>Browse the group’s ventures, then mention the relevant one in your message.</p></div><a class="text-link dark-link" href="../index.html#businesses">Explore all businesses <span aria-hidden="true">↗</span></a></div></section>`;

function ventureBody(venture, index) {
  const next = ventures[(index + 1) % ventures.length];
  return `<section class="venture-hero tone-${venture.tone}"><div class="wrap venture-hero-grid"><div><a class="back-link" href="../index.html#businesses">← All businesses</a><p class="eyebrow">${escapeHtml(venture.sector)} / ${String(index + 1).padStart(2, '0')} of 07</p><h1>${escapeHtml(venture.name)}</h1><p class="venture-summary">${escapeHtml(venture.summary)}</p></div><div class="venture-art" aria-hidden="true"><span>${venture.mark}</span><i></i><b>Habbah<br>Innovations</b></div></div></section>
  <section class="section venture-content"><div class="wrap statement-grid"><span class="section-index">The focus</span><div><h2>${escapeHtml(venture.lead)}</h2><p>Contact Habbah for current information about this business.</p></div></div></section>
  <section class="section venture-points"><div class="wrap"><div class="section-heading"><div><span class="section-index">Within this business</span><h2>Areas of focus.</h2></div></div><div class="value-list three">${venture.points.map(([heading, text], pointIndex) => `<article><span>${String(pointIndex + 1).padStart(2, '0')}</span><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(text)}</p></article>`).join('')}</div></div></section>
  <section class="venture-connection"><div class="wrap connection-grid"><span class="section-index">Part of the Habbah family</span><p>One of seven ventures working across everyday needs and long-term opportunity.</p><a class="light-link" href="../pages/about.html">About the company <span aria-hidden="true">↗</span></a></div></section>
  <section class="closing section"><div class="wrap closing-grid"><div><span class="section-index">Continue exploring</span><h2>Next: ${escapeHtml(next.name)}</h2></div><div><p>Discover another part of Habbah Innovations Limited, or ask us about this business directly.</p><a class="button" href="${next.slug}.html">Explore next business <span aria-hidden="true">↗</span></a><a class="secondary-link" href="contact.html">Contact Habbah</a></div></div></section>`;
}

function write(relative, content) {
  const destination = path.join(root, relative);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, content);
  console.log(relative);
}

write('index.html', document('Habbah Innovations Limited | Businesses for community life', 'Explore the seven businesses of Habbah Innovations Limited across hospitality, family care, healthcare, agro-processing, youth leadership and education.', home, 'home'));
write('pages/about.html', document('About Habbah Innovations Limited', 'Learn about the mission, vision and values behind Habbah Innovations Limited and its seven businesses.', about, 'about', '../'));
write('pages/contact.html', document('Contact Habbah Innovations Limited', 'Contact Habbah Innovations Limited about its businesses, services, schools, products and programs.', contact, 'contact', '../'));
for (const [index, venture] of ventures.entries()) {
  write(`pages/${venture.slug}.html`, document(`${venture.name} | Habbah Innovations Limited`, `${venture.summary} Explore ${venture.name}, part of Habbah Innovations Limited.`, ventureBody(venture, index), 'businesses', '../'));
}
write('pages/activities.html', '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Habbah businesses</title><meta http-equiv="refresh" content="0;url=../index.html#businesses"><script>location.replace("../index.html#businesses")</script></head><body><a href="../index.html#businesses">Explore Habbah businesses</a></body></html>\n');
write('404.html', document('Page not found | Habbah Innovations Limited', 'This Habbah page could not be found.', '<section class="interior-hero"><div class="wrap interior-grid"><div><p class="eyebrow">Page not found</p><h1>Let’s find your way back.</h1></div><p>The page you requested is not here. Explore Habbah’s businesses from the homepage.</p></div></section><section class="section"><div class="wrap"><a class="button" href="index.html">Go to homepage <span aria-hidden="true">↗</span></a></div></section>', '', ''));
