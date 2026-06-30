const fs = require('fs');

let content = fs.readFileSync('index.js', 'utf8');

const newProducts = [
    {
        id: "coffee_sage",
        name: "Sage Barista Express",
        category: "kitchen",
        priceRange: "500 - 600 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/mh_sage_barista.jpg",
        amazonLink: "https://www.amazon.de/s?k=Sage+Barista+Express&tag=baokmedia21-21",
        review: "Der absolute Einstiegs-König in die Welt der Siebträgermaschinen. Sie hat ein eingebautes Mahlwerk und liefert nach etwas Einarbeitung Café-Qualität. Wer einmal seinen Espresso hiermit gezogen hat, wird nie wieder Kapselkaffee trinken wollen.",
        pros: ["Integriertes Kegelmahlwerk spart Platz und Geld", "Hochwertige Verarbeitung aus gebürstetem Edelstahl", "Milchaufschäumdüse mit richtig Power"],
        cons: ["Benötigt Einarbeitungszeit, bis der Kaffee perfekt läuft", "Etwas lauter Mahlvorgang"],
        testDuration: "2 Jahre",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Die wohl bekannteste Siebträgermaschine im Netz. Zurecht.",
        verdict: "Jeden Cent wert, wenn man den Prozess des Kaffeemachens zelebrieren möchte. Für schnelle Knöpfchen-Drücker ist sie nichts.",
        perfectFor: "Kaffee-Nerds und Home-Baristas.",
        notFor: "Leute, die morgens in 30 Sekunden ihren Kaffee brauchen (hier lieber Vollautomaten).",
        testerQuote: "Ollis Fazit: Seit ich die Sage habe, trinke ich in Cafés seltener Espresso, weil er zuhause einfach besser schmeckt. Der Workflow macht richtig Spaß.",
        hiddenFeature: "Auf der Warmhalteplatte oben lassen sich die Tassen vorwärmen, was für den perfekten Espresso entscheidend ist.",
        alternatives: [
            { id: "coffee_delonghi", name: "Budget-Tipp: De'Longhi Dedica" }
        ]
    },
    {
        id: "coffee_delonghi",
        name: "De'Longhi Dedica Style",
        category: "kitchen",
        priceRange: "140 - 180 €",
        rating: 4.5,
        stars: "★★★★½",
        image: "assets/mh_delonghi_dedica.jpg",
        amazonLink: "https://www.amazon.de/s?k=DeLonghi+Dedica&tag=baokmedia21-21",
        review: "Eine der schmalsten und beliebtesten Siebträgermaschinen auf dem Markt. Ideal für kleine Küchen und kleine Budgets. Sie liefert mit dem passenden Kaffeepulver ordentliche Ergebnisse.",
        pros: ["Extrem platzsparend (nur 15 cm breit)", "Sehr günstiger Einstieg", "Schnell aufgeheizt (ca. 40 Sekunden)"],
        cons: ["Kein Mahlwerk integriert (Mühle muss separat gekauft werden)", "Mitgelieferte Siebe erzeugen künstliche Crema"],
        testDuration: "8 Monate",
        hypeScore: 4,
        realityScore: 4,
        hypeComment: "Der Bestseller für Studenten und kleine Küchen.",
        verdict: "Wer Lust auf Siebträger hat, aber keine 500€ ausgeben will, ist hier goldrichtig. Ein Solider Start, der später durch eine gute Kaffeemühle aufgewertet werden kann.",
        perfectFor: "Studenten und Anfänger.",
        notFor: "Profi-Baristas.",
        testerQuote: "Kathas Fazit: Passt perfekt in meine winzige Küche. Der Espresso ist heiß und cremig. Für den Preis unschlagbar.",
        hiddenFeature: "Man kann die Dampflanze abnehmen und reinigen, was extrem praktisch ist.",
        alternatives: []
    },
    {
        id: "beauty_shark",
        name: "Shark FlexStyle 5-in-1",
        category: "gadgets",
        priceRange: "250 - 300 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/mh_shark_flexstyle.jpg",
        amazonLink: "https://www.amazon.de/s?k=Shark+FlexStyle&tag=baokmedia21-21",
        review: "Der größte Konkurrent des teuren Dysons. Der Shark FlexStyle trocknet, glättet und lockt die Haare mit dem Coanda-Effekt. Die Leistung ist unglaublich stark und die Aufsätze sind extrem durchdacht.",
        pros: ["Kostet oft nur die Hälfte vom Dyson", "Knickbares Design macht ihn zum vollwertigen Föhn", "Extrem starke Saugkraft beim Locken"],
        cons: ["Kann auf höchster Stufe ziemlich laut sein", "Die Aufbewahrungsbox ist riesig"],
        testDuration: "4 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "TikToks absoluter Lieblings-Dupe. Er ist oft ausverkauft.",
        verdict: "Warum über 500€ zahlen, wenn der Shark das gleiche Ergebnis liefert? Ein geniales Tool, das Stylingzeit extrem verkürzt.",
        perfectFor: "Alle, die Blowout-Looks und leichte Locken lieben.",
        notFor: "Sehr kurze Haare (die Lockenaufsätze brauchen eine gewisse Länge).",
        testerQuote: "Mels Fazit: Ich habe meine Lockenstäbe und Glätteisen verschenkt. Der Shark macht alles und meine Haare haben viel weniger Hitze-Schäden.",
        hiddenFeature: "Durch Drehen des Griffs verwandelt er sich von einem Styler in einen echten Föhn mit Diffusor.",
        alternatives: [
            { id: "beauty_babyliss", name: "Budget-Tipp: BaByliss Warmluftbürste" }
        ]
    },
    {
        id: "beauty_babyliss",
        name: "BaByliss Hydro-Fusion",
        category: "gadgets",
        priceRange: "50 - 70 €",
        rating: 4.4,
        stars: "★★★★☆",
        image: "assets/mh_babyliss.jpg",
        amazonLink: "https://www.amazon.de/s?k=BaByliss+Warmluftb%C3%BCrste+Hydro-Fusion&tag=baokmedia21-21",
        review: "Eine klassische, drehende Warmluftbürste mit Ionen-Technologie. Ideal, um Volumen in den Ansatz und Schwung in die Spitzen zu bringen, ohne ein Vermögen auszugeben.",
        pros: ["Sehr gutes Preis-Leistungs-Verhältnis", "Macht die Haare extrem glänzend und weich", "Bürstenkopf rotiert in beide Richtungen"],
        cons: ["Keine richtigen Locken möglich, nur Volumen und Schwung", "Etwas schwerer in der Hand als ein normaler Föhn"],
        testDuration: "6 Monate",
        hypeScore: 3,
        realityScore: 4,
        hypeComment: "Ein solider Amazon-Bestseller.",
        verdict: "Wenn du nur Volumen wie frisch vom Friseur willst und keine Locken, ist das Gerät völlig ausreichend.",
        perfectFor: "Für den perfekten 90er Blowout-Look.",
        notFor: "Menschen mit extrem dicken, krausen Haaren.",
        testerQuote: "Kathas Fazit: Ein super Tool für morgens. Haare leicht anföhnen, Bürste durchziehen, fertig ist das Volumen.",
        hiddenFeature: "Zwei unterschiedliche Ionen-Generatoren wirken Frizz effektiv entgegen.",
        alternatives: []
    },
    {
        id: "fitness_urevo",
        name: "UREVO Walking Pad",
        category: "fitness",
        priceRange: "200 - 280 €",
        rating: 4.6,
        stars: "★★★★½",
        image: "assets/mh_urevo.jpg",
        amazonLink: "https://www.amazon.de/s?k=urevo+walking+pad&tag=baokmedia21-21",
        review: "Ein robustes Schreibtisch-Laufband, das Bewegung in den Home-Office-Alltag bringt. Es ist flach, lässt sich leicht verstauen und erreicht Geschwindigkeiten bis 6 km/h.",
        pros: ["Rollen zum einfachen Verstauen unterm Sofa", "Sehr leiser Motor (stört nicht bei Calls)", "Gute Stoßdämpfung"],
        cons: ["Kein Handlauf (darf nur bis max 6 km/h genutzt werden)", "App-Anbindung fehlt (aber Fernbedienung ist super)"],
        testDuration: "5 Monate",
        hypeScore: 4,
        realityScore: 4,
        hypeComment: "Home-Office-Upgrade Nummer 1 auf YouTube.",
        verdict: "Es verändert das Arbeiten. Statt 8 Stunden zu sitzen, geht man entspannt 5-10 km am Tag, ohne es richtig zu merken.",
        perfectFor: "Home-Office-Arbeiter mit einem höhenverstellbaren Tisch.",
        notFor: "Läufer, die ein echtes Jogging-Laufband suchen.",
        testerQuote: "Mitchs Fazit: Das Laufband war die beste Investition des Jahres. Meine Rückenschmerzen sind komplett weg und die Schritte sammeln sich nebenbei.",
        hiddenFeature: "Es hat ein integriertes Display für Zeit, Kalorien und Schritte direkt vorne am Rand.",
        alternatives: [
            { id: "fitness_citysports", name: "Budget-Tipp: Citysports Laufband" }
        ]
    },
    {
        id: "fitness_citysports",
        name: "Citysports Walking Pad",
        category: "fitness",
        priceRange: "140 - 180 €",
        rating: 4.3,
        stars: "★★★★☆",
        image: "assets/mh_citysports.jpg",
        amazonLink: "https://www.amazon.de/s?k=Citysports+Laufband&tag=baokmedia21-21",
        review: "Das absolute Einsteiger-Modell unter den Walking Pads. Es tut genau das, was es soll: Man kann darauf am Schreibtisch gehen. Die Verarbeitung ist etwas einfacher, aber der Preis ist unschlagbar.",
        pros: ["Sehr günstig", "Integriertes Display und Fernbedienung", "Relativ leicht"],
        cons: ["Ab 4 km/h spürbar lauter als teurere Modelle", "Lauffläche ist etwas schmaler"],
        testDuration: "3 Monate",
        hypeScore: 3,
        realityScore: 3,
        hypeComment: "Auf Amazon extrem beliebt wegen des niedrigen Preises.",
        verdict: "Wer erstmal testen will, ob das Gehen am Schreibtisch überhaupt etwas für ihn ist, kann hier günstig einsteigen.",
        perfectFor: "Einsteiger und Sparfüchse.",
        notFor: "Leute mit großen Schritten oder breitem Stand.",
        testerQuote: "Kathas Fazit: Für den Einstieg völlig okay. Bei meinen Meetings schalte ich es lieber aus, weil es etwas pfeift, aber zum Mails beantworten genial.",
        hiddenFeature: "Verfügt über integrierte Bluetooth-Lautsprecher.",
        alternatives: []
    }
];

let targetStr = '\n];\n\nconst ARTICLES';
let insertionIndex = content.indexOf(targetStr);

if (insertionIndex !== -1) {
    let newProductsStr = ',\n' + newProducts.map(p => JSON.stringify(p, null, 8)).join(',\n');
    content = content.slice(0, insertionIndex) + newProductsStr + content.slice(insertionIndex);
    fs.writeFileSync('index.js', content, 'utf8');
    console.log("Successfully injected the new high-ticket products.");
} else {
    console.log("Could not find insertion point!");
    process.exit(1);
}
