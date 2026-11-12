// Bilingual content store (EN / DE).
// Everything the site renders lives here so copy stays in one place.

export const meta = {
  name: 'Nicolas Huber',
  location: 'Zürich, Switzerland',
  email: 'nicolas.huber.dev@gmail.com',
  website: 'https://nicolas-huber.dev',
  github: 'https://github.com/HuberNicolas',
  linkedin: 'https://www.linkedin.com/in/huber-nicolas/',
  orcid: 'https://orcid.org/0009-0001-3266-2338',
  paper: 'https://ieeexplore.ieee.org/document/10224824',
  // Built in the private repo HuberNicolas/minimalistic-cv (artifact cv-web).
  cv: {
    en: '/cv/nicolas-huber-cv-en.pdf',
    de: '/cv/nicolas-huber-cv-de.pdf',
  },
}

// Posters shared by both languages: links, images and the printed field each poster carries.
// Copy for each poster lives under `posters.items` in the same order.
export const posterMeta = [
  {
    id: 'okcupid', layout: 'arch', format: 'normal', stop: { line: 'D', place: 'Hauptbahnhof' },
    image: 'img/projects/okcupid-explorer.jpg',
    field: 'cobalt',
    demo: 'https://hubernicolas.github.io/okcupid-explorer/',
    repo: 'https://github.com/HuberNicolas/okcupid-explorer',
  },
  { id: 'sdg', layout: 'bleed', format: 'normal', stop: { line: 'V', place: 'Paradeplatz' }, image: 'img/projects/sdg-tag-heroes.jpg', field: 'viridian', repo: 'https://github.com/HuberNicolas/sdg-tag-heroes' },
  { id: 'mtd', layout: 'plate', format: 'wide', stop: { line: 'R', place: 'Stauffacher' }, image: 'img/projects/mtd-ransomware.jpg', field: 'paper', chart: true, repo: 'https://github.com/HuberNicolas/MTDStrategySelectionAgent', paper: true },
  { id: 'heart', layout: 'medallion', format: 'small', stop: { line: 'D', place: 'Hardbrücke' }, image: 'img/projects/heart-disease-autoencoder.jpg', field: 'sky', chart: true, repo: 'https://github.com/HuberNicolas/heart-disease-risk-factors-uzh' },
  { id: 'gaia', layout: 'medallion', format: 'small', stop: { line: 'D', place: 'Escher-Wyss-Platz' }, image: 'img/projects/gaia-umap.jpg', field: 'navy', chart: true, repo: 'https://github.com/HuberNicolas/gaia-classifier' },
  {
    id: 'towers', layout: 'bleed', format: 'wide', stop: { line: 'T', place: 'Tiefenbrunnen' },
    image: 'img/projects/towers-title.jpg',
    field: 'vermilion',
    demo: 'https://hubernicolas.github.io/tower-defense-remastered/',
    repo: 'https://github.com/HuberNicolas/tower-defense-remastered',
  },
]

