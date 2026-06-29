/* ==========================================================================
   Checkbude24 - Interactive Client Application Logic (Amazon Affiliate)
   ========================================================================== */

// --- Curated Products Dataset ---
const PRODUCTS = [
    {
        id: "retro_marshall",
        name: "Marshall Acton III Bluetooth-Lautsprecher",
        category: "retro",
        priceRange: "200 - 270 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/mh_marshall_acton.jpg",
        amazonLink: "https://www.amazon.de/s?k=Marshall+Acton+III",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=Marshall+Acton+III", price: "ab 229 €", type: "amazon" }
        ],
        review: "Der Inbegriff von Modern Heritage. Sieht aus wie ein legendärer Gitarrenverstärker aus den 70ern, ist aber vollgestopft mit modernster Bluetooth-Technik. Ein echtes Statement-Piece für jedes Wohnzimmer.",
        pros: ["Grandioser Retro-Look mit Leder und Gold", "Überraschend starker und klarer Sound", "Sehr einfache Bedienung"],
        cons: ["Kein integrierter Akku (braucht Stromkabel)"],
        testDuration: "Getestet: 2 Wochen",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Ein Dauerbrenner auf Pinterest und Instagram.",
        verdict: "Perfekt für Musikliebhaber mit Sinn für Ästhetik.",
        perfectFor: "Design-Liebhaber, Rock-Fans und alle, die einen stationären Speaker fürs Wohnzimmer suchen.",
        notFor: "Outdoor-Fans, die einen kleinen Bluetooth-Speaker für den Park oder Strand brauchen.",
        testerQuote: "Ollis Fazit: Ich war anfangs skeptisch wegen des ganzen Instagram-Hypes, aber der warme, bassige Sound in Kombination mit dem echten Leder-Finish hat mich komplett überzeugt. Ein echtes Schmuckstück für jedes Regal.",
        hiddenFeature: "Die Messing-Drehregler auf der Oberseite sehen nicht nur gut aus, sie sind massiv und haben einen unglaublich befriedigenden Widerstand beim Drehen - genau wie bei einem echten Gitarrenverstärker.",
        alternatives: [
            { id: "retro_audiotechnica", name: "Audio-Technica Plattenspieler" },
            { id: "retro_edison", name: "Edison-Style Vintage Lampen" }
        ]
    },
    {
        id: "retro_instax",
        name: "Fujifilm Instax Mini Evo",
        category: "retro",
        priceRange: "160 - 200 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/mh_fujifilm_instax.jpg",
        amazonLink: "https://www.amazon.de/s?k=Fujifilm+Instax+Mini+Evo",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=Fujifilm+Instax+Mini+Evo", price: "ab 179 €", type: "amazon" }
        ],
        review: "Eine geniale Hybridkamera! Sie sieht aus wie eine klassische analoge Kamera, fotografiert aber digital. Das Highlight: Man kann sich auf dem Display das beste Bild aussuchen und erst dann ausdrucken. Nie wieder verschwendeter Film!",
        pros: ["Wunderschönes Retro-Kameradesign", "Digital speichern, selektiv drucken", "Viele lustige Objektiv- und Filmeffekte"],
        cons: ["Druckqualität ist 'Retro' (nicht gestochen scharf)"],
        testDuration: "Getestet: 1 Monat",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Der Liebling aller Influencer für Party-Fotos.",
        verdict: "Die beste Sofortbildkamera auf dem Markt.",
        perfectFor: "Party-Gänger, Hochzeiten und Scrapbook-Fans.",
        notFor: "Profis, die perfekte Bildschärfe und hohe Auflösung erwarten.",
        testerQuote: "Ollis Fazit: Ich liebe den Look der Kamera! Sie sieht nicht nur schick aus, sondern rettet jede Party. Dass man die Fotos vorher auf dem Handy aussuchen kann, spart extrem viel teuren Film.",
        hiddenFeature: "Der Selfie-Modus eignet sich auch extrem gut für Makro-Aufnahmen (z.B. von Blumen oder Essen). Probier es aus!",
        alternatives: [
            { id: "retro_polaroid", name: "Polaroid Now+ Gen 2" },
            { id: "retro_kodak", name: "KODAK Mini 2 Retro" }
        ]
    },
    {
        id: "retro_casio",
        name: "Casio Vintage Collection",
        category: "retro",
        priceRange: "30 - 50 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/mh_casio_vintage.jpg",
        amazonLink: "https://www.amazon.de/s?k=Casio+Vintage+Collection",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=Casio+Vintage+Collection", price: "ab 35 €", type: "amazon" }
        ],
        review: "Der absolute Kult-Klassiker unter den Digitaluhren. Sie sieht heute genauso cool aus wie in den 80ern. Leicht, unverwüstlich und passt zu jedem Outfit.",
        pros: ["Kultiges Retro-Design", "Unschlagbar günstig", "Batterie hält extrem lang"],
        cons: ["Display ist bei starker Sonne manchmal schwer lesbar"],
        testDuration: "Getestet: 1 Jahr",
        hypeScore: 4,
        realityScore: 5,
        hypeComment: "Vintage-Look, der nie uncool wird.",
        verdict: "Ein stylisches Accessoire für wirklich jeden.",
        perfectFor: "Minimalisten, Streetwear-Fans und alle, die keine Apple Watch mehr sehen können.",
        notFor: "Leute, die Fitness-Tracking oder smarte Benachrichtigungen brauchen.",
        testerQuote: "Ollis Fazit: Meine absolute Go-To Uhr für den Alltag. Sie wiegt fast nichts, man muss sie nie aufladen und sie verleiht jedem Outfit sofort diesen coolen 80er-Jahre-Vibe.",
        hiddenFeature: "Das Metall-Armband lässt sich in 10 Sekunden komplett ohne Werkzeug (nur mit einem kleinen Schraubenzieher oder einer Haarklammer) stufenlos verstellen.",
        alternatives: [
            { id: "smartwatch_dummy", name: "Moderne Smartwatch" }
        ]
    },
    {
        id: "retro_smeg",
        name: "Smeg 50's Retro Style Toaster",
        category: "retro",
        priceRange: "140 - 180 €",
        rating: 4.6,
        stars: "★★★★★",
        image: "assets/mh_smeg_toaster.jpg",
        amazonLink: "https://www.amazon.de/s?k=Smeg+Toaster",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=Smeg+Toaster", price: "ab 149 €", type: "amazon" }
        ],
        review: "Dieser Toaster ist ein echtes Statussymbol für die Küche. Mit seinem unverkennbaren 50er-Jahre-Design in wunderschönen Pastellfarben wertet er jede Küchenzeile auf.",
        pros: ["Unverwechselbares Design-Statement", "Sehr gute und gleichmäßige Röstung", "Hochwertige Verarbeitung"],
        cons: ["Für einen Toaster sehr teuer", "Nimmt recht viel Platz weg"],
        testDuration: "Getestet: 3 Monate",
        hypeScore: 5,
        realityScore: 4,
        hypeComment: "Must-Have für ästhetische Küchen.",
        verdict: "Teuer, aber optisch jeden Cent wert.",
        perfectFor: "Design-Liebhaber mit offenen Küchen, in denen Geräte gesehen werden wollen.",
        notFor: "Schnäppchenjäger, die einfach nur ihr Toastbrot warm machen wollen.",
        testerQuote: "Ollis Fazit: Ja, der Preis ist hoch für einen Toaster. Aber er ist wirklich jeden Morgen ein Highlight in meiner Küche. Außerdem bräunt er überraschend gleichmäßig!",
        hiddenFeature: "Die Bagel-Funktion (Knopf mit dem Bagel-Symbol) röstet das Brötchen nur auf einer Seite an – perfekt für richtig gute, fluffige Burger-Buns!",
        alternatives: [
            { id: "retro_bialetti", name: "Bialetti Espressokocher" }
        ]
    },
    {
        id: "retro_audiotechnica",
        name: "Audio-Technica LP120XUSB",
        category: "retro",
        priceRange: "280 - 350 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/mh_audiotechnica.jpg",
        amazonLink: "https://www.amazon.de/s?k=Audio-Technica+LP120XUSB",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=Audio-Technica+LP120XUSB", price: "ab 299 €", type: "amazon" }
        ],
        review: "Das Design erinnert stark an die legendären Technics 1210er DJ-Plattenspieler. Dieser Player holt das Vinyl-Erlebnis zurück ins Wohnzimmer und bietet sogar einen USB-Anschluss, um alte Schätze zu digitalisieren.",
        pros: ["Klassisches, schweres DJ-Design", "Sehr guter Klang dank starkem Tonabnehmer", "Integrierter Vorverstärker & USB"],
        cons: ["Voll manuell (Tonarm muss selbst aufgelegt werden)"],
        testDuration: "Getestet: 6 Monate",
        hypeScore: 4,
        realityScore: 5,
        hypeComment: "Vinyl ist zurück und dieser Player ist die beste Wahl.",
        verdict: "Der perfekte Plattenspieler für ambitionierte Einsteiger.",
        perfectFor: "Vinyl-Einsteiger und Musikliebhaber, die sich bewusst Zeit für ein Album nehmen wollen.",
        notFor: "Leute, die lieber alles bequem über Spotify steuern und keine Platten sammeln möchten.",
        testerQuote: "Ollis Fazit: Das Gewicht und die Verarbeitung fühlen sich extrem premium an. Wer in die Vinyl-Welt einsteigen will, ohne gleich 1000 Euro auszugeben, kommt an diesem Audio-Technica nicht vorbei.",
        hiddenFeature: "Der eingebaute Vorverstärker lässt sich auf der Rückseite per Schalter ('Phono/Line') abschalten. Das ist genial, falls man später mal auf ein teureres, externes HiFi-System upgraden möchte.",
        alternatives: [
            { id: "retro_marshall", name: "Marshall Acton III" }
        ]
    },
    {
        id: "retro_bialetti",
        name: "Bialetti Moka Express",
        category: "retro",
        priceRange: "20 - 40 €",
        rating: 4.9,
        stars: "★★★★★",
        image: "assets/mh_bialetti.jpg",
        amazonLink: "https://www.amazon.de/s?k=Bialetti+Moka+Express",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=Bialetti+Moka+Express", price: "ab 25 €", type: "amazon" }
        ],
        review: "Die Ikone des italienischen Kaffees. Das Design dieses Espressokochers hat sich seit Jahrzehnten nicht verändert – aus gutem Grund. Es zelebriert die Kaffeezubereitung als Ritual.",
        pros: ["Der Design-Klassiker schlechthin", "Macht starken, leckeren Moka-Kaffee", "Komplett plastikfrei und nachhaltig"],
        cons: ["Nicht für Induktionsherde geeignet (außer mit Adapterplatte)"],
        testDuration: "Getestet: Jahre!",
        hypeScore: 3,
        realityScore: 5,
        hypeComment: "Slow Coffee ist der Gegenentwurf zum Kapsel-Wahnsinn.",
        verdict: "Ein Muss für jeden Haushalt und Kaffee-Liebhaber.",
        perfectFor: "Kaffee-Puristen, Studenten und Liebhaber der italienischen Kultur.",
        notFor: "Leute, die morgens per Knopfdruck in 5 Sekunden ihren Kaffee wollen.",
        testerQuote: "Ollis Fazit: Ich benutze meine Bialetti jeden Morgen. Es ist ein Ritual, das mich runterbringt. Der Kaffee schmeckt einfach ehrlicher und kräftiger als aus jeder Maschine.",
        hiddenFeature: "Niemals mit Spüli waschen! Die Kanne baut über die Zeit eine dünne Schicht an Kaffeeölen (Patina) auf, die das Aluminium versiegelt und den Kaffee erst richtig gut macht.",
        alternatives: [
            { id: "retro_smeg", name: "Smeg Toaster (fürs Frühstück)" }
        ]
    },
    {
        id: "retro_kludge",
        name: "RK ROYAL KLUDGE R98 Pro",
        category: "retro",
        priceRange: "70 - 100 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/mh_r98_keyboard.jpg",
        amazonLink: "https://www.amazon.de/s?k=RK+ROYAL+KLUDGE+R98+Pro",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=RK+ROYAL+KLUDGE+R98+Pro", price: "ab 89 €", type: "amazon" }
        ],
        review: "Eine mechanische Tastatur, die das nostalgische Tippgefühl alter Computer-Tastaturen mit moderner Technik und RGB-Beleuchtung verbindet. Der Sound beim Tippen ('Thock') ist unglaublich befriedigend.",
        pros: ["Geniales Tippgefühl und Sound", "Coole Retro-Farbkombination", "Hot-swappable (Switches austauschbar)"],
        cons: ["Relativ hoch, eine Handballenauflage wird empfohlen"],
        testDuration: "Getestet: 1 Monat",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Mechanische Custom-Keyboards sind ein riesiger Tech-Trend.",
        verdict: "Macht Home-Office und Gaming sofort stylischer.",
        perfectFor: "Home-Office Worker und Gamer, die das klassische Tipp-Gefühl und 'Thock'-Sound lieben.",
        notFor: "Leute in extrem ruhigen Großraumbüros (die Tastatur ist hörbar!).",
        testerQuote: "Ollis Fazit: Das Tippen auf dieser Tastatur macht fast schon süchtig. Die RGB-Beleuchtung sieht im Dunkeln fantastisch aus, und das Retro-Farbschema der Keycaps ist genau mein Ding.",
        hiddenFeature: "Die Tastatur ist 'Hot-Swappable'. Das bedeutet, man kann kaputte Schalter in Sekunden selbst mit dem mitgelieferten Tool herausziehen und austauschen, ohne löten zu müssen.",
        alternatives: [
            { id: "retro_edison", name: "Vintage Desk Lamp" }
        ]
    },
    {
        id: "retro_edison",
        name: "Edison-Style Vintage Glühbirnen",
        category: "retro",
        priceRange: "15 - 30 €",
        rating: 4.6,
        stars: "★★★★★",
        image: "assets/mh_edison_bulbs.jpg",
        amazonLink: "https://www.amazon.de/s?k=Vintage+Glühbirne+LED",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=Vintage+Glühbirne+LED", price: "ab 19 €", type: "amazon" }
        ],
        review: "Der unverzichtbare Retro-Look für offene Leuchten. Sie sehen aus wie Glühbirnen aus dem 19. Jahrhundert, nutzen im Inneren aber moderne, stromsparende LEDs.",
        pros: ["Wunderschönes, warmes Licht", "Tolle Optik auch im ausgeschalteten Zustand", "Dimmbar (modellabhängig)"],
        cons: ["Als Hauptlichtquelle oft zu dunkel"],
        testDuration: "Getestet: 4 Monate",
        hypeScore: 4,
        realityScore: 5,
        hypeComment: "Die Standard-Beleuchtung in jedem hippen Café.",
        verdict: "Perfekt, um Gemütlichkeit ins Zimmer zu bringen.",
        perfectFor: "Gemütliche Wohnzimmer, offene Lampenfassungen und Industrial-Design Fans.",
        notFor: "Als helle Arbeitsbeleuchtung am Schreibtisch.",
        testerQuote: "Ollis Fazit: Ich habe diese Birnen über meinem Esstisch hängen. Sie blenden nicht und geben dem Raum sofort diese warme, gemütliche Café-Atmosphäre.",
        hiddenFeature: "Wenn man einen günstigen Dimmer-Stecker (für die Steckdose) dazwischen schaltet, kann man die Leuchtfäden extrem weit runterdimmen, bis sie nur noch wie tiefrotes Bernstein glühen.",
        alternatives: [
            { id: "retro_marshall", name: "Marshall Acton III" }
        ]
    },
    {
        id: "retro_polaroid",
        name: "Polaroid Now+ Gen 2",
        category: "retro",
        priceRange: "120 - 150 €",
        rating: 4.5,
        stars: "★★★★☆",
        image: "assets/mh_polaroid_now.jpg",
        amazonLink: "https://www.amazon.de/s?k=Polaroid+Now+Gen+2",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=Polaroid+Now+Gen+2", price: "ab 129 €", type: "amazon" }
        ],
        review: "Das unverwechselbare Polaroid-Design der 70er, vollgepackt mit smarten Features. Über die Bluetooth-App kann man Doppelbelichtungen oder Light-Painting steuern.",
        pros: ["Der echte Retro-Polaroid Look", "Lustige kreative Features via App", "Mitgelieferte Farbfilter"],
        cons: ["Die Original Polaroid-Filme sind recht teuer"],
        testDuration: "Getestet: 3 Wochen",
        hypeScore: 5,
        realityScore: 4,
        hypeComment: "Retro-Fotografie boomt auf TikTok.",
        verdict: "Ein tolles Party-Gadget für echte Nostalgiker.",
        perfectFor: "Nostalgiker und Fans des klassischen, großen quadratischen Polaroid-Looks.",
        notFor: "Leute, die möglichst günstig viele Fotos drucken wollen (Filme sind teuer).",
        testerQuote: "Ollis Fazit: Die Farben sind unberechenbar und genau das macht den Charme aus. Die Bilder sehen aus, als kämen sie direkt aus den 70ern. Die Bluetooth-App ist eine geniale Ergänzung für Light-Painting.",
        hiddenFeature: "Geheimtipp der Profis: Filme im Kühlschrank lagern! Das hält die Chemikalien frisch. Beim Entwickeln das Foto für 15 Minuten in die dunkle Hosentasche stecken (Wärme sorgt für sattere Farben).",
        alternatives: [
            { id: "retro_instax", name: "Fujifilm Instax Mini" },
            { id: "retro_kodak", name: "KODAK Mini 2 Retro" }
        ]
    },
    {
        id: "retro_kodak",
        name: "KODAK Mini 2 Retro Fotodrucker",
        category: "retro",
        priceRange: "90 - 120 €",
        rating: 4.6,
        stars: "★★★★★",
        image: "assets/mh_kodak_printer.jpg",
        amazonLink: "https://www.amazon.de/s?k=KODAK+Mini+2+Retro",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=KODAK+Mini+2+Retro", price: "ab 99 €", type: "amazon" }
        ],
        review: "Dieser kleine Fotodrucker im genialen Retro-Kamera-Design druckt Handyfotos direkt über Bluetooth aus. Die patentierte 4-Pass-Drucktechnologie liefert laminierte Fotos, die sofort wischfest sind.",
        pros: ["Kompaktes Vintage-Design", "Sehr gute Druckqualität (laminiert)", "Günstigere Druckkosten als Instax"],
        cons: ["Das Drucken dauert pro Bild ca. 50 Sekunden"],
        testDuration: "Getestet: 1 Monat",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Der perfekte Begleiter für Scrapbooking und Bullet Journals.",
        verdict: "Praktisch, stylisch und eine geniale Geschenkidee.",
        perfectFor: "Handy-Fotografen, die ihre Lieblings-Schnappschüsse direkt am Kühlschrank haben wollen.",
        notFor: "Leute, die große Poster-Ausdrucke suchen.",
        testerQuote: "Ollis Fazit: Ich liebe diesen kleinen Drucker! Es ist faszinierend zuzusehen, wie er das Papier viermal einzieht und dabei jede Farbschicht einzeln aufträgt. Die Qualität ist für die Größe überragend.",
        hiddenFeature: "Das verwendete 4-Pass-Druckverfahren überzieht die Fotos im letzten Durchgang mit einer klaren Schutzschicht. Dadurch sind die Bilder komplett wasserfest, wischfest und bleichen nicht aus!",
        alternatives: [
            { id: "retro_instax", name: "Fujifilm Instax Mini" }
        ]
    },
    {
        id: "lego_botanical",
        name: "LEGO Icons Wildblumenstrauß",
        category: "gadgets",
        priceRange: "40 - 50 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/lego_botanical_product.jpg",
        amazonLink: "https://www.amazon.de/s?k=lego+wildblumenstrauss&tag=baokmedia21-21",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=lego+wildblumenstrauss&tag=baokmedia21-21", price: "ab 43 €", type: "amazon" },
            { name: "Thalia", url: "#", price: "ab 49 €", type: "mediamarkt" },
            { name: "LEGO", url: "#", price: "ab 59 €", type: "otto" }
        ],
        review: "Ein absoluter Hit auf Instagram und Pinterest. Der LEGO Wildblumenstrauß bietet nicht nur entspannenden Bauspaß, sondern ist danach auch eine extrem hochwertige und langlebige Dekoration für das Wohnzimmer oder Home Office.",
        pros: ["Tolle Entspannungs-Aktivität für Erwachsene", "Sieht extrem hochwertig und farbenfroh aus", "Pflanzen, die niemals verwelken"],
        cons: ["Benötigt eine echte Vase zur Präsentation (nicht enthalten)", "Muss ab und zu vorsichtig abgestaubt werden"],
        testDuration: "Getestet: 1 Monat",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Ein echter Dauerbrenner auf Social Media. Total berechtigter Hype!",
        verdict: "Das perfekte Geschenk für Erwachsene oder als stylische Home-Office Deko."
    },
    {
        id: "airfryer",
        name: "Cosori XXL Heißluftfritteuse 5,5L",
        category: "kitchen",
        priceRange: "89 - 119 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/airfryer.png",
        amazonLink: "https://www.amazon.de/s?k=COSORI+Heissluftfritteuse+5.5L&tag=baokmedia21-21",
        shops: [
            { name: "Amazon", url: "https://www.amazon.de/s?k=COSORI+Heissluftfritteuse+5.5L&tag=baokmedia21-21", price: "ab 99 €", type: "amazon" },
            { name: "MediaMarkt", url: "#", price: "ab 109 €", type: "mediamarkt" },
            { name: "OTTO", url: "#", price: "ab 115 €", type: "otto" }
        ],
        review: "Der absolute Spitzenreiter unter den Heißluftfritteusen auf Amazon. Mit ihrem großzügigen 5,5-Liter-Garkorb eignet sie sich ideal für Familien. Sie erzielt extrem knusprige Ergebnisse bei bis zu 85% weniger Fett im Vergleich zu klassischen Fritteusen. Das Touch-Display bietet 11 voreingestellte Programme. Die Reinigung ist dank der antihaftbeschichteten, spülmaschinenfesten Teile im Handumdrehen erledigt.",
        pros: ["Extrem knusprige Ergebnisse ohne zusätzliches Öl", "Der Korb lässt sich super einfach in der Spülmaschine reinigen", "Großes Volumen (5,5L) reicht locker für bis zu 4-5 Personen"],
        cons: ["Der Signalton am Ende ist extrem laut und lässt sich nicht leiser stellen", "Nimmt einiges an Platz auf der Arbeitsplatte weg"],
        testDuration: "6 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Auf TikTok und YouTube gefeiert, und das völlig zurecht. Die Zeitersparnis ist enorm.",
        verdict: "Wer Platz in der Küche hat und knusprige Pommes oder Gemüse ohne Fettgeruch möchte: Ein absoluter Kauftipp. Für sehr kleine Küchen aber fast schon zu wuchtig.",
        perfectFor: "Familien, Meal-Prep-Fans und alle, die Pommes ohne schlechtes Gewissen essen wollen.",
        notFor: "Menschen mit extrem kleinen Single-Küchen ohne freie Arbeitsfläche.",
        testerQuote: "Mitchs Fazit: Ich benutze meinen Backofen kaum noch. Lachs, Gemüse, Pommes – alles wird in der Cosori in der halben Zeit perfekt knusprig. Die 5,5 Liter sind ideal, um zwei Portionen auf einmal zu machen.",
        hiddenFeature: "Man kann sogar Muffins und kleine Kuchen darin backen! Die Heißluft-Zirkulation funktioniert wie bei einem professionellen Konvektomat.",
        alternatives: [
            { id: "chopper", name: "Gemüseschneider für schnelle Vorbereitung" }
        ]
    },
    {
        id: "diffuser",
        name: "Asakuki 500ml Ultraschall Diffuser",
        category: "living",
        priceRange: "25 - 35 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/diffuser.png",
        amazonLink: "https://www.amazon.de/s?k=ASAKUKI+500ml+Aroma+Diffuser&tag=baokmedia21-21",
        review: "Ein absoluter Pinterest-Liebling für ein gemütliches Zuhause. Dieser 5-in-1 Ultraschall-Aromadiffusor verfügt über einen großen, leicht zu reinigenden 500-ml-Wassertank, 7 verschiedene LED-Lichtfarben und einen Sicherheits-Autoschalter, der das Überhitzen bei leerem Tank verhindert. Perfekt geeignet, um Raumluft zu befeuchten und mit ätherischen Ölen zu beduften.",
        pros: ["Hält mit einer Füllung problemlos die ganze Nacht durch (bis zu 16 Std.)", "Sehr leiser Plätschern, das beim Einschlafen überhaupt nicht stört", "Schöne, warme LED-Farben, die sich dimmen lassen"],
        cons: ["Besteht komplett aus Kunststoff, auch wenn der Sockel nach Holz aussieht", "Das Netzkabel ist mit knapp 1,5m etwas kurz geraten"],
        testDuration: "3 Monate",
        hypeScore: 5,
        realityScore: 4,
        hypeComment: "Ein fester Bestandteil jeder Pinterest- und Instagram-Ästhetik. Macht super gemütliches Licht.",
        verdict: "Ein günstiges Wohlfühl-Highlight für Schlaf- oder Wohnzimmer. Wer ein echtes Holzgehäuse sucht, wird enttäuscht sein, aber die Licht- und Duftfunktion überzeugt auf ganzer Linie.",
        perfectFor: "Alle, die ihr Zuhause in eine kleine Wellness-Oase verwandeln wollen.",
        notFor: "Leute, die eine aktive Luftbefeuchtung für große Räume suchen (dafür ist der Tank zu klein).",
        testerQuote: "Kathas Fazit: Ich mache ihn jeden Abend an. Das sanfte Licht und ein bisschen Lavendelöl helfen mir extrem beim Runterkommen nach einem langen Arbeitstag. Und er ist wirklich flüsterleise!",
        hiddenFeature: "Man kann den Diffuser auch ganz ohne Wasser nur als wunderschönes Stimmungslicht/Nachttischlampe verwenden.",
        alternatives: [
            { id: "airpurifier", name: "Luftreiniger (für echte Luftverbesserung)" }
        ]
    },
    {
        id: "headphones",
        name: "Sony WH-1000XM4 ANC Kopfhörer",
        category: "gadgets",
        priceRange: "199 - 249 €",
        rating: 4.9,
        stars: "★★★★★",
        image: "assets/headphones.png",
        amazonLink: "https://www.amazon.de/s?k=Sony+WH-1000XM4&tag=baokmedia21-21",
        review: "Die ungeschlagene Referenz im Bereich Active Noise Cancelling (ANC). Diese Kopfhörer blenden Außengeräusche in Flugzeug, Bahn oder Büro fast vollständig aus. Der Sound ist extrem ausgewogen und warm. Features wie 'Speak-to-Chat' (schaltet die Musik stumm, sobald man spricht) und eine Akkulaufzeit von bis zu 30 Stunden machen sie zum perfekten Reise- und Arbeits-Gadget.",
        pros: ["Das beste Noise Cancelling auf dem Markt – blendet Stimmen und Rauschen fast komplett aus", "Super bequem, drückt auch nach stundenlangem Tragen nicht am Kopf", "Lässt sich platzsparend in das mitgelieferte Case falten"],
        cons: ["Die Touch-Bedienung an der Ohrmuschel reagiert im Winter mit Handschuhen kaum", "Nicht offiziell wassergeschützt – Vorsicht bei starkem Regen"],
        testDuration: "12 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Der Liebling aller Tech-Youtuber und Business-Reisenden. Hält dem Hype absolut stand.",
        verdict: "Die ungeschlagene Referenz für laute Büros oder Bahnfahrten. Der Klang ist warm und das ANC blockt fast alles ab. Der Nachfolger XM5 ist zwar neuer, aber der XM4 lässt sich besser zusammenklappen.",
        perfectFor: "Pendler, Vielreisende und alle, die im Großraumbüro ihre Ruhe brauchen.",
        notFor: "Fürs Joggen oder intensive Workouts (dafür sind In-Ears besser geeignet).",
        testerQuote: "Mitchs Fazit: Ich setze sie auf, schalte das ANC an und die Welt ist stumm. Es ist magisch. Egal ob schreiende Kinder im Zug oder telefonierende Kollegen – ich höre nichts mehr außer meiner Playlist.",
        hiddenFeature: "Wenn du kurz mit jemandem sprechen musst, lege einfach deine flache Hand auf die rechte Ohrmuschel. Die Musik wird extrem leise und die Mikrofone verstärken die Stimme deines Gegenübers.",
        alternatives: [
            { id: "neckpillow", name: "Reisekissen für Langstreckenflüge" }
        ]
    },
    {
        id: "waterbottle",
        name: "720°DGREE Edelstahl Trinkflasche",
        category: "fitness",
        priceRange: "22 - 29 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/waterbottle.png",
        amazonLink: "https://www.amazon.de/s?k=720+degree+trinkflasche&tag=baokmedia21-21",
        review: "Die doppelwandige Vakuum-Isolierung dieser robusten Edelstahlflasche hält Getränke bis zu 24 Stunden eiskalt und 12 Stunden heiß. Sie ist zu 100% auslaufsicher, geschmacksneutral und frei von BPA. Die matte Pulverbeschichtung verleiht der Flasche eine edle Haptik und sorgt für einen sicheren Griff beim Sport oder Outdoor-Aktivitäten.",
        pros: ["Hervorragende Isolierung – kaltes Wasser bleibt auch im heißen Auto stundenlang kühl", "Sehr griffige, matte Pulverbeschichtung, die keine Kratzer bekommt", "Absolut auslaufsicher, selbst bei kohlensäurehaltigen Getränken"],
        cons: ["Der Flaschenhals ist recht eng – eine Reinigungsbürste ist Pflicht", "Durch die Doppelwand spürbar schwerer als eine Plastikflasche"],
        testDuration: "6 Monate",
        hypeScore: 4,
        realityScore: 5,
        hypeComment: "In Fitness-Studios und Outdoor-Gruppen extrem beliebt wegen des cleanen Designs.",
        verdict: "Eine der besten Thermosflaschen auf dem Markt. Hält Getränke wirklich den ganzen Tag eiskalt. Nur wer sie mit Säften befüllt, muss beim Reinigen des engen Halses etwas Geduld haben.",
        perfectFor: "Sportler, Büro-Arbeiter und alle, die ihr Wasser im Sommer eiskalt mögen.",
        notFor: "Leute, die ultraleichtes Gepäck für extreme Wanderungen packen.",
        testerQuote: "Mels Fazit: Ich habe die Flasche im Hochsommer bei 35 Grad im Auto vergessen. Als ich wiederkam, war das Wasser darin immer noch so eisig, dass die Flasche von außen beschlagen ist. Wahnsinn!",
        hiddenFeature: "Die Flasche ist so gut isoliert, dass man auch heißen Tee für den Winterspaziergang einfüllen kann – er bleibt über 12 Stunden dampfend heiß.",
        alternatives: [
            { id: "massagegun", name: "Massagepistole zur Regeneration nach dem Sport" }
        ]
    },
    {
        id: "vacuum",
        name: "Roborock Q Revo Saug-Wischroboter",
        category: "living",
        priceRange: "649 - 799 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/vacuum.png",
        amazonLink: "https://www.amazon.de/s?k=Roborock+Q+Revo&tag=baokmedia21-21",
        review: "Ein absolutes High-End-Haushaltsgerät, das das Wischen und Saugen vollkommen automatisiert. Die All-in-One-Dockingstation entleert den Staubbehälter, wäscht die rotierenden Mopps mit heißem Wasser und trocknet sie anschließend mit Heißluft. Mit 5500 Pa Saugleistung und modernster LiDAR-Navigation umfährt er Hindernisse präzise und reinigt porentief.",
        pros: ["Die rotierenden Wischmopps entfernen auch getrocknete Kaffeeflecken mühelos", "Wäscht und trocknet seine Mopps vollautomatisch mit Heißluft gegen Gerüche", "Geniale App mit präziser Raumkarte und No-Go-Zonen"],
        cons: ["Die Reinigungsstation ist sehr groß und braucht Platz an einer Wand", "Die Anschaffungskosten sind hoch, lohnen sich aber für Haustierbesitzer"],
        testDuration: "6 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Wird als eierlegende Wollmilchsau des Haushalts angepriesen. Der Hype ist absolut real.",
        verdict: "Eine der besten Investitionen für ein sauberes Zuhause. Die All-in-One-Station nimmt einem fast alle Arbeit ab. Man sollte vor dem Kauf nur prüfen, ob man genug Platz für die wuchtige Station hat.",
        perfectFor: "Haustierbesitzer und Leute, die das Saugen und Wischen komplett auslagern wollen.",
        notFor: "Wohnungen mit extrem vielen hohen Türschwellen (über 2cm).",
        testerQuote: "Kathas Fazit: Ich habe meinen normalen Staubsauger seit Monaten nicht mehr angefasst. Die Wischfunktion mit den rotierenden Pads schrubbt sogar angetrocknete Flecken weg. Wahnsinn!",
        hiddenFeature: "In der App kann man die Feuchtigkeit der Wischpads pro Raum einstellen – z.B. feuchter für Fliesen im Bad und sehr trocken für empfindliches Parkett.",
        alternatives: [
            { id: "airpurifier", name: "Luftreiniger für eine rundum saubere Wohnung" }
        ]
    },
    {
        id: "coffeemaker",
        name: "Philips LatteGo 5400 Kaffeevollautomat",
        category: "kitchen",
        priceRange: "549 - 629 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/coffeemaker.png",
        amazonLink: "https://www.amazon.de/s?k=Philips+LatteGo+5400&tag=baokmedia21-21",
        review: "Der Traum für Kaffeeliebhaber: Dieser Vollautomat bereitet 12 Kaffeespezialitäten auf Knopfdruck frisch zu. Das Highlight ist das LatteGo-Milchsystem, welches vollkommen ohne Schläuche auskommt und in weniger als 15 Sekunden unter fließendem Wasser gereinigt werden kann. Über das intuitive Touch-Display lassen sich Kaffeestärke und Menge im Handumdrehen anpassen.",
        pros: ["Das einfachste Milchsystem überhaupt – in 15 Sekunden unter fließendem Wasser sauber", "Intuitive Bedienung über das Touch-Display mit 12 Kaffeespezialitäten", "Speichert eigene Profile für Kaffeestärke und Kaffeemenge"],
        cons: ["Die Abtropfschale füllt sich extrem schnell, da die Maschine oft spült", "Das Keramikmahlwerk ist beim Bohnenmahlen recht laut"],
        testDuration: "6 Monate",
        hypeScore: 4,
        realityScore: 4,
        hypeComment: "Wird vor allem für das schlauchlose Milchsystem gelobt, das extrem leicht zu reinigen ist.",
        verdict: "Perfekt für alle, die unkompliziert Cappuccino oder Latte Macchiato trinken wollen. Das Milchsystem ist genial einfach zu reinigen. Kaffeepuristen vermissen eventuell die Einstelltiefe einer Siebträgermaschine.",
        perfectFor: "Familien und Latte-Macchiato-Fans, die eine schnelle, leichte Reinigung schätzen.",
        notFor: "Espresso-Nerds, die jeden Brühparameter manuell einstellen wollen.",
        testerQuote: "Kathas Fazit: Ich hatte noch nie eine Maschine, die so wenig nervt. Der LatteGo-Becher hat keine Schläuche, man spült ihn nach dem Cappuccino einfach in drei Sekunden unter dem Wasserhahn ab.",
        hiddenFeature: "Die Maschine hat eine Extra-Shot-Funktion für alle Milchgetränke, wenn man morgens mal etwas mehr Koffein braucht, ohne dass der Kaffee wässrig wird.",
        alternatives: [
            { id: "retro_bialetti", name: "Bialetti Moka (für Puristen)" }
        ]
    },
    {
        id: "chargingstation",
        name: "Anker 3-in-1 MagSafe Ladestation",
        category: "gadgets",
        priceRange: "119 - 149 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/chargingstation.png",
        amazonLink: "https://www.amazon.de/s?k=Anker+3+in+1+MagSafe&tag=baokmedia21-21",
        review: "Das ultimative Upgrade für deinen Nachttisch oder Schreibtisch. Diese ultrakompakte Ladestation lädt dein iPhone mit vollen 15W per MagSafe, deine Apple Watch (inkl. Schnellladefunktion) und deine AirPods gleichzeitig kabellos auf. Dank des cleveren Klapp-Designs lässt sie sich auf die Größe eines Kartenspiels zusammenfalten – perfekt für Reisen.",
        pros: ["Offizielle MagSafe-Zertifizierung für schnelles Laden mit 15 Watt", "Lässt sich extrem kompakt auf Kartenspiel-Größe für Reisen zusammenfalten", "Lädt iPhone, Apple Watch und AirPods gleichzeitig über nur ein Kabel"],
        cons: ["Der Preis ist im Vergleich zu No-Name-Stationen sehr hoch", "Nur für MagSafe-kompatible iPhones (ab iPhone 12) optimal nutzbar"],
        testDuration: "3 Monate",
        hypeScore: 4,
        realityScore: 5,
        hypeComment: "Sehr beliebt auf Tech-Blogs und Instagram-Schreibtischen wegen des minimalistischen Looks.",
        verdict: "Die perfekte Ladestation für Apple-Nutzer. Sie räumt den Nachttisch auf und macht Schluss mit dem Kabelsalat. Teuer, aber die Verarbeitungsqualität aus Aluminium rechtfertigt den Preis.",
        perfectFor: "Apple-Nutzer mit iPhone, Watch und AirPods, die Ordnung auf dem Nachttisch wollen.",
        notFor: "Android-Nutzer (die MagSafe-Magneten greifen hier nicht).",
        testerQuote: "Mitchs Fazit: Ich hasse Kabelgewirr auf dem Nachttisch. Dieser kleine Würfel sieht so clean aus und lädt alle drei Geräte gleichzeitig und schnell auf. Auch super zum Verreisen!",
        hiddenFeature: "Der Apple-Watch-Ladepuck lässt sich einklappen, wenn man nur das Handy lädt – so wird der Würfel noch minimalistischer.",
        alternatives: [
            { id: "powerbank", name: "Kompakte Powerbank für unterwegs" }
        ]
    },
    {
        id: "massagegun",
        name: "Hyperice Hypervolt 2 Pro Massagepistole",
        category: "fitness",
        priceRange: "279 - 329 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/massagegun.png",
        amazonLink: "https://www.amazon.de/s?k=Hyperice+Hypervolt+2+Pro&tag=baokmedia21-21",
        review: "Die Wahl der Profi-Athleten für Regeneration und Muskeltherapie. Die Hypervolt 2 Pro verfügt über einen kraftvollen 90W-Motor mit 5 Geschwindigkeitsstufen. Sie dringt tief ins Muskelgewebe ein, um Verspannungen zu lösen und die Durchblutung zu fördern. Per Bluetooth verbindet sie sich mit der Hyperice-App für geführte Warm-up- und Recovery-Routinen.",
        pros: ["Enorme Tiefenwirkung durch den kraftvollen 90-Watt-Motor", "Die Hyperice-App steuert die Frequenz passend zu Video-Routinen", "Sehr leise im Betrieb trotz der enormen Durchschlagskraft"],
        cons: ["Sehr hoher Preis für ein Fitness-Gadget", "Wiegt ca. 1,1 kg und wird bei längerer Nutzung an den Schultern schwer"],
        testDuration: "9 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Wird von Profisportlern und Physios auf Social Media massiv beworben. Liefert ab.",
        verdict: "Ein professionelles Tool für Sportler. Die Power ist enorm und hilft wirklich bei Muskelkater. Für Gelegenheitsnutzer tut es wahrscheinlich auch ein halb so teures Modell.",
        perfectFor: "Leistungssportler, Fitness-Gänger und Leute mit starken Verspannungen im Nacken.",
        notFor: "Personen, die sehr schmerzempfindlich sind (das Gerät hat ordentlich Wumms).",
        testerQuote: "Mels Fazit: Nach dem Leg-Day ist das Teil mein Lebensretter. Es dringt so tief ins Gewebe ein, dass der Muskelkater am nächsten Tag nur halb so schlimm ist.",
        hiddenFeature: "Es gibt einen eingebauten Drucksensor (LED-Ring), der anzeigt, wie viel Kraft man gerade auf den Muskel ausübt – sehr hilfreich für eine gleichmäßige Massage.",
        alternatives: [
            { id: "neckmassager", name: "Sanftes Nackenmassagegerät" }
        ]
    },
    {
        id: "chopper",
        name: "Fullstar Gemüseschneider 12-in-1",
        category: "kitchen",
        priceRange: "24 - 34 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/chopper.png",
        amazonLink: "https://www.amazon.de/s?k=Fullstar+Gemueseschneider&tag=baokmedia21-21",
        review: "Ein absoluter TikTok-Kult! Dieser Gemüseschneider spart enorm viel Zeit beim Kochen und Meal-Prep. Mit seinen austauschbaren Klingen schneidet, würfelt und raspelt er Zwiebeln, Tomaten, Gurken und Käse in Sekundenschnelle direkt in den praktischen Auffangbehälter. Das clevere Design schützt die Finger und lässt sich einfach reinigen.",
        pros: ["Schneidet Zwiebeln und Gemüse in Sekunden in gleichmäßige Würfel", "Praktischer Auffangbehälter sorgt dafür, dass nichts daneben geht", "Viele nützliche Einsätze für Scheiben, Streifen und Spiralen im Set"],
        cons: ["Die Klingen sind messerscharf – man schneidet sich leicht beim Abspülen", "Der Kunststoffdeckel kann sich bei farbintensivem Gemüse (z.B. Karotten) verfärben"],
        testDuration: "3 Monate",
        hypeScore: 5,
        realityScore: 4,
        hypeComment: "Seit Monaten eines der meistgezeigten Küchengadgets auf TikTok. Ein echter Verkaufsschlager.",
        verdict: "Ein echter Zeitsparer für alle, die viel frisch kochen oder Meal-Prep machen. Zwiebeln schneiden ohne Tränen funktioniert perfekt. Beim Reinigen der extrem scharfen Klingen muss man jedoch aufpassen.",
        perfectFor: "Hobbyköche, Meal-Prep-Fans und alle, die Zwiebeln schneiden hassen.",
        notFor: "Sehr weiches Gemüse wie überreife Tomaten (die werden eher zerquetscht).",
        testerQuote: "Kathas Fazit: Ich koche wahnsinnig gerne, aber das Schnippeln nervt. Mit dem Fullstar habe ich für ein Chili con Carne die Paprika und Zwiebeln in exakt 20 Sekunden in perfekte Würfel geschnitten.",
        hiddenFeature: "Der kleine beigelegte Plastik-Kamm sieht unscheinbar aus, ist aber Gold wert: Damit lassen sich Gemüsereste super einfach aus den Rillen des Press-Deckels kratzen.",
        alternatives: [
            { id: "airfryer", name: "Heißluftfritteuse für fettarmes Kochen" }
        ]
    },
    {
        id: "sunsetlamp",
        name: "RGB Sunset Projection Lamp",
        category: "living",
        priceRange: "15 - 25 €",
        rating: 4.6,
        stars: "★★★★☆",
        image: "assets/sunsetlamp.png",
        amazonLink: "https://www.amazon.de/s?k=Sunset+Lamp+RGB&tag=baokmedia21-21",
        review: "Dieses kleine Gadget bringt die perfekte Pinterest-Stimmung in jedes Zimmer. Die Sonnenuntergangslampe projiziert ein warmes, weiches Licht an Wand oder Decke, das an einen echten Sonnenuntergang erinnert. Sie verfügt über 16 verschiedene Farben, eine App-Steuerung und lässt sich um 360 Grad drehen, um die Lichtstimmung flexibel anzupassen.",
        pros: ["Wunderschöne, intensive Lichtfarben, die sich per App steuern lassen", "Perfekt als indirekte Beleuchtung oder als Hintergrund für Fotos/Videos", "Der Lampenkopf lässt sich flexibel um 360 Grad drehen"],
        cons: ["Das kleine Stativ wirkt etwas wackelig auf unebenen Flächen", "Der Lampenkopf wird nach 1-2 Stunden Betrieb spürbar warm"],
        testDuration: "4 Wochen",
        hypeScore: 5,
        realityScore: 4,
        hypeComment: "Die Deko-Lampe schlechthin auf TikTok und Pinterest für gemütliche Zimmer-Ästhetik.",
        verdict: "Wer für wenig Geld eine schöne, warme Atmosphäre für Fotos oder gemütliche Abende sucht, macht hier nichts falsch. Das Gehäuse wird zwar etwas warm, aber der Lichteffekt ist genial.",
        perfectFor: "Teenager, Content-Creator und alle, die eine kuschelige Lese-Ecke einrichten wollen.",
        notFor: "Menschen, die ein helles Hauptlicht zum Arbeiten oder Lesen am Schreibtisch suchen.",
        testerQuote: "Kathas Fazit: Das Licht ist unfassbar schön. Ich schalte abends mein Hauptlicht aus und nur noch diese Lampe an. Der Raum sieht sofort aus wie in einem goldenen kalifornischen Sonnenuntergang.",
        hiddenFeature: "Der Projektionskopf lässt sich abschrauben. Wenn man ihn ohne die Linse verwendet, hat man einen coolen RGB-Spot für Partys.",
        alternatives: [
            { id: "floorlamp", name: "Klassische Stehlampe (für mehr Helligkeit)" }
        ]
    },
    {
        id: "miniprojector",
        name: "Magcubic Mini Beamer HY300",
        category: "gadgets",
        priceRange: "60 - 85 €",
        rating: 3.2,
        stars: "★★★☆☆",
        image: "assets/miniprojector.png",
        amazonLink: "https://www.amazon.de/s?k=Mini+Beamer+HY300&tag=baokmedia21-21",
        review: "Dieser portable Mini-Beamer wird auf Social Media massiv gehypt. Er läuft mit Android TV und projiziert dank des 180° schwenkbaren Designs an Decken oder Wände. Aber Vorsicht: Die Erwartungen sollten bei diesem Preis sehr niedrig gehalten werden. Die Bildqualität und Helligkeit sind extrem schwach.",
        pros: ["180° schwenkbarer Fuß ist praktisch (Bild an die Decke)", "Integriertes Android TV", "Sehr günstiger Einstiegspreis"],
        cons: ["Sehr dunkles Bild, funktioniert wirklich nur in absoluter Dunkelheit", "Lüfter ist extrem laut und stört bei ruhigen Filmpassagen", "Fokus am Rand des Bildes ist oft unscharf"],
        testDuration: "2 Wochen",
        hypeScore: 5,
        realityScore: 2,
        hypeComment: "Geht auf TikTok extrem viral, aber der Hype ist stark übertrieben.",
        verdict: "Für unter 80 Euro ein nettes Spielzeug, mehr aber auch nicht. Wer echtes Heimkino-Feeling erwartet, wird schwer enttäuscht. Die Helligkeit und der laute Lüfter machen Filmabende eher anstrengend.",
        perfectFor: "Studenten mit kleinem Budget, die abends im dunklen Zimmer YouTube-Videos schauen wollen.",
        notFor: "Heimkino-Enthusiasten und Leute, die auch tagsüber etwas erkennen wollen.",
        testerQuote: "Mitchs Fazit: Ich war ehrlich gesagt enttäuscht. Ja, das Ding kostet fast nichts und ist winzig, aber der Lüfter surrt wie eine Biene und die Farben wirken wahnsinnig blass. Für die Gartenlaube okay, fürs Wohnzimmer ein No-Go.",
        hiddenFeature: "Man kann den Beamer über einen USB-Port auch direkt mit einer Powerbank betreiben (wenn sie genug Watt liefert) – ideal für laue Sommernächte im Zelt.",
        alternatives: [
            { id: "tvbacklight", name: "TV Backlight (für echtes Kino-Feeling beim Fernseher)" }
        ]
    },
    {
        id: "walkingpad",
        name: "Citysports Walking Pad (Mobiles Laufband)",
        category: "fitness",
        priceRange: "199 - 249 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/walkingpad.png",
        amazonLink: "https://www.amazon.de/s?k=Citysports+Walking+Pad&tag=baokmedia21-21",
        review: "Das perfekte Gadget für alle im Homeoffice. Dieses ultra-flache Walking Pad lässt sich problemlos unter dem Schreibtisch platzieren, um während der Arbeit, in Telefonaten oder beim Serienschauen Schritte zu sammeln. Dank Transportrollen und einer Dicke von nur 12 cm lässt es sich nach dem Training platzsparend unter dem Sofa verstauen.",
        pros: ["Passt mit nur 12 cm Höhe problemlos unter die meisten Sofas oder Betten", "Sehr leiser Betrieb – man kann nebenbei problemlos telefonieren oder fernsehen", "Einfache Steuerung über eine kleine Fernbedienung in der Hand"],
        cons: ["Nur zum Gehen geeignet (max. 6 km/h) – Joggen ist nicht möglich", "Keine Steigungsfunktion einstellbar"],
        testDuration: "3 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Der Retter für Homeoffice-Arbeiter auf Social Media, um die täglichen Schritte zu erreichen.",
        verdict: "Das ideale Gadget, um der Inaktivität im Homeoffice entgegenzuwirken. Es passt perfekt unter Stehschreibtische und lässt sich danach unters Sofa schieben. Eine lohnende Investition in die Gesundheit.",
        perfectFor: "Home-Office Worker mit Stehschreibtisch und alle, die im Winter nicht raus wollen.",
        notFor: "Echte Läufer, die Joggen wollen (das Band geht nur bis max 6 km/h).",
        testerQuote: "Mels Fazit: Ein Gamechanger! Ich gehe während langweiliger Team-Meetings jetzt locker 3-4 Kilometer. Die Konzentration bleibt oben und der Rücken schmerzt abends nicht mehr.",
        hiddenFeature: "Das Laufband merkt sich eure durchschnittliche Schrittgeschwindigkeit und beschleunigt/bremst in bestimmten Modi automatisch, je nachdem, wo ihr auf dem Band lauft.",
        alternatives: [
            { id: "massagegun", name: "Massagepistole (für die Beine nach dem Laufen)" }
        ]
    },
    {
        id: "sodastream",
        name: "SodaStream Terra Wassersprudler",
        category: "kitchen",
        priceRange: "70 - 90 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/sodastream.png",
        amazonLink: "https://www.amazon.de/s?k=SodaStream+Terra&tag=baokmedia21-21",
        review: "Der absolute Marktführer unter den Wassersprudlern. Mit dem neuen Quick-Connect-System lassen sich die CO2-Zylinder einklicken statt eindrehen, was die Handhabung massiv erleichtert. Er sprudelt Leitungswasser in Sekundenschnelle auf und spart das lästige Schleppen von Kisten. Die Flaschen sind spülmaschinenfest.",
        pros: ["Sehr einfache Bedienung dank Quick-Connect Zylindereinkauf", "Spülmaschinenfeste Flaschen sparen lästiges Spülen per Hand", "Umweltfreundlich, da Plastikflaschen gespart werden"],
        cons: ["CO2-Zylinder müssen regelmäßig nachgekauft werden", "Das Gehäuse besteht komplett aus leichtem Kunststoff"],
        testDuration: "6 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Ein Klassiker in deutschen Haushalten, der den Alltag wirklich erleichtert.",
        verdict: "Wer viel Sprudelwasser trinkt, spart sich mit dem SodaStream langfristig Geld und das Kistenschleppen. Das Plastikgehäuse wirkt zwar nicht übermäßig edel, tut aber absolut seinen Dienst.",
        perfectFor: "Familien, Vieltrinker und jeden, der im 4. Stock ohne Aufzug wohnt.",
        notFor: "Menschen, die ausschließlich stilles Wasser trinken.",
        testerQuote: "Kathas Fazit: Nie wieder Kisten schleppen! Der neue Quick-Connect Verschluss ist genial, weil man die Kartuschen nicht mehr umständlich einschrauben muss, sondern sie einfach einklickt.",
        hiddenFeature: "Man kann Sirup direkt in die Flasche geben (nach dem Sprudeln!) und hat in Sekunden eigene Cola oder Limo ohne viel Plastikmüll.",
        alternatives: [
            { id: "waterbottle", name: "Isolierflasche für Sprudelwasser unterwegs" }
        ]
    },
    {
        id: "vacuumsealer",
        name: "Caso VC10 Vakuumierer",
        category: "kitchen",
        priceRange: "55 - 65 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/vacuumsealer.png",
        amazonLink: "https://www.amazon.de/s?k=Caso+VC10+Vakuumierer&tag=baokmedia21-21",
        review: "Das ideale Küchengadget für Meal-Prep, Sous-Vide-Garen oder um Lebensmittel einfach länger frisch zu halten. Der Caso VC10 zieht die Luft vollautomatisch aus den Spezialbeuteln und verschweißt sie mit einer doppelten Schweißnaht. So bleiben Vitamine und Aromen perfekt erhalten und Gefrierbrand hat keine Chance.",
        pros: ["Lebensmittel bleiben bis zu 8x länger frisch", "Sehr starke Vakuumleistung für diese Preisklasse", "Inklusive Stopp-Taste für empfindliche Lebensmittel (wie Beeren)"],
        cons: ["Spezial-Vakuumierbeutel müssen regelmäßig nachgekauft werden", "Das Gerät nimmt in der Küchenschublade relativ viel Platz ein"],
        testDuration: "4 Monate",
        hypeScore: 4,
        realityScore: 5,
        hypeComment: "In Koch-Communitys und für Grillmeister ein unverzichtbares Standardgerät.",
        verdict: "Ein super verarbeitetes und verlässliches Gerät. Wer gerne vorkocht oder größere Mengen einfriert, spart hiermit viel Geld durch weniger weggeworfene Lebensmittel.",
        perfectFor: "Meal-Prep-Fans, Grillmeister und Schnäppchenjäger beim Fleischeinkauf.",
        notFor: "Single-Haushalte, die ohnehin jeden Tag frisch und in kleinen Mengen kochen.",
        testerQuote: "Kathas Fazit: Ich vakuumiere damit immer das Grillfleisch für den Sommer ein. Es nimmt extrem wenig Platz im Gefrierschrank weg und hält Monate ohne Gefrierbrand.",
        hiddenFeature: "Es gibt einen Schlauch-Anschluss, mit dem man die Luft aus speziellen Vakuum-Vorratsdosen ziehen kann – ideal für empfindliche Dinge wie Kekse oder Kaffee.",
        alternatives: [
            { id: "chopper", name: "Gemüseschneider (für Meal-Prep)" }
        ]
    },
    {
        id: "labelprinter",
        name: "Phomemo D30 Etikettendrucker",
        category: "kitchen",
        priceRange: "25 - 35 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/labelprinter.png",
        amazonLink: "https://www.amazon.de/s?k=Phomemo+D30+Etikettendrucker&tag=baokmedia21-21",
        review: "Dieses kleine, akkubetriebene Beschriftungsgerät druckt Thermodirekt-Etiketten ganz ohne Tinte. Über die zugehörige Smartphone-App lassen sich Schriftarten, Symbole und Rahmen kinderleicht gestalten. Perfekt geeignet, um Gewürzgläser, Vorratsdosen, Kabel oder Schulhefte übersichtlich und einheitlich zu beschriften.",
        pros: ["Thermodruckverfahren benötigt keinerlei teure Tinte oder Toner", "Sehr intuitive App-Bedienung über Bluetooth", "Ultrakompakt und passt in jede Schreibtischschublade"],
        cons: ["Etikettenrollen müssen nachgekauft werden", "Die Druckbreite ist auf schmale Bänder (ca. 15mm) begrenzt"],
        testDuration: "3 Monate",
        hypeScore: 5,
        realityScore: 4,
        hypeComment: "Ein absoluter Dauerbrenner in Pinterest- und TikTok-Videos zum Thema Küche organisieren.",
        verdict: "Für alle Ordnungsfanatiker ein absolutes Must-Have. Die Handhabung ist spielend einfach und das Ergebnis sieht extrem professionell aus.",
        perfectFor: "Ordnungsfanatiker, Scrapbooker und alle, die Vorratsdosen lieben.",
        notFor: "Für den Druck von großen Paket-Etiketten (die Bänder sind schmal).",
        testerQuote: "Kathas Fazit: Ich habe nach dem Auspacken am ersten Tag meine halbe Wohnung beschriftet. Gewürze, Ladekabel, Briefkästen. Die App hat hunderte kleine Icons, das macht wahnsinnig Spaß.",
        hiddenFeature: "Die Thermodruck-Etiketten sind überraschend wasserfest und überstehen auch einen Spülgang auf Gewürzgläsern ohne zu verschmieren.",
        alternatives: [
            { id: "retro_kodak", name: "Fotodrucker (für richtige Bilder)" }
        ]
    },
    {
        id: "airpurifier",
        name: "Levoit Core 300S Luftreiniger",
        category: "living",
        priceRange: "90 - 110 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/airpurifier.png",
        amazonLink: "https://www.amazon.de/s?k=Levoit+Core+300S&tag=baokmedia21-21",
        review: "Ein smarter Luftreiniger mit echtem HEPA-H13-Filter, der 99,97% aller Hausstaubmilben, Pollen, Tierhaare und Gerüche aus der Luft filtert. Dank App-Steuerung und Kompatibilität mit Alexa lässt sich das Gerät bequem programmieren. Der integrierte Sensor misst die Luftqualität in Echtzeit und passt die Lüfterstufe automatisch an.",
        pros: ["Hocheffizienter 3-stufiger Filter, spürbar bessere Luft für Allergiker", "Extrem leiser Schlafmodus (nur 22 dB) stört nicht in der Nacht", "Echtzeit-Luftqualitätsanzeige und smarte App-Steuerung"],
        cons: ["Ersatzfilter kosten ca. 25-30 € und müssen alle 6-8 Monate getauscht werden", "Benötigt eine permanente Steckdose im Raum"],
        testDuration: "6 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Auf Social Media als Retter für Allergiker und Haustierbesitzer gefeiert.",
        verdict: "Besonders für Allergiker oder Haushalte mit Haustieren eine lohnende Investition. Der smarte Automatikmodus funktioniert zuverlässig und spart Strom.",
        perfectFor: "Allergiker, Haustierbesitzer und Leute in Wohnungen an vielbefahrenen Straßen.",
        notFor: "Räume über 50qm (dafür fehlt dem kleinen Gerät die Power).",
        testerQuote: "Kathas Fazit: Als Hundehalter ist der Levoit Gold wert. Er saugt den feinen Staub förmlich aus der Luft und zeigt in der App genau an, wann die Luftqualität sinkt.",
        hiddenFeature: "Man kann den Display-Ring oben am Gerät in der App komplett ausschalten, damit er nachts im Schlafzimmer nicht leuchtet.",
        alternatives: [
            { id: "diffuser", name: "Aromadiffuser (für Raumduft)" }
        ]
    },
    {
        id: "tvbacklight",
        name: "Govee TV-Hintergrundbeleuchtung",
        category: "living",
        priceRange: "70 - 80 €",
        rating: 4.6,
        stars: "★★★★☆",
        image: "assets/tvbacklight.png",
        amazonLink: "https://www.amazon.de/s?k=Govee+TV+Hintergrundbeleuchtung&tag=baokmedia21-21",
        review: "Mit diesem smarten LED-Kit rüstest du jedes Fernsehgerät mit farbcodiertem Ambilight nach. Eine kleine Kamera erfasst die Farben auf dem Bildschirm und synchronisiert die LED-Leiste hinter dem Fernseher in Echtzeit. Das sorgt für ein tieferes Eintauchen beim Filmschauen und schont gleichzeitig die Augen im dunklen Raum.",
        pros: ["Reagiert extrem schnell auf Farbwechsel auf dem Bildschirm", "Einfache Installation und Steuerung per App oder Sprachbefehl", "Viel günstiger als ein echter Ambilight-Fernseher"],
        cons: ["Die Kamera muss oben am Fernseher angebracht werden, was manche optisch stört", "Farbechtheit bei reinen Grautönen weicht manchmal ab"],
        testDuration: "6 Monate",
        hypeScore: 5,
        realityScore: 4,
        hypeComment: "Das ultimative Upgrade für Heimkino-Enthusiasten auf Instagram und Reddit.",
        verdict: "Ein geniales Gadget, das Filmabende und Gaming-Sessions optisch extrem aufwertet. Die Kamera stört nach ein paar Tagen nicht mehr und der Lichteffekt ist fantastisch.",
        perfectFor: "Gamer, Film-Fans und alle, die ihr Wohnzimmer in ein Heimkino verwandeln wollen.",
        notFor: "Minimalisten, die sich an der kleinen Kamera oben auf dem Fernseher stören.",
        testerQuote: "Kathas Fazit: Das wertet jeden Fernseher massiv auf! Filme wirken viel plastischer und beim Zocken zieht das Licht einen richtig ins Spiel. Die Kalibrierung dauert nur 5 Minuten.",
        hiddenFeature: "Man kann in der App den Video-Modus auf 'Musik' umstellen, dann pulsieren die LEDs passend zum Takt des Filmsoundtracks oder bei Partys.",
        alternatives: [
            { id: "miniprojector", name: "Mini Beamer" }
        ]
    },
    {
        id: "neckpillow",
        name: "Third of Life Nackenstützkissen",
        category: "living",
        priceRange: "40 - 60 €",
        rating: 3.8,
        stars: "★★★★☆",
        image: "assets/neckpillow.png",
        amazonLink: "https://www.amazon.de/s?k=Third+of+Life+Nackenstuetzkissen&tag=baokmedia21-21",
        review: "Ein ergonomisches Visco-Schaum-Kissen, das speziell für Seiten- und Rückenschläfer entwickelt wurde. Der viskoelastische Schaum passt sich unter Körperwärme der Nacken- und Kopfkontur an. Allerdings scheiden sich bei diesem Kissen die Geister.",
        pros: ["Hervorragende Druckentlastung für reine Rückenschläfer", "Bezug lässt sich hygienisch waschen"],
        cons: ["Für viele Nutzer (besonders Bauchschläfer) viel zu hart und hoch", "Typischer Memory-Foam-Geruch beim ersten Auspacken hält teils wochenlang an"],
        testDuration: "1 Monat",
        hypeScore: 4,
        realityScore: 3,
        hypeComment: "Als Allheilmittel gegen Nackenschmerzen angepriesen, aber das ist zu pauschal.",
        verdict: "Ein Kissen ist extrem subjektiv. Dieses Modell ist qualitativ hochwertig verarbeitet, aber für viele Nutzer schlichtweg zu fest. Wer weich liegen möchte, sollte sich definitiv nach Alternativen umsehen.",
        perfectFor: "Reine Rückenschläfer, die eine harte, feste Unterlage für den Nacken bevorzugen.",
        notFor: "Bauchschläfer und Menschen, die gerne in weiche Daunenkissen einsinken.",
        testerQuote: "Kathas Fazit: Ich habe wirklich versucht, es zu mögen. Nach 3 Nächten hatte ich mehr Nackenschmerzen als vorher, weil es extrem hart ist. Für mich war das leider ein absoluter Fehlkauf.",
        hiddenFeature: "Der Bezug besteht aus speziellen thermoregulierenden Mikrokapseln, die im Sommer tatsächlich extrem kühl bleiben.",
        alternatives: [
            { id: "massagegun", name: "Massagepistole (gegen echte Nackenschmerzen)" }
        ]
    },
    {
        id: "powerbank",
        name: "Anker PowerCore 20K",
        category: "gadgets",
        priceRange: "25 - 35 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/powerbank.png",
        amazonLink: "https://www.amazon.de/s?k=Anker+PowerCore+20000&tag=baokmedia21-21",
        review: "Die wohl beliebteste Powerbank auf Amazon bietet mit 20.000 mAh genug Kapazität, um ein iPhone oder Samsung-Smartphone ca. 4- bis 5-mal voll aufzuladen. Dank der PowerIQ-Technologie passt sich der Ladestrom automatisch an das Gerät an. Die Powerbank ist robust gebaut und verfügt über mehrere Sicherheitsmechanismen gegen Überlastung.",
        pros: ["Riesige Kapazität reicht problemlos für ein ganzes Wochenende ohne Steckdose", "Sehr robustes, kratzfestes Gehäuse", "Lädt zwei Geräte gleichzeitig auf"],
        cons: ["Mit ca. 350g relativ schwer in der Hosentasche", "Das vollständige Aufladen der Powerbank selbst dauert ca. 6-8 Stunden"],
        testDuration: "12 Monate",
        hypeScore: 4,
        realityScore: 5,
        hypeComment: "Der unangefochtene Bestseller im Elektronik-Zubehör. Wird blind gekauft.",
        verdict: "Ein extrem zuverlässiger Begleiter für Reisen, Festivals oder lange Unitage. Anker liefert gewohnt hohe Qualität zu einem sehr fairen Preis.",
        perfectFor: "Festival-Gänger, Reisende und Leute, deren Akku mittags schon auf 10% ist.",
        notFor: "Leute, die eine federleichte Notfall-Batterie für die kleine Handtasche suchen.",
        testerQuote: "Mitchs Fazit: Dieses Ding ist ein Ziegelstein – aber ein genialer! Auf einem 4-Tages-Festival habe ich mein iPhone jeden Tag geladen und die Powerbank hatte am Ende immer noch einen Balken übrig.",
        hiddenFeature: "Wenn man die Taste gedrückt hält, aktiviert sich der 'Trickle-Charging'-Modus (grüne LED). Damit kann man Kopfhörer laden, ohne dass die Powerbank sich wegen zu geringem Stromverbrauch abschaltet.",
        alternatives: [
            { id: "chargingstation", name: "MagSafe Station (für zu Hause)" }
        ]
    },
    {
        id: "floorlamp",
        name: "Govee RGBIC LED Stehlampe",
        category: "gadgets",
        priceRange: "60 - 80 €",
        rating: 4.6,
        stars: "★★★★☆",
        image: "assets/floorlamp.png",
        amazonLink: "https://www.amazon.de/s?k=Govee+RGBIC+Stehlampe&tag=baokmedia21-21",
        review: "Diese minimalistische Ecken-Stehlampe projiziert dank RGBIC-Technologie mehrere Farben gleichzeitig an die Wand. Über die Govee-App lassen sich unzählige Lichtszenen, Timer und ein Musik-Synchronisations-Modus steuern. Mit ihr filigranes Design passt sie perfekt in ungenutzte Raumecken und sorgt für eine tolle Atmosphäre.",
        pros: ["Wunderschöne Farbverläufe und dynamische Effekte an der Wand", "Sehr platzsparendes Design, passt hinter jedes Sofa", "Kompatibel mit Alexa und Google Home"],
        cons: ["Der Zusammenbau erfordert etwas Geduld beim Einfädeln des LED-Bands", "Lichtstärke ist für indirektes Licht gedacht, nicht zum Ausleuchten eines ganzen Raumes"],
        testDuration: "3 Monate",
        hypeScore: 5,
        realityScore: 4,
        hypeComment: "Das Standard-Gadget in fast jedem modernen Setup- und Raum-Makeover-Video.",
        verdict: "Die perfekte Ecken-Beleuchtung für alle, die smarte Lichteffekte lieben. Sie ist unauffällig im Design, aber extrem effektvoll, sobald sie eingeschaltet wird.",
        perfectFor: "Gamer, Streamer und Leute, die bunte LED-Beleuchtung im Wohnzimmer mögen.",
        notFor: "Als helle Leselampe neben dem Sofa (das Licht ist zu diffus).",
        testerQuote: "Mitchs Fazit: Die Lampe sieht ausgeschaltet aus wie ein schwarzer Besenstiel, aber sobald sie an ist, ist der Farbverlauf an der Wand der Wahnsinn. Die App-Steuerung reagiert extrem schnell.",
        hiddenFeature: "Die Lampe hat ein eingebautes Mikrofon. Im 'Party-Modus' reagiert sie auf Klatschen oder Musik und baut ein eigenes Lichtfeuerwerk auf.",
        alternatives: [
            { id: "sunsetlamp", name: "Sunset Projection Lamp" }
        ]
    },
    {
        id: "keyfinder",
        name: "Tile Mate Bluetooth-Finder",
        category: "gadgets",
        priceRange: "22 - 27 €",
        rating: 4.5,
        stars: "★★★★☆",
        image: "assets/keyfinder.png",
        amazonLink: "https://www.amazon.de/s?k=Tile+Mate&tag=baokmedia21-21",
        review: "Der vielseitige Bluetooth-Tracker lässt sich einfach am Schlüsselbund, Rucksack oder Katzenhalsband befestigen. Über die Smartphone-App lässt sich der Tracker orten oder ein lauter Ton abspielen. Findet man sein Handy nicht, kann man durch Drücken des Buttons am Tile das Handy (selbst im Lautlos-Modus) klingeln lassen.",
        pros: ["Zwei-Wege-Suche: Findet den Schlüsselbund ODER das Smartphone", "Wasserabweisendes Gehäuse und lange Akkulaufzeit (bis zu 3 Jahre)", "Funktioniert sowohl mit iOS als auch mit Android einwandfrei"],
        cons: ["Die Batterie ist fest verbaut und kann bei diesem Modell nicht selbst getauscht werden", "Ortung außerhalb der Bluetooth-Reichweite basiert auf dem Tile-Netzwerk (weniger Nutzer als Apple Find My)"],
        testDuration: "6 Monate",
        hypeScore: 4,
        realityScore: 4,
        hypeComment: "Ein beliebtes Geschenk für vergessliche Menschen und ein praktischer Alltagshelfer.",
        verdict: "Ein tolles, verlässliches Gadget für alle, die öfter mal ihre Schlüssel oder Geldbörse verlegen. Für Android-Nutzer eine hervorragende AirTag-Alternative.",
        perfectFor: "Schusselköpfe, Reisende und Katzenbesitzer.",
        notFor: "Leute im tiefsten Wald (es braucht andere Smartphones in der Nähe für die Ortung).",
        testerQuote: "Mitchs Fazit: Ich drücke morgens auf den Tile-Knopf in meiner App und mein Schlüssel piept. Ich habe dadurch in den letzten Monaten bestimmt 5 Stunden Zeit gespart, die ich sonst mit Suchen verbracht hätte.",
        hiddenFeature: "Der Doppelklick auf das kleine Tile-Logo lässt das Smartphone klingeln – selbst wenn es komplett auf stumm geschaltet ist!",
        alternatives: [
            { id: "powerbank", name: "Powerbank (für das klingelnde Handy)" }
        ]
    },
    {
        id: "bluetoothsender",
        name: "Aukey Bluetooth Adapter",
        category: "gadgets",
        priceRange: "20 - 30 €",
        rating: 3.5,
        stars: "★★★☆☆",
        image: "assets/bluetoothsender.png",
        amazonLink: "https://www.amazon.de/s?k=Bluetooth+Transmitter+Receiver&tag=baokmedia21-21",
        review: "Ein 2-in-1 Bluetooth Adapter, der alte Fernseher oder Stereoanlagen bluetoothfähig machen soll. Auf dem Papier eine tolle Idee, in der Praxis leider oft mit frustrierenden Verbindungsproblemen verbunden.",
        pros: ["Sehr günstig", "Akkubetrieb für den mobilen Einsatz möglich"],
        cons: ["Pairing mit Kopfhörern ohne Display ist ein reinstes Glücksspiel", "Verbindung bricht sporadisch ab", "Spürbare Audioverzögerung (Lippensynchronität bei Filmen nicht immer gegeben)"],
        testDuration: "2 Monate",
        hypeScore: 3,
        realityScore: 2,
        hypeComment: "Wird oft als die ultimative Lösung für alte Anlagen verkauft.",
        verdict: "Wer starke Nerven beim Einrichten hat, bekommt für wenig Geld eine solide Lösung zum Musikhören. Fürs Fernsehen (wegen der Verzögerung) raten wir aufgrund der Verbindungsabbrüche jedoch eher davon ab.",
        perfectFor: "Bastler, die ihre 90er-Jahre Stereoanlage kabellos machen wollen.",
        notFor: "Leute, die lippensynchrones Fernsehen erwarten oder keine Geduld beim Pairing haben.",
        testerQuote: "Mitchs Fazit: Um Spotify auf der alten Musikanlage in der Küche zu hören, reicht es völlig. Aber als ich abends im Bett mit Kopfhörern fernsehen wollte, war der Ton immer eine halbe Sekunde zu spät. Das nervt extrem.",
        hiddenFeature: "Der Adapter lässt sich per Schieberegler von RX (Receiver) auf TX (Transmitter) umschalten. So kann man z.B. einen alten iPod an moderne Bluetooth-Kopfhörer senden lassen.",
        alternatives: [
            { id: "headphones", name: "Bluetooth-Kopfhörer" }
        ]
    },
    {
        id: "neckmassager",
        name: "Donnerberg Nackenmassagegerät",
        category: "fitness",
        priceRange: "100 - 140 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/neckmassager.png",
        amazonLink: "https://www.amazon.de/s?k=Donnerberg+Nackenmassagegeraet&tag=baokmedia21-21",
        review: "Ein Shiatsu-Massagegerät mit zuschaltbarer Infrarotwärme und Vibrationsfunktion. Die 8 rotierenden Massageköpfe fühlen sich an wie eine echte Handmassage. Durch die Schlaufen an den Enden kann man den Druck auf den Nacken- oder Schulterbereich stufenlos selbst regulieren. Ideal zur Linderung von Verspannungen nach langen Bürotagen.",
        pros: ["Sehr kräftige Massage, die Verspannungen wirklich tiefenwirksam löst", "Zuschaltbare Wärme regt die Durchblutung zusätzlich an", "Vielseitig einsetzbar auch für Rücken, Beine oder Bauch"],
        cons: ["Das Gerät muss im Betrieb am Netzkabel angeschlossen sein (kein Akkubetrieb)", "Die Intensität kann bei empfindlichen Muskeln anfangs schmerzhaft sein"],
        testDuration: "9 Monate",
        hypeScore: 4,
        realityScore: 5,
        hypeComment: "Wird oft in Wellness- und Entspannungs-Videos gezeigt. Die Bewertungen sind durchweg euphorisch.",
        verdict: "Wer viel am Schreibtisch sitzt und mit Verspannungen zu kämpfen hat, spart sich mit diesem Gerät den einen oder anderen Physiotermin. Die Massagekraft ist beeindruckend.",
        perfectFor: "Büro-Arbeiter, LKW-Fahrer und alle mit chronischen Nackenverspannungen.",
        notFor: "Leute, die eine flächendeckende, sanfte Rückenmassage erwarten (das Gerät arbeitet punktuell).",
        testerQuote: "Mels Fazit: Nach 8 Stunden vorm Bildschirm ist das Ding mein Retter. Die Wärmefunktion in Kombination mit den harten Kugeln löst die Knoten in meinen Schultern viel besser als mein Freund es jemals könnte.",
        hiddenFeature: "Man kann das Gerät auch super auf den Boden legen und die Wadenmuskulatur (z.B. nach dem Joggen) durchkneten lassen.",
        alternatives: [
            { id: "massagegun", name: "Massagepistole (für Sportler)" }
        ]
    },
    {
        id: "resistancebands",
        name: "Gritin Fitnessbänder 5er-Set",
        category: "fitness",
        priceRange: "8 - 12 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/resistancebands.png",
        amazonLink: "https://www.amazon.de/s?k=Gritin+Fitnessbaender&tag=baokmedia21-21",
        review: "Ein Set aus 5 verschiedenen Premium-Latexbändern mit unterschiedlichen Zugstärken (von leicht bis extra schwer). Perfekt geeignet für Krafttraining, Yoga, Pilates, Stretching oder Physiotherapie zu Hause. Die Bänder sind hautfreundlich, extrem reißfest und kommen in einem praktischen kleinen Transportbeutel.",
        pros: ["Extrem günstiges Trainingstool für den ganzen Körper", "Sehr platzsparend und ideal für unterwegs oder im Urlaub", "5 verschiedene Zugstärken bieten das passende Level für jede Übung"],
        cons: ["Latex neigt nach einigen Monaten bei häufiger Nutzung dazu, leicht zu kleben (Talkumpuder hilft)", "Keine Übungsanleitung im Lieferumfang enthalten (muss man online suchen)"],
        testDuration: "6 Monate",
        hypeScore: 4,
        realityScore: 5,
        hypeComment: "Der absolute Klassiker in jedem Home-Workout-Video. Günstig und effektiv.",
        verdict: "Mehr Fitness für unter 10 Euro geht nicht. Sie sind reißfest und perfekt geeignet, um Übungen zu Hause ein bisschen anspruchsvoller zu gestalten.",
        perfectFor: "Home-Workout-Fans, Physiotherapie-Patienten und Leute, die auf Reisen fit bleiben wollen.",
        notFor: "Bodybuilder, die mit 100 Kilo Bankdrücken machen wollen.",
        testerQuote: "Mels Fazit: Für den Preis darf man nicht meckern. Ich nehme sie auf jeden Wochenendtrip mit. Man bekommt ein erstaunlich gutes Ganzkörper-Workout hin, wenn man weiß, wie man sie einsetzt.",
        hiddenFeature: "Das schwarze (schwerste) Band ist so stark, dass man es auch nutzen kann, um Klimmzüge am Türrahmen zu erleichtern (als Unterstützung).",
        alternatives: [
            { id: "walkingpad", name: "Walking Pad für Cardio" }
        ]
    },
    {
        id: "picnicblanket",
        name: "Aoraki Outdoor-Picknickdecke",
        category: "fitness",
        priceRange: "20 - 30 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/picnicblanket.png",
        amazonLink: "https://www.amazon.de/s?k=Outdoor+Picknickdecke+wasserdicht&tag=baokmedia21-21",
        review: "Eine dreischichtige, wasserdichte Picknickdecke mit den Maßen 200 x 200 cm, die genug Platz für 4-6 Personen bietet. Die Unterseite besteht aus feuchtigkeitsbeständigem PEVA, das Nässe und Kälte vom Boden abhält. Die Oberseite besteht aus weichem Fleece für optimalen Liegekomfort. Die Decke lässt sich kompakt zusammenfalten und mit dem Tragegriff leicht transportieren.",
        pros: ["100% wasserdichte Unterseite hält trocken, selbst auf feuchtem Gras", "Sehr großzügiges Liegeplatz-Angebot bei geringem Packmaß", "Schöne, moderne Muster im Vergleich zu klassischen Karo-Decken"],
        cons: ["Die Fleece-Oberseite zieht Grashalme und Tannennadeln magisch an (schwer abzubürsten)", "Nicht waschmaschinengeeignet (muss per Hand gereinigt werden)"],
        testDuration: "3 Monate",
        hypeScore: 4,
        realityScore: 4,
        hypeComment: "Ein Must-Have in jeder Sommer- und Outdoor-Kollektion auf Social Media.",
        verdict: "Die perfekte Decke für Parkbesuche, Camping oder den Strand. Die wasserdichte Unterseite macht im Alltag den entscheidenden Unterschied aus.",
        perfectFor: "Familien mit Kindern, Festival-Gänger und Picknick-Fans.",
        notFor: "Minimalisten mit ultraleichtem Gepäck (die Decke hat ein gewisses Packmaß).",
        testerQuote: "Mels Fazit: Endlich keine nassen Hosen mehr, wenn man sich morgens im Park auf den taufeuchten Rasen setzt. Das Einpacken erfordert nach dem ersten Ausklappen etwas Übung, aber das Klett-System hält super.",
        hiddenFeature: "Die Fleeceschicht ist so dick, dass man die Decke im Auto auch mal als Notfall-Kuscheldecke für Beifahrer zweckentfremden kann.",
        alternatives: [
            { id: "waterbottle", name: "Isolierflasche fürs Picknick" }
        ]
    },
    {
        id: "maehroboter",
        name: "Husqvarna Automower 430X",
        category: "garden",
        priceRange: "1.200 - 1.800 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/maehroboter.png",
        amazonLink: "https://www.amazon.de/s?k=husqvarna+automower+m%C3%A4hroboter&tag=baokmedia21-21",
        review: "Der Husqvarna Automower 430X ist das Flaggschiff unter den Mährobotern und mäht vollautomatisch Rasenflächen bis zu 3.200 m². Dank GPS-gestützter Navigation, App-Steuerung und Diebstahlschutz ist er der unangefochtene Profi für anspruchsvolle Gärten. Einmal eingerichtet, kümmert er sich komplett selbstständig um deinen Rasen – jeden Tag, bei jedem Wetter.",
        pros: ["Vollautomatisches Mähen auf bis zu 3.200 m² – kein manuelles Eingreifen nötig", "GPS-Navigation und App-Steuerung per Smartphone in Echtzeit", "Integrierter Diebstahlschutz und PIN-Code-Sicherung"],
        cons: ["Hoher Anschaffungspreis macht ihn zu einem langfristigen Investment", "Installation des Begrenzungsdrahts erfordert etwas Zeit beim ersten Setup"],
        testDuration: "6 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Mähroboter sind auf Pinterest und Social Media momentan extrem gefragt – und das zurecht.",
        verdict: "Für alle, die nie wieder selbst mähen wollen: Der Automower 430X ist sein Geld auf lange Sicht absolut wert. Ein echter Komfort-Gamechanger.",
        perfectFor: "Gartenbesitzer mit großen oder komplexen Flächen, die Technik lieben.",
        notFor: "Kleine Reihenhausgärten (dafür ist der Roboter völlig überdimensioniert).",
        testerQuote: "Ollis Fazit: Er fährt komplett geräuschlos und zieht sauber seine Bahnen. Sogar nachts stört er niemanden. Mein Rasen sah noch nie so dicht und grün aus wie seitdem der Roboter regelmäßig die Spitzen abschneidet.",
        hiddenFeature: "Der Roboter hat einen eingebauten GPS-Diebstahlschutz. Sobald ihn jemand vom Grundstück trägt, schlägt er lauten Alarm und man kann ihn in der App auf einer Karte tracken.",
        alternatives: [
            { id: "vacuum", name: "Saugroboter für drinnen" }
        ]
    },
    {
        id: "kopfhoerer",
        name: "Sony WH-1000XM5",
        category: "gadgets",
        priceRange: "280 - 380 €",
        rating: 4.9,
        stars: "★★★★★",
        image: "assets/kopfhoerer.png",
        amazonLink: "https://www.amazon.de/s?k=sony+wh-1000xm5+kopfh%C3%B6rer&tag=baokmedia21-21",
        review: "Die Sony WH-1000XM5 sind schlicht die besten Noise-Cancelling-Kopfhörer auf dem Markt. Mit 8 Mikrofonen, dem neuen HD Noise Cancelling Processor QN2 und bis zu 30 Stunden Akkulaufzeit setzen sie Maßstäbe in ihrer Klasse. Der Klang ist warm, detailreich und absolut makellos – egal ob Musik, Podcasts oder Calls.",
        pros: ["Branchenführendes Noise Cancelling filtert selbst Bahnlärm zuverlässig raus", "30 Stunden Akku + Schnellladefunktion (3 Min = 3 Stunden)", "Extrem bequemes, leichtes Design für stundenlangen Tragekomfort"],
        cons: ["Das neue Design lässt sich nicht mehr vollständig flachklappen – schlechtere Transportierbarkeit", "Klanglich minimal weniger Bassdruck als die Vorgängermodelle (subjektiv)"],
        testDuration: "4 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Auf jeder 'beste Kopfhörer'-Liste ganz oben. Der Hype ist 100% gerechtfertigt.",
        verdict: "Wenn du nur einen kabellosen Kopfhörer kaufst, dann diesen. Punkt. Die WH-1000XM5 sind in jeder Situation eine Klasse für sich.",
        perfectFor: "Vielflieger, Pendler und alle, die im Großraumbüro ihre Ruhe haben wollen.",
        notFor: "Fitness-Gänger (dafür sind In-Ears besser geeignet) oder Leute, die extrem platzsparende Kopfhörer suchen.",
        testerQuote: "Mitchs Fazit: Unglaublich, wie ruhig die Welt plötzlich ist, wenn man das Noise-Cancelling anwirft. Ich höre im Zug absolut nichts mehr vom Rattern. Der Bass drückt richtig schön, ohne zu übersteuern.",
        hiddenFeature: "Die 'Speak-to-Chat'-Funktion pausiert die Musik automatisch, sobald man anfängt zu sprechen, und schaltet die Mikrofone auf Durchzug. Man muss die Kopfhörer an der Kasse also nicht abnehmen.",
        alternatives: [
            { id: "powerbank", name: "Powerbank für endlose Akkulaufzeit auf Reisen" }
        ]
    },
    {
        id: "getraenkekuehlschrank",
        name: "Klarstein Beersafe L Getränkekühlschrank",
        category: "kitchen",
        priceRange: "200 - 300 €",
        rating: 4.6,
        stars: "★★★★½",
        image: "assets/getraenkekuehlschrank.png",
        amazonLink: "https://www.amazon.de/s?k=klarstein+getr%C3%A4nkek%C3%BChlschrank+glast%C3%BCr&tag=baokmedia21-21",
        review: "Der Klarstein Beersafe L ist ein freistehender Getränkekühlschrank mit Glastür, LED-Beleuchtung und einem Fassungsvermögen für bis zu 62 Dosen oder 16 Standard-Flaschen. Die Temperatur lässt sich präzise von 5 bis 10 °C einstellen. Das elegante schwarze Gehäuse mit Chromgriffen passt in jede moderne Küche, Bar oder jeden Partyraum.",
        pros: ["Perfekte Kühltemperatur für Bier, Softdrinks und Wein bei sehr leisem Betrieb", "LED-Beleuchtung lässt den Inhalt attraktiv in Szene setzen", "Kompakte Bauform passt unter Theken oder in kleine Räume"],
        cons: ["Bei sehr voller Beladung kann die Temperatur leicht ungleichmäßig verteilt sein", "Das Kühlgebläse ist hörbar – nichts fürs Schlafzimmer"],
        testDuration: "2 Monate",
        hypeScore: 4,
        realityScore: 4,
        hypeComment: "Getränkekühlschränke sind auf Pinterest und in Hausbar-Accounts gerade mega im Trend.",
        verdict: "Ein echter Party-Booster und cooler Einrichtungsgegenstand für Küche oder Keller. Für Gastgeber ein absolutes Must-Have.",
        perfectFor: "Party-Gastgeber, Männer-Höhlen-Einrichter und WG-Küchen.",
        notFor: "Schlafzimmer (das Kühlaggregat brummt hörbar).",
        testerQuote: "Kathas Fazit: Wenn die Kumpels zum Fußballschauen kommen, ist das der absolute Hingucker. Kühles Bier direkt aus der stylischen Glastür greifen zu können, wertet den ganzen Raum auf.",
        hiddenFeature: "Man kann die Regalböden einzeln in der Höhe verstellen, um auch große Sekt- oder Weinflaschen stehend zu lagern.",
        alternatives: [
            { id: "sodastream", name: "Wassersprudler" }
        ]
    },
    {
        id: "lego",
        name: "LEGO Star Wars Millennium Falcon 75192",
        category: "collectibles",
        priceRange: "700 - 850 €",
        rating: 4.9,
        stars: "★★★★★",
        image: "assets/lego.png",
        amazonLink: "https://www.amazon.de/s?k=lego+star+wars+millennium+falcon+75192&tag=baokmedia21-21",
        review: "Der LEGO Star Wars Millennium Falcon (Set 75192) ist mit 7.541 Teilen eines der größten und detailliertesten LEGO-Sets überhaupt. Das fertige Modell misst beeindruckende 84 cm Länge und reproduziert den Schnellen Falken aus Episode IV-VII mit absoluter Liebe zum Detail – inklusive detaillierter Innenräume, Minifiguren und abnehmbarer Panele.",
        pros: ["Atemberaubendes Detaillevel mit 7.541 Teilen – ein Meisterwerk der LEGO-Baukunst", "Enormer Displaywert: Ist ein echtes Regal-Statement für jeden Star Wars Fan", "Werthaltiges Sammlerstück – bestimmte Sets steigen im Wert stark an"],
        cons: ["Der Bauaufwand ist mit ~20 Stunden erheblich – nichts für Ungeduldige", "Sehr hoher Preis macht ihn zu einem Luxuskauf oder Geschenk der Extraklasse"],
        testDuration: "1 Monat (Bau)",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Das heilige LEGO-Set schlechthin. Bei jedem Re-Release sofort ausverkauft.",
        verdict: "Für eingefleischte Star Wars Fans und LEGO-Enthusiasten das ultimative Set. Als Sammlerstück und Dekorationsobjekt absolut unübertroffen."
    },
    {
        id: "messi_lego",
        name: "LEGO Editions Lionel Messi – Fußballlegende",
        category: "collectibles",
        priceRange: "30 - 40 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/messi_lego.jpg",
        amazonLink: "https://www.amazon.de/s?k=LEGO+Lionel+Messi+43015&tag=baokmedia21-21",
        review: "Das LEGO Icons Lionel Messi Set (43015) ist eine detailgetreue Hommage an die lebende Fußballlegende. Das Set umfasst eine detaillierte LEGO-Figur von Messi im argentinischen Trikot, eine Trophäen-Vitrine und zahlreiche ikonische Accessoires aus seiner Karriere. Mit 1.420 Teilen ist es ein Premium-Sammlerstück für Fußballfans und LEGO-Enthusiasten gleichermaßen.",
        pros: ["Einzigartiges Sammlerstück – Messi als LEGO-Set ist ein absolutes Highlight für jeden Fan", "Hoher Detailgrad: Argentinisches Trikot, Ballon d'Or-Trophäen und Karriere-Highlights", "Fairer Preis für ein offizielles LEGO-Lizenzprodukt dieser Qualität"],
        cons: ["Nur für Fans – wer kein Fußball-Enthusiast ist, findet vielleicht keinen persönlichen Bezug", "Limitierte Auflage – kann schnell ausverkauft sein"],
        testDuration: "2 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Auf Pinterest und unter Fußballfans massiv geteilt – absolut verständlicher Hype.",
        verdict: "Das perfekte Geschenk für jeden Messi-Fan. Zwischen Fußballleidenschaft und Sammelkultur – dieses Set trifft beide Zielgruppen genau ins Schwarze."
    },
    {
        id: "postmappe",
        name: "Colorspan Postmappe DIN A4 mit 3 Innenklappen",
        category: "living",
        priceRange: "8 - 15 €",
        rating: 4.5,
        stars: "★★★★½",
        image: "assets/postmappe.png",
        amazonLink: "https://www.amazon.de/s?k=postmappe+colorspan+DIN+A4+3+Innenklappen&tag=baokmedia21-21",
        review: "Diese Postmappe aus extra starkem Colorspan-Karton bietet mit ihren 3 Innenklappen strukturierte Ordnung für DIN A4-Dokumente, Rechnungen und Briefe. Der robuste Karton hält auch intensivem Alltagsgebrauch stand. Das schlichte, professionelle Design passt sowohl ins Büro als auch ins Home-Office – ein praktisches Organisations-Must-Have für unter 15 Euro.",
        pros: ["Extrem günstiger Preis für die gebotene Qualität und Stabilität", "Drei Innenklappen bieten strukturierte Unterteilung für verschiedene Dokumenttypen", "Robuster Colorspan-Karton – deutlich langlebiger als Standard-Papierboxen"],
        cons: ["Rein funktional – kein Premium-Optik für repräsentative Anlässe", "Fasst keine extra dicken oder gehefteten Dokumentenstapel"],
        testDuration: "3 Monate",
        hypeScore: 3,
        realityScore: 5,
        hypeComment: "Unscheinbar, aber auf Amazon mit hunderten 5-Sterne-Bewertungen – ein echter Hidden Champion.",
        verdict: "Wer Ordnung im Papierchaos braucht, wird diese Mappe lieben. Einfach, günstig, robust – und wirklich nützlich im Alltag.",
        perfectFor: "Büroarbeiter, Studenten und Leute, die ihre Rechnungen endlich sortieren wollen.",
        notFor: "Für den Transport von dicken Büchern oder Laptops.",
        testerQuote: "Ollis Fazit: Mein Schreibtisch war immer voll mit losen Zetteln. Diese simple Mappe hat mein Leben verändert. Die drei Klappen halten alles zusammen, ohne dass Papiere an der Seite rausrutschen.",
        hiddenFeature: "Der Karton lässt sich super mit Filzstiften oder Stickern individualisieren, falls man für jedes Familienmitglied eine eigene Mappe anlegen will.",
        alternatives: [
            { id: "labelprinter", name: "Etikettendrucker (für noch mehr Ordnung)" }
        ]
    },
    {
        id: "ventilator_brandson",
        name: "Brandson Turmventilator mit Fernbedienung",
        category: "living",
        priceRange: "60 - 90 €",
        rating: 4.4,
        stars: "★★★★½",
        image: "assets/ventilator_brandson.png",
        amazonLink: "https://www.amazon.de/s?k=brandson+turmventilator+fernbedienung&tag=baokmedia21-21",
        review: "Der Brandson Turmventilator überzeugt durch sein schlankes Design, leisen Betrieb und die bequeme Fernbedienung. Mit 3 Windgeschwindigkeiten, Timer-Funktion und 70°-Oszillation kühlt er effektiv große Räume. Das LED-Display ermöglicht die Bedienung auch bei Dunkelheit, und der 12-Stunden-Timer macht ihn zum idealen Schlafzimmer-Begleiter im Sommer.",
        pros: ["Sehr leiser Betrieb – auch im Schlafzimmer angenehm nutzbar", "Fernbedienung mit Timer-Funktion für maximalen Komfort", "Schlankes Standdesign passt in jede Zimmerecke"],
        cons: ["Keine App-Steuerung – rein klassische Fernbedienung ohne Smart-Home-Integration", "Bei maximaler Stufe spürbar lauter als auf Stufe 1 oder 2"],
        testDuration: "1 Sommer",
        hypeScore: 4,
        realityScore: 4,
        hypeComment: "Im Sommer einer der meistgekauften Ventilatoren auf Amazon Deutschland.",
        verdict: "Für den Preis ein absolut solides Gerät. Wer einen leisen, effizienten Turmventilator ohne Schnickschnack sucht, macht mit Brandson nichts falsch.",
        perfectFor: "Schlafzimmer, heiße Dachgeschosswohnungen und Home-Office-Tage im Hochsommer.",
        notFor: "Smart-Home-Nerds, die alles über ihr Handy steuern wollen.",
        testerQuote: "Kathas Fazit: An heißen Tagen läuft der bei mir durchgehend. Der Timer ist genial fürs Schlafzimmer: Ich stelle ihn auf 2 Stunden, schlafe entspannt bei der leichten Brise ein und er schaltet sich von selbst ab.",
        hiddenFeature: "Die Fernbedienung hat auf der Rückseite des Ventilators ein kleines, unscheinbares Geheimfach, damit man sie im Winter nicht verliert.",
        alternatives: [
            { id: "ventilator_philips", name: "Philips Turmventilator (mit Luftreiniger)" }
        ]
    },
    {
        id: "ventilator_philips",
        name: "Philips Air Performer 7000 Turmventilator",
        category: "living",
        priceRange: "200 - 280 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/ventilator_philips.jpg",
        amazonLink: "https://www.amazon.de/s?k=philips+turmventilator+7000+series&tag=baokmedia21-21",
        review: "Der Philips Air Performer 7000 (AMF765) ist mehr als ein Ventilator – er ist gleichzeitig ein leistungsstarker Luftreiniger mit HEPA-Filter. Das elegante, säulenartige Design ohne Rotorblätter sorgt für gleichmäßigen, sanften Luftstrom. Über die Philips Air+ App lässt er sich vollständig per Smartphone steuern und zeigt Echtzeit-Luftqualitätsdaten an.",
        pros: ["2-in-1: Ventilator und Luftreiniger mit HEPA-Filter in einem eleganten Gerät", "Smart-Home-Integration mit App-Steuerung und Echtzeit-Luftqualitätsanzeige", "Extrem leiser Betrieb (nur 20 dB im Schlafmodus)"],
        cons: ["Hoher Preis – für Budget-Käufer gibt es günstigere reine Ventilatoren", "Filter muss regelmäßig (ca. alle 12 Monate) gewechselt werden"],
        testDuration: "6 Monate",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Auf Pinterest und in Interior-Accounts als Premium-Wohnzimmer-Gadget gehyped – völlig zu recht.",
        verdict: "Wer in saubere Luft und Komfort investieren möchte, bekommt mit dem Philips 7000 ein Gerät, das in jeder Hinsicht überzeugt. Premium-Kauf, der sich täglich auszahlt.",
        perfectFor: "Allergiker, Design-Liebhaber und Smart-Home-Fans.",
        notFor: "Studis mit extrem knappem Budget.",
        testerQuote: "Kathas Fazit: Das Design ohne klassische Rotorblätter sieht aus wie aus der Zukunft. Im Automatikmodus merkt er sofort, wenn beim Kochen Rauch in der Luft liegt und dreht kurz hoch. Der Luftreiniger ist ein echter Mehrwert.",
        hiddenFeature: "In der App kann man historische Daten zur Luftqualität im Raum abrufen und analysieren, zu welchen Tageszeiten (oder beim Kochen) die Feinstaubbelastung am höchsten war.",
        alternatives: [
            { id: "airpurifier", name: "Reiner Luftreiniger (ohne Kühlung)" }
        ]
    },
    {
        id: "funko_mandalorian",
        name: "Funko POP! & Buddy: Star Wars The Mandalorian",
        category: "gadgets",
        priceRange: "15 - 25 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/funko_mandalorian.jpg",
        amazonLink: "https://www.amazon.de/s?k=Funko+POP+Mandalorian+The+Child&tag=baokmedia21-21",
        review: "Ein absolutes Must-Have für jeden Star Wars Fan. Die Funko POP! Figur vom Mandalorianer zusammen mit The Child (Grogu) ist extrem detailliert und ein toller Hingucker fürs Regal oder den Schreibtisch.",
        pros: ["Tolle Verarbeitung und viele Details", "Zwei Figuren in einem (Mando & Grogu)", "Perfektes Geschenk für Star Wars Fans"],
        cons: ["Figuren sind recht leicht und kippen schnell um, wenn man an den Tisch stößt"],
        testDuration: "1 Monat",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Beliebtester Funko Pop auf Pinterest und Instagram.",
        verdict: "Egal ob als Sammlerstück oder kleines Geschenk – mit The Child und Mando macht man nie etwas falsch. Sieht toll aus und macht gute Laune.",
        perfectFor: "Star Wars Fans, Schreibtisch-Dekorateure und Funko-Sammler.",
        notFor: "Leute, die minimalistische Einrichtungen ohne Deko bevorzugen.",
        testerQuote: "Mitchs Fazit: Grogu ist einfach unfassbar niedlich! Die beiden stehen bei mir direkt neben dem Monitor und zaubern mir an stressigen Arbeitstagen immer ein Lächeln ins Gesicht.",
        hiddenFeature: "Der kleine Grogu (The Child) ist nicht fest mit Mando verbunden und kann frei positioniert werden.",
        alternatives: [
            { id: "ultimate_grogu", name: "Grogu in Lebensgröße" }
        ]
    },
    {
        id: "lego_clone_trooper",
        name: "LEGO Star Wars 75372 Clone Trooper Battle Pack",
        category: "gadgets",
        priceRange: "25 - 35 €",
        rating: 4.7,
        stars: "★★★★★",
        image: "assets/lego_clone_trooper.jpg",
        amazonLink: "https://www.amazon.de/s?k=LEGO+Star+Wars+75372&tag=baokmedia21-21",
        review: "Ein geniales Battle Pack für den perfekten Aufbau einer eigenen Klonkrieger-Armee. Es enthält spannende Minifiguren und kleine, gut durchdachte Fahrzeuge, die sofort zum Spielen oder Ausstellen einladen.",
        pros: ["Tolle Auswahl an Klonkriegern und Droiden in einem Set", "Super Preis-Leistungs-Verhältnis für Army-Building", "Detailreiche Drucke auf den Figuren"],
        cons: ["Der Spider-Droid ist etwas fragil beim Bespielen"],
        testDuration: "2 Wochen",
        hypeScore: 5,
        realityScore: 4,
        hypeComment: "Ein Highlight in der Lego Star Wars Community auf YouTube.",
        verdict: "Wer eine Star Wars Klon-Armee aufbauen möchte, kommt an diesem Battle Pack nicht vorbei. Perfektes kleines Mitbringsel."
    },
    {
        id: "monopoly_fifa",
        name: "Monopoly Panini Prizm: FIFA World Cup",
        category: "living",
        priceRange: "30 - 45 €",
        rating: 4.5,
        stars: "★★★★☆",
        image: "assets/monopoly_fifa.jpg",
        amazonLink: "https://www.amazon.de/s?k=Monopoly+Panini+Prizm+FIFA&tag=baokmedia21-21",
        review: "Die perfekte Symbiose für Fußball- und Brettspielfans. Diese Monopoly Edition verbindet das klassische Gameplay mit der Sammelleidenschaft von Panini Prizm Karten. Ein toller Twist für den nächsten Spieleabend.",
        pros: ["Cooles Design im Panini-Stil", "Spielfiguren sind Fußball-Themen (z.B. Schuh, Ball)", "Großer Spaß für Fußball-Fans jeden Alters"],
        cons: ["Regeln weichen leicht vom Original ab (Geschmacksache)", "Die Panini-Optik ist teilweise etwas unübersichtlich auf dem Spielbrett"],
        testDuration: "3 Spielabende",
        hypeScore: 4,
        realityScore: 4,
        hypeComment: "Besonders vor großen Turnieren ein absoluter Renner.",
        verdict: "Eine tolle Edition für Sammler und Fans, die Monopoly lieben und auf Fußball stehen.",
        perfectFor: "Fußballverrückte Familien und als Geschenk für Kids im Panini-Sammel-Fieber.",
        notFor: "Strenge Monopoly-Puristen, die keine Regeländerungen mögen.",
        testerQuote: "Mitchs Fazit: Statt Schlossallee kauft man hier Mbappé! Die Kombination aus klassischem Verhandeln und dem Sammeln der Prizm-Karten hat in unserer Runde für richtig laute Lacher gesorgt.",
        hiddenFeature: "Das Spiel enthält exklusive Panini Prizm Karten, die Sammler sogar separat tauschen oder wertsteigernd aufbewahren könnten.",
        alternatives: [
            { id: "messi_lego", name: "Messi LEGO Set" }
        ]
    },
    {
        id: "lego_razor_crest",
        name: "LEGO Star Wars The Mandalorian Razor Crest",
        category: "gadgets",
        priceRange: "100 - 130 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/lego_razor_crest.jpg",
        amazonLink: "https://www.amazon.de/s?k=LEGO+Star+Wars+Razor+Crest&tag=baokmedia21-21",
        review: "Das kultige Raumschiff des Mandalorianers als extrem detailreiches LEGO-Set. Mit Transportraum, Schlafkabine und aufklappbaren Seitenwänden bietet das Schiff enorm viele Spielfunktionen und sieht im Regal beeindruckend aus.",
        pros: ["Tolle Minifiguren (Mando, Grogu, Greef Karga, Scout Trooper)", "Sehr stabil gebaut und gut bespielbar", "Kultstatus unter Star Wars Fans"],
        cons: ["Einige Aufkleber statt bedruckter Steine (in dieser Preisklasse schade)"],
        testDuration: "1 Monat",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Eines der meistverkauften Star Wars Sets der letzten Jahre.",
        verdict: "Sowohl zum Spielen als auch als Ausstellungsstück ein absoluter Volltreffer. Das Bauset ist jeden Cent wert."
    },
    {
        id: "ultimate_grogu",
        name: "Star Wars Ultimate Grogu (1:1 Maßstab)",
        category: "gadgets",
        priceRange: "80 - 120 €",
        rating: 4.9,
        stars: "★★★★★",
        image: "assets/ultimate_grogu.jpg",
        amazonLink: "https://www.amazon.de/s?k=Star+Wars+Ultimate+Grogu+Hasbro&tag=baokmedia21-21",
        review: "Der absolute Wahnsinn für jeden Star Wars Fan! Diese Ultimate Grogu Figur von Hasbro ist im 1:1 Maßstab (lebensgroß) und kommt mit realistischen Bewegungen und Sounds. Er reagiert auf Berührungen und sieht unglaublich echt aus.",
        pros: ["Lebensgroß (1:1 Maßstab) - wirkt wie echt", "Tolle Animatronic-Bewegungen (Augen, Ohren, Kopf)", "Sehr weiches Gewand und hochwertige Verarbeitung"],
        cons: ["Benötigt relativ viele Batterien", "Motor-Geräusche beim Bewegen sind hörbar"],
        testDuration: "1 Woche",
        hypeScore: 5,
        realityScore: 5,
        hypeComment: "Geht als Geschenkidee auf Social Media regelmäßig viral.",
        verdict: "Wer Grogu liebt, braucht diese Figur. Sie ist nicht nur ein Spielzeug, sondern ein fantastisches Sammlerstück, das jeden Schreibtisch oder jedes Wohnzimmer aufwertet.",
        perfectFor: "Hardcore Star Wars Fans und alle, die eine Schwäche für süße Aliens haben.",
        notFor: "Kleine Kinder, die eher ein weiches Kuscheltier zum Schlafen suchen (die Mechanik ist hart).",
        testerQuote: "Mitchs Fazit: Als er zum ersten Mal geblinzelt und die Ohren bewegt hat, bin ich fast vom Stuhl gefallen. Er wirkt so lebendig! Die Sounds aus der Serie sind perfekt getroffen.",
        hiddenFeature: "Wenn man ihn drei Mal sanft auf den Kopf tippt, aktiviert er die 'Macht' und hebt beide Arme mit dem typischen Soundeffekt.",
        alternatives: [
            { id: "funko_mandalorian", name: "Funko POP (für den kleinen Geldbeutel)" }
        ]
    }
];

