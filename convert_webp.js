const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install sharp if not present
try {
    require.resolve('sharp');
} catch (e) {
    console.log("Installing sharp...");
    execSync('npm install sharp', { stdio: 'inherit' });
}
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'assets');
const filesToUpdate = ['index.html', 'index.css', 'index.js'];

async function convertAndReplace() {
    console.log("Starting WebP conversion...");
    const files = fs.readdirSync(assetsDir);
    const images = files.filter(f => f.match(/\.(jpg|jpeg|png)$/i));
    
    let replacementMap = {};

    for (const file of images) {
        const oldPath = path.join(assetsDir, file);
        const parsed = path.parse(file);
        const newFilename = parsed.name + '.webp';
        const newPath = path.join(assetsDir, newFilename);
        
        try {
            await sharp(oldPath)
                .webp({ quality: 80 })
                .toFile(newPath);
            
            console.log(`Converted ${file} to ${newFilename}`);
            
            // Delete old file
            fs.unlinkSync(oldPath);
            
            replacementMap[file] = newFilename;
        } catch (err) {
            console.error(`Error converting ${file}:`, err);
        }
    }

    console.log("Updating HTML, CSS, JS files...");
    for (const fileName of filesToUpdate) {
        const filePath = path.join(__dirname, fileName);
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;
            
            for (const [oldImg, newImg] of Object.entries(replacementMap)) {
                // simple global replace of the filename string
                const regex = new RegExp(oldImg, 'g');
                if (regex.test(content)) {
                    content = content.replace(regex, newImg);
                    modified = true;
                }
            }
            
            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated references in ${fileName}`);
            }
        }
    }
    console.log("WebP migration complete!");
}

convertAndReplace().catch(console.error);
