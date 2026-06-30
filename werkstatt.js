const fs = require('fs');
let css = fs.readFileSync('index.css', 'utf8');

// Update variables
css = css.replace(
    /--color-bg-primary: [^;]+;/g,
    '--color-bg-primary: #1c1511;'
);
css = css.replace(
    /--color-bg-secondary: [^;]+;/g,
    '--color-bg-secondary: #e6d3ba;'
);
css = css.replace(
    /--color-bg-tertiary: [^;]+;/g,
    '--color-bg-tertiary: #cfb99d;'
);
css = css.replace(
    /--color-text-primary: [^;]+;/g,
    '--color-text-primary: #2b1f1a;'
);
css = css.replace(
    /--color-text-secondary: [^;]+;/g,
    '--color-text-secondary: #4a362a;'
);
css = css.replace(
    /--color-text-light: [^;]+;/g,
    '--color-text-light: #705544;'
);
css = css.replace(
    /--color-accent: [^;]+;/g,
    '--color-accent: #a33211;'
);
css = css.replace(
    /--color-border: [^;]+;/g,
    '--color-border: #8b6b55;'
);

// Add custom fonts
css = css.replace(
    /--font-heading: [^;]+;/,
    "--font-heading: 'Staatliches', Impact, sans-serif;\n    --font-stamp: 'Special Elite', 'Courier Prime', monospace;\n    --font-hand: 'Permanent Marker', cursive;"
);

// Body background update
css = css.replace(
    /body {[\s\S]*?background-image:[^;]+;/,
    'body {\n    font-family: var(--font-body);\n    color: var(--color-text-primary);\n    background-color: var(--color-bg-primary);\n    background-image: url("https://www.transparenttextures.com/patterns/dark-wood.png");'
);

// Header background update
css = css.replace(
    /\.main-header {[\s\S]*?background-image:[^;]+;/,
    '.main-header {\n    background-color: rgba(28, 21, 17, 0.95);\n    background-image: url("https://www.transparenttextures.com/patterns/dark-wood.png");'
);
// Fix header border
css = css.replace('border-bottom: 3px solid var(--color-border);', 'border-bottom: 4px solid #000;');

// Make nav-links and logo white so they are visible on dark wood
css = css.replace(
    '.nav-link {\n    font-family: var(--font-heading);',
    '.nav-link {\n    font-family: var(--font-heading);\n    font-size: 1.1rem;\n    color: #fff;'
);
css = css.replace(
    '.logo {\n    font-family: var(--font-heading);\n    font-size: 2rem;\n    font-weight: 800;\n    letter-spacing: 0.05em;\n    color: var(--color-text-primary);',
    '.logo {\n    font-family: var(--font-heading);\n    font-size: 2.8rem;\n    font-weight: 400;\n    letter-spacing: 0.05em;\n    color: #fff;'
);

// Product card background and border
css = css.replace(
    /url\("https:\/\/www.transparenttextures.com\/patterns\/cream-paper.png"\)/,
    'url("https://www.transparenttextures.com/patterns/old-wall.png")'
);

// Replace product card border/shadow
css = css.replace(
    /border: 3px solid var\(--color-border\);[\s\S]*?box-shadow: 4px 4px 0px rgba\(62, 39, 35, 0\.2\);/,
    'border: 4px solid #5a4435;\n    background-color: var(--color-bg-secondary);\n    padding: 1rem;\n    border-radius: 2px;\n    box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);\n    position: relative;'
);

// Add Screws
const screwsCSS = `
.product-card::before, .product-card::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: linear-gradient(45deg, transparent 40%, #111 40%, #111 60%, transparent 60%), radial-gradient(circle, #777 40%, #222 100%);
    border-radius: 50%;
    box-shadow: inset 0 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.6);
    z-index: 10;
}
.product-card::before { top: 8px; left: 8px; transform: rotate(15deg); }
.product-card::after { top: 8px; right: 8px; transform: rotate(-25deg); }
`;
css += screwsCSS;

// Update fonts for stamps/badges
css = css.replace(
    /\.section-tag {\n    font-family: var\(--font-heading\);/,
    '.section-tag {\n    font-family: var(--font-stamp);\n    background-color: rgba(255,255,255,0.2);\n    padding: 4px 8px;\n    border: 2px solid var(--color-accent);\n    display: inline-block;\n    transform: rotate(-2deg);'
);

css = css.replace(
    /\.section-title {\n    font-family: var\(--font-heading\);\n    font-size: 2\.2rem;/,
    '.section-title {\n    font-family: var(--font-heading);\n    font-size: 3.5rem;\n    color: #ebdcb2;\n    text-shadow: 2px 2px 0px #000;'
);

// Fix Hero Title
css = css.replace(
    /\.hero-title {\n    font-family: var\(--font-heading\);\n    font-size: 3\.5rem;/,
    '.hero-title {\n    font-family: var(--font-heading);\n    font-size: 5rem;\n    text-shadow: 3px 3px 0px #000;'
);

// Fix Buttons
css = css.replace(
    /\.btn-primary {[\s\S]*?font-weight: 800;\n}/,
    `.btn-primary {
    background-color: var(--color-accent);
    color: #fff;
    border: 3px solid #000;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.7);
    border-radius: 2px;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    letter-spacing: 2px;
}`
);

fs.writeFileSync('index.css', css);
