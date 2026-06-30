const fs = require('fs');

function fixQuotes() {
    let content = fs.readFileSync('index.js', 'utf8');

    // Regex to match each product block
    // We look for id: "...", category: "...", and testerQuote: "..."
    const productRegex = /\{\s*id:\s*"([^"]+)",[\s\S]*?category:\s*"([^"]+)"[\s\S]*?testerQuote:\s*"([^"]+)"/g;

    let modifiedContent = content;
    let match;

    while ((match = productRegex.exec(content)) !== null) {
        const id = match[1];
        const category = match[2];
        const fullQuote = match[3];

        let targetName = 'Olli';
        
        if (['fitness'].includes(category)) targetName = 'Mel';
        else if (['kitchen', 'living'].includes(category)) {
            if (id === 'tvbacklight') targetName = 'Olli'; // Entertainment
            else targetName = 'Katha';
        }
        else if (['garden', 'collectibles'].includes(category)) targetName = 'Olli';
        else if (['gadgets', 'tech'].includes(category)) {
            if (id === 'kopfhoerer' || id === 'headphones') targetName = 'Olli'; // Audio
            else targetName = 'Mitch';
        }

        // The quote usually starts with "Name's Fazit:" or "Name Fazit:"
        const quoteContentMatch = fullQuote.match(/^[^:]+:\s*(.*)$/);
        let newQuoteText = fullQuote;
        if (quoteContentMatch) {
            let suffix = targetName.endsWith('s') || targetName.endsWith('x') || targetName.endsWith('z') ? "'" : "s";
            newQuoteText = `${targetName}${suffix} Fazit: ${quoteContentMatch[1]}`;
        } else {
            // If it doesn't match the format for some reason, just prepend
            newQuoteText = `${targetName}s Fazit: ${fullQuote}`;
        }

        // Replace the exact old quote with the new quote
        // Be careful not to replace identical quotes if they exist, but they are mostly unique
        modifiedContent = modifiedContent.replace(
            `testerQuote: "${fullQuote}"`,
            `testerQuote: "${newQuoteText}"`
        );
    }

    fs.writeFileSync('index.js', modifiedContent, 'utf8');
    console.log("Updated quotes based on new roles.");
}

fixQuotes();