// The network plan of the projects: the tram network of the city of Zürich (zone 110), simplified to a
// 1100 × 820 plan. Lines run at 0°, 45° or 90°. Lines are fields of work, stops are projects.
// Lines carry letters, not numbers; their colours are those of the Zürich trams on each corridor.
// A stop carries either a poster id (`poster`) or the name of a handbill (`handbill`); place names stay German.
export const networkMap = {
  lines: [
    { id: 'D', colour: 'magenta', d: 'M120 360 L280 200 L400 200 L560 360 L680 360 L760 280 L760 60' },
    { id: 'V', colour: 'black', d: 'M560 120 L560 760' },
    { id: 'R', colour: 'green', d: 'M160 680 L320 520 L680 520 L760 440 L960 440' },
    { id: 'T', colour: 'blue', d: 'M680 360 L680 520 L860 700' },
  ],
  stops: [
    { place: 'Altstetten', x: 120, y: 360, label: { x: 104, y: 366, anchor: 'end' } },
    { place: 'Hardbrücke', x: 280, y: 200, lines: ['D'], poster: 'heart', label: { x: 296, y: 166, anchor: 'end' } },
    { place: 'Escher-Wyss-Platz', x: 400, y: 200, lines: ['D'], poster: 'gaia', label: { x: 392, y: 166, anchor: 'start' } },
    { place: 'Hauptbahnhof', x: 560, y: 360, lines: ['D', 'V'], poster: 'okcupid', change: true, label: { x: 546, y: 398, anchor: 'end' } },
    { place: 'Central', x: 680, y: 360, change: true, label: { x: 668, y: 342, anchor: 'end' } },
    { place: 'ETH/Universitätsspital', x: 760, y: 280, lines: ['D'], handbill: 'SDG Classifier', label: { x: 778, y: 286, anchor: 'start' } },
    { place: 'Irchel', x: 760, y: 160, label: { x: 778, y: 166, anchor: 'start' } },
    { place: 'Oerlikon', x: 760, y: 60, label: { x: 778, y: 66, anchor: 'start' } },
    { place: 'Bucheggplatz', x: 560, y: 120, label: { x: 544, y: 126, anchor: 'end' } },
    { place: 'Paradeplatz', x: 560, y: 520, lines: ['V', 'R'], poster: 'sdg', change: true, label: { x: 546, y: 558, anchor: 'end' } },
    { place: 'Enge', x: 560, y: 620, label: { x: 544, y: 626, anchor: 'end' } },
    { place: 'Wollishofen', x: 560, y: 760, label: { x: 544, y: 766, anchor: 'end' } },
    { place: 'Triemli', x: 160, y: 680, lines: ['R'], handbill: 'Numerical Methods', label: { x: 160, y: 716, anchor: 'middle' } },
    { place: 'Albisriederplatz', x: 320, y: 520, label: { x: 306, y: 506, anchor: 'end' } },
    { place: 'Stauffacher', x: 440, y: 520, lines: ['R'], poster: 'mtd', label: { x: 440, y: 478, anchor: 'middle' } },
    { place: 'Bellevue', x: 680, y: 520, lines: ['R', 'T'], handbill: 'Abstract Scraper', change: true, label: { x: 706, y: 526, anchor: 'start' } },
    { place: 'Kunsthaus', x: 760, y: 440, lines: ['R'], handbill: 'Network Science', label: { x: 774, y: 404, anchor: 'start' } },
    { place: 'Römerhof', x: 860, y: 440, label: { x: 860, y: 472, anchor: 'middle' } },
    { place: 'Klusplatz', x: 960, y: 440, label: { x: 976, y: 446, anchor: 'start' } },
    { place: 'Kreuzstrasse', x: 760, y: 600, lines: ['T'], handbill: 'Shortcut Overlay', label: { x: 786, y: 594, anchor: 'start' } },
    { place: 'Tiefenbrunnen', x: 860, y: 700, lines: ['T'], poster: 'towers', label: { x: 880, y: 706, anchor: 'start' } },
  ],
  // The lake and the Limmat, drawn flat and rough: they place the plan without tracing a map.
  lake: 'M600 548 C640 540 660 552 668 572 L820 724 C840 748 830 790 800 800 L610 800 C590 790 586 760 588 720 L592 600 C592 570 588 552 600 548 Z',
  river: 'M628 556 L628 380 L470 222',
  lakeLabel: { x: 700, y: 772 },
  // The fare zone of the city (110) as a dashed border, the two wooded hills and a few drawn landmarks.
  zone: 'M96 300 C84 170 210 34 430 34 L830 26 C930 26 1068 200 1066 420 C1064 600 1046 700 990 806 L520 806 C380 800 150 770 108 650 C70 530 104 410 96 300 Z',
  zoneBadge: { x: 990, y: 150 },
  woods: [
    { name: 'Zürichberg', d: 'M838 214 C880 190 960 196 1000 236 C1030 270 1014 330 990 368 C962 400 900 404 872 376 C850 352 860 316 846 290 C832 266 812 232 838 214 Z', label: { x: 930, y: 250 } },
    { name: 'Uetliberg', d: 'M118 470 C160 452 220 470 238 506 C252 536 234 584 206 606 C176 628 128 626 108 600 C88 572 92 486 118 470 Z', label: { x: 186, y: 604 } },
  ],
  landmarks: [
    // Grossmünster: the two towers on the east bank of the Limmat.
    { id: 'grossmuenster', x: 640, y: 424, d: 'M0 34 V12 Q4 3 8 12 V34 M12 34 V12 Q16 3 20 12 V34 M-3 34 H23 M4 18 V22 M16 18 V22' },
    // Prime Tower beside Hardbrücke.
    { id: 'prime', x: 316, y: 214, d: 'M0 46 L3 0 H13 L16 46 Z M2 12 H14 M1.5 24 H14.5 M1 36 H15' },
    // The tower on the Uetliberg.
    { id: 'uetliberg', x: 156, y: 540, d: 'M0 40 Q30 8 60 40 M30 24 V2 M26 8 H34 M27 14 H33' },
  ],
}

