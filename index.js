/* ==========================================================================
   Sport-EventStore - Interactive Client Application Logic
   ========================================================================== */

let ignoreNextShopHashChange = (window.location.hash === '' || window.location.hash === '#' || window.location.hash === '#home' || window.location.hash === '#about' || window.location.hash === '#collections' || window.location.hash === '#sustainability' || window.location.hash === '#values' || window.location.hash === '#contact' || window.location.hash === '#imprint' || window.location.hash === '#privacy' || window.location.hash === '#terms');

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initNavigation();
    initMobileMenu();
    initSearchOverlay();
    initColorDots();
    initNewsletter();
    setupShopLoadingState();
    loadBestsellers();
    initLegalTabs();
    
    // Start syncing the shopping cart quantity badge
    setInterval(syncCartCount, 1000);
    document.addEventListener('click', () => setTimeout(syncCartCount, 200));
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
                // If it's a Spreadshop route (starts with #!), let the hash change naturally and ensure view transitions
                if (href && href.startsWith('#!')) {
                    navigateToView(targetId);
                    return;
                }
                
                // Prevent default hash navigation to prevent Spreadshop script from hijacking
                e.preventDefault();
                navigateToView(targetId);
                
                // Update URL in address bar without triggering hashchange event
                if (href) {
                    history.pushState(null, null, href);
                }
                
                // If it's a legal page link, switch to the correct tab directly
                if (targetId === 'legal-view' && href) {
                    const tabName = href.replace('#', '');
                    if (tabName === 'imprint' || tabName === 'privacy' || tabName === 'terms') {
                        switchLegalTab(tabName);
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
    } else if (hash === '#sustainability' || hash === '#!/sustainability') {
        navigateToView('sustainability-view');
    } else if (hash === '#values' || hash === '#!/values') {
        navigateToView('values-view');
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
    } else if (hash === '#shop' || hash.startsWith('#!')) {
        // If it's a default Spreadshop redirect on initial load of a non-shop page, ignore it.
        if (ignoreNextShopHashChange && (hash === '#!' || hash === '#!/')) {
            ignoreNextShopHashChange = false; // Reset the flag so future navigation works
            if (activeViewId && activeViewId !== 'shop-view') {
                const correctHash = activeViewId === 'home-view' ? '#home' : '#' + activeViewId.replace('-view', '');
                history.pushState(null, null, correctHash);
            }
            return;
        }
        ignoreNextShopHashChange = false; // Any other hash change resets the ignore flag
        navigateToView('shop-view');
    } else if (hash === '' || hash === '#') {
        // Only default to home on initial load or if we are already on home.
        // Prevents Spreadshop state resets from kicking the user back to the home screen.
        if (activeViewId === '' || activeViewId === 'home-view') {
            navigateToView('home-view');
        }
    }
}

function navigateToView(viewId) {
    const targetView = document.getElementById(viewId);
    if (!targetView) return;

    // If the requested view is already active, don't perform transitions or scroll back to top
    if (targetView.classList.contains('active')) {
        return;
    }

    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Hide all views
    views.forEach(view => {
        view.classList.remove('active');
    });
    
    // Show target view
    targetView.classList.add('active');
    
    // Trigger a redraw/scroll for Spreadshop container if it is active
    if (viewId === 'shop-view') {
        window.dispatchEvent(new Event('resize'));
    }
    
    // Update active nav link classes
    navLinks.forEach(link => {
        const target = link.getAttribute('data-target');
        if (target === viewId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll to top smoothly when switching between main sections
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Global exposure for navigation actions
window.navigateToView = navigateToView;

/**
 * Handle Shop Category Navigation
 */
function navigateToShopCategory(category) {
    navigateToView('shop-view'); // Switch view first to ensure we display it
    if (category === 't-shirts') {
        window.location.hash = '#!/search?q=shirt';
    } else if (category === 'hoodies') {
        window.location.hash = '#!/search?q=hoodie';
    } else if (category === 'accessories') {
        window.location.hash = '#!/search?q=cap';
    } else {
        navigateToView('shop-view');
    }
    
    console.log(`Navigating to Spreadshop category: ${category}`);
    
    // Scroll down to the shop container
    const shopContainer = document.getElementById('myShop');
    if (shopContainer) {
        setTimeout(() => {
            shopContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
}
window.navigateToShopCategory = navigateToShopCategory;

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
                // Animate hamburger lines back
                toggle.children[0].style.transform = 'none';
                toggle.children[1].style.transform = 'none';
            } else {
                drawer.classList.add('open');
                toggle.classList.add('active');
                // Animate hamburger lines to X
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
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('open')) {
                overlay.classList.remove('open');
            }
        });

        // Clickable search suggestions using event delegation
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

/**
 * Handle Search Form Submission
 */
function handleSearchSubmit(event) {
    if (event) event.preventDefault();
    const input = document.querySelector('.search-input');
    const query = input ? input.value.trim() : '';
    
    // Close the search overlay
    const overlay = document.querySelector('.search-overlay');
    if (overlay) {
        overlay.classList.remove('open');
    }
    
    if (query) {
        // Redirect to shop view with search query hash
        window.location.hash = `#!/search?q=${encodeURIComponent(query)}`;
    } else {
        window.location.hash = '#!/';
    }
}
window.handleSearchSubmit = handleSearchSubmit;

/**
 * Interactive Product Card Color Dot Selectors
 */
function initColorDots() {
    const dots = document.querySelectorAll('.color-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering product card click event
            
            // Get all siblings in parent
            const siblings = dot.parentNode.querySelectorAll('.color-dot');
            siblings.forEach(s => s.classList.remove('active'));
            
            // Activate selected
            dot.classList.add('active');
            
            // Interactive visual response: change image color tint (demonstration only)
            const colorName = dot.getAttribute('title');
            console.log(`Ausgewählte Farbe für Produkt: ${colorName}`);
        });
    });
}

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
                    <p style="font-size: 0.85rem; line-height: 1.5; color: var(--color-text-secondary);">Wir haben deine E-Mail-Adresse (${email}) registriert. Freue dich auf exklusive Updates.</p>
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
        console.log(`Kontakt-Nachricht von ${name} (${email}): ${message}`);
    }
};