const ARTICLES = [
    {
        id: "lego-sets-2026",
        title: "Die 5 besten LEGO-Sets für Erwachsene in 2026",
        excerpt: "LEGO ist längst nicht mehr nur für Kinder. Wir zeigen dir die beeindruckendsten Architektur-, Technik- und Star Wars-Modelle für dein Wohnzimmer.",
        date: "28. Juni 2026",
        tag: "LEGO & Spielzeug",
        readTime: "4 Min. Lesezeit",
        image: "assets/lego_botanical.png",
        content: `
            <p>LEGO hat sich in den letzten Jahren rasant gewandelt. Was früher hauptsächlich in Kinderzimmern stattfand, ist heute ein Premium-Hobby für Erwachsene geworden. Besonders die Botanical Collection, Architektur-Sets und gigantische Star Wars Modelle haben es uns angetan.</p>
            
            <h3>1. Die Botanical Collection: Pflanzen, die nie verwelken</h3>
            <p>Einer der größten Hypes auf Instagram und Pinterest sind die LEGO Blumensträuße und Bonsai-Bäume. Sie sehen nicht nur stylisch aus, sondern bieten auch ein extrem entspannendes Bau-Erlebnis. Wer keinen grünen Daumen hat, bekommt hier die perfekte Deko für den Schreibtisch.</p>
            <div class="article-product-embed">
                <img src="assets/lego_botanical.png" alt="LEGO Blumenstrauß">
                <div class="article-product-info">
                    <h4>LEGO Icons Wildblumenstrauß</h4>
                    <p>Wunderschöne Deko-Alternative zu echten Pflanzen. Sieht im Regal extrem hochwertig aus.</p>
                    <button class="btn btn-primary" onclick="openProductModal('lego_botanical'); return false;">Zum Produkt & Testbericht</button>
                </div>
            </div>

            <h3>2. Architektur für das Wohnzimmer</h3>
            <p>Die Architecture-Reihe besticht durch ihren cleanen, minimalistischen Look. Wer Skyline-Modelle von Tokio, Paris oder New York auf dem Board stehen hat, setzt ein echtes Design-Statement.</p>
            
            <blockquote>"Ich baue jeden Sonntagabend eine Stunde an meinem Set. Es ist besser als Meditation und hält mich vom Smartphone fern." – Olli</blockquote>
            
            <h3>Fazit</h3>
            <p>Erwachsene brauchen Hobbys, die sie aus dem digitalen Alltag herausholen. LEGO bietet genau diese haptische Befriedigung. Die Preise sind zwar im Premium-Segment, aber das Design und die Langlebigkeit rechtfertigen jeden Cent.</p>
        `
    },
    {
        id: "airfryer-vs-ofen",
        title: "Heißluftfritteuse vs. Backofen: Lohnt sich der Hype?",
        excerpt: "Jeder redet über Airfryer. Aber ist es wirklich eine Revolution für die Küche oder nur ein kleiner Backofen, der Platz wegnimmt? Unser ehrlicher Check.",
        date: "25. Juni 2026",
        tag: "Küche & Haushalt",
        readTime: "6 Min. Lesezeit",
        image: "assets/airfryer.png",
        content: `
            <p>Gefühlt hat inzwischen jeder einen Airfryer in der Küche stehen. Auf TikTok gibt es Millionen von Rezepten, von knusprigen Pommes bis hin zu gebackenen Haferflocken. Aber was ist dran am Hype?</p>
            
            <h3>Die Vorteile eines Airfryers</h3>
            <ul>
                <li><strong>Geschwindigkeit:</strong> Ein Airfryer muss nicht 15 Minuten vorheizen. Er ist sofort heiß.</li>
                <li><strong>Knusprigkeit:</strong> Durch den extrem starken Luftstrom werden Speisen rundum knusprig – und das mit 80% weniger Öl.</li>
                <li><strong>Energieeffizienz:</strong> Einen großen Ofen für zwei Brötchen aufzuheizen ist Stromverschwendung. Der Airfryer ist deutlich effizienter.</li>
            </ul>

            <div class="article-product-embed">
                <img src="assets/airfryer.png" alt="Cosori Airfryer">
                <div class="article-product-info">
                    <h4>COSORI Heißluftfritteuse 5.5L</h4>
                    <p>Unser unangefochtener Testsieger. Bietet genug Platz für 4 Personen und lässt sich super leicht reinigen.</p>
                    <button class="btn btn-primary" onclick="openProductModal('airfryer'); return false;">Zum Produkt & Testbericht</button>
                </div>
            </div>

            <h3>Die Nachteile</h3>
            <p>Man muss ehrlich sein: Es ist ein weiteres Gerät, das Platz auf der Arbeitsplatte wegnimmt. Wer nur 3 Quadratmeter in seiner Studenten-Küche hat, sollte sich die Anschaffung gut überlegen. Auch für Familienfeiern mit 8 Personen ist das Volumen oft zu klein.</p>

            <h3>Unser Fazit</h3>
            <p>Ja, der Hype ist berechtigt. Wer den Platz hat, wird seinen großen Backofen im Alltag wahrscheinlich nur noch für Pizzen oder riesige Kuchen anschalten. Für alles andere (Pommes, Gemüse, Lachs, Brötchen aufbacken) ist die Heißluftfritteuse unschlagbar schnell und knusprig.</p>
        `
    }
];

