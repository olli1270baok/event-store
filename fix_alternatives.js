const fs = require('fs');

let content = fs.readFileSync('index.js', 'utf8');

const newProducts = [
    {
        id: "headphones_budget",
        name: "Soundcore Life Q30",
        category: "gadgets",
        priceRange: "50 - 80 €",
        rating: 4.6,
        stars: "★★★★½",
        image: "assets/headphones.png",
        amazonLink: "https://www.amazon.de/s?k=Soundcore+Life+Q30&tag=baokmedia21-21",
        review: "Der ungeschlagene Preis-Leistungs-König. Bietet ANC, das zwar nicht an Sony rankommt, aber für den Alltag im Zug oder Büro völlig ausreicht.",
        pros: ["Unglaubliches Preis-Leistungs-Verhältnis", "App mit exzellentem Equalizer", "60 Stunden Akku"],
        cons: ["Plastik wirkt etwas günstiger", "Mikrofonqualität beim Telefonieren nur mittelmäßig"],
        testDuration: "6 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Ein absoluter Dauerbrenner auf TikTok als beste Budget-Kopfhörer.",
        verdict: "Wer keine 200€ für Sony ausgeben will, macht hier absolut nichts falsch.",
        perfectFor: "Studenten und Preisbewusste.",
        notFor: "Audio-Enthusiasten mit höchsten Ansprüchen.",
        testerQuote: "Mitchs Fazit: Für den Preis ein absoluter No-Brainer. Der Sound ist kräftig und der Akku hält gefühlt ewig.",
        hiddenFeature: "Man kann zwei Geräte gleichzeitig koppeln (Multipoint).",
        alternatives: []
    },
    {
        id: "vacuum_budget",
        name: "Lefant M210 Saugroboter",
        category: "living",
        priceRange: "90 - 120 €",
        rating: 4.3,
        stars: "★★★★☆",
        image: "assets/vacuum.png",
        amazonLink: "https://www.amazon.de/s?k=Lefant+M210&tag=baokmedia21-21",
        review: "Ein kompakter, reiner Saugroboter ohne Schnickschnack. Ideal für kleine Wohnungen oder als Einstiegsgerät, um das Konzept Saugroboter auszuprobieren.",
        pros: ["Sehr günstig", "Sehr flach (passt unter fast jedes Sofa)", "Saugt Tierhaare gut ein (keine Bürste, in der sie sich verheddern)"],
        cons: ["Keine Wischfunktion", "Keine Laser-Navigation (fährt nach Chaos-Prinzip)"],
        testDuration: "3 Monate",
        hypeScore: 3,
        realityScore: 4,
        hypeComment: "Oft im Angebot und ein Bestseller für Sparfüchse.",
        verdict: "Ein solides Einstiegsgerät. Er navigiert zwar chaotisch, erwischt aber irgendwann jeden Krümel.",
        perfectFor: "Kleine Wohnungen und Haustierbesitzer (wg. Tierhaaren).",
        notFor: "Große, komplexe Wohnungen (hier verirrt er sich).",
        testerQuote: "Kathas Fazit: Perfekt für mein kleines Studio. Er ist dumm, aber fleißig!",
        hiddenFeature: "Die fehlende Hauptbürste ist ein Segen bei langen Haaren.",
        alternatives: []
    },
    {
        id: "airfryer_ninja",
        name: "Ninja Foodi Dual Zone",
        category: "kitchen",
        priceRange: "160 - 220 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/airfryer.png",
        amazonLink: "https://www.amazon.de/s?k=Ninja+Foodi+Dual+Zone&tag=baokmedia21-21",
        review: "Der König unter den Heißluftfritteusen mit zwei separaten Garzonen. Man kann Pommes und Hähnchen gleichzeitig bei unterschiedlichen Temperaturen zubereiten, und beide werden auf die Sekunde genau gleichzeitig fertig.",
        pros: ["Zwei Fächer für unterschiedliche Speisen", "SYNC-Funktion beendet beide Fächer zeitgleich", "Extrem leistungsstark"],
        cons: ["Nimmt sehr viel Platz auf der Arbeitsplatte ein", "Relativ laut"],
        testDuration: "8 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Das Nonplusultra auf Food-Blogs und Instagram.",
        verdict: "Wenn du den Platz hast, kauf sie. Es verändert die Art, wie du kochst.",
        perfectFor: "Familien und Meal-Prepper.",
        notFor: "Kleine Küchen mit wenig Arbeitsfläche.",
        testerQuote: "Kathas Fazit: Ich nutze den Backofen fast gar nicht mehr. Links Gemüse, rechts Lachs – fertig in 15 Minuten.",
        hiddenFeature: "Man kann auch Kuchen darin backen!",
        alternatives: []
    },
    {
        id: "massagegun_budget",
        name: "Renpho Massagepistole",
        category: "fitness",
        priceRange: "60 - 90 €",
        rating: 4.5,
        stars: "★★★★½",
        image: "assets/massagegun.png",
        amazonLink: "https://www.amazon.de/s?k=Renpho+Massagepistole&tag=baokmedia21-21",
        review: "Eine kompakte, günstige Alternative zu den teuren Profi-Geräten. Sie bietet genug Kraft für Hobbysportler und hat einen leisen bürstenlosen Motor.",
        pros: ["Sehr günstig", "USB-C Ladeanschluss (kann mit dem Handy-Ladekabel geladen werden)"],
        cons: ["Nicht so durchdringend stark wie eine Hypervolt", "Gehäuse komplett aus Plastik"],
        testDuration: "2 Monate",
        hypeScore: 3,
        realityScore: 4,
        hypeComment: "Ein Bestseller auf Amazon, weil das Preis-Leistungs-Verhältnis stimmt.",
        verdict: "Wer nur gelegentlich Verspannungen löst, braucht keine 250€ auszugeben. Die Renpho reicht völlig.",
        perfectFor: "Gelegenheitssportler und für die Handtasche.",
        notFor: "Profi-Sportler mit extrem tief sitzenden Verhärtungen.",
        testerQuote: "Mels Fazit: Sie sieht nicht so cool aus wie die Hypervolt, aber für den Nacken nach dem Schreibtisch-Tag ist sie mein Favorit.",
        hiddenFeature: "Passt durch die kompakte Form in jede Gym-Bag.",
        alternatives: []
    }
];

