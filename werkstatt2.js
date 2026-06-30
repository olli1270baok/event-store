const fs = require('fs');
let css = fs.readFileSync('index.css', 'utf8');

// Add tape CSS
const tapeCSS = `
.tape {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(-2deg);
    width: 100px;
    height: 30px;
    background-color: rgba(226, 218, 188, 0.7);
    box-shadow: 0 1px 2px rgba(0,0,0,0.3);
    z-index: 20;
    border-radius: 2px;
}
`;
if(!css.includes('.tape {')) {
    css += tapeCSS;
}

// Ensure header is readable
css = css.replace(
    '.main-header {\n    background-color: rgba(28, 21, 17, 0.95);\n    background-image: url("https://www.transparenttextures.com/patterns/dark-wood.png");',
    '.main-header {\n    background-color: rgba(28, 21, 17, 0.95);\n    background-image: url("https://www.transparenttextures.com/patterns/dark-wood.png");\n    border-bottom: 4px solid #000;'
);

fs.writeFileSync('index.css', css);