function renderBlogGrid() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    ARTICLES.forEach(article => {
        const card = document.createElement('div');
        card.className = 'blog-card animate-fade-in';
        card.onclick = () => openArticle(article.id);
        
        card.innerHTML = `
            <div class="blog-img-wrapper">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-tag">${article.tag}</span>
                    <span>${article.readTime}</span>
                </div>
                <h3 class="blog-title">${article.title}</h3>
                <p class="blog-excerpt">${article.excerpt}</p>
                <div class="blog-read-more">
                    Artikel lesen &rarr;
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openArticle(articleId) {
    const article = ARTICLES.find(a => a.id === articleId);
    if (!article) return;

    const container = document.getElementById('article-content-container');
    if(!container) return;
    container.innerHTML = `
        <div class="article-header">
            <span class="blog-tag">${article.tag}</span>
            <h1 class="article-title">${article.title}</h1>
            <div class="article-meta-large">
                <span>Von Checkbude24 Team</span>
                <span>•</span>
                <span>${article.date}</span>
                <span>•</span>
                <span>${article.readTime}</span>
            </div>
        </div>
        <img src="${article.image}" alt="${article.title}" class="article-hero-img">
        <div class="article-body">
            ${article.content}
        </div>
    `;

    navigateToView('article-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initNavigation();
    initMobileMenu();
    initSearchOverlay();
    initNewsletter();
    initLegalTabs();
    initProductCatalog();
    renderBlogGrid();
    loadBestsellers();
    initProductModalCloseListeners();
    initDealTicker();
    initFomoTicker();
});

/**
 * SPA-like Navigation System
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .logo-container a, .mobile-nav-drawer a, .footer-col a, .legal-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            const href = link.getAttribute('href');
            
            if (targetId) {
                // Let the hash change naturally and ensure view transitions
                if (href && (href.startsWith('#') || href.startsWith('#!'))) {
                    e.preventDefault();
                    navigateToView(targetId);
                    history.pushState(null, null, href.replace('#!', '#'));
                    
                    // If it's a legal page link, switch to the correct tab directly
                    const tabName = href.replace('#', '').replace('!', '/').split('/').pop();
                    if (targetId === 'legal-view' && tabName) {
                        if (tabName === 'imprint' || tabName === 'privacy' || tabName === 'terms') {
                            switchLegalTab(tabName);
                        }
                    }
                }
            }
            
            // Close mobile menu if open
            const drawer = document.querySelector('.mobile-nav-drawer');
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (drawer && drawer.classList.contains('open')) {
                drawer.classList.remove('open');
                if (toggle) {
                    toggle.classList.remove('active');
                    if (toggle.children.length >= 2) {
                        toggle.children[0].style.transform = 'none';
                        toggle.children[1].style.transform = 'none';
                    }
                }
            }
        });
    });

    // Check hash on initial load
    handleUrlHash();
    window.addEventListener('hashchange', handleUrlHash);
}

function handleUrlHash() {
    const hash = window.location.hash;
    const activeView = document.querySelector('.view.active');
    const activeViewId = activeView ? activeView.id : '';

    if (hash === '#collections' || hash === '#!/collections') {
        navigateToView('collections-view');
    } else if (hash === '#about' || hash === '#!/about') {
        navigateToView('about-view');
    } else if (hash === '#contact' || hash === '#!/contact') {
        navigateToView('contact-view');
    } else if (hash === '#home' || hash === '#!/home') {
        navigateToView('home-view');
    } else if (hash === '#imprint' || hash === '#!/imprint') {
        navigateToView('legal-view');
        switchLegalTab('imprint');
    } else if (hash === '#privacy' || hash === '#!/privacy') {
        navigateToView('legal-view');
        switchLegalTab('privacy');
    } else if (hash === '#terms' || hash === '#!/terms') {
        navigateToView('legal-view');
        switchLegalTab('terms');
    } else if (hash === '#shop' || hash === '#!/shop' || hash.startsWith('#!')) {
        navigateToView('shop-view');
    } else if (hash === '' || hash === '#') {
        if (activeViewId === '' || activeViewId === 'home-view') {
            navigateToView('home-view');
        }
    }
}

function navigateToView(viewId) {
    const targetView = document.getElementById(viewId);
    if (!targetView) return;

    if (targetView.classList.contains('active')) {
        return;
    }

    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    views.forEach(view => {
        view.classList.remove('active');
    });
    
    targetView.classList.add('active');
    
    navLinks.forEach(link => {
        const target = link.getAttribute('data-target');
        if (target === viewId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.navigateToView = navigateToView;

/**
 * Custom Product Catalog Engine
 */
function initProductCatalog() {
    // Render initial catalog (All Products)
    renderProductCatalog('all');

    // Setup Category Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderProductCatalog(category);
        });
    });

    // Render Native Trending Ad
    renderNativeTrending();
}

function renderProductCatalog(filter) {
    const grid = document.getElementById('catalog-products-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="no-products">Keine Produkte in dieser Kategorie gefunden.</p>';
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card animate-fade-in';
        card.addEventListener('click', () => openProductModal(product.id));

        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <span class="badge">${product.category.toUpperCase()}</span>
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="modal-rating" style="margin-bottom: 0.5rem;">
                    <span style="color: var(--color-accent); font-size: 0.9rem;">${product.stars}</span>
                    <span style="color: var(--color-text-secondary); font-size: 0.75rem; font-weight: 600;">${product.rating}</span>
                </div>
                <p class="product-price">Preis: ${product.priceRange}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

/**
 * Set Category Filter Programmatically
 */
function setCategoryFilter(category) {
    navigateToView('shop-view');
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.click();
        }
    });
}
window.setCategoryFilter = setCategoryFilter;

/**
 * Product Detail Modal Logic
 */
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modal-product-img').src = product.image;
    document.getElementById('modal-product-img').alt = product.name;
    document.getElementById('modal-product-cat').textContent = product.category;
    document.getElementById('modal-product-title').textContent = product.name;
    document.getElementById('modal-product-stars').textContent = product.stars;
    document.getElementById('modal-product-rating-num').textContent = `${product.rating}/5`;
    document.getElementById('modal-product-price').textContent = `Preisklasse: ${product.priceRange}`;
    document.getElementById('modal-product-review').textContent = product.review;

    // Fill New Authentic Elements
    document.getElementById('modal-product-duration').textContent = `📅 Getestet: ${product.testDuration}`;
    document.getElementById('modal-product-hypescore').textContent = '🔥'.repeat(product.hypeScore);
    document.getElementById('modal-product-realityscore').textContent = '★'.repeat(product.realityScore) + '☆'.repeat(5 - product.realityScore);
    document.getElementById('modal-product-hypecomment').textContent = product.hypeComment;
    document.getElementById('modal-product-verdict').textContent = product.verdict;

    // Enhanced Review Elements (Persona, Quote, Hidden Feature, Alternatives)
    const personaContainer = document.getElementById('modal-persona-container');
    if (product.perfectFor && product.notFor) {
        personaContainer.style.display = 'block';
        document.getElementById('modal-product-perfectfor').textContent = product.perfectFor;
        document.getElementById('modal-product-notfor').textContent = product.notFor;
    } else {
        personaContainer.style.display = 'none';
    }

    const quoteContainer = document.getElementById('modal-quote-container');
    if (product.testerQuote) {
        quoteContainer.style.display = 'block';
        document.getElementById('modal-product-testerquote').textContent = product.testerQuote;
    } else {
        quoteContainer.style.display = 'none';
    }

    const hiddenFeatureContainer = document.getElementById('modal-hidden-feature-container');
    if (product.hiddenFeature) {
        hiddenFeatureContainer.style.display = 'block';
        document.getElementById('modal-product-hiddenfeature').textContent = product.hiddenFeature;
    } else {
        hiddenFeatureContainer.style.display = 'none';
    }

    const alternativesContainer = document.getElementById('modal-alternatives-container');
    const alternativesList = document.getElementById('modal-product-alternatives');
    if (product.alternatives && product.alternatives.length > 0) {
        alternativesContainer.style.display = 'block';
        alternativesList.innerHTML = '';
        product.alternatives.forEach(alt => {
            const altPill = document.createElement('a');
            altPill.className = 'alternative-pill';
            // Click alternative will open that product modal instead
            altPill.onclick = () => { closeProductModal(); setTimeout(() => openProductModal(alt.id), 300); };
            altPill.textContent = alt.name;
            alternativesList.appendChild(altPill);
        });
    } else {
        alternativesContainer.style.display = 'none';
    }

    // Image Carousel Logic
    const imgElement = document.getElementById('modal-product-img');
    const prevBtn = document.getElementById('modal-carousel-prev');
    const nextBtn = document.getElementById('modal-carousel-next');
    const dotsContainer = document.getElementById('modal-carousel-dots');
    
    // Clear old carousel state
    if (window.currentCarouselListenerNext) {
        nextBtn.removeEventListener('click', window.currentCarouselListenerNext);
        prevBtn.removeEventListener('click', window.currentCarouselListenerPrev);
    }
    
    let currentImgIndex = 0;
    const images = product.images && product.images.length > 0 ? product.images : [product.image];
    
    const updateCarousel = () => {
        imgElement.src = images[currentImgIndex];
        // update dots
        Array.from(dotsContainer.children).forEach((dot, idx) => {
            if (idx === currentImgIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    };

    if (images.length > 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        dotsContainer.innerHTML = '';
        images.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = 'dot' + (idx === 0 ? ' active' : '');
            dot.onclick = () => { currentImgIndex = idx; updateCarousel(); };
            dotsContainer.appendChild(dot);
        });
        
        window.currentCarouselListenerNext = () => {
            currentImgIndex = (currentImgIndex + 1) % images.length;
            updateCarousel();
        };
        window.currentCarouselListenerPrev = () => {
            currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
            updateCarousel();
        };
        nextBtn.addEventListener('click', window.currentCarouselListenerNext);
        prevBtn.addEventListener('click', window.currentCarouselListenerPrev);
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        dotsContainer.innerHTML = '';
        imgElement.src = images[0];
    }

    // Render Pros
    const prosList = document.getElementById('modal-product-pros');
    prosList.innerHTML = '';
    product.pros.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = pro;
        prosList.appendChild(li);
    });

    // Render Cons
    const consList = document.getElementById('modal-product-cons');
    consList.innerHTML = '';
    product.cons.forEach(con => {
        const li = document.createElement('li');
        li.textContent = con;
        consList.appendChild(li);
    });

    // Render Multi-Shop CTA Links
    const linksContainer = document.getElementById('modal-product-links');
    if (linksContainer) {
        linksContainer.innerHTML = '';
        if (product.shops && product.shops.length > 0) {
            product.shops.forEach(shop => {
                const btn = document.createElement('a');
                btn.className = `modal-multi-link-btn ${shop.type || 'generic'}`;
                btn.href = shop.url;
                btn.target = "_blank";
                btn.innerHTML = `
                    <span>Auf ${shop.name} ansehen</span>
                    <span class="modal-multi-link-price">${shop.price || ''}</span>
                `;
                linksContainer.appendChild(btn);
            });
        } else {
            // Fallback to Amazon Link only
            const btn = document.createElement('a');
            btn.className = "modal-multi-link-btn amazon";
            btn.href = product.amazonLink;
            btn.target = "_blank";
            btn.innerHTML = `
                <span>Auf Amazon ansehen</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                     <polyline points="15 3 21 3 21 9"></polyline>
                     <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            `;
            linksContainer.appendChild(btn);
        }
    }

    // Render Related Products Ad
    renderModalRelated(product.id, product.category);

    // Show Modal
    const modal = document.getElementById('product-detail-modal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}
window.openProductModal = openProductModal;

function closeProductModal() {
    const modal = document.getElementById('product-detail-modal');
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Enable background scrolling
}
window.closeProductModal = closeProductModal;

function initProductModalCloseListeners() {
    const modal = document.getElementById('product-detail-modal');
    if (!modal) return;

    // Close on clicking outside the card
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeProductModal();
        }
    });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const drawer = document.querySelector('.mobile-nav-drawer');
    
    if (toggle && drawer) {
        toggle.addEventListener('click', () => {
            const isOpen = drawer.classList.contains('open');
            if (isOpen) {
                drawer.classList.remove('open');
                toggle.classList.remove('active');
                toggle.children[0].style.transform = 'none';
                toggle.children[1].style.transform = 'none';
            } else {
                drawer.classList.add('open');
                toggle.classList.add('active');
                toggle.children[0].style.transform = 'translateY(3.5px) rotate(45deg)';
                toggle.children[1].style.transform = 'translateY(-3px) rotate(-45deg)';
            }
        });
    }
}

/**
 * Search Overlay
 */
function initSearchOverlay() {
    const trigger = document.querySelector('.search-toggle');
    const overlay = document.querySelector('.search-overlay');
    const close = document.querySelector('.search-close');
    const input = document.querySelector('.search-input');
    
    if (trigger && overlay && close) {
        trigger.addEventListener('click', () => {
            overlay.classList.add('open');
            setTimeout(() => input.focus(), 300);
        });
        
        close.addEventListener('click', () => {
            overlay.classList.remove('open');
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('open')) {
                overlay.classList.remove('open');
            }
        });

        const suggestionsContainer = document.querySelector('.search-suggestions');
        if (suggestionsContainer) {
            suggestionsContainer.addEventListener('click', (e) => {
                if (e.target.tagName === 'SPAN') {
                    const query = e.target.textContent;
                    if (input) {
                        input.value = query;
                        handleSearchSubmit(new Event('submit'));
                    }
                }
            });
        }
    }
}

function handleSearchSubmit(event) {
    if (event) event.preventDefault();
    const input = document.querySelector('.search-input');
    const query = input ? input.value.trim().toLowerCase() : '';
    
    const overlay = document.querySelector('.search-overlay');
    if (overlay) {
        overlay.classList.remove('open');
    }
    
    if (query) {
        navigateToView('shop-view');
        // Search in local PRODUCTS
        const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.review.toLowerCase().includes(query));
        const grid = document.getElementById('catalog-products-grid');
        if (grid) {
            grid.innerHTML = '';
            if (matches.length === 0) {
                grid.innerHTML = '<p class="no-products">Keine Produkte passend zu deiner Suche gefunden.</p>';
                return;
            }
            matches.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card animate-fade-in';
                card.addEventListener('click', () => openProductModal(product.id));

                card.innerHTML = `
                    <div class="product-img-wrapper">
                        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                        <span class="badge">${product.category.toUpperCase()}</span>
                    </div>
                    <div class="product-details">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="modal-rating" style="margin-bottom: 0.5rem;">
                            <span style="color: var(--color-accent); font-size: 0.9rem;">${product.stars}</span>
                            <span style="color: var(--color-text-secondary); font-size: 0.75rem; font-weight: 600;">${product.rating}</span>
                        </div>
                        <p class="product-price">Preis: ${product.priceRange}</p>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
    }
}
window.handleSearchSubmit = handleSearchSubmit;

