/* ==========================================================================
   Checkbude24 - Interactive Client Application Logic (Amazon Affiliate)
   ========================================================================== */

// --- Curated Products Dataset ---
const PRODUCTS = [
    {
        id: "airfryer",
        name: "Cosori XXL Heißluftfritteuse 5,5L",
        category: "kitchen",
        priceRange: "89 - 119 €",
        rating: 4.8,
        stars: "★★★★★",
        image: "assets/airfryer.png",
        amazonLink: "https://www.amazon.de/s?k=COSORI+Heissluftfritteuse+5.5L&tag=baokmedia21-21",
        review: "Der absolute Spitzenreiter unter den Heißluftfritteusen auf Amazon. Mit ihrem großzügigen 5,5-Liter-Garkorb eignet sie sich ideal für Familien. Sie erzielt extrem knusprige Ergebnisse bei bis zu 85% weniger Fett im Vergleich zu klassischen Fritteusen. Das Touch-Display bietet 11 voreingestellte Programme. Die Reinigung ist dank der antihaftbeschichteten, spülmaschinenfesten Teile im Handumdrehen erledigt.",
        pros: ["Sehr gleichmäßiges Garergebnis dank 360° Luftzirkulation", "Spülmaschinenfeste Antihaft-Teile", "Großes Fassungsvermögen für bis zu 5 Personen"],
        cons: ["Relativ große Stellfläche in der Küche erforderlich", "Signalton am Ende des Garvorgangs ist recht laut"]
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
        pros: ["Großer Wassertank für bis zu 16 Stunden Betrieb", "Sehr leiser Betrieb, ideal fürs Schlafzimmer", "Stimmungsvolle, dimmbare LED-Beleuchtung"],
        cons: ["Netzkabel könnte etwas länger sein", "Besteht hauptsächlich aus Kunststoff (Holzoptik-Sockel)"]
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
        pros: ["Branchenführende aktive Geräuschunterdrückung (ANC)", "Erstklassige Akkulaufzeit von bis zu 30 Stunden", "Multipoint-Verbindung (mit 2 Geräten gleichzeitig koppeln)"],
        cons: ["Touch-Steuerung an den Ohrmuscheln erfordert Eingewöhnung", "Nicht offiziell spritzwassergeschützt"]
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
        pros: ["Hervorragende Isolierleistung für Heiß- und Kaltgetränke", "Enorm robuste und kratzfeste Pulverbeschichtung", "Edles, minimalistisches Design in vielen Farben"],
        cons: ["Durch die Doppelwand etwas schwerer als Plastikflaschen", "Reinigung des Flaschenhalses erfordert eine Bürste"]
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
        pros: ["Vollautomatische Selbstreinigung und Trocknung der Mopps", "Hervorragende Hindernisvermeidung und präzise Kartierung", "Rotierende Mopps entfernen auch hartnäckige Flecken"],
        cons: ["Die Reinigungsstation benötigt relativ viel Stellplatz", "Hohe Anschaffungskosten"]
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
        pros: ["Das am einfachsten zu reinigende Milchsystem auf dem Markt", "Sehr intuitive Bedienung über farbige Symbole", "Speichert bis zu 4 persönliche Benutzerprofile"],
        cons: ["Das Mahlwerk ist im Betrieb vergleichsweise laut", "Abtropfschale füllt sich durch Spülvorgänge recht schnell"]
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
        pros: ["Offiziell MFi-zertifiziert für volles 15W MagSafe Laden", "Geniales, platzsparendes Falt-Design für Reisen", "Hochwertiges Gehäuse aus Aluminium und Soft-Touch-Material"],
        cons: ["Netzteil ist im Lieferumfang enthalten, macht das Set aber teurer", "Nur für MagSafe-kompatible Apple-Geräte optimal"]
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
        pros: ["Enorme Power (90W) bei sehr leiser QuietGlide-Technologie", "Inklusive 5 verschiedenen Massageaufsätzen für alle Muskelgruppen", "App-Steuerung regelt die Intensität automatisch passend zum Video"],
        cons: ["Sehr hoher Preis im Vergleich zu No-Name-Produkten", "Mit ca. 1,1 kg Eigengewicht bei längerer Nutzung etwas schwer in der Hand"]
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
        pros: ["Enorme Zeitersparnis bei der Essenszubereitung", "Viele verschiedene Aufsätze und Klingen im Set enthalten", "Kompakter Auffangbehälter hält die Küche sauber"],
        cons: ["Die Klingen sind extrem scharf (Verletzungsgefahr beim Reinigen)", "Nicht alle Teile sind für die Spülmaschine geeignet"]
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
        pros: ["Wunderschöne, gemütliche Lichteffekte für Fotos und Videos", "16 Farben und diverse Modi bequem per Fernbedienung steuerbar", "Sehr energiesparend dank LED-Technik"],
        cons: ["Das Gehäuse wird bei längerem Betrieb spürbar warm", "Die Standfestigkeit des Stativs könnte stabiler sein"]
    },
    {
        id: "miniprojector",
        name: "Magcubic Mini Beamer HY300",
        category: "gadgets",
        priceRange: "60 - 85 €",
        rating: 4.5,
        stars: "★★★★☆",
        image: "assets/miniprojector.png",
        amazonLink: "https://www.amazon.de/s?k=Mini+Beamer+HY300&tag=baokmedia21-21",
        review: "Ein echter Gamechanger für Heimkino-Fans mit kleinem Budget. Dieser portable Mini-Beamer läuft mit Android TV, hat integriertes WLAN sowie Bluetooth und projiziert dank des 180° schwenkbaren Designs ein scharfes Bild an Decken oder Wände. Ideal für gemütliche Filmabende im Bett oder beim Camping.",
        pros: ["Sehr kompakt und flexibel um 180 Grad schwenkbar", "Integriertes Android-Betriebssystem für direktes Streaming (Netflix, YouTube)", "Automatischer Trapezkorrektur-Ausgleich"],
        cons: ["Integrierter Lautsprecher hat wenig Bass (Bluetooth-Box empfohlen)", "Lüftergeräusch ist in ruhigen Szenen hörbar"]
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
        pros: ["Sehr flaches Design, lässt sich einfach unter Möbeln verstauen", "Einfache Steuerung per Fernbedienung oder App", "Sehr leiser Motor, stört nicht bei Video-Calls"],
        cons: ["Nur zum Gehen geeignet (Geschwindigkeit meist bis 6 km/h begrenzt)", "Keine Steigungsfunktion einstellbar"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initNavigation();
    initMobileMenu();
    initSearchOverlay();
    initNewsletter();
    initLegalTabs();
    initProductCatalog();
    loadBestsellers();
    initProductModalCloseListeners();
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

    // Set Amazon CTA Link
    document.getElementById('modal-product-link').href = product.amazonLink;

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
            const parent = form.parentNode;
            parent.innerHTML = `
                <div class="newsletter-success animate-fade-in" style="padding: 1rem 0; color: var(--color-accent);">
                    <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-bottom: 0.5rem; text-transform: uppercase;">Vielen Dank!</h4>
                    <p style="font-size: 0.85rem; line-height: 1.5; color: var(--color-text-secondary);">Wir haben deine E-Mail-Adresse (${email}) registriert. Du erhältst ab sofort unsere aktuellen Produkttrends.</p>
                </div>
            `;
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