/**
 * Setup Spreadshop Loading & Integration Handler
 */
function setupShopLoadingState() {
    const shopContainer = document.getElementById('myShop');
    
    // Poll to check if Spreadshop loaded its content
    let checkInterval = setInterval(() => {
        const hasLoadedIFrameOrProducts = shopContainer && (shopContainer.querySelector('iframe') || shopContainer.querySelector('.sprd-app') || shopContainer.children.length > 1);
        if (hasLoadedIFrameOrProducts) {
            removeLoadingSpinner();
        }
    }, 500);

    // Fallback to remove loader after 4 seconds
    setTimeout(() => {
        removeLoadingSpinner();
    }, 4000);

    function removeLoadingSpinner() {
        clearInterval(checkInterval);
        const spinner = document.querySelector('.shop-loading-spinner');
        if (spinner) {
            spinner.style.display = 'none';
        }
    }
}

/**
 * Sync custom basket quantity badge with Spreadshop's internal state
 */
function syncCartCount() {
    const shopContainer = document.getElementById('myShop');
    if (!shopContainer) return;
    
    const customBadge = document.querySelector('.bag-count');
    if (!customBadge) return;
    
    // Selectors for finding Spreadshop's quantity badges in the DOM
    const selectors = [
        '[class*="basket-amount"]',
        '[class*="basket-count"]',
        '[class*="cart-count"]',
        '[class*="quantity-badge"]',
        '.sprd-basket-amount',
        '.sprd-basket-quantity',
        '.sprd-cart-count'
    ];
    
    let quantityText = '';
    for (let selector of selectors) {
        const el = shopContainer.querySelector(selector);
        if (el) {
            const text = el.textContent.trim().replace(/\D/g, '');
            if (text !== '') {
                quantityText = text;
                break;
            }
        }
    }
    
    // Fallback: search for numbers inside links or buttons pointing to the basket
    if (quantityText === '') {
        const cartLinks = shopContainer.querySelectorAll('a[href*="basket"], a[href*="cart"], button[class*="basket"], button[class*="cart"]');
        for (let link of cartLinks) {
            const badge = link.querySelector('[class*="badge"], [class*="count"], [class*="amount"]');
            if (badge) {
                const text = badge.textContent.trim().replace(/\D/g, '');
                if (text !== '') {
                    quantityText = text;
                    break;
                }
            } else {
                const text = link.textContent.trim().replace(/\D/g, '');
                if (text !== '' && text.length <= 2) {
                    quantityText = text;
                    break;
                }
            }
        }
    }
    
    // Update parent badge
    if (quantityText !== '') {
        customBadge.textContent = quantityText;
        customBadge.style.display = 'flex';
    } else {
        customBadge.textContent = '0';
    }
}

/**
 * Dynamically load bestseller products from the Spreadshop API feed
 */
