const fs = require('fs');
let lines = fs.readFileSync('index.js', 'utf8').split('\n');

// Update image paths
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"image": "assets/airfryer.png"')) {
        lines[i] = lines[i].replace('.png', '.jpg');
    }
    if (lines[i].includes('"image": "assets/massagegun.png"')) {
        lines[i] = lines[i].replace('.png', '.jpg');
    }
}

// Remove the 6 placeholder products that were duplicated
// They are from line 1359 to 1554 (1-indexed)
lines.splice(1358, 1554 - 1359 + 1);

fs.writeFileSync('index.js', lines.join('\n'));