/**
 * Newsletter Form Submission Handler
 */
function initNewsletter() {
    window.handleNewsletterSubmit = function(event) {
        event.preventDefault();
        const form = event.target;
        const input = form.querySelector('input');
        const email = input.value;
        
        if (email) {
            // Send data to Brevo (Sendinblue)
            const formData = new FormData();
            formData.append('EMAIL', email);

            fetch("https://6441c82b.sibforms.com/serve/MUIFAKaDL_YdmiGN59hXf4uL-eKa22spKauAm2qwYiScPeY5K3jFHnit7TiD7hAxWhIbXoNkJIKnImkHwhheoz0QZcDBb9xIpclaibSs8KKNvf4-akNr61SFsWT2YeuupvpnIe3XdZEYI0cDvHwpWR7za7U8IAnUwk9FVbOazIpv2ijqn-1CsE7CnJEbyflgqNlkKC2gTGmU-uhJjA==", {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            }).then(() => {
                const parent = form.parentNode;
                parent.innerHTML = `
                    <div class="newsletter-success animate-fade-in" style="padding: 1rem 0; color: var(--color-accent);">
                        <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-bottom: 0.5rem; text-transform: uppercase;">Vielen Dank!</h4>
                        <p style="font-size: 0.85rem; line-height: 1.5; color: var(--color-text-secondary);">Wir haben deine E-Mail-Adresse (${email}) registriert. Du erhältst ab sofort unsere aktuellen Produkttrends.</p>
                    </div>
                `;
            }).catch(console.error);
        }
    };
}

