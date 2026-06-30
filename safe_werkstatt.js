const fs = require('fs');
let css = fs.readFileSync('index.css', 'utf8');

// Update variables
css = css.replace(
    /--color-bg-primary: [^;]+;/g,
    '--color-bg-primary: #1c1511;'
);
css = css.replace(
    /--color-bg-secondary: [^;]+;/g,
    '--color-bg-secondary: #f4ecd8;' // bright cream paper
);
css = css.replace(
    /--color-bg-tertiary: [^;]+;/g,
    '--color-bg-tertiary: #e3d5be;'
);
css = css.replace(
    /--color-text-primary: [^;]+;/g,
    '--color-text-primary: #1a120f;' // very dark brown/black for contrast
);
css = css.replace(
    /--color-text-secondary: [^;]+;/g,
    '--color-text-secondary: #3b2a22;'
);
css = css.replace(
    /--color-text-light: [^;]+;/g,
    '--color-text-light: #594438;'
);
css = css.replace(
    /--color-accent: [^;]+;/g,
    '--color-accent: #a33211;'
);
css = css.replace(
    /--color-border: [^;]+;/g,
    '--color-border: #755946;'
);

// Add custom fonts
css = css.replace(
    /--font-heading: [^;]+;/,
    "--font-heading: 'Staatliches', Impact, sans-serif;\n    --font-stamp: 'Special Elite', 'Courier Prime', monospace;\n    --font-hand: 'Permanent Marker', cursive;"
);

// Body background update
css = css.replace(
    /background-color: var\(--color-bg-primary\);\n    line-height: 1\.6;/,
    'background-color: var(--color-bg-primary);\n    background-image: url("assets/werkstatt_holz_bg.png");\n    background-size: 800px;\n    line-height: 1.6;'
);

// Header background update
css = css.replace(
    /background-color: rgba\(247, 245, 240, 0\.85\);/,
    'background-color: #2a2a2a;\n    background-image: url("assets/metall_platte.png");\n    background-size: 400px;'
);
css = css.replace(
    /border-bottom: 1px solid var\(--color-border\);/, 
    'border-bottom: 4px solid #111; box-shadow: 0 4px 15px rgba(0,0,0,0.8);'
);

// Nav links and Logo white on metal
css = css.replace(
    /\.nav-link {\n    font-family: var\(--font-heading\);/,
    '.nav-link {\n    font-family: var(--font-heading);\n    font-size: 1.2rem;\n    color: #e0e0e0;\n    text-shadow: 1px 1px 2px #000;'
);
css = css.replace(
    /\.logo {\n    font-family: var\(--font-heading\);\n    font-size: 2rem;\n    font-weight: 800;\n    letter-spacing: 0\.05em;\n    color: var\(--color-text-primary\);/,
    '.logo {\n    font-family: var(--font-heading);\n    font-size: 3rem;\n    font-weight: 400;\n    letter-spacing: 0.05em;\n    color: #fff;\n    text-shadow: 2px 2px 4px #000;'
);

// Update product-card
css = css.replace(
    /\.product-card {\n    cursor: pointer;\n    transition: var\(--transition-smooth\);\n    border: 1px solid var\(--color-border\);\n    background-color: var\(--color-bg-secondary\);\n    padding: 1rem;\n    border-radius: var\(--border-radius-md\);\n}/,
    '.product-card {\n    cursor: pointer;\n    transition: var(--transition-smooth);\n    border: 2px solid #b59f84;\n    background-color: var(--color-bg-secondary);\n    background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");\n    padding: 1.5rem;\n    border-radius: 2px;\n    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.6);\n    position: relative;\n}'
);

// Add real screw images using pseudo elements
const screwsCSS = `
.product-card::before, .product-card::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url('assets/schraube.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 10;
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
}
.product-card::before { top: 8px; left: 8px; transform: rotate(15deg); }
.product-card::after { top: 8px; right: 8px; transform: rotate(-85deg); }
`;
css += screwsCSS;

// Make headers use Staatliches and bright/contrasting text
css = css.replace(
    /\.section-title {\n    font-family: var\(--font-heading\);\n    font-size: 2\.2rem;/,
    '.section-title {\n    font-family: var(--font-heading);\n    font-size: 3.5rem;\n    color: #f4ecd8;\n    text-shadow: 3px 3px 6px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;'
);

css = css.replace(
    /\.hero-title {\n    font-family: var\(--font-heading\);\n    font-size: 4rem;/,
    '.hero-title {\n    font-family: var(--font-heading);\n    font-size: 4.5rem;\n    color: #fff;\n    text-shadow: 3px 3px 8px rgba(0,0,0,0.8), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;'
);

// Update Tags/Badges to use Stamp font
css = css.replace(
    /\.section-tag {\n    font-family: var\(--font-heading\);\n    font-size: 0\.8rem;/,
    '.section-tag {\n    font-family: var(--font-stamp);\n    background-color: var(--color-bg-secondary);\n    background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");\n    color: var(--color-text-primary);\n    padding: 6px 12px;\n    border: 2px dashed var(--color-border);\n    display: inline-block;\n    transform: rotate(-3deg);\n    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n    font-size: 1rem;'
);

// Buttons styling
css = css.replace(
    /\.btn-primary {\n    background-color: var\(--color-accent\);\n    color: var\(--color-black\);\n    border: 1px solid var\(--color-accent\);\n}/,
    `.btn-primary {
    background-color: var(--color-accent);
    color: #fff;
    border: 2px solid #000;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.8);
    border-radius: 2px;
    font-family: var(--font-heading);
    font-size: 1.3rem;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}`
);

// Make Category Cards also look like cardboard with screws
css = css.replace(
    /\.category-card {\n    position: relative;\n    cursor: pointer;\n    background-color: var\(--color-bg-secondary\);\n    overflow: hidden;\n    border-radius: var\(--border-radius-md\);\n    transition: var\(--transition-smooth\);\n    border: 1px solid var\(--color-border\);\n}/,
    '.category-card {\n    position: relative;\n    cursor: pointer;\n    background-color: var(--color-bg-secondary);\n    background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");\n    border-radius: 2px;\n    transition: var(--transition-smooth);\n    box-shadow: 6px 6px 12px rgba(0,0,0,0.6);\n    border: 2px solid #b59f84;\n}'
);

const catScrewsCSS = `
.category-card::before, .category-card::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url('assets/schraube.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 10;
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
}
.category-card::before { top: 8px; left: 8px; transform: rotate(45deg); }
.category-card::after { top: 8px; right: 8px; transform: rotate(-15deg); }
`;
css += catScrewsCSS;

// Mobile Improvements
// Adding some extra padding on mobile so cards don't touch the edge
css += `
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    .product-card {
        margin-bottom: 1rem;
    }
    .hero-title {
        font-size: 3.5rem;
    }
}
`;

fs.writeFileSync('index.css', css);