async function loadBestsellers() {
    const grid = document.querySelector('.bestsellers-section .products-grid');
    if (!grid) return;
    
    try {
        const response = await fetch('https://sport-event-store.myspreadshop.de/api/v1/shops/1555258/sellables');
        if (!response.ok) throw new Error('API fetch failed');
        const data = await response.json();
        const sellables = data.sellables || [];
        
        if (sellables.length === 0) return; // Keep static placeholders if empty
        
        // Clear static placeholders if we actually have products from the feed
        grid.innerHTML = '';
        
        // Slice the first 3 products for dynamic showcase
        let itemsToShow = sellables.slice(0, 3);
        
        itemsToShow.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            // Generate deep link to Spreadshop product details page
            card.onclick = () => {
                navigateToView('shop-view'); // Ensure shop view is visible
                window.location.hash = `#!/sellable/${item.sellableId}`;
            };
            
            // Format price amount
            const price = typeof item.price.amount === 'number' 
                ? `${item.price.amount.toFixed(2).replace('.', ',')} €`
                : '24,99 €';
                
            // Render color dots if appearances are available
            let colorsHtml = '';
            if (item.appearanceIds && item.appearanceIds.length > 0) {
                colorsHtml = `<div class="product-colors">`;
                
                const colorMap = {
                    '1': '#ffffff',     // White
                    '1247': '#d7d0c5',  // Cream/Sand
                    '1250': '#12141c',  // Charcoal
                    '1265': '#000000',  // Black
                    '270': '#6c7a6b',   // Sage Green
                    '195': '#1c2d5a',   // Navy Blue
                    '288': '#ccff00',   // Neon Volt Green
                    '1254': '#b5a596'   // Muted Ochre
                };
                
                item.appearanceIds.slice(0, 4).forEach((appId, idx) => {
                    const hex = colorMap[appId] || '#ccff00';
                    const isActive = appId === item.defaultAppearanceId ? 'active' : '';
                    colorsHtml += `<span class="color-dot ${isActive}" style="background-color: ${hex};" title="Farbe ID ${appId}"></span>`;
                });
                colorsHtml += `</div>`;
            }
            
            // Request dynamic preview image with color background matching secondary gray (#12141c)
            let previewUrl = item.previewImage.url;
            if (previewUrl.includes('backgroundColor=')) {
                previewUrl = previewUrl.replace(/backgroundColor=[^&]+/, 'backgroundColor=12141c');
            } else {
                previewUrl += previewUrl.includes('?') ? '&backgroundColor=12141c' : '?backgroundColor=12141c';
            }
            
            card.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${previewUrl}" alt="${item.name}" class="product-image" loading="lazy">
                    <span class="badge">Official Gear</span>
                </div>
                <div class="product-details">
                    <h3 class="product-name">${item.name}</h3>
                    <p class="product-price">${price}</p>
                    ${colorsHtml}
                </div>
            `;
            grid.appendChild(card);
        });
        
        // Re-initialize color dots click listeners
        initColorDots();
        
    } catch (err) {
        console.warn('Could not load dynamic bestsellers from Spreadshop:', err);
    }
}

/**
 * Translations Dictionary for DE and EN
 */
const translations = {
    de: {
        announcement: "Kostenloser Versand für alle Bestellungen ab 99,99 €",
        nav_home: "Home",
        nav_shop: "Shop",
        nav_collections: "Kollektionen",
        nav_about: "Über uns",
        hero_tag: "Endurance & Performance",
        hero_title: "DEINE LEIDENSCHAFT. DEIN DESIGN.",
        hero_desc: "Kreative und unabhängige Fan-Designs für die größten Sportereignisse der Welt. Vom Fußball-Sommermärchen bis zur Königsklasse des Motorsports – finde dein perfektes Event-Shirt.",
        hero_btn_shop: "Kollektion Entdecken",
        hero_btn_about: "Unsere Story",
        cat_tag: "Kategorien",
        cat_title: "Kollektionen durchstöbern",
        cat_tshirt_desc: "Fankultur neu definiert. Unabhängige Designs.",
        cat_tshirt_cta: "Jetzt Shoppen",
        cat_hoodie_desc: "Stylische Hoodies für Spieltage und Rennwochenenden.",
        cat_hoodie_cta: "Jetzt Shoppen",
        cat_accessories_title: "Accessoires",
        cat_accessories_desc: "Caps und Taschen passend zu deinem Lieblings-Event.",
        cat_accessories_cta: "Entdecken",
        value_title_1: "100% Unabhängig",
        value_desc_1: "Wir entwerfen eigene, kreative Artworks – komplett eigenständig und unter Beachtung bestehender Markenrechte.",
        value_title_2: "Nachhaltigkeit",
        value_desc_2: "Bedarfsgerechter On-Demand-Druck schont Umweltressourcen und vermeidet Textilmüll.",
        value_title_3: "Premium Qualität",
        value_desc_3: "Robuste Materialien und langlebiger Druck stehen für uns an oberster Stelle.",
        value_title_4: "Faires Pricing",
        value_desc_4: "Kreatives Fan-Merchandise zu fairen und transparenten Konditionen.",
        best_tag: "Auswahl",
        best_title: "Beliebte Ausrüstung",
        best_view_all: "Alle Produkte ansehen →",
        badge_essential: "Essential",
        badge_premium: "Premium",
        badge_new: "Neu",
        shop_tag: "Offizieller Store",
        shop_title: "Sport-EventStore Shop",
        shop_desc: "Bestelle deine offizielle Event-Ausrüstung sicher und direkt über unseren integrierten Partnershop. Schnell gedruckt und direkt geliefert.",
        shop_loading: "Kollektionen werden geladen...",
        shop_fallback_btn: "Direkt zu Spreadshop öffnen",
        coll_tag: "Unsere Highlights",
        coll_title: "Kollektionen",
        coll_noe_tag: "New In",
        coll_noe_title: "Velocity Performance",
        coll_noe_desc: "Clean, dynamisch und kontrastreich. Mit unseren voltfarbenen Highlights bist du sowohl auf der Laufbahn als auch im Fitnessstudio unübersehbar.",
        coll_noe_btn: "Kollektion shoppen",
        coll_preview_title: "Highlights der Kollektion",
        founders_tag: "Konzept & Vision",
        founders_title: "Mit Herzblut &amp; Fokus im Sinn.",
        founders_text: "Hinter dem Sport-EventStore steht kein unpersönlicher Großkonzern, sondern ein kleines Team von Sportenthusiasten, die die Fankultur feiern.<br><br>Wir lieben das Kribbeln vor einem großen Fußball-WM-Finale oder dem Start eines Formel-1-Rennens. Da offizielle Produkte oft einfallslos und überteuert sind, entwerfen wir eigene, kreative Fan-Kollektionen. Dabei respektieren wir stets bestehende Markenrechte – unsere Designs sind 100% unabhängig, originell und von Fans für Fans gemacht.<br><br>Jedes Kleidungsstück ist ein Statement für deine Leidenschaft. Danke, dass du Teil unserer Community bist!",
        about_tag: "Unsere Philosophie",
        about_heading: "Ausrüstung für Sieger.",
        about_lead: "Der Sport-EventStore entstand aus der Liebe zum Sport und der Idee, kreative, markenrechtskonforme Fan-Ausrüstung für globale Sport-Highlights zu schaffen.",
        about_story_title_1: "Originell & Markenkonform",
        about_story_desc_1: "Wir kopieren keine geschützten Logos oder Markennamen. Stattdessen fangen wir die echte Emotion und Ästhetik von Sportereignissen in eigenen, kreativen Kunstwerken und cleverer Typografie ein.",
        about_story_title_2: "Print-On-Demand Partnerschaft",
        about_story_desc_2: "In Kooperation mit Spreadshop produzieren wir erst nach deiner Bestellung. Das spart Lagerfläche, senkt Transportwege und minimiert wertvollen Materialausschuss.",
        sustain_tag: "Verantwortung",
        sustain_title: "Nachhaltigkeit bei uns",
        sustain_intro: "Unsere sportliche Leidenschaft lebt von der Natur und gesunden Ressourcen. Daher ist Umweltschutz ein fester Bestandteil unserer Philosophie.",
        sustain_card_title_1: "Ressourceneffizienz",
        sustain_card_desc_1: "Durch On-Demand-Herstellung reduzieren wir textile Überschüsse auf nahezu null Prozent.",
        sustain_card_title_2: "GOTS-Bio-Materialien",
        sustain_card_desc_2: "Wo immer möglich, wählen wir Bio-Baumwolle und recycelte Funktionsgarne für unsere Textilien.",
        sustain_card_title_3: "Plastikfreier Versand",
        sustain_card_desc_3: "Bestellungen werden klimaneutral in recyclebaren Papiertaschen und Kartons verpackt und versendet.",
        values_view_tag: "Wofür wir stehen",
        values_view_title: "Unsere Werte",
        values_view_intro: "Bei Sport-EventStore stehen Fairness, Leistungsorientierung und Leidenschaft im Fokus.",
        value_card_title_1: "Fairplay & Respekt",
        value_card_desc_1: "Im Sport zählt Zusammenhalt. Wir setzen auf faire Produktionsbedingungen entlang der gesamten Lieferkette unserer Partner.",
        value_card_title_2: "Unermüdlicher Fokus" ,
        value_card_desc_2: "Erfolg erfordert Disziplin. Unsere Kollektionen sind auf maximale Langlebigkeit getestet und machen jede Session klaglos mit.",
        value_card_title_3: "Dynamic Community",
        value_card_desc_3: "Sport verbindet Menschen. Wir supporten Lauf-Events, lokale Turniere und sportlichen Zusammenhalt im Team.",
        contact_tag: "Schreib uns",
        contact_heading: "Kontaktiere den Support",
        contact_desc: "Hast du Fragen zu deiner Bestellung, Kooperationen für eigene Sportevents oder Feedback? Wir helfen dir gerne.",
        contact_detail_label_email: "E-Mail",
        contact_detail_label_hours: "Support-Zeiten",
        contact_detail_val_hours: "Montag – Freitag: 09:00 – 17:00 Uhr",
        contact_form_name: "Dein Name",
        contact_form_email: "Deine E-Mail",
        contact_form_msg: "Nachricht",
        contact_form_submit: "Nachricht senden",
        contact_placeholder_name: "z.B. Anna Müller",
        contact_placeholder_email: "z.B. anna@email.de",
        contact_placeholder_msg: "Wie können wir dir helfen?",
        search_placeholder: "Suche nach Produkten...",
        search_btn: "Suchen",
        search_suggestions: "Beliebte Suchanfragen: <span>Hoodies</span>, <span>T-Shirts</span>, <span>Caps</span>",
        footer_title_shop: "Shop",
        footer_shop_all: "Alle Produkte",
        footer_shop_tshirts: "T-Shirts",
        footer_shop_hoodies: "Hoodies",
        footer_shop_accessories: "Caps & Accessoires",
        footer_title_company: "Unternehmen",
        footer_company_about: "Über uns",
        footer_company_sustain: "Nachhaltigkeit",
        footer_company_values: "Werte",
        footer_company_contact: "Kontakt",
        footer_title_newsletter: "Newsletter",
        footer_newsletter_desc: "Melde dich für unseren Newsletter an, um exklusiven Vorabzugriff auf neue Drops und Angebote zu erhalten.",
        footer_newsletter_placeholder: "Deine E-Mail-Adresse",
        footer_copyright: "&copy; 2026 Sport-EventStore. Alle Rechte vorbehalten.",
        footer_privacy: "Datenschutz",
        footer_terms: "AGB",
        footer_imprint: "Impressum",
        legal_tab_imprint: "Impressum",
        legal_tab_privacy: "Datenschutz",
        legal_tab_terms: "AGB",
        legal_imprint_content: `<h2>Impressum</h2><p><strong>Sport-EventStore / baokmedia</strong></p><p>c/o Impressumservice Dein-Impressum<br>Stettiner Straße 41<br>35410 Hungen</p><p><strong>Vertreten durch:</strong><br>O. Balko</p><p><strong>Kontakt:</strong><br>E-Mail: olli1270@gmail.com</p><p><strong>Haftungshinweis:</strong><br>Wir sind für die Inhalte unserer eigenen Seiten nach den allgemeinen Gesetzen verantwortlich. Alle Kaufverträge, Lieferungen und Kundenservice-Angelegenheiten der Spreadshop-Kollektionen werden ausschließlich von der sprd.net AG (Spreadshirt) abgewickelt.</p><p><strong>Online-Streitbeilegung (OS):</strong><br>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr" target="_blank">https://ec.europa.eu/consumers/odr</a> finden. Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>`,
        legal_privacy_content: `<h2>Datenschutzerklärung</h2><h3>1. Datenschutz auf einen Blick</h3><p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf unserer Landingpage und dem eingebetteten Spreadshop-Bereich auf.</p><h3>2. Hosting durch Vercel</h3><p>Wir hosten unsere Website bei Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA). Zur Bereitstellung der Website erfasst Vercel automatisiert Server-Logfiles (IP-Adresse, Browsertyp, Referrer-URL, Uhrzeit). Dies erfolgt auf Grundlage unserer berechtigten Interessen an einem sicheren und effizienten Betrieb unserer Website (Art. 6 Abs. 1 lit. f DSGVO).</p><h3>3. Eingebetteter Spreadshop (sprd.net AG)</h3><p>Auf dieser Website ist ein Online-Shop eingebettet, der technisch und rechtlich von der <strong>sprd.net AG (Spreadshirt)</strong>, Gießerstraße 27, 04229 Leipzig, Deutschland, betrieben wird. Wenn Sie den Shop-Bereich aufrufen oder eine Bestellung tätigen, verarbeitet Spreadshirt Ihre Daten (inkl. IP-Adresse, Browser-Details, Cookies und Bestelldaten) eigenverantwortlich für die Zahlungsabwicklung, Produktion und Lieferung. Weitere Informationen finden Sie in der <a href="https://www.spreadshirt.de/datenschutz-C3858" target="_blank">Datenschutzerklärung von Spreadshirt</a>.</p><h3>4. Lokaler Speicher (LocalStorage)</h3><p>Wir speichern Ihre ausgewählte Sprache (DE/EN) in Ihrem Browser (LocalStorage), um Ihnen die Seite beim nächsten Aufruf direkt in Ihrer Wunschsprache anzuzeigen. Dies stellt ein berechtigtes Interesse dar (Art. 6 Abs. 1 lit. f DSGVO).</p>`,
        legal_terms_content: `<h2>Allgemeine Geschäftsbedingungen (AGB)</h2><h3>1. Geltungsbereich</h3><p>Diese Bedingungen gelten für die Nutzung der Landingpage. Für Bestellungen im Online-Shop gelten gesonderte Bedingungen.</p><h3>2. Vertragspartner für Bestellungen</h3><p>Alle Verträge, Lieferungen und Serviceleistungen, die über den auf dieser Website eingebetteten Online-Shop getätigt werden, kommen ausschließlich zwischen dem Besteller und der <strong>sprd.net AG (Spreadshirt)</strong>, Gießerstraße 27, 04229 Leipzig, Deutschland zustande. Es gelten die allgemeinen Geschäftsbedingungen und Widerrufsbelehrungen von sprd.net AG, die im integrierten Shop-Widget einsehbar sind.</p><h3>3. Haftungsbeschränkung für Inhalte</h3><p>Wir erstellen die redaktionellen Inhalte dieser Landingpage mit größter Sorgfalt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte von verlinkten Spreadshirt-Produkten oder Preisen können wir jedoch keine Gewähr übernehmen, da diese direkt und dynamisch von Spreadshirt bereitgestellt werden.</p>`
    },
    en: {
        announcement: "Free shipping on all orders over 99.99 €",
        nav_home: "Home",
        nav_shop: "Shop",
        nav_collections: "Collections",
        nav_about: "About Us",
        hero_tag: "Endurance & Performance",
        hero_title: "YOUR PASSION. YOUR GEAR.",
        hero_desc: "Creative and independent fan designs for the world's biggest sporting events. From global football tournaments to elite motorsports – find your perfect event gear.",
        hero_btn_shop: "Explore Collection",
        hero_btn_about: "Our Story",
        cat_tag: "Categories",
        cat_title: "Browse Collections",
        cat_tshirt_desc: "Fan culture redefined. Independent designs.",
        cat_tshirt_cta: "Shop Now",
        cat_hoodie_desc: "Stylish hoodies for match days and race weekends.",
        cat_hoodie_cta: "Shop Now",
        cat_accessories_title: "Accessories",
        cat_accessories_desc: "Caps and bags matching your favorite sporting event.",
        cat_accessories_cta: "Explore",
        value_title_1: "100% Independent",
        value_desc_1: "We design our own creative artworks – completely independently and in strict compliance with trademark rights.",
        value_title_2: "Sustainability",
        value_desc_2: "On-demand printing reduces stock waste and carbon footprint.",
        value_title_3: "Premium Quality",
        value_desc_3: "Durable materials and long-lasting prints are our top priorities.",
        value_title_4: "Fair Pricing",
        value_desc_4: "Creative fan merchandise at fair, transparent terms.",
        best_tag: "Selected",
        best_title: "Popular Gear",
        best_view_all: "View all products →",
        badge_essential: "Essential",
        badge_premium: "Premium",
        badge_new: "New",
        shop_tag: "Official Store",
        shop_title: "Sport-EventStore Shop",
        shop_desc: "Order your official event gear securely and directly through our integrated partner shop. Printed quickly and delivered straight to you.",
        shop_loading: "Loading collections...",
        shop_fallback_btn: "Open Spreadshop directly",
        coll_tag: "Highlights",
        coll_title: "Collections",
        coll_noe_tag: "New In",
        coll_noe_title: "Velocity Performance",
        coll_noe_desc: "Clean, dynamic, and high contrast. Stay visible on the track or in the gym with our signature volt highlights.",
        coll_noe_btn: "Shop Collection",
        coll_preview_title: "Highlights of the Collection",
        founders_tag: "Concept & Vision",
        founders_title: "Crafted with passion, focus, and drive.",
        founders_text: "Behind Sport-EventStore is not an impersonal corporation, but a small team of sports enthusiasts celebrating fan culture.<br><br>We love the excitement before a big football final or the start of a motorsport race. Since official merchandise is often generic and overpriced, we create our own creative fan collections. We always respect existing trademark rights – our designs are 100% independent, original, and made by fans, for fans.<br><br>Every garment is a statement of your passion. Thank you for being part of our community!",
        about_tag: "Our Philosophy",
        about_heading: "Gear for Winners.",
        about_lead: "Sport-EventStore was born from a love of sports and the idea of creating creative, trademark-compliant fan gear for global sport highlights.",
        about_story_title_1: "Original & Trademark Compliant",
        about_story_desc_1: "We never copy protected logos or trademark names. Instead, we capture the true emotion and aesthetic of sporting events using our own creative artwork and clever typography.",
        about_story_title_2: "Print-On-Demand Partnership",
        about_story_desc_2: "In partnership with Spreadshop, we produce only after you order. This saves inventory space, lowers transport emissions, and minimizes material waste.",
        sustain_tag: "Responsibility",
        sustain_title: "Sustainability at Sport-EventStore",
        sustain_intro: "Our athletic drive thrives in nature and healthy resources. Environmental responsibility is a core value.",
        sustain_card_title_1: "Resource Efficiency",
        sustain_card_desc_1: "By utilizing print-on-demand, we reduce textile surplus waste to virtually zero percent.",
        sustain_card_title_2: "GOTS Organic Fabrics",
        sustain_card_desc_2: "Wherever possible, we select organic cotton and recycled functional fibers for our garments.",
        sustain_card_title_3: "Plastic-Free Shipping",
        sustain_card_desc_3: "Orders are shipped carbon-neutrally in recyclable and plastic-free paper packaging.",
        values_view_tag: "What we stand for",
        values_view_title: "Our Values",
        values_view_intro: "At Sport-EventStore, we focus on fair play, performance, and athletic passion.",
        value_card_title_1: "Fairplay & Respect",
        value_card_desc_1: "Community matters in sports. We rely on fair working conditions across our partners' supply chain.",
        value_card_title_2: "Relentless Focus",
        value_card_desc_2: "Success takes discipline. Our gear is tested for durability to survive any workout challenge.",
        value_card_title_3: "Dynamic Community",
        value_card_desc_3: "Sports unite people. We support running events, local tournaments, and athletic team cohesion.",
        contact_tag: "Get in touch",
        contact_heading: "Contact Support",
        contact_desc: "Do you have questions about your order, custom event merch collaborations, or feedback? We're here to help.",
        contact_detail_label_email: "Email",
        contact_detail_label_hours: "Support Hours",
        contact_detail_val_hours: "Monday – Friday: 09:00 AM – 05:00 PM",
        contact_form_name: "Your Name",
        contact_form_email: "Your Email",
        contact_form_msg: "Message",
        contact_form_submit: "Send Message",
        contact_placeholder_name: "e.g. Jane Doe",
        contact_placeholder_email: "e.g. jane@email.com",
        contact_placeholder_msg: "How can we help you?",
        search_placeholder: "Search for products...",
        search_btn: "Search",
        search_suggestions: "Popular searches: <span>Hoodies</span>, <span>T-Shirts</span>, <span>Caps</span>",
        footer_title_shop: "Shop",
        footer_shop_all: "All Products",
        footer_shop_tshirts: "T-Shirts",
        footer_shop_hoodies: "Hoodies",
        footer_shop_accessories: "Caps & Accessories",
        footer_title_company: "Company",
        footer_company_about: "About Us",
        footer_company_sustain: "Sustainability",
        footer_company_values: "Our Values",
        footer_company_contact: "Contact",
        footer_title_newsletter: "Newsletter",
        footer_newsletter_desc: "Sign up for our newsletter to get exclusive early access to new drops and offers.",
        footer_newsletter_placeholder: "Your email address",
        footer_copyright: "&copy; 2026 Sport-EventStore. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms & Conditions",
        footer_imprint: "Imprint",
        legal_tab_imprint: "Imprint",
        legal_tab_privacy: "Privacy Policy",
        legal_tab_terms: "Terms & Conditions",
        legal_imprint_content: `<h2>Imprint</h2><p><strong>Sport-EventStore / baokmedia</strong></p><p>c/o Impressumservice Dein-Impressum<br>Stettiner Straße 41<br>35410 Hungen</p><p><strong>Represented by:</strong><br>O. Balko</p><p><strong>Contact:</strong><br>Email: olli1270@gmail.com</p><p><strong>Disclaimer:</strong><br>We are responsible for the content of our own pages according to general laws. All sales contracts, deliveries, and customer service inquiries regarding the Spreadshop collections are handled exclusively by sprd.net AG (Spreadshirt).</p><p><strong>Online Dispute Resolution (ODR):</strong><br>The European Commission provides a platform for online dispute resolution (ODR), which can be found at <a href="https://ec.europa.eu/consumers/odr" target="_blank">https://ec.europa.eu/consumers/odr</a>. We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.</p>`,
        legal_privacy_content: `<h2>Privacy Policy</h2><h3>1. Privacy at a Glance</h3><p>This privacy policy explains the nature, scope, and purpose of the processing of personal data on our landing page and the embedded Spreadshop section.</p><h3>2. Hosting by Vercel</h3><p>We host our website with Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA). To deliver the website, Vercel automatically collects server log files (IP address, browser type, referrer URL, timestamp). This is based on our legitimate interests in operating our website securely and efficiently (Art. 6 para. 1 lit. f GDPR).</p><h3>3. Embedded Spreadshop (sprd.net AG)</h3><p>An online shop is embedded on this website, which is technically and legally operated by <strong>sprd.net AG (Spreadshirt)</strong>, Gießerstraße 27, 04229 Leipzig, Germany. When you access the shop section or place an order, Spreadshirt processes your data (including IP address, browser details, cookies, and order information) under its own responsibility for payment processing, production, and delivery. For more details, please view the <a href="https://www.spreadshirt.com/privacy-policy-C3858" target="_blank">Spreadshirt Privacy Policy</a>.</p><h3>4. Local Storage</h3><p>We store your selected language (DE/EN) in your browser's LocalStorage to display the site in your preferred language upon your next visit. This constitutes a legitimate interest (Art. 6 para. 1 lit. f GDPR).</p>`,
        legal_terms_content: `<h2>Terms & Conditions (AGB)</h2><h3>1. Scope of Application</h3><p>These terms apply to the use of the landing page. Separate terms apply to orders placed in the online shop.</p><h3>2. Contractual Partner for Orders</h3><p>All contracts, deliveries, and services placed via the online shop embedded on this website are established exclusively between the customer and <strong>sprd.net AG (Spreadshirt)</strong>, Gießerstraße 27, 04229 Leipzig, Germany. The terms and conditions and cancellation policy of sprd.net AG apply, which can be viewed inside the integrated shop widget.</p><h3>3. Limitation of Liability for Content</h3><p>We create the editorial content of this landing page with the utmost care. However, we cannot assume liability for the accuracy, completeness, or timeliness of prices or product details, as they are provided dynamically by Spreadshirt.</p>`
    }
};