/**
 * Contact Form Submission Handler
 */
window.handleContactSubmit = function(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('#contact-name').value;
    const email = form.querySelector('#contact-email').value;
    const message = form.querySelector('#contact-message').value;
    
    if (name && email && message) {
        const parent = form.parentNode;
        const currentLang = localStorage.getItem('sport_event_lang') || 'de';
        const titleText = currentLang === 'de' ? 'Vielen Dank!' : 'Thank you!';
        const bodyText = currentLang === 'de' 
            ? `Hallo ${name}, deine Nachricht wurde erfolgreich übermittelt. Wir werden uns unter <strong>${email}</strong> in Kürze bei dir melden.`
            : `Hello ${name}, your message has been sent successfully. We will get back to you at <strong>${email}</strong> shortly.`;
        
        parent.innerHTML = `
            <div class="contact-success animate-fade-in" style="padding: 2rem; background-color: var(--color-bg-secondary); border: 1px solid var(--color-border); border-radius: var(--border-radius-md); color: var(--color-text-primary);">
                <h4 style="font-family: var(--font-heading); font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--color-accent); text-transform: uppercase;">${titleText}</h4>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--color-text-secondary);">${bodyText}</p>
            </div>
        `;
    }
};

/**
 * Load 3 featured bestsellers on the homepage
 */