export const content = {
  en: {
    nav: {
      posters: 'Projects',
      network: 'Route map',
      now: 'Now',
      programme: 'Journey',
      person: 'About',
      contact: 'Contact',
      langLabel: 'DE',
      langSwitch: 'Auf Deutsch wechseln',
      evening: 'Evening show',
      matinee: 'Matinée',
      themeLabel: 'Switch between matinée (light) and evening show (dark)',
      menu: 'Menu',
    },
    house: {
      motto: 'aspiring code alchemist',
      name: 'Nicolas Huber',
      role: 'Data engineering & machine learning · Zürich',
      // The "transmutation formula", the house slogan.
      formula: ['raw data', 'elegant systems', 'meaningful impact'],
      lead:
        'I build data pipelines and machine-learning systems. MSc in Informatics from UZH, now an IT trainee at Migros, rotating through its data teams.',
      wallLabel: 'Projects, advertised',
      demo: 'Open the demo',
      play: 'Play it',
      code: 'Code',
      paper: 'Paper',
      cv: 'CV (PDF)',
      email: 'Email',
    },
    posters: {
      items: [
        {
          title: 'OkCupid Explorer',
          kind: 'Visual data analysis · UZH',
          claim: 'Find out how many of 842 strangers are just like you',
          desc: 'Answer a dating questionnaire and see where you land: cosine similarity, PCA and k-means, all running in the browser.',
          stamp: 'Live demo',
          alt: 'Scatter plot of 842 profiles in four coloured clusters, with your own position marked',
        },
        {
          title: 'SDG Tag Heroes',
          kind: 'Master’s thesis · UZH',
          claim: 'Labels the UN goals, with a little help from LLMs',
          desc: 'An interactive, gamified system for AI-assisted labeling of the Sustainable Development Goals in scientific research, with a human in the loop.',
          stamp: 'Thesis',
          alt: 'Illustrated fantasy world from the SDG Tag Heroes game: a castle city on a river at dusk',
        },
        {
          title: 'MTD Strategy Selection',
          kind: 'Bachelor’s thesis · IEEE 2023',
          claim: 'Keeps malware guessing on the smallest devices',
          desc: 'A Moving Target Defense agent that watches system metrics on IoT devices and deploys the most fitting defense.',
          stamp: 'IEEE',
          alt: 'Diagram of a ransomware attack: the attacker’s package encrypts the victim’s files and demands a ransom',
        },
        {
          title: 'Heart Disease, revisited',
          kind: 'Data science · 2021, rewritten 2026',
          claim: 'Now with honest accuracy, leakage removed',
          desc: 'Our first data science project, rewritten five years later. The high accuracies came from target leakage; without it, the models barely beat the baseline.',
          stamp: 'Revised',
          alt: 'Scatter plot of patients projected by an autoencoder, coloured by diagnosis',
        },
        {
          title: 'Gaia Classifier',
          kind: 'Data science · UTS Sydney',
          claim: 'Sorts the stars of Gaia DR3 by spectral class',
          desc: 'A class Kaggle competition: feature sets by decision-tree importance, then a cross-validated grid search over ten classifiers.',
          stamp: 'Kaggle',
          alt: 'UMAP projection of Gaia DR3 stars in two clusters, coloured by spectral class',
        },
        {
          title: 'Towers vs. Monsters',
          kind: 'Game · remastered 2026',
          claim: 'Every tower shoots in one straight line',
          desc: 'A remake of our 2021 software engineering lab project, now running entirely in the browser, on desktop and phone.',
          stamp: 'Free to play',
          alt: 'Title screen of Towers vs. Monsters: Remastered in yellow pixel letters on a green grid',
        },
      ],
    },
    now: {
      title: 'Now',
      role: 'IT trainee, data engineering & ML',
      org: 'Migros-Genossenschafts-Bund · since June 2025',
      body:
        'I rotate through data teams across the Migros group. Right now I’m in the data team at Digitec Galaxus, moving ML classifiers to a new Airflow platform.',
      stations: [
        {
          where: 'Migros Bank, Product & Marketing Analytics',
          when: 'Jan–Jun 2026',
          what:
            'Technical contact for modernising the data infrastructure of a team of about ten analysts: a dbt and Dagster pipeline on a new OpenShift platform, a campaign tool, an ML model prepared for an A/B test, and internal workshops on dbt, data products and Git.',
        },
        {
          where: 'MGB, Data & Analytics',
          when: 'Jun–Dec 2025',
          what:
            'An aggregation layer for the training of a promotion optimisation tool, built as a dbt pipeline on Google Cloud. It cut the number of models from 2.4 million to 10,000 and one training run from three hours to fifteen minutes.',
        },
      ],
      ad: {
        name: 'Training Tonic',
        claim: 'For training runs that take three hours',
        result: 'Fifteen minutes after one application.',
        note: 'Aggregation layer, MGB Data & Analytics, 2025.',
      },
    },
    box: {
      title: 'Route map',
      intro: 'All projects on one plan: each line is a field of work, each stop a project. The plan follows the trams of Zürich, much simplified.',
      planLabel: 'Network plan of my projects, drawn on a simplified tram network of Zürich',
      swipe: 'Swipe to see the whole plan',
      lines: { D: 'Data & ML', V: 'Visualisation', R: 'Research', T: 'Tools & web' },
      stopLabel: 'Stop',
      lake: 'Lake Zurich',
      seePoster: 'See the poster',
      seeCode: 'Code on GitHub',
      moreTitle: 'Handbills: smaller projects, coursework and tools',
      more: [
        { name: 'SDG Classifier', desc: 'Multi-label classification of research abstracts by SDG with DistilBERT', link: 'https://github.com/HuberNicolas/sdg-classifier' },
        { name: 'Shortcut Overlay', desc: 'A desktop HUD that shows the shortcuts of the focused app, for Linux, macOS and Windows', link: 'https://github.com/HuberNicolas/shortcut-overlay' },
        { name: 'Infrastructure', desc: 'Hosting for my projects: one Hetzner server, Coolify and images built in GitHub Actions', link: 'https://github.com/HuberNicolas/infrastructure' },
        { name: 'Network Science', desc: 'Centralities, community detection, null models and epidemics on networks · UZH 2023', link: 'https://github.com/HuberNicolas/network-science-uzh' },
        { name: 'Numerical Methods', desc: 'Classic numerical methods written from scratch, from root finding to integration · UZH 2020', link: 'https://github.com/HuberNicolas/numerical-methods-uzh' },
        { name: 'Abstract Scraper', desc: 'Adds abstracts to a CSV of DOIs via the OpenAlex API, with parallel requests', link: 'https://github.com/HuberNicolas/abstract-scraper' },
      ],
      paperLabel: 'Publication',
      paperTitle: 'Moving Target Defense Strategy Selection against Malware in Resource-Constrained Devices',
      paperVenue: 'IEEE, August 2023',
      all: 'Everything on GitHub',
    },
    programme: {
      title: 'The journey so far',
      items: [
        { when: 'Since 2025', what: 'IT trainee, data engineering & ML', where: 'Migros-Genossenschafts-Bund, Zürich' },
        { when: '2022–2025', what: 'MSc in Informatics', where: 'University of Zurich · Software Systems and Data Science · thesis on SDG Tag Heroes' },
        { when: '2024', what: 'Exchange semester', where: 'University of Technology Sydney · UNIX systems, data science, cyber security' },
        { when: '2023–2024', what: 'Research assistant', where: 'Interactive Visual Data Analysis Group, UZH · human-centred AI, visual analytics' },
        { when: '2021–2024', what: 'Junior web developer', where: 'novu (formerly jkweb AG) · Symfony and PHP web apps, an internal ERP, app-development courses' },
        { when: '2019–2022', what: 'BSc in Informatics', where: 'University of Zurich · thesis on the MTD strategy selection agent (IEEE paper)' },
      ],
    },
    person: {
      title: 'The person behind the remedies',
      body:
        'What I enjoy most is the full chain: a pipeline, a model, an interactive visualisation. I like to understand the data before I build on it.',
      focusTitle: 'Focus',
      focus: ['Data pipelines and modelling with dbt and Dagster', 'Getting ML models into production', 'Data platforms on OpenShift and Google Cloud'],
      alsoTitle: 'Also into',
      also: ['Data visualisation and visual analytics', 'Games and playful interfaces', 'IoT and cybersecurity'],
      sportTitle: 'Off the clock',
      sport: 'Strength training and weightlifting, casual running, the odd mountain and four surf camps.',
      toolsTitle: 'Tools',
      tools: 'Python, SQL, dbt, Dagster, scikit-learn, TypeScript, Vue, React, D3, FastAPI, Docker, Kubernetes, OpenShift, Google Cloud, GitLab, PHP and Symfony, LaTeX',
      langTitle: 'Languages',
      langs: 'German (native), English (fluent), French (A2/B1)',
      photos: [
        { src: 'img/surfing.jpg', alt: 'Nicolas in a rash guard at a surf camp', caption: 'Surf camp' },
        { src: 'img/hiking.jpg', alt: 'Nicolas on a summit above Lake Lucerne', caption: 'Above Lake Lucerne' },
        { src: 'img/running.jpg', alt: 'Nicolas running on a trail above a forest', caption: 'Running' },
      ],
    },
    closing: {
      title: 'Inquire within',
      body: 'For work, questions or a coffee in Zürich, write to me.',
      elsewhere: 'Elsewhere',
      built: 'Built with Vue and a bit of alchemy.',
    },
  },

  de: {
    nav: {
      posters: 'Projekte',
      network: 'Liniennetz',
      now: 'Aktuell',
      programme: 'Werdegang',
      person: 'Über mich',
      contact: 'Kontakt',
      langLabel: 'EN',
      langSwitch: 'Switch to English',
      evening: 'Abendvorstellung',
      matinee: 'Matinée',
      themeLabel: 'Zwischen Matinée (hell) und Abendvorstellung (dunkel) wechseln',
      menu: 'Menü',
    },
    house: {
      motto: 'aspiring code alchemist',
      name: 'Nicolas Huber',
      role: 'Data Engineering & Machine Learning · Zürich',
      formula: ['rohe Daten', 'elegante Systeme', 'echte Wirkung'],
      lead:
        'Ich baue Datenpipelines und Machine-Learning-Systeme. MSc Informatik der UZH, aktuell IT-Trainee bei der Migros, wo ich durch die Datenteams rotiere.',
      wallLabel: 'Projekte, angepriesen',
      demo: 'Demo öffnen',
      play: 'Spielen',
      code: 'Code',
      paper: 'Paper',
      cv: 'CV (PDF)',
      email: 'E-Mail',
    },
    posters: {
      items: [
        {
          title: 'OkCupid Explorer',
          kind: 'Visual Data Analysis · UZH',
          claim: 'Finde heraus, wie viele von 842 Fremden dir gleichen',
          desc: 'Füll den Fragebogen aus und sieh, wo du landest: Kosinus-Ähnlichkeit, PCA und k-Means, alles direkt im Browser.',
          stamp: 'Live-Demo',
          alt: 'Streudiagramm von 842 Profilen in vier farbigen Clustern, die eigene Position markiert',
        },
        {
          title: 'SDG Tag Heroes',
          kind: 'Masterarbeit · UZH',
          claim: 'Ordnet die UN-Ziele zu, mit etwas Hilfe von LLMs',
          desc: 'Ein interaktives, gamifiziertes System zum KI-gestützten Labeling der Nachhaltigkeitsziele in der Forschung, mit Human-in-the-Loop.',
          stamp: 'Masterarbeit',
          alt: 'Illustrierte Fantasiewelt aus dem Spiel SDG Tag Heroes: eine Burgstadt am Fluss in der Dämmerung',
        },
        {
          title: 'MTD-Strategieauswahl',
          kind: 'Bachelorarbeit · IEEE 2023',
          claim: 'Hält Malware auf kleinsten Geräten im Ungewissen',
          desc: 'Ein Moving-Target-Defense-Agent, der auf IoT-Geräten Systemmetriken überwacht und den passendsten Abwehrmechanismus einsetzt.',
          stamp: 'IEEE',
          alt: 'Diagramm eines Ransomware-Angriffs: das Paket des Angreifers verschlüsselt die Dateien des Opfers und fordert Lösegeld',
        },
        {
          title: 'Heart Disease, neu aufgerollt',
          kind: 'Data Science · 2021, neu geschrieben 2026',
          claim: 'Jetzt mit ehrlicher Accuracy, ohne Leakage',
          desc: 'Unser erstes Data-Science-Projekt, fünf Jahre später neu geschrieben. Die hohen Accuracies kamen von Target Leakage; ohne sie schlagen die Modelle die Baseline kaum.',
          stamp: 'Überarbeitet',
          alt: 'Streudiagramm von Patientinnen und Patienten, mit einem Autoencoder projiziert und nach Diagnose eingefärbt',
        },
        {
          title: 'Gaia Classifier',
          kind: 'Data Science · UTS Sydney',
          claim: 'Sortiert die Sterne von Gaia DR3 nach Spektralklasse',
          desc: 'Eine Kaggle-Competition im Kurs: Feature-Sets per Decision-Tree-Importance, danach eine kreuzvalidierte Grid Search über zehn Klassifikatoren.',
          stamp: 'Kaggle',
          alt: 'UMAP-Projektion von Gaia-DR3-Sternen in zwei Clustern, nach Spektralklasse eingefärbt',
        },
        {
          title: 'Towers vs. Monsters',
          kind: 'Spiel · Remaster 2026',
          claim: 'Jeder Turm schiesst in genau einer Linie',
          desc: 'Remake unseres Software-Engineering-Projekts von 2021, läuft jetzt komplett im Browser, auf Desktop und Handy.',
          stamp: 'Gratis spielbar',
          alt: 'Titelbild von Towers vs. Monsters: Remastered in gelben Pixelbuchstaben auf grünem Raster',
        },
      ],
    },
    now: {
      title: 'Aktuell',
      role: 'IT-Trainee, Data Engineering & ML',
      org: 'Migros-Genossenschafts-Bund · seit Juni 2025',
      body:
        'Ich rotiere durch Datenteams der Migros-Gruppe. Aktuell bin ich im Data Team bei Digitec Galaxus und migriere ML-Klassifizierer auf eine neue Airflow-Plattform.',
      stations: [
        {
          where: 'Migros Bank, Product & Marketing Analytics',
          when: 'Jan.–Juni 2026',
          what:
            'Technische Ansprechperson für die Modernisierung der Dateninfrastruktur eines Teams von rund zehn Analysten: eine Pipeline mit dbt und Dagster auf einer neuen OpenShift-Plattform, ein Kampagnentool, ein ML-Modell für einen A/B-Test und interne Workshops zu dbt, Datenprodukten und Git.',
        },
        {
          where: 'MGB, Data & Analytics',
          when: 'Juni–Dez. 2025',
          what:
            'Ein Aggregations-Layer für das Modelltraining eines Promotionsoptimierungstools, umgesetzt als dbt-Pipeline auf Google Cloud. Er senkte die Zahl der Modelle von 2,4 Millionen auf 10’000 und einen Trainingslauf von drei Stunden auf fünfzehn Minuten.',
        },
      ],
      ad: {
        name: 'Trainings-Tonikum',
        claim: 'Gegen Trainingsläufe von drei Stunden',
        result: 'Fünfzehn Minuten nach einer Anwendung.',
        note: 'Aggregations-Layer, MGB Data & Analytics, 2025.',
      },
    },
    box: {
      title: 'Liniennetz',
      intro: 'Alle Projekte auf einem Plan: Jede Linie ist ein Fachgebiet, jede Haltestelle ein Projekt. Der Plan folgt den Zürcher Trams, stark vereinfacht.',
      planLabel: 'Netzplan meiner Projekte, gezeichnet auf einem vereinfachten Zürcher Tramnetz',
      swipe: 'Wischen, um den ganzen Plan zu sehen',
      lines: { D: 'Data & ML', V: 'Visualisierung', R: 'Forschung', T: 'Werkzeuge & Web' },
      stopLabel: 'Halt',
      lake: 'Zürichsee',
      seePoster: 'Zum Plakat',
      seeCode: 'Code auf GitHub',
      moreTitle: 'Handzettel: kleinere Projekte, Kursarbeiten und Werkzeuge',
      more: [
        { name: 'SDG Classifier', desc: 'Multi-Label-Klassifikation von Forschungsabstracts nach SDG mit DistilBERT', link: 'https://github.com/HuberNicolas/sdg-classifier' },
        { name: 'Shortcut Overlay', desc: 'Desktop-HUD mit den Tastenkürzeln des aktiven Programms, für Linux, macOS und Windows', link: 'https://github.com/HuberNicolas/shortcut-overlay' },
        { name: 'Infrastructure', desc: 'Hosting meiner Projekte: ein Hetzner-Server, Coolify und Images aus GitHub Actions', link: 'https://github.com/HuberNicolas/infrastructure' },
        { name: 'Network Science', desc: 'Zentralitäten, Community Detection, Nullmodelle und Epidemien auf Netzwerken · UZH 2023', link: 'https://github.com/HuberNicolas/network-science-uzh' },
        { name: 'Numerical Methods', desc: 'Klassische numerische Verfahren von Grund auf, von Nullstellensuche bis Integration · UZH 2020', link: 'https://github.com/HuberNicolas/numerical-methods-uzh' },
        { name: 'Abstract Scraper', desc: 'Ergänzt eine CSV mit DOIs um Abstracts über die OpenAlex-API, mit parallelen Requests', link: 'https://github.com/HuberNicolas/abstract-scraper' },
      ],
      paperLabel: 'Publikation',
      paperTitle: 'Moving Target Defense Strategy Selection against Malware in Resource-Constrained Devices',
      paperVenue: 'IEEE, August 2023',
      all: 'Alles auf GitHub',
    },
    programme: {
      title: 'Der bisherige Weg',
      items: [
        { when: 'Seit 2025', what: 'IT-Trainee, Data Engineering & ML', where: 'Migros-Genossenschafts-Bund, Zürich' },
        { when: '2022–2025', what: 'MSc Informatik', where: 'Universität Zürich · Software Systems und Data Science · Masterarbeit zu SDG Tag Heroes' },
        { when: '2024', what: 'Austauschsemester', where: 'University of Technology Sydney · UNIX-Systeme, Data Science, Cyber Security' },
        { when: '2023–2024', what: 'Hilfsassistent', where: 'Interactive Visual Data Analysis Group, UZH · Human-centred AI, Visual Analytics' },
        { when: '2021–2024', what: 'Junior-Webentwickler', where: 'novu (ehem. jkweb AG) · Symfony- und PHP-Webapps, internes ERP, Kurse für App-Entwicklung' },
        { when: '2019–2022', what: 'BSc Informatik', where: 'Universität Zürich · Bachelorarbeit zum MTD-Strategieauswahl-Agenten (IEEE-Paper)' },
      ],
    },
    person: {
      title: 'Der Mensch hinter den Mitteln',
      body:
        'Mich reizt die ganze Kette: eine Pipeline, ein Modell, eine interaktive Visualisierung. Ich will die Daten verstehen, bevor ich darauf aufbaue.',
      focusTitle: 'Fokus',
      focus: ['Datenpipelines und Modellierung mit dbt und Dagster', 'ML-Modelle in Produktion bringen', 'Datenplattformen auf OpenShift und Google Cloud'],
      alsoTitle: 'Ausserdem',
      also: ['Datenvisualisierung und Visual Analytics', 'Games und verspielte Interfaces', 'IoT und Cybersecurity'],
      sportTitle: 'Nach Feierabend',
      sport: 'Krafttraining und Gewichtheben, Laufen zum Plausch, ab und zu ein Berg und vier Surfcamps.',
      toolsTitle: 'Werkzeuge',
      tools: 'Python, SQL, dbt, Dagster, scikit-learn, TypeScript, Vue, React, D3, FastAPI, Docker, Kubernetes, OpenShift, Google Cloud, GitLab, PHP und Symfony, LaTeX',
      langTitle: 'Sprachen',
      langs: 'Deutsch (Muttersprache), Englisch (fliessend), Französisch (A2/B1)',
      photos: [
        { src: 'img/surfing.jpg', alt: 'Nicolas im Lycra-Shirt in einem Surfcamp', caption: 'Surfcamp' },
        { src: 'img/hiking.jpg', alt: 'Nicolas auf einem Gipfel über dem Vierwaldstättersee', caption: 'Über dem Vierwaldstättersee' },
        { src: 'img/running.jpg', alt: 'Nicolas beim Laufen auf einem Weg über einem Wald', caption: 'Laufen' },
      ],
    },
    closing: {
      title: 'Anfragen willkommen',
      body: 'Für Arbeit, Fragen oder einen Kaffee in Zürich: schreib mir.',
      elsewhere: 'Anderswo',
      built: 'Gebaut mit Vue und etwas Alchemie.',
    },
  },
}
