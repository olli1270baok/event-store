const fs = require('fs');
let css = fs.readFileSync('index.css', 'utf8');

// Update CSS Variables
css = css.replace('--color-bg-primary: #f7f5f0;', '--color-bg-primary: #f4ece2;');
css = css.replace('--color-bg-secondary: #ffffff;', '--color-bg-secondary: #fffcf8;');
css = css.replace('--color-bg-tertiary: #f0ede6;', '--color-bg-tertiary: #e6d8c3;');
css = css.replace('--color-text-primary: #0f172a;', '--color-text-primary: #3e2723;');
css = css.replace('--color-text-secondary: #475569;', '--color-text-secondary: #5d4037;');
css = css.replace('--color-text-light: #94a3b8;', '--color-text-light: #8d6e63;');
css = css.replace('--color-accent: #2563eb;', '--color-accent: #d35400;');
css = css.replace('--color-accent-light: #ef4444;', '--color-accent-light: #c0392b;');
css = css.replace('--color-border: #e2e8f0;', '--color-border: #8d6e63;');

// Add wood pattern to body
css = css.replace(
    'background-color: var(--color-bg-primary);\n    line-height: 1.6;',
    'background-color: var(--color-bg-primary);\n    background-image: url("https://www.transparenttextures.com/patterns/wood-pattern.png");\n    line-height: 1.6;'
);

// Add wood pattern to header
css = css.replace(
    'background-color: rgba(247, 245, 240, 0.85);',
    'background-color: rgba(244, 236, 226, 0.95);\n    background-image: url("https://www.transparenttextures.com/patterns/wood-pattern.png");\n    border-bottom: 3px solid var(--color-border);'
);

// Update product-card
css = css.replace(
    '.product-card {\n    cursor: pointer;\n    transition: var(--transition-smooth);\n    border: 1px solid var(--color-border);\n    background-color: var(--color-bg-secondary);\n    padding: 1rem;\n    border-radius: var(--border-radius-md);\n}',
    '.product-card {\n    cursor: pointer;\n    transition: var(--transition-smooth);\n    border: 3px solid var(--color-border);\n    background-color: var(--color-bg-secondary);\n    padding: 1rem;\n    border-radius: 4px;\n    box-shadow: 4px 4px 0px rgba(62, 39, 35, 0.2);\n    background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");\n}'
);

css = css.replace(
    '.product-card:hover {\n    border-color: var(--color-accent);\n    transform: translateY(-4px);\n    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.03);\n}',
    '.product-card:hover {\n    border-color: var(--color-accent);\n    transform: translateY(-4px) rotate(1deg);\n    box-shadow: 6px 8px 0px rgba(62, 39, 35, 0.3);\n}'
);

// Update primary buttons
css = css.replace(
    '.btn-primary {\n    background-color: var(--color-accent);\n    color: var(--color-white);\n}',
    '.btn-primary {\n    background-color: var(--color-accent);\n    color: var(--color-white);\n    border: 2px solid var(--color-text-primary);\n    box-shadow: 3px 3px 0px rgba(62, 39, 35, 0.4);\n    border-radius: 4px;\n    font-weight: 700;\n}'
);

css = css.replace(
    '.btn-primary:hover {\n    background-color: #1d4ed8;\n    transform: translateY(-2px);\n}',
    '.btn-primary:hover {\n    background-color: #e65100;\n    transform: translateY(-2px) rotate(-1deg);\n    box-shadow: 4px 5px 0px rgba(62, 39, 35, 0.5);\n}'
);

fs.writeFileSync('index.css', css);