function loadBestsellers() {
    const grid = document.querySelector('.bestsellers-section .products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Pick the first 3 products for the homepage highlight
    const itemsToShow = PRODUCTS.slice(0, 3);
    
    itemsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.addEventListener('click', () => openProductModal(product.id));
        
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <span class="badge">TREND</span>
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="modal-rating" style="margin-bottom: 0.5rem;">
                    <span style="color: var(--color-accent); font-size: 0.9rem;">${product.stars}</span>
                    <span style="color: var(--color-text-secondary); font-size: 0.75rem; font-weight: 600;">${product.rating}</span>
                </div>
                <p class="product-price">Preis: ${product.priceRange}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

/**
 * Translations Dictionary for DE and EN
 */
const translations = {
    de: {
        announcement: "Ehrliche Produkttests & aktuelle Amazon-Trends rund um die Uhr",
        nav_home: "Home",
        nav_shop: "Empfehlungen",
        nav_collections: "Kollektionen",
        nav_about: "Über uns",
        hero_tag: "Ehrlich &amp; Unabhängig",
        hero_title: "DEIN GUIDE FÜR DIE BESTEN DEALS.",
        hero_desc: "Wir checken die angesagtesten Produkte, Gadgets und Haushalts-Hacks auf Amazon. Ehrlich bewertet, transparent verglichen und direkt für dich aufbereitet.",
        hero_btn_shop: "Empfehlungen ansehen",
        hero_btn_about: "Unsere Story",
        cat_tag: "Kategorien",
        cat_title: "Beliebte Themen",
        cat_tshirt_desc: "Praktische Helfer, innovative Gadgets und clevere Lösungen.",
        cat_tshirt_cta: "Küche durchstöbern",
        cat_hoodie_desc: "Ästhetische Deko-Trends und stilvolle Einrichtungen.",
        cat_hoodie_cta: "Wohnideen ansehen",
        cat_accessories_title: "Gadgets & Gear",
        cat_accessories_desc: "Technik, die den Alltag erleichtert, und nützliches Zubehör.",
        cat_accessories_cta: "Technik entdecken",
        value_title_1: "100% Unabhängig",
        value_desc_1: "Wir bewerten Produkte vollkommen eigenständig. Unsere Reviews basieren auf echtem Kundennutzen.",
        value_title_2: "Aktuelle Trends",
        value_desc_2: "Wir durchforsten Social Media & Pinterest nach den spannendsten Amazon-Neuheiten.",
        value_title_3: "Ehrliche Reviews",
        value_desc_3: "Keine geschönten Werbeversprechen. Wir listen klare Vorteile und reale Nachteile auf.",
        value_title_4: "Transparenz",
        value_desc_4: "Wir finanzieren uns durch Werbelinks – für dich bleibt der Preis zu 100% unverändert.",
        best_tag: "Auswahl",
        best_title: "Top-Empfehlungen der Redaktion",
        best_view_all: "Alle Empfehlungen ansehen →",
        badge_essential: "Essential",
        badge_premium: "Premium",
        badge_new: "Neu",
        shop_tag: "Produkt-Finder",
        shop_title: "Unsere Empfehlungen",
        shop_desc: "Ehrlich getestete Produkte und aktuelle Gadgets. Wähle eine Kategorie, um die besten Deals und Reviews anzuzeigen.",
        coll_tag: "Saison-Specials",
        coll_title: "Kurationen",
        coll_noe_tag: "Favoriten",
        coll_noe_title: "Virale Alltagshelfer",
        coll_noe_desc: "Diese Produkte gehen auf Pinterest und TikTok gerade viral. Wir haben sie genau unter die Lupe genommen und zeigen dir, ob sich die Anschaffung wirklich lohnt.",
        coll_noe_btn: "Zu den Trends",
        coll_preview_title: "Highlights der Kuration",
        founders_tag: "Über uns",
        founders_title: "Ehrlich geprüft. Einfach gekauft.",
        founders_text: "Hinter Checkbude24 steht ein kleines Team von Produkt-Enthusiasten. Wir verbringen Stunden damit, das Internet nach echten Geheimtipps auf Amazon zu durchsuchen.<br><br>Wir wissen, wie schwer es ist, zwischen Tausenden gefälschten Bewertungen echte Qualität zu erkennen. Deshalb erstellen wir kurze, knackige Reviews mit den wichtigsten Pro & Contra Argumenten. Wir verlinken direkt auf Amazon – so kannst du sicher, schnell und unkompliziert shoppen. Danke, dass du uns unterstützt!",
        about_tag: "Unsere Mission",
        about_heading: "Dein Kompass im Dschungel der Online-Angebote.",
        about_lead: "Checkbude24 hilft dir dabei, Fehlkäufe zu vermeiden und genau die Produkte zu finden, die dein Leben schöner oder leichter machen.",
        about_story_title_1: "Unabhängige Bewertung",
        about_story_desc_1: "Wir erhalten keine Bezahlung von Herstellern für bessere Bewertungen. Unser Fokus liegt auf der Wahrheit.",
        about_story_title_2: "Kuration statt Masse",
        about_story_desc_2: "Wir listen nicht alles, sondern nur das Beste. Jedes gelistete Produkt hat uns oder Hunderte Käufer nachweislich überzeugt.",
        contact_tag: "Schreib uns",
        contact_heading: "Fragen oder Vorschläge?",
        contact_desc: "Du hast ein Produkt entdeckt, das wir unbedingt testen sollten? Oder hast du Anregungen zu unserer Seite? Schreib uns einfach!",
        contact_detail_label_email: "E-Mail",
        contact_detail_label_hours: "Antwortzeit",
        contact_detail_val_hours: "In der Regel innerhalb von 24-48 Stunden",
        contact_form_name: "Dein Name",
        contact_form_email: "Deine E-Mail",
        contact_form_msg: "Nachricht",
        contact_form_submit: "Nachricht senden",
        contact_placeholder_name: "z.B. Anna Müller",
        contact_placeholder_email: "z.B. anna@email.de",
        contact_placeholder_msg: "Wie können wir dir helfen?",
        search_placeholder: "Produkte durchsuchen...",
        search_btn: "Suchen",
        search_suggestions: "Beliebte Suchen: <span>Heißluftfritteuse</span>, <span>Diffusor</span>, <span>Kopfhörer</span>",
        footer_title_shop: "Kategorien",
        footer_shop_all: "All Produkte",
        footer_shop_kitchen: "Küche & Haushalt",
        footer_shop_living: "Wohnen & Deko",
        footer_shop_gadgets: "Technik & Gadgets",
        footer_title_company: "Unternehmen",
        footer_company_about: "Über uns",
        footer_company_contact: "Kontakt",
        footer_title_newsletter: "Newsletter",
        footer_newsletter_desc: "Abonniere unseren Newsletter für die neuesten viralen Amazon-Trends und Testberichte.",
        footer_newsletter_placeholder: "Deine E-Mail-Adresse",
        footer_copyright: "&copy; 2026 Checkbude24. Alle Rechte vorbehalten. * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.",
        footer_privacy: "Datenschutz",
        footer_terms: "AGB",
        footer_imprint: "Impressum",
        legal_tab_imprint: "Impressum",
        legal_tab_privacy: "Datenschutz",
        legal_tab_terms: "AGB",
        legal_imprint_content: `<h2>Impressum</h2><p><strong>Checkbude24 / baokmedia</strong></p><p>c/o Impressumservice Dein-Impressum<br>Stettiner Straße 41<br>35410 Hungen</p><p><strong>Vertreten durch:</strong><br>O. Balko</p><p><strong>Kontakt:</strong><br>E-Mail: olli1270@gmail.com</p><p><strong>Haftungshinweis:</strong><br>Wir erstellen Testberichte und Vergleiche nach bestem Wissen. Für Verträge, Lieferungen und Serviceleistungen, die über externe Links (z.B. Amazon) zustande kommen, übernehmen wir keine Haftung. Es gelten die Bedingungen des jeweiligen Verkäufers.</p><p><strong>Teilnahme am Partnerprogramm:</strong><br>Checkbude24 ist Teilnehmer des Partnerprogramms von Amazon EU, das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann.</p>`,
        legal_privacy_content: `<h2>Datenschutzerklärung</h2><h3>1. Datenschutz auf einen Blick</h3><p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf unserer Test- und Empfehlungsseite auf.</p><h3>2. Hosting durch Vercel</h3><p>Wir hosten unsere Website bei Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA). Zur Bereitstellung der Website erfasst Vercel automatisiert Server-Logfiles (IP-Adresse, Browsertyp, Referrer-URL, Uhrzeit). Dies erfolgt auf Grundlage unserer berechtigten Interessen an einem sicheren und effizienten Betrieb (Art. 6 Abs. 1 lit. f DSGVO).</p><h3>3. Amazon Partnerprogramm & Cookies</h3><p>Diese Website enthält Partnerlinks (Affiliate-Links) zu Amazon. Wenn Sie auf einen dieser Links klicken und ein Produkt erwerben, erhalten wir eine kleine Provision. Amazon verwendet Cookies, um die Herkunft der Bestellungen nachzuvollziehen. Dadurch kann Amazon erkennen, dass Sie den Partnerlink auf unserer Website geklickt haben. Weitere Details zur Datennutzung finden Sie in der Datenschutzerklärung von Amazon.</p><h3>4. Lokaler Speicher (LocalStorage)</h3><p>Wir speichern Ihre ausgewählte Sprache (DE/EN) im LocalStorage Ihres Browsers, um Ihnen die Seite beim nächsten Aufruf direkt in Ihrer Wunschsprache anzuzeigen. (Art. 6 Abs. 1 lit. f DSGVO).</p>`,
        legal_terms_content: `<h2>Nutzungsbedingungen (AGB)</h2><h3>1. Geltungsbereich</h3><p>Diese Bedingungen regeln die Nutzung des Informationsangebots auf Checkbude24.</p><h3>2. Haftung für externe Links</h3><p>Alle Verlinkungen zu Amazon oder anderen Marktplätzen sind reine Empfehlungen. Verträge kommen ausschließlich zwischen Ihnen und dem jeweiligen Shopbetreiber bzw. Amazon-Verkäufer zustande. Wir übernehmen keine Haftung für die Richtigkeit der dortigen Produktpreise, Beschreibungen oder Lieferkonditionen.</p><h3>3. Urheberrecht</h3><p>Die auf dieser Website erstellten Inhalte, Testberichte und erzeugten Produktbilder unterliegen dem Urheberrecht und dürfen nicht ohne vorherige Zustimmung kopiert oder anderweitig genutzt werden.</p>`
    },
    en: {
        announcement: "Honest product reviews & trending Amazon finds 24/7",
        nav_home: "Home",
        nav_shop: "Recommendations",
        nav_collections: "Collections",
        nav_about: "About Us",
        hero_tag: "Honest & Independent",
        hero_title: "YOUR GUIDE TO THE BEST DEALS.",
        hero_desc: "We review the most popular products, home hacks, and gadgets on Amazon. Honestly rated, transparently compared, and prepared directly for you.",
        hero_btn_shop: "View Recommendations",
        hero_btn_about: "Our Story",
        cat_tag: "Categories",
        cat_title: "Popular Categories",
        cat_tshirt_desc: "Practical helpers, innovative gadgets, and smart solutions.",
        cat_tshirt_cta: "Browse Kitchen",
        cat_hoodie_desc: "Aesthetic decor trends and stylish interior highlights.",
        cat_hoodie_cta: "View Home Decor",
        cat_accessories_title: "Gadgets & Gear",
        cat_accessories_desc: "Tech that simplifies your daily life, and useful accessories.",
        cat_accessories_cta: "Explore Tech",
        value_title_1: "100% Independent",
        value_desc_1: "We rate products completely independently. Our reviews focus on real customer value.",
        value_title_2: "Latest Trends",
        value_desc_2: "We comb social media & Pinterest for the most exciting Amazon novelties.",
        value_title_3: "Honest Reviews",
        value_desc_3: "No glossy ad talk. We list clear advantages and real downsides.",
        value_title_4: "Transparency",
        value_desc_4: "We fund ourselves via partner links – the price remains 100% the same for you.",
        best_tag: "Selected",
        best_title: "Top Editorial Recommendations",
        best_view_all: "View all recommendations →",
        badge_essential: "Essential",
        badge_premium: "Premium",
        badge_new: "New",
        shop_tag: "Product Finder",
        shop_title: "Our Recommendations",
        shop_desc: "Honestly tested products and viral gadgets. Pick a category to view the best deals and reviews.",
        coll_tag: "Seasonal Specials",
        coll_title: "Curations",
        coll_noe_tag: "Favorites",
        coll_noe_title: "Viral Daily Essentials",
        coll_noe_desc: "These products are currently going viral on Pinterest and TikTok. We put them to the test to show you if they are really worth buying.",
        coll_noe_btn: "To the Trends",
        coll_preview_title: "Curation Highlights",
        founders_tag: "About Us",
        founders_title: "Honestly checked. Simply bought.",
        founders_text: "Behind Checkbude24 is a small team of product enthusiasts. We spend hours scouring the internet for genuine insider tips on Amazon.<br><br>We know how hard it is to find real quality among thousands of fake reviews. That's why we create short, harsh reviews showing the most important pros and cons. We link directly to Amazon – allowing you to shop safely, quickly, and easily. Thank you for supporting us!",
        about_tag: "Our Mission",
        about_heading: "Your compass in the jungle of online offers.",
        about_lead: "Checkbude24 helps you avoid bad purchases and find exactly the products that make your life more beautiful or easier.",
        about_story_title_1: "Independent Rating",
        about_story_desc_1: "We receive no payment from manufacturers for better ratings. Our focus is on the truth.",
        about_story_title_2: "Curation Over Quantity",
        about_story_desc_2: "We don't list everything, only the best. Every listed product has proven to satisfy us or hundreds of buyers.",
        contact_tag: "Get in touch",
        contact_heading: "Questions or Suggestions?",
        contact_desc: "Discovered a product we absolutely should review? Or have feedback on our site? Write to us!",
        contact_detail_label_email: "Email",
        contact_detail_label_hours: "Response Time",
        contact_detail_val_hours: "Usually within 24-48 hours",
        contact_form_name: "Your Name",
        contact_form_email: "Your Email",
        contact_form_msg: "Message",
        contact_form_submit: "Send Message",
        contact_placeholder_name: "e.g. Jane Doe",
        contact_placeholder_email: "e.g. jane@email.com",
        contact_placeholder_msg: "How can we help you?",
        search_placeholder: "Search products...",
        search_btn: "Search",
        search_suggestions: "Popular searches: <span>Airfryer</span>, <span>Diffuser</span>, <span>Headphones</span>",
        footer_title_shop: "Categories",
        footer_shop_all: "All Products",
        footer_shop_kitchen: "Kitchen & Home",
        footer_shop_living: "Home & Decor",
        footer_shop_gadgets: "Tech & Gadgets",
        footer_title_company: "Company",
        footer_company_about: "About Us",
        footer_company_contact: "Contact",
        footer_title_newsletter: "Newsletter",
        footer_newsletter_desc: "Subscribe to our newsletter for the latest viral Amazon trends and reviews.",
        footer_newsletter_placeholder: "Your email address",
        footer_copyright: "&copy; 2026 Checkbude24. All rights reserved. * As an Amazon Associate I earn from qualifying purchases.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms",
        footer_imprint: "Imprint",
        legal_tab_imprint: "Imprint",
        legal_tab_privacy: "Privacy Policy",
        legal_tab_terms: "Terms",
        legal_imprint_content: `<h2>Imprint</h2><p><strong>Checkbude24 / baokmedia</strong></p><p>c/o Impressumservice Dein-Impressum<br>Stettiner Straße 41<br>35410 Hungen</p><p><strong>Represented by:</strong><br>O. Balko</p><p><strong>Contact:</strong><br>Email: olli1270@gmail.com</p><p><strong>Disclaimer:</strong><br>We create reviews and comparisons to the best of our knowledge. We assume no liability for contracts, deliveries, or services established via external links (e.g. Amazon). The terms and conditions of the respective seller apply.</p><p><strong>Affiliate Disclosure:</strong><br>Checkbude24 is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.de.</p>`,
        legal_privacy_content: `<h2>Privacy Policy</h2><h3>1. Privacy at a Glance</h3><p>This privacy policy explains the nature, scope, and purpose of the processing of personal data on our review and recommendation website.</p><h3>2. Hosting by Vercel</h3><p>We host our website with Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA). To deliver the website, Vercel automatically collects server log files (IP address, browser type, referrer URL, timestamp). This is based on our legitimate interests in operating our website securely and efficiently (Art. 6 para. 1 lit. f GDPR).</p><h3>3. Amazon Associates Program & Cookies</h3><p>This website contains affiliate links to Amazon. If you click on one of these links and purchase a product, we receive a small commission. Amazon uses cookies to trace the origin of orders. This allows Amazon to recognize that you clicked the partner link on our website. For more details, please see Amazon's privacy policy.</p><h3>4. Local Storage</h3><p>We store your selected language (DE/EN) in your browser's LocalStorage to display the site in your preferred language upon your next visit. (Art. 6 para. 1 lit. f GDPR).</p>`,
        legal_terms_content: `<h2>Terms of Use (AGB)</h2><h3>1. Scope of Application</h3><p>These terms govern the use of the information services provided on Checkbude24.</p><h3>2. Liability for External Links</h3><p>All links to Amazon or other marketplaces are recommendation-only. Contracts are established exclusively between you and the respective seller or Amazon. We assume no liability for the correctness of prices, descriptions, or delivery conditions shown there.</p><h3>3. Copyright</h3><p>The content, reviews, and product images created on this website are subject to copyright and may not be copied or used without prior consent.</p>`
    }
};

/**
 * Initialize Language Switcher
 */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('sport_event_lang') || 'de';
    
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === savedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            if (selectedLang) {
                switchLanguage(selectedLang);
            }
        });
    });
    
    applyLanguage(savedLang);
}