/**
 * Initialize Language Switcher
 */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('sport_event_lang') || 'de';
    
    // Set initial active state in header
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
    
    // Apply saved language immediately
    applyLanguage(savedLang, false); // false = do not reload Spreadshop on initial boot
}

/**
 * Switch page language dynamically
 */
function switchLanguage(lang) {
    const currentLang = localStorage.getItem('sport_event_lang') || 'de';
    if (lang === currentLang) return;
    
    // Save to local storage
    localStorage.setItem('sport_event_lang', lang);
    
    // Update active class on buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Apply changes
    applyLanguage(lang, true); // true = reload Spreadshop to change shop locale
}

/**
 * Translate elements and reload Spreadshop
 */
function applyLanguage(lang, shouldReloadShop) {
    document.documentElement.setAttribute('lang', lang);
    
    // Translate text contents
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Translate placeholders
    const translatablePlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    translatablePlaceholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // Reload Spreadshop with new locale
    if (shouldReloadShop) {
        reloadSpreadshop(lang);
    }
}

/**
 * Re-render Spreadshop dynamically to switch languages
 */
function reloadSpreadshop(lang) {
    const shopContainer = document.getElementById('myShop');
    if (!shopContainer) return;
    
    // Clear current shop elements
    shopContainer.innerHTML = '';
    
    // Re-insert loading spinner
    const spinner = document.createElement('div');
    spinner.className = 'shop-loading-spinner';
    spinner.innerHTML = `
        <div class="spinner"></div>
        <p data-i18n="shop_loading">${lang === 'de' ? 'Kollektionen werden geladen...' : 'Loading collections...'}</p>
        <a href="https://sport-event-store.myspreadshop.de" class="btn btn-secondary" data-i18n="shop_fallback_btn">${lang === 'de' ? 'Direkt zu Spreadshop öffnen' : 'Open Spreadshop directly'}</a>
    `;
    shopContainer.appendChild(spinner);
    
    // Re-configure the global Spreadshop settings object
    window.spread_shop_config = {
        shopName: 'sport-event-store',
        locale: lang === 'de' ? 'de_DE' : 'en_GB',
        prefix: 'https://sport-event-store.myspreadshop.de',
        baseId: 'myShop'
    };
    
    // Remove existing shop client script tags to avoid conflicts
    const oldScripts = document.querySelectorAll('script[src*="shopclient.nocache.js"]');
    oldScripts.forEach(s => s.remove());
    
    // Delete GWT hooks
    delete window.spreadshop;
    
    // Append new script tag to trigger re-rendering
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://sport-event-store.myspreadshop.de/shopfiles/shopclient/shopclient.nocache.js?t=' + Date.now();
    document.body.appendChild(script);
    
    // Trigger shop loading check
    setupShopLoadingState();
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

/**
 * Switch Active Legal Section Tab & Content Panel
 */
function switchLegalTab(tabName) {
    const tabButtons = document.querySelectorAll('.legal-tab-btn');
    const contentPanels = document.querySelectorAll('.legal-section-content');
    
    // Toggle active state for tab buttons
    tabButtons.forEach(btn => {
        if (btn.getAttribute('data-legal-section') === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Toggle active state for content panels
    contentPanels.forEach(panel => {
        if (panel.id === `legal-section-${tabName}`) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
}
window.switchLegalTab = switchLegalTab;