// Find the string \n];\n\nconst ARTICLES
let targetStr = '\n];\n\nconst ARTICLES';
let insertionIndex = content.indexOf(targetStr);

if (insertionIndex !== -1) {
    let newProductsStr = ',\n' + newProducts.map(p => JSON.stringify(p, null, 8)).join(',\n');
    content = content.slice(0, insertionIndex) + newProductsStr + content.slice(insertionIndex);
} else {
    console.log("Could not find insertion point!");
    process.exit(1);
}

// Replace existing cross-sells with actual alternatives
content = content.replace(
    /name: "Sony WH-1000XM4 ANC Kopfhörer"[\s\S]*?alternatives: \[\s*\{ id: "neckpillow"[^}]+\}\s*\]/g,
    match => match.replace('{ id: "neckpillow", name: "Reisekissen für Langstreckenflüge" }', '{ id: "headphones_budget", name: "Budget-Tipp: Soundcore Life Q30" }')
);

content = content.replace(
    /name: "Roborock Q Revo Saug-Wischroboter"[\s\S]*?alternatives: \[\s*\{ id: "airpurifier"[^}]+\}\s*\]/g,
    match => match.replace('{ id: "airpurifier", name: "Luftreiniger für eine rundum saubere Wohnung" }', '{ id: "vacuum_budget", name: "Budget-Alternative: Lefant M210" }')
);

content = content.replace(
    /name: "Cosori XXL Heißluftfritteuse 5,5L"[\s\S]*?alternatives: \[\s*\{ id: "chopper"[^}]+\}\s*\]/g,
    match => match.replace('{ id: "chopper", name: "Gemüseschneider für schnelle Vorbereitung" }', '{ id: "airfryer_ninja", name: "Premium-Alternative: Ninja Foodi Dual Zone" }')
);

content = content.replace(
    /name: "Hyperice Hypervolt 2 Pro Massagepistole"[\s\S]*?alternatives: \[\s*\{ id: "neckmassager"[^}]+\}\s*\]/g,
    match => match.replace('{ id: "neckmassager", name: "Sanftes Nackenmassagegerät" }', '{ id: "massagegun_budget", name: "Budget-Tipp: Renpho Massagepistole" }')
);

fs.writeFileSync('index.js', content, 'utf8');
console.log("Fixed and appended successfully.");