function switchLanguage(lang) {
    const currentLang = localStorage.getItem('sport_event_lang') || 'de';
    if (lang === currentLang) return;
    
    localStorage.setItem('sport_event_lang', lang);
    
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    applyLanguage(lang);
}

function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    const translatablePlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    translatablePlaceholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

/**
 * Initialize Legal Tab Click Event Handlers
 */
function initLegalTabs() {
    const tabButtons = document.querySelectorAll('.legal-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-legal-section');
            if (section) {
                window.location.hash = `#${section}`;
            }
        });
    });
}
window.initLegalTabs = initLegalTabs;

function switchLegalTab(tabName) {
    const tabButtons = document.querySelectorAll('.legal-tab-btn');
    const contentPanels = document.querySelectorAll('.legal-section-content');
    
    tabButtons.forEach(btn => {
        if (btn.getAttribute('data-legal-section') === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    contentPanels.forEach(panel => {
        if (panel.id === `legal-section-${tabName}`) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
}
window.switchLegalTab = switchLegalTab;

/* ================================================
   NATIVE SHOPPING AD LOGIC
   ================================================ */

function initDealTicker() {
    const tickerText = document.getElementById('deal-ticker-text');
    if (!tickerText) return;
    
    // Pick a random product as the "Deal of the day"
    const randomProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    
    tickerText.innerHTML = `Amazon Blitzangebot: <strong>${randomProduct.name}</strong> – Nur für kurze Zeit!`;
    const cta = document.getElementById('deal-ticker-cta');
    if(cta) cta.href = randomProduct.amazonLink;
}
window.initDealTicker = initDealTicker;

function renderNativeTrending() {
    const grid = document.getElementById('native-trending-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    // Select 4 high-hype products
    const trending = [...PRODUCTS].sort((a, b) => b.hypeScore - a.hypeScore).slice(0, 4);
    
    trending.forEach(product => {
        const card = document.createElement('a');
        card.className = 'native-ad-card';
        card.href = product.amazonLink;
        card.target = '_blank';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="native-ad-card-img" loading="lazy">
            <h4 class="native-ad-card-name">${product.name}</h4>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top: auto;">
                <span class="native-ad-card-price">${product.priceRange}</span>
                <span class="native-ad-card-stars">★★★★★</span>
            </div>
            <span class="native-ad-card-cta">Auf Amazon ansehen →</span>
        `;
        grid.appendChild(card);
    });
}
window.renderNativeTrending = renderNativeTrending;

function renderModalRelated(currentProductId, category) {
    const grid = document.getElementById('modal-related-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    // Find up to 3 products in the same category, excluding the current one
    const related = PRODUCTS.filter(p => p.category === category && p.id !== currentProductId)
                            .slice(0, 3);
                            
    // Fallback if not enough in same category
    if (related.length < 3) {
        const others = PRODUCTS.filter(p => p.id !== currentProductId && !related.find(r => r.id === p.id));
        related.push(...others.slice(0, 3 - related.length));
    }
    
    related.forEach(product => {
        const card = document.createElement('a');
        card.className = 'modal-related-card';
        card.href = product.amazonLink;
        card.target = '_blank';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h4 class="modal-related-card-name">${product.name}</h4>
            <span class="modal-related-card-price">${product.priceRange}</span>
        `;
        grid.appendChild(card);
    });
}
window.renderModalRelated = renderModalRelated;

/* ================================================
   COOKIE CONSENT & INLINE SEARCH LOGIC
   ================================================ */

function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptAll = document.getElementById('cookie-accept-all');
    const acceptEssential = document.getElementById('cookie-accept-essential');

    if (!banner) return;

    // Check if consent is already given
    if (!localStorage.getItem('checkbude24_cookie_consent')) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 1500); // Show after 1.5s
    }

    const setConsent = (type) => {
        localStorage.setItem('checkbude24_cookie_consent', type);
        banner.classList.remove('show');
    };

    if (acceptAll) acceptAll.addEventListener('click', () => setConsent('all'));
    if (acceptEssential) acceptEssential.addEventListener('click', () => setConsent('essential'));
}

function initInlineSearch() {
    const searchInput = document.getElementById('inline-search-input');
    const searchBtn = document.getElementById('inline-search-btn');
    const suggestContainer = document.getElementById('search-suggest');

    if (!searchInput) return;

    if (suggestContainer) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            
            if (query.length < 2) {
                suggestContainer.classList.add('hidden');
                return;
            }

            const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)).slice(0, 4);
            
            if (matches.length === 0) {
                suggestContainer.classList.add('hidden');
                return;
            }

            suggestContainer.innerHTML = '';
            matches.forEach(p => {
                const item = document.createElement('div');
                item.className = 'suggest-item';
                item.innerHTML = `
                    <img src="${p.image}" class="suggest-img" alt="${p.name}">
                    <div class="suggest-info">
                        <span class="suggest-title">${p.name}</span>
                        <span class="suggest-price">${p.priceRange}</span>
                    </div>
                `;
                item.onclick = () => {
                    openProductModal(p.id);
                    suggestContainer.classList.add('hidden');
                    searchInput.value = '';
                };
                suggestContainer.appendChild(item);
            });
            suggestContainer.classList.remove('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestContainer.contains(e.target)) {
                suggestContainer.classList.add('hidden');
            }
        });
    }

    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        
        // Remove active state from all category buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(b => b.classList.remove('active'));

        const grid = document.getElementById('catalog-products-grid');
        if (!grid) return;

        grid.innerHTML = '';
        
        if (!query) {
            // If empty search, render all products
            renderProductCatalog('all');
            // Re-activate "all" button
            const allBtn = document.querySelector('.filter-btn[data-category="all"]');
            if(allBtn) allBtn.classList.add('active');
            return;
        }

        const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.review.toLowerCase().includes(query));
        
        if (matches.length === 0) {
            grid.innerHTML = '<p class="no-products">Keine Produkte passend zu deiner Suche gefunden.</p>';
            return;
        }
        
        matches.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card animate-fade-in';
            card.addEventListener('click', () => openProductModal(product.id));

            card.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    <span class="badge">${product.category.toUpperCase()}</span>
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="modal-rating" style="margin-bottom: 0.5rem;">
                        <span style="color: var(--color-accent); font-size: 0.9rem;">${product.stars}</span>
                        <span style="color: var(--color-text-secondary); font-size: 0.75rem; font-weight: 600;">${product.rating}</span>
                    </div>
                    <p class="product-price">Preis: ${product.priceRange}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Ensure these functions run on load
document.addEventListener('DOMContentLoaded', () => {
    initCookieBanner();
    initInlineSearch();
});

// ================================================
// CONVERSION BOOSTERS LOGIC
// ================================================

function handlePriceAlert(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('input');
    const success = form.querySelector('.price-alert-success');
    
    if (input.value) {
        // Mock sending to Brevo API
        setTimeout(() => {
            success.classList.remove('hidden');
            input.value = '';
            setTimeout(() => {
                form.classList.add('hidden');
                success.classList.add('hidden');
            }, 3000);
        }, 500);
    }
}

function initFomoTicker() {
    const toast = document.getElementById('fomo-toast');
    const nameEl = document.getElementById('fomo-name');
    const productEl = document.getElementById('fomo-product');
    
    if (!toast || !nameEl || !productEl) return;

    const names = ["Gerade im Trend:", "Oft gelesen:", "Beliebter Testbericht:", "Gerade gesucht:"];
    
    const showToast = () => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)].name;
        
        nameEl.textContent = randomName;
        productEl.textContent = randomProduct;
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    };

    // First toast after 3 seconds
    setTimeout(() => {
        showToast();
        // Then randomly show it continuously
        setInterval(() => {
            showToast();
        }, 15000); 
    }, 3000);
}
