/* ── Meskro Cars i18n ── */
(function () {
  'use strict';

  const STORAGE_KEY = 'meskro_lang';

  const translations = {
    de: {
      /* ── Nav ── */
      'nav.home':        'Home',
      'nav.modelle':     'Alle Modelle',
      'nav.ueber':       'Über uns',
      'nav.kontakt':     'Kontakt',
      'nav.anfragen':    'Anfragen ↗',
      'nav.lang':        'EN',

      /* ── Footer ── */
      'footer.tagline':     'Luxusautovermietung Wien',
      'footer.nav':         'Navigation',
      'footer.kontakt':     'Kontakt',
      'footer.legal':       'Rechtliches',
      'footer.copy':        '© 2025 Meskro Cars. Alle Rechte vorbehalten.',

      /* ── Shared CTAs ── */
      'cta.anfragen':         'Jetzt anfragen ↗',
      'cta.whatsapp':         'WhatsApp',
      'cta.alle.modelle':     'Weitere Modelle entdecken',
      'cta.alle.ansehen':     'Alle ansehen ↗',
      'cta.mobile':           'Jetzt anfragen',
      'cta.carousel.h2':      'Bereit für dein<br>Traumauto?',
      'cta.carousel.sub':     'Reserviere jetzt — einfach, schnell und persönlich.',
      'cta.traumauto.h2':     'Bereit für dein Traumauto?',
      'cta.traumauto.p':      'Kontaktiere uns — persönlich, schnell und unverbindlich.',

      /* ── Shared car labels ── */
      'car.back':         '← Alle Fahrzeuge',
      'car.sec':          '0–100 Sek.',
      'car.karosserie':   'Karosserie',
      'car.highlights':   'Highlights',
      'car.galerie':      'Galerie',
      'car.anfragen':     'Jetzt anfragen',

      /* ── Index ── */
      'index.eyebrow':     'Luxusautovermietung Wien',
      'index.h1a':         'Starte die Reise',
      'index.h1b':         'des Luxus —',
      'index.h1c':         'Dein Traumauto',
      'index.h1d':         'wartet.',
      'index.cta':         'Fahrzeug auswählen',
      'index.scroll':      'Scroll Down',
      'index.stat.fz':     'Fahrzeuge',
      'index.stat.er':     'Erreichbar',
      'index.fleet.eye':   '01 / FLOTTE',
      'index.fleet.h2':    'Wiens größte Luxusflotte.',
      'index.fleet.all':   'Alle Sportwagen',
      'index.card.sub':    'Automatik · Vollkasko',
      'index.tab.all':     'Alle',
      'index.tab.sport':   'Sport',
      'index.tab.suv':     'SUV',
      'index.tab.limo':    'Limousine',
      'index.tab.super':   'Supersport',
      'index.how.eye':     '02 / ABLAUF',
      'index.how.h2':      'So einfach kommst du<br>hinter das Steuer.',
      'index.step1.h':     'Fahrzeug wählen',
      'index.step1.p':     'Stöbere durch unsere Flotte und wähle dein Traumauto aus.',
      'index.step2.h':     'Datum anfragen',
      'index.step3.h':     'Bestätigung erhalten',
      'index.step3.p':     'Wir bestätigen Verfügbarkeit und besprechen alle Details persönlich.',
      'index.step4.h':     'Fahrzeug abholen',
      'index.step4.p':     'Direkt bei uns in 1220 Wien oder Lieferung auf Anfrage möglich.',
      'index.svc.eye':     '03 / LEISTUNGEN',
      'index.svc.h2':      'Alles was du<br>brauchst.',
      'index.svc.1.h':     'Privat mieten',
      'index.svc.1.p':     'Miete eines unserer Fahrzeuge für einen Tag, ein Wochenende oder länger. Ideal für besondere Ausflüge, Städtetrips oder einfach um das Fahrerlebnis zu genießen. Flexibel, unkompliziert, persönlich.',
      'index.svc.2.h':     'Hochzeit & Events',
      'index.svc.2.p':     'Mach deinen besonderen Tag unvergesslich. Ob als Hochzeitsauto, für Jubiläen oder Firmenevents — unsere Luxusfahrzeuge sorgen für den perfekten ersten Eindruck und bleibende Erinnerungen.',
      'index.svc.3.h':     'Fotoshooting mit Luxusauto',
      'index.svc.3.p':     'Content Creator, Fotografen oder einfach für den perfekten Instagram-Post — buche eines unserer Fahrzeuge für ein Shooting. Wir stellen das Auto, du bringst deine Kamera. Stündliche Buchung möglich.',
      'index.svc.4.h':     'Monatsmiete',
      'index.svc.4.p':     'Du willst länger in einem Luxusfahrzeug unterwegs sein? Wir bieten flexible Monatsmieten zu attraktiven Konditionen. Ideal für Geschäftsreisende, besondere Lebensabschnitte oder einfach für alle, die Stil lieben.',
      'index.svc.cta.p':   'Noch unsicher? Schreib uns einfach — unverbindlich und kostenlos.',
      'index.svc.cta.btn': 'Jetzt anfragen',
      'index.about.eye':   '04 / ÜBER UNS',
      'index.about.h2':    'Meskro Cars.<br>Wien.',
      'index.about.p1':    'Wir sind eine Luxusautovermietung aus Wien — gegründet von Enthusiasten für Enthusiasten. Unser Anspruch: das beste Fahrerlebnis, persönlicher Service und eine Flotte, die keine Wünsche offen lässt.',
      'index.about.p2':    'Jedes Fahrzeug ist sorgfältig gepflegt, vollversichert und sofort verfügbar. Kein Call-Center — direkt, ehrlich, schnell.',
      'index.about.stat1': 'Exklusive Fahrzeuge',
      'index.about.stat2': 'Erreichbar',
      'index.about.stat3': 'Vollkasko',
      'index.about.btn':   'Mehr über uns',

      /* ── Fahrzeuge ── */
      'fz.eye':       'Unsere Flotte',
      'fz.h1':        'Ausgewählt.<br>Außergewöhnlich.',
      'fz.tab.all':   'Alle',
      'fz.tab.sport': 'Sport',
      'fz.tab.suv':   'SUV',
      'fz.tab.limo':  'Limousine',
      'fz.anfragen':  'Anfragen',

      /* ── Über uns ── */
      'ueber.story.eye': 'Unsere Geschichte',
      'ueber.story.h2':  'Mehr als eine Vermietung.',
      'ueber.story.p1':  'Meskro Cars entstand aus echter Leidenschaft für Automobile. Nicht als gewöhnliches Autovermietungsunternehmen — sondern als Anlaufstelle für Menschen, die das Besondere suchen.',
      'ueber.story.p2':  'Wir glauben, dass jedes Fahrzeug eine Geschichte erzählt. Und dass es Momente gibt, in denen man genau das richtige Auto braucht — für ein Wochenende, einen besonderen Anlass oder einfach weil man das Außergewöhnliche verdient.',
      'ueber.story.p3':  'Stationiert in Wien, 1220, bieten wir eine sorgfältig kuratierte Flotte aus Luxuslimousinen, Sportwagen und exklusiven SUVs — immer in Top-Zustand, immer mit persönlichem Service.',
      'ueber.val.eye':   'Unsere Werte',
      'ueber.val.h2':    'Was uns antreibt.',
      'ueber.val.1.h':   'Qualität',
      'ueber.val.1.p':   'Jedes Fahrzeug in unserer Flotte wird regelmäßig gewartet und auf höchstem Niveau gepflegt. Keine Kompromisse.',
      'ueber.val.2.h':   'Vertrauen',
      'ueber.val.2.p':   'Transparente Konditionen, ehrliche Kommunikation. Wir bauen auf langfristige Beziehungen mit unseren Kunden.',
      'ueber.val.3.h':   'Exklusivität',
      'ueber.val.3.p':   'Wir verwalten keine Massenflotte. Unsere Auswahl ist bewusst klein gehalten — damit jedes Fahrzeug wirklich besonders bleibt.',
      'ueber.val.4.h':   'Flexibilität',
      'ueber.val.4.p':   'Ihre Anforderungen stehen im Mittelpunkt. Ob kurzfristig oder geplant — wir finden eine Lösung.',
      'ueber.num.1':     'Fahrzeuge in der Flotte',
      'ueber.num.2':     'Wien, Österreich',
      'ueber.num.3':     'Erreichbar',

      /* ── Kontakt form ── */
      'kontakt.form.name':  'Ihr Name',
      'kontakt.form.email': 'ihre@email.com',
      'kontakt.form.phone': '+43 ...',
      'kontakt.form.msg':   'Ihr Anliegen, besondere Wünsche, Anlass ...',

      /* ── Car pages (detail text) ── */
      'g63.h2':    'Dominanz. In jeder Form.',
      'g63.p1':    'Der Mercedes-AMG G63 ist eine Legende — ein Fahrzeug, das seit Jahrzehnten die Straßen dominiert und dabei nie seinen Charakter verloren hat. 585 PS aus einem handgefertigten 4,0-Liter-V8-Biturbo, das ikonische Kastendesign und ein Klang, der Straßen verstummen lässt.',
      'g63.p2':    'In Wien ist der G63 mehr als ein Auto — er ist ein Statement. Ob am Graben, auf der Kärntner Straße oder bei der Fahrt ins Wienerwald: die Köpfe drehen sich immer mit.',
      'g63.p3':    'Das perfekte Fahrzeug für alle, die Aufmerksamkeit verdienen und dabei auf keinen Komfort verzichten wollen.',
      'c200.h2':   'Stil ohne Kompromisse.',
      'c63s.h2':   'Emotion. Ohne Kompromiss.',
      'gle.h2':    'Raum für Großes.',
      's400.h2':   'Die Kunst der Stille.',
      'm5.h2':     'Perfektion hat 600 PS.',
      'rsq8.h2':   'Macht. In reinster Form.',
    },

    en: {
      /* ── Nav ── */
      'nav.home':        'Home',
      'nav.modelle':     'All Models',
      'nav.ueber':       'About Us',
      'nav.kontakt':     'Contact',
      'nav.anfragen':    'Inquire ↗',
      'nav.lang':        'DE',

      /* ── Footer ── */
      'footer.tagline':     'Luxury Car Rental Vienna',
      'footer.nav':         'Navigation',
      'footer.kontakt':     'Contact',
      'footer.legal':       'Legal',
      'footer.copy':        '© 2025 Meskro Cars. All rights reserved.',

      /* ── Shared CTAs ── */
      'cta.anfragen':         'Inquire Now ↗',
      'cta.whatsapp':         'WhatsApp',
      'cta.alle.modelle':     'Discover More Models',
      'cta.alle.ansehen':     'View all ↗',
      'cta.mobile':           'Inquire Now',
      'cta.carousel.h2':      'Ready for your<br>dream car?',
      'cta.carousel.sub':     'Book now — easy, fast and personal.',
      'cta.traumauto.h2':     'Ready for your dream car?',
      'cta.traumauto.p':      'Contact us — personal, fast and non-binding.',

      /* ── Shared car labels ── */
      'car.back':         '← All Vehicles',
      'car.sec':          '0–100 sec.',
      'car.karosserie':   'Body',
      'car.highlights':   'Highlights',
      'car.galerie':      'Gallery',
      'car.anfragen':     'Inquire Now',

      /* ── Index ── */
      'index.eyebrow':     'Luxury Car Rental Vienna',
      'index.h1a':         'Start the Journey',
      'index.h1b':         'of Luxury —',
      'index.h1c':         'Your Dream Car',
      'index.h1d':         'is Waiting.',
      'index.cta':         'Select Vehicle',
      'index.scroll':      'Scroll Down',
      'index.stat.fz':     'Vehicles',
      'index.stat.er':     'Available',
      'index.fleet.eye':   '01 / FLEET',
      'index.fleet.h2':    'Vienna\'s Largest Luxury Fleet.',
      'index.fleet.all':   'All Sports Cars',
      'index.card.sub':    'Automatic · Full Insurance',
      'index.tab.all':     'All',
      'index.tab.sport':   'Sport',
      'index.tab.suv':     'SUV',
      'index.tab.limo':    'Saloon',
      'index.tab.super':   'Supersport',
      'index.how.eye':     '02 / PROCESS',
      'index.how.h2':      'This is how easy it is<br>to get behind the wheel.',
      'index.step1.h':     'Choose a Vehicle',
      'index.step1.p':     'Browse our fleet and select your dream car.',
      'index.step2.h':     'Request a Date',
      'index.step3.h':     'Receive Confirmation',
      'index.step3.p':     'We confirm availability and discuss all details personally.',
      'index.step4.h':     'Pick Up the Vehicle',
      'index.step4.p':     'Directly from us in 1220 Vienna or delivery on request.',
      'index.svc.eye':     '03 / SERVICES',
      'index.svc.h2':      'Everything you<br>need.',
      'index.svc.1.h':     'Private Rental',
      'index.svc.1.p':     'Rent one of our vehicles for a day, a weekend or longer. Ideal for special trips, city breaks or simply to enjoy the driving experience. Flexible, uncomplicated, personal.',
      'index.svc.2.h':     'Weddings & Events',
      'index.svc.2.p':     'Make your special day unforgettable. Whether as a wedding car, for anniversaries or corporate events — our luxury vehicles make the perfect first impression and create lasting memories.',
      'index.svc.3.h':     'Photo Shoot with Luxury Car',
      'index.svc.3.p':     'Content creators, photographers or simply for the perfect Instagram post — book one of our vehicles for a shoot. We provide the car, you bring your camera. Hourly bookings possible.',
      'index.svc.4.h':     'Monthly Rental',
      'index.svc.4.p':     'Want to travel in a luxury vehicle for longer? We offer flexible monthly rentals at attractive rates. Ideal for business travellers, special life chapters or simply for those who love style.',
      'index.svc.cta.p':   'Still unsure? Just write to us — non-binding and free of charge.',
      'index.svc.cta.btn': 'Inquire Now',
      'index.about.eye':   '04 / ABOUT US',
      'index.about.h2':    'Meskro Cars.<br>Vienna.',
      'index.about.p1':    'We are a luxury car rental from Vienna — founded by enthusiasts for enthusiasts. Our claim: the best driving experience, personal service and a fleet that leaves nothing to be desired.',
      'index.about.p2':    'Every vehicle is carefully maintained, fully insured and immediately available. No call centre — direct, honest, fast.',
      'index.about.stat1': 'Exclusive Vehicles',
      'index.about.stat2': 'Available',
      'index.about.stat3': 'Full Insurance',
      'index.about.btn':   'More about us',

      /* ── Fahrzeuge ── */
      'fz.eye':       'Our Fleet',
      'fz.h1':        'Selected.<br>Extraordinary.',
      'fz.tab.all':   'All',
      'fz.tab.sport': 'Sport',
      'fz.tab.suv':   'SUV',
      'fz.tab.limo':  'Saloon',
      'fz.anfragen':  'Inquire',

      /* ── Über uns ── */
      'ueber.story.eye': 'Our Story',
      'ueber.story.h2':  'More than a rental.',
      'ueber.story.p1':  'Meskro Cars was born out of a genuine passion for automobiles. Not as an ordinary car rental company — but as a destination for people who seek the extraordinary.',
      'ueber.story.p2':  'We believe that every vehicle tells a story. And that there are moments when you need exactly the right car — for a weekend, a special occasion or simply because you deserve the extraordinary.',
      'ueber.story.p3':  'Based in Vienna, 1220, we offer a carefully curated fleet of luxury saloons, sports cars and exclusive SUVs — always in top condition, always with personal service.',
      'ueber.val.eye':   'Our Values',
      'ueber.val.h2':    'What drives us.',
      'ueber.val.1.h':   'Quality',
      'ueber.val.1.p':   'Every vehicle in our fleet is regularly serviced and maintained at the highest level. No compromises.',
      'ueber.val.2.h':   'Trust',
      'ueber.val.2.p':   'Transparent terms, honest communication. We build on long-term relationships with our customers.',
      'ueber.val.3.h':   'Exclusivity',
      'ueber.val.3.p':   'We don\'t manage a mass fleet. Our selection is deliberately kept small — so that every vehicle truly remains special.',
      'ueber.val.4.h':   'Flexibility',
      'ueber.val.4.p':   'Your requirements are at the centre. Whether short-notice or planned — we find a solution.',
      'ueber.num.1':     'Vehicles in the Fleet',
      'ueber.num.2':     'Vienna, Austria',
      'ueber.num.3':     'Available',

      /* ── Kontakt form ── */
      'kontakt.form.name':  'Your Name',
      'kontakt.form.email': 'your@email.com',
      'kontakt.form.phone': '+43 ...',
      'kontakt.form.msg':   'Your enquiry, special requests, occasion ...',

      /* ── Car pages (detail text) ── */
      'g63.h2':    'Dominance. In every form.',
      'g63.p1':    'The Mercedes-AMG G63 is a legend — a vehicle that has dominated the roads for decades without ever losing its character. 585 hp from a hand-built 4.0-litre V8 biturbo, the iconic boxy design and a sound that silences streets.',
      'g63.p2':    'In Vienna, the G63 is more than a car — it\'s a statement. Whether on the Graben, Kärntner Straße or heading to the Vienna Woods: heads always turn.',
      'g63.p3':    'The perfect vehicle for those who deserve attention and refuse to compromise on comfort.',
      'c200.h2':   'Style without compromise.',
      'c63s.h2':   'Emotion. Without compromise.',
      'gle.h2':    'Room for great things.',
      's400.h2':   'The art of silence.',
      'm5.h2':     'Perfection has 600 hp.',
      'rsq8.h2':   'Power. In its purest form.',
    }
  };

  /* ── Apply translations ── */
  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] === undefined) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });
    document.documentElement.lang = lang === 'de' ? 'de' : 'en';
    localStorage.setItem(STORAGE_KEY, lang);
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = t['nav.lang'];
  }

  window.toggleLang = function () {
    const current = localStorage.getItem(STORAGE_KEY) || 'de';
    applyLang(current === 'de' ? 'en' : 'de');
  };

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY) || 'de';
    applyLang(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
