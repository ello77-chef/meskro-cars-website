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
      'footer.tagline':       'Luxusautovermietung Wien',
      'footer.nav':           'Navigation',
      'footer.kontakt':       'Kontakt',
      'footer.legal':         'Rechtliches',
      'footer.impressum':     'Impressum',
      'footer.datenschutz':   'Datenschutz',
      'footer.copy':          '© 2025 Meskro Cars. Alle Rechte vorbehalten.',
      'footer.modelle':       'Alle Modelle',
      'footer.ueber':         'Über uns',

      /* ── Shared CTAs ── */
      'cta.anfragen':         'Jetzt anfragen ↗',
      'cta.whatsapp':         'WhatsApp',
      'cta.traumauto.h2':     'Bereit für dein Traumauto?',
      'cta.traumauto.p':      'Kontaktiere uns — persönlich, schnell und unverbindlich.',
      'cta.alle.modelle':     'Weitere Modelle entdecken',
      'cta.alle.ansehen':     'Alle ansehen ↗',
      'cta.mobile':           'Jetzt anfragen',

      /* ── Shared car-page labels ── */
      'car.back':             '← Alle Fahrzeuge',
      'car.sec':              'Sek.',
      'car.karosserie':       'Karosserie',
      'car.highlights':       'Highlights',
      'car.galerie':          'Galerie',
      'car.fahrzeug':         'Das Fahrzeug',
      'car.anfragen':         'Jetzt anfragen',

      /* ── Index ── */
      'index.eyebrow':        'LUXUSAUTOVERMIETUNG WIEN',
      'index.h1a':            'Starte die Reise',
      'index.h1b':            'des Luxus —',
      'index.h1c':            'Dein Traumauto',
      'index.h1d':            'wartet.',
      'index.cta':            'FAHRZEUG AUSWÄHLEN',
      'index.scroll':         'SCROLL DOWN',
      'index.stat.fz':        'FAHRZEUGE',
      'index.stat.er':        'ERREICHBAR',
      'index.fleet.eye':      '01 / FLOTTE',
      'index.fleet.h2':       'Unsere Fahrzeuge',
      'index.fleet.all':      'Alle ansehen ↗',
      'index.tab.all':        'Alle',
      'index.tab.sport':      'Sport',
      'index.tab.suv':        'SUV',
      'index.tab.limo':       'Limousine',
      'index.tab.super':      'Supersport',
      'index.fleet.anfragen': 'Anfragen',
      'index.svc.eye':        '02 / SERVICE',
      'index.svc.h2':         'Rundum sorglos.',
      'index.svc.1.h':        'Vollkasko inklusive',
      'index.svc.1.p':        'Jedes Fahrzeug ist vollkasko­versichert — ohne Aufpreis, ohne Überraschungen.',
      'index.svc.2.h':        '24/7 Erreichbar',
      'index.svc.2.p':        'Unser Team ist rund um die Uhr für dich da — per WhatsApp, Anruf oder E-Mail.',
      'index.svc.3.h':        'Lieferung & Abholung',
      'index.svc.3.p':        'Wir bringen das Fahrzeug direkt zu dir — Hotel, Büro oder Zuhause.',
      'index.svc.4.h':        'Flexibel buchen',
      'index.svc.4.p':        'Kurzfristige Buchungen möglich. Für 1 Tag oder eine ganze Woche.',
      'index.why.eye':        '03 / WARUM MESKRO',
      'index.why.h2':         'Qualität, die man spürt.',
      'index.why.1.h':        'Handverlesene Flotte',
      'index.why.1.p':        'Nur Fahrzeuge, die wir selbst fahren würden.',
      'index.why.2.h':        'Transparente Preise',
      'index.why.2.p':        'Keine versteckten Kosten. Was du siehst, ist was du zahlst.',
      'index.why.3.h':        'Persönlicher Service',
      'index.why.3.p':        'Kein Call-Center. Du sprichst direkt mit uns.',
      'index.why.4.h':        'Sofort verfügbar',
      'index.why.4.p':        'Keine langen Wartezeiten. Oft noch am selben Tag.',
      'index.about.eye':      '04 / ÜBER UNS',
      'index.about.h2':       'Meskro Cars.',
      'index.about.p1':       'Wir sind ein Wiener Unternehmen mit einer einfachen Überzeugung: Jeder verdient das Erlebnis eines Traumautos.',
      'index.about.p2':       'Keine Kompromisse bei Qualität, kein bürokratischer Aufwand — nur du und das perfekte Fahrzeug.',
      'index.about.btn':      'Mehr über uns',
      'index.cta2.h2':        'Dein nächstes Fahrzeug wartet.',
      'index.cta2.p':         'Kontaktiere uns jetzt und starte dein Erlebnis.',
      'index.cta2.btn':       'Jetzt anfragen ↗',
      'index.cta2.ghost':     'Alle Modelle ansehen',

      /* ── Fahrzeuge ── */
      'fz.eye':               'UNSERE FAHRZEUGE',
      'fz.h1':                'Alle Modelle.',
      'fz.sub':               'Handverlesene Luxusfahrzeuge. Vollkasko inklusive.',
      'fz.tab.all':           'Alle',
      'fz.tab.sport':         'Sport',
      'fz.tab.suv':           'SUV',
      'fz.tab.limo':          'Limousine',
      'fz.tab.super':         'Supersport',
      'fz.anfragen':          'Anfragen',
      'fz.cta.h2':            'Keines davon ist das Richtige?',
      'fz.cta.p':             'Kontaktiere uns — wir finden gemeinsam dein Traumauto.',
      'fz.cta.btn':           'Jetzt anfragen ↗',
      'fz.cta.ghost':         'WhatsApp',

      /* ── Über uns ── */
      'ueber.eye':            'ÜBER UNS',
      'ueber.h1':             'Meskro Cars.',
      'ueber.sub':            'Luxusautovermietung mit Leidenschaft — mitten in Wien.',
      'ueber.story.eye':      'Unsere Geschichte',
      'ueber.story.h2':       'Gegründet aus Leidenschaft.',
      'ueber.story.p1':       'Meskro Cars entstand aus einer einfachen Idee: Jeder sollte das Erlebnis eines Traumautos kennen — nicht nur wer es sich leisten kann.',
      'ueber.story.p2':       'Wir starteten mit einer Handvoll Fahrzeugen und einem klaren Ziel: maximale Qualität, persönlicher Service, faire Preise.',
      'ueber.story.p3':       'Heute betreiben wir eine der exklusivsten Flotten Wiens — und wachsen weiter.',
      'ueber.val.eye':        'Unsere Werte',
      'ueber.val.h2':         'Was uns antreibt.',
      'ueber.val.1.h':        'Leidenschaft',
      'ueber.val.1.p':        'Wir lieben Autos. Jedes einzelne Fahrzeug unserer Flotte wurde mit Bedacht ausgewählt.',
      'ueber.val.2.h':        'Vertrauen',
      'ueber.val.2.p':        'Transparente Preise, keine versteckten Kosten. Dein Vertrauen ist unser wertvollstes Gut.',
      'ueber.val.3.h':        'Exzellenz',
      'ueber.val.3.p':        'Vom ersten Kontakt bis zur Rückgabe — wir setzen auf höchste Qualität in jedem Detail.',
      'ueber.cta.h2':         'Bereit für dein Erlebnis?',
      'ueber.cta.p':          'Kontaktiere uns jetzt und wir finden gemeinsam dein perfektes Fahrzeug.',
      'ueber.cta.btn':        'Jetzt anfragen ↗',
      'ueber.cta.ghost':      'Alle Modelle ansehen',

      /* ── Kontakt ── */
      'kontakt.eye':          'KONTAKT',
      'kontakt.h1':           'Schreib uns.',
      'kontakt.sub':          'Wir antworten schnell — meist innerhalb einer Stunde.',
      'kontakt.form.name':    'Dein Name',
      'kontakt.form.email':   'E-Mail Adresse',
      'kontakt.form.phone':   'Telefon (optional)',
      'kontakt.form.car':     'Fahrzeug (optional)',
      'kontakt.form.msg':     'Deine Nachricht',
      'kontakt.form.btn':     'Anfrage senden ↗',
      'kontakt.info.h':       'Oder direkt:',
      'kontakt.info.wa':      'WhatsApp schreiben',
      'kontakt.info.anruf':   'Anrufen',
      'kontakt.info.mail':    'E-Mail schreiben',

      /* ── G63 ── */
      'g63.eye':              'Das Fahrzeug',
      'g63.h2':               'Dominanz. In jeder Form.',
      'g63.p1':               'Der Mercedes-AMG G63 ist eine Legende — ein Fahrzeug, das seit Jahrzehnten die Straßen dominiert und dabei nie seinen Charakter verloren hat. 585 PS aus einem handgefertigten 4,0-Liter-V8-Biturbo, das ikonische Kastendesign und ein Klang, der Straßen verstummen lässt.',
      'g63.p2':               'In Wien ist der G63 mehr als ein Auto — er ist ein Statement. Ob am Graben, auf der Kärntner Straße oder bei der Fahrt ins Wienerwald: die Köpfe drehen sich immer mit.',
      'g63.p3':               'Das perfekte Fahrzeug für alle, die Aufmerksamkeit verdienen und dabei auf keinen Komfort verzichten wollen.',

      /* ── C200 ── */
      'c200.eye':             'Das Fahrzeug',
      'c200.h2':              'Eleganz trifft Dynamik.',
      'c200.p1':              'Der Mercedes C200 verbindet zeitlose Eleganz mit moderner Technologie. Ein Fahrzeug, das in jeder Situation überzeugt — ob im Berufsalltag oder bei besonderen Anlässen.',
      'c200.p2':              'Mit seinem kultiviertem Fahrwerk, dem hochwertigen Interieur und der charakterstarken Motorisierung setzt der C200 Maßstäbe in seiner Klasse.',

      /* ── C63S ── */
      'c63s.eye':             'Das Fahrzeug',
      'c63s.h2':              'Emotion. Ohne Kompromiss.',
      'c63s.p1':              'Der Mercedes-AMG C63 S Cabrio verbindet atemberaubende Performance mit offenem Fahrgenuß. 510 PS, ein charakterstarker V8 und das Flair eines echten Cabrios.',
      'c63s.p2':              'Offen fahren in Wien — kaum etwas ist eindrucksvoller als der Klang eines AMG V8 durch die Wiener Gassen.',

      /* ── GLE450d ── */
      'gle.eye':              'Das Fahrzeug',
      'gle.h2':               'Raum für Großes.',
      'gle.p1':               'Der Mercedes GLE 450d vereint Luxus, Raumangebot und Performance in einem Paket. Ideal für lange Reisen oder anspruchsvolle Auftritte.',
      'gle.p2':               'Mit dem kraftvollen Dieselmotor, dem aufwendig abgestimmten Luftfahrwerk und dem präzisen 4MATIC-Allradantrieb ist der GLE für jede Situation gerüstet.',

      /* ── S400 ── */
      's400.eye':             'Das Fahrzeug',
      's400.h2':              'Die Kunst der Stille.',
      's400.p1':              'Die Mercedes S-Klasse ist das Maß aller Dinge im Automobilbau. Vollständige Isolation vom Außenlärm, massierender Komfort und eine Technologie, die beeindruckt.',
      's400.p2':              'Der S400 ist das Fahrzeug der Wahl für geschäftliche Anlässe, Flughafentransfers oder jeden Moment, bei dem nur das Beste gut genug ist.',

      /* ── BMW M5 ── */
      'm5.eye':               'Das Fahrzeug',
      'm5.h2':                'Perfektion hat 600 PS.',
      'm5.p1':                'Der BMW M5 F90 ist der Maßstab aller Sports Sedans. 600 PS, M xDrive Allrad und ein Interieur das keine Wünsche offen lässt.',
      'm5.p2':                'Auf der Autobahn, in der Kurve oder vor dem Hotel — der M5 macht überall eine außergewöhnliche Figur.',

      /* ── RSQ8 ── */
      'rsq8.eye':             'Das Fahrzeug',
      'rsq8.h2':              'Macht. In reinster Form.',
      'rsq8.p1':              'Der Audi RSQ8 vereint die Eleganz eines SUV mit der rohen Kraft eines Supersportlers. 600 PS aus einem 4,0-Liter-V8-Biturbo katapultieren den RSQ8 in unter 3,8 Sekunden auf 100 km/h.',
      'rsq8.p2':              'Mit dem adaptiven Luftfahrwerk, dem quattro Allradantrieb und dem beeindruckenden Design ist der RSQ8 das Statement-Fahrzeug schlechthin.',
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
      'footer.tagline':       'Luxury Car Rental Vienna',
      'footer.nav':           'Navigation',
      'footer.kontakt':       'Contact',
      'footer.legal':         'Legal',
      'footer.impressum':     'Imprint',
      'footer.datenschutz':   'Privacy Policy',
      'footer.copy':          '© 2025 Meskro Cars. All rights reserved.',
      'footer.modelle':       'All Models',
      'footer.ueber':         'About Us',

      /* ── Shared CTAs ── */
      'cta.anfragen':         'Inquire Now ↗',
      'cta.whatsapp':         'WhatsApp',
      'cta.traumauto.h2':     'Ready for your dream car?',
      'cta.traumauto.p':      'Contact us — personal, fast and non-binding.',
      'cta.alle.modelle':     'Discover More Models',
      'cta.alle.ansehen':     'View all ↗',
      'cta.mobile':           'Inquire Now',

      /* ── Shared car-page labels ── */
      'car.back':             '← All Vehicles',
      'car.sec':              'sec.',
      'car.karosserie':       'Body',
      'car.highlights':       'Highlights',
      'car.galerie':          'Gallery',
      'car.fahrzeug':         'The Vehicle',
      'car.anfragen':         'Inquire Now',

      /* ── Index ── */
      'index.eyebrow':        'LUXURY CAR RENTAL VIENNA',
      'index.h1a':            'Start the Journey',
      'index.h1b':            'of Luxury —',
      'index.h1c':            'Your Dream Car',
      'index.h1d':            'is Waiting.',
      'index.cta':            'SELECT VEHICLE',
      'index.scroll':         'SCROLL DOWN',
      'index.stat.fz':        'VEHICLES',
      'index.stat.er':        'AVAILABLE',
      'index.fleet.eye':      '01 / FLEET',
      'index.fleet.h2':       'Our Vehicles',
      'index.fleet.all':      'View all ↗',
      'index.tab.all':        'All',
      'index.tab.sport':      'Sport',
      'index.tab.suv':        'SUV',
      'index.tab.limo':       'Saloon',
      'index.tab.super':      'Supersport',
      'index.fleet.anfragen': 'Inquire',
      'index.svc.eye':        '02 / SERVICE',
      'index.svc.h2':         'Completely carefree.',
      'index.svc.1.h':        'Full Insurance Included',
      'index.svc.1.p':        'Every vehicle is fully insured — no surcharge, no surprises.',
      'index.svc.2.h':        '24/7 Reachable',
      'index.svc.2.p':        'Our team is available around the clock — via WhatsApp, call or email.',
      'index.svc.3.h':        'Delivery & Pick-up',
      'index.svc.3.p':        'We bring the car directly to you — hotel, office or home.',
      'index.svc.4.h':        'Flexible Booking',
      'index.svc.4.p':        'Short-notice bookings possible. For 1 day or a whole week.',
      'index.why.eye':        '03 / WHY MESKRO',
      'index.why.h2':         'Quality you can feel.',
      'index.why.1.h':        'Hand-picked Fleet',
      'index.why.1.p':        'Only vehicles we would drive ourselves.',
      'index.why.2.h':        'Transparent Pricing',
      'index.why.2.p':        'No hidden costs. What you see is what you pay.',
      'index.why.3.h':        'Personal Service',
      'index.why.3.p':        'No call centre. You speak directly with us.',
      'index.why.4.h':        'Immediately Available',
      'index.why.4.p':        'No long waiting times. Often available same day.',
      'index.about.eye':      '04 / ABOUT US',
      'index.about.h2':       'Meskro Cars.',
      'index.about.p1':       'We are a Viennese company with a simple belief: everyone deserves the experience of a dream car.',
      'index.about.p2':       'No compromises on quality, no bureaucratic hassle — just you and the perfect vehicle.',
      'index.about.btn':      'More about us',
      'index.cta2.h2':        'Your next vehicle is waiting.',
      'index.cta2.p':         'Contact us now and start your experience.',
      'index.cta2.btn':       'Inquire Now ↗',
      'index.cta2.ghost':     'View All Models',

      /* ── Fahrzeuge ── */
      'fz.eye':               'OUR VEHICLES',
      'fz.h1':                'All Models.',
      'fz.sub':               'Hand-picked luxury vehicles. Full insurance included.',
      'fz.tab.all':           'All',
      'fz.tab.sport':         'Sport',
      'fz.tab.suv':           'SUV',
      'fz.tab.limo':          'Saloon',
      'fz.tab.super':         'Supersport',
      'fz.anfragen':          'Inquire',
      'fz.cta.h2':            'None of these the right one?',
      'fz.cta.p':             'Contact us — we will find your dream car together.',
      'fz.cta.btn':           'Inquire Now ↗',
      'fz.cta.ghost':         'WhatsApp',

      /* ── Über uns ── */
      'ueber.eye':            'ABOUT US',
      'ueber.h1':             'Meskro Cars.',
      'ueber.sub':            'Luxury car rental with passion — in the heart of Vienna.',
      'ueber.story.eye':      'Our Story',
      'ueber.story.h2':       'Founded out of passion.',
      'ueber.story.p1':       'Meskro Cars was born from a simple idea: everyone should experience a dream car — not just those who can afford one.',
      'ueber.story.p2':       'We started with a handful of vehicles and one clear goal: maximum quality, personal service, fair prices.',
      'ueber.story.p3':       'Today we operate one of Vienna\'s most exclusive fleets — and we keep growing.',
      'ueber.val.eye':        'Our Values',
      'ueber.val.h2':         'What drives us.',
      'ueber.val.1.h':        'Passion',
      'ueber.val.1.p':        'We love cars. Every single vehicle in our fleet was chosen with care.',
      'ueber.val.2.h':        'Trust',
      'ueber.val.2.p':        'Transparent pricing, no hidden costs. Your trust is our most valuable asset.',
      'ueber.val.3.h':        'Excellence',
      'ueber.val.3.p':        'From first contact to return — we pursue the highest quality in every detail.',
      'ueber.cta.h2':         'Ready for your experience?',
      'ueber.cta.p':          'Contact us now and we\'ll find your perfect vehicle together.',
      'ueber.cta.btn':        'Inquire Now ↗',
      'ueber.cta.ghost':      'View All Models',

      /* ── Kontakt ── */
      'kontakt.eye':          'CONTACT',
      'kontakt.h1':           'Get in touch.',
      'kontakt.sub':          'We respond quickly — usually within an hour.',
      'kontakt.form.name':    'Your Name',
      'kontakt.form.email':   'Email Address',
      'kontakt.form.phone':   'Phone (optional)',
      'kontakt.form.car':     'Vehicle (optional)',
      'kontakt.form.msg':     'Your Message',
      'kontakt.form.btn':     'Send Inquiry ↗',
      'kontakt.info.h':       'Or directly:',
      'kontakt.info.wa':      'Write on WhatsApp',
      'kontakt.info.anruf':   'Call Us',
      'kontakt.info.mail':    'Send Email',

      /* ── G63 ── */
      'g63.eye':              'The Vehicle',
      'g63.h2':               'Dominance. In every form.',
      'g63.p1':               'The Mercedes-AMG G63 is a legend — a vehicle that has dominated the roads for decades without ever losing its character. 585 hp from a hand-built 4.0-litre V8 biturbo, the iconic boxy design and a sound that silences streets.',
      'g63.p2':               'In Vienna, the G63 is more than a car — it\'s a statement. Whether on the Graben, Kärntner Straße or heading to the Vienna Woods: heads always turn.',
      'g63.p3':               'The perfect vehicle for those who deserve attention and refuse to compromise on comfort.',

      /* ── C200 ── */
      'c200.eye':             'The Vehicle',
      'c200.h2':              'Elegance meets Dynamics.',
      'c200.p1':              'The Mercedes C200 combines timeless elegance with modern technology. A vehicle that excels in every situation — whether in daily business or on special occasions.',
      'c200.p2':              'With its refined suspension, premium interior and characterful engine, the C200 sets benchmarks in its class.',

      /* ── C63S ── */
      'c63s.eye':             'The Vehicle',
      'c63s.h2':              'Emotion. Without compromise.',
      'c63s.p1':              'The Mercedes-AMG C63 S Cabriolet combines breathtaking performance with open-air driving pleasure. 510 hp, a characterful V8 and the flair of a true convertible.',
      'c63s.p2':              'Open-top driving in Vienna — few things are more impressive than the sound of an AMG V8 echoing through the Viennese lanes.',

      /* ── GLE450d ── */
      'gle.eye':              'The Vehicle',
      'gle.h2':               'Room for great things.',
      'gle.p1':               'The Mercedes GLE 450d combines luxury, space and performance in one package. Ideal for long journeys or demanding appearances.',
      'gle.p2':               'With its powerful diesel engine, sophisticatedly tuned air suspension and precise 4MATIC all-wheel drive, the GLE is ready for any situation.',

      /* ── S400 ── */
      's400.eye':             'The Vehicle',
      's400.h2':              'The art of silence.',
      's400.p1':              'The Mercedes S-Class is the benchmark of automotive engineering. Complete isolation from outside noise, massaging comfort and technology that impresses.',
      's400.p2':              'The S400 is the vehicle of choice for business occasions, airport transfers or any moment when only the best is good enough.',

      /* ── BMW M5 ── */
      'm5.eye':               'The Vehicle',
      'm5.h2':                'Perfection has 600 hp.',
      'm5.p1':                'The BMW M5 F90 is the benchmark of all sports saloons. 600 hp, M xDrive all-wheel drive and an interior that leaves nothing to be desired.',
      'm5.p2':                'On the motorway, in corners or in front of the hotel — the M5 cuts an exceptional figure everywhere.',

      /* ── RSQ8 ── */
      'rsq8.eye':             'The Vehicle',
      'rsq8.h2':              'Power. In its purest form.',
      'rsq8.p1':              'The Audi RSQ8 combines the elegance of an SUV with the raw power of a super sports car. 600 hp from a 4.0-litre V8 biturbo catapults the RSQ8 to 100 km/h in under 3.8 seconds.',
      'rsq8.p2':              'With adaptive air suspension, quattro all-wheel drive and an impressive design, the RSQ8 is the ultimate statement vehicle.',
    }
  };

  /* ── Apply translations ── */
  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    /* Update toggle button label */
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = t['nav.lang'];
  }

  /* ── Toggle ── */
  window.toggleLang = function () {
    const current = localStorage.getItem(STORAGE_KEY) || 'de';
    applyLang(current === 'de' ? 'en' : 'de');
  };

  /* ── Init on DOM ready ── */
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
