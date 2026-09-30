// Bilingual content store (EN / DE).
// Everything the site renders lives here so copy stays in one place.

export const meta = {
  name: 'Nicolas Huber',
  location: 'Zürich, Switzerland',
  email: 'nicolas.huber.dev@gmail.com',
  website: 'https://nicolas-huber.dev',
  github: 'https://github.com/HuberNicolas',
  linkedin: 'https://www.linkedin.com/in/nicolas-huber-dev/',
  orcid: 'https://orcid.org/0009-0001-3266-2338',
  // Drop a real CV file into /public and update these paths.
  cv: {
    en: '/cv/nicolas-huber-cv-en.pdf',
    de: '/cv/nicolas-huber-cv-de.pdf',
  },
}

export const content = {
  en: {
    nav: {
      work: 'Work',
      projects: 'Projects',
      journey: 'Journey',
      about: 'About',
      langLabel: 'DE',
    },
    hero: {
      badge: 'Data-driven developer · Zürich',
      hello: 'Hi, I’m Nicolas —',
      name: 'Nicolas Huber',
      roles: ['aspiring code alchemist', 'data engineer', 'ML tinkerer', 'systems builder'],
      // Rendered as a "transmutation formula" under the name.
      formula: ['raw data', 'elegant systems', 'meaningful impact'],
      lead:
        'I turn messy, raw data into clean pipelines, sharp models and elegant systems. MSc in Informatics from UZH, now an IT trainee at Migros working on data engineering and ML — curious, reliable, solution-oriented.',
      ctaProjects: 'Explore projects',
      ctaGithub: 'GitHub',
      ctaCv: 'Download CV',
      photoAlt: 'Nicolas Huber at a whiteboard with a system sketch',
    },
    stats: [
      { value: '333', label: 'ECTS credits earned', accent: 'green' },
      { value: '240×', label: 'fewer ML models to train', accent: 'blue' },
      { value: 'MSc', label: 'Informatics · UZH', accent: 'violet' },
      { value: 'IEEE', label: 'peer-reviewed publication', accent: 'amber' },
    ],
    work: {
      title: 'Where I work',
      kicker: '// current role',
      role: 'IT Trainee — Data Engineering & ML',
      company: 'Migros-Genossenschafts-Bund',
      period: 'Jun 2025 — present · Zürich',
      body:
        'Rotating through data teams across the Migros group. Right now I’m in the Product Development team at Digitec Galaxus, migrating ML models.',
      highlights: [
        'Migros Bank, Product & Marketing Analytics (Jan — Jun 2026): technical contact for modernising the data infrastructure of a team of ~10 analysts. Built a dbt + Dagster pipeline on a new OpenShift platform, deployed a campaign tool, prepared an ML model for an A/B test and ran internal workshops on dbt, data products and Git.',
        'MGB, Data & Analytics (Jun — Dec 2025): added an aggregation layer to the training of a promotion optimisation tool — 2.4 M models down to 10,000 (240×), one training run from 3 hours down to 15 minutes (12×). Built as a dbt pipeline on Google Cloud.',
      ],
      tags: ['dbt', 'Dagster', 'Python', 'SQL', 'Google Cloud', 'OpenShift', 'Machine Learning'],
    },
    projects: {
      title: 'Selected projects',
      kicker: '// things I’ve built',
      viewAll: 'See all on GitHub',
      items: [
        {
          accent: 'green',
          name: 'SDG Tag Heroes',
          role: "Master's Thesis",
          desc:
            'An interactive, gamified system for AI-assisted labeling of UN Sustainable Development Goals in scientific research — human-in-the-loop meets LLMs.',
          tags: ['Vue', 'D3', 'FastAPI', 'LLM'],
          link: 'https://github.com/HuberNicolas/sdg-tag-heroes',
        },
        {
          accent: 'blue',
          name: 'MTD Strategy Selection Agent',
          role: "Bachelor's Thesis · IEEE",
          desc:
            'A Moving Target Defense agent that picks the optimal defense mechanism against malware on resource-constrained IoT devices, driven by platform metrics.',
          tags: ['Python', 'IoT Security', 'RL'],
          link: 'https://github.com/HuberNicolas/MTDStrategySelectionAgent',
        },
        {
          accent: 'violet',
          name: 'OkCupid Explorer',
          role: 'Interactive Visual Data Analysis · UZH',
          desc:
            'Answer a dating questionnaire and see where you land among 842 real OkCupid profiles — cosine similarity, PCA and k-means, all running in the browser.',
          tags: ['Vue', 'TypeScript', 'ECharts', 'scikit-learn'],
          link: 'https://github.com/HuberNicolas/okcupid-explorer',
        },
        {
          accent: 'amber',
          name: 'Towers vs. Monsters: Remastered',
          role: 'Game · play in the browser',
          desc:
            'A tower defense game where every tower shoots in one straight line. Remake of our 2021 software engineering lab project, now running entirely in the browser — on desktop and phone.',
          tags: ['React', 'TypeScript', 'Canvas', 'Vitest'],
          link: 'https://hubernicolas.github.io/tower-defense-remastered/',
        },
        {
          accent: 'green',
          name: 'Gaia Classifier',
          role: 'Data Science · UTS Sydney',
          desc:
            'Predicts the spectral class of Gaia DR3 stars with a grid search over ten scikit-learn and XGBoost classifiers — 99.7 % cross-validation accuracy.',
          tags: ['Python', 'scikit-learn', 'XGBoost', 'pandas'],
          link: 'https://github.com/HuberNicolas/gaia-classifier',
        },
        {
          accent: 'blue',
          name: 'Heart Disease Risk Factors',
          role: 'Data Science · first steps',
          desc:
            'Compares heart disease risk factors across the four hospitals of the UCI dataset. Our first data science project from 2021, rewritten as a tested Python package.',
          tags: ['Python', 'pandas', 'scikit-learn', 'UMAP'],
          link: 'https://github.com/HuberNicolas/heart-disease-risk-factors-uzh',
        },
      ],
    },
    publication: {
      kicker: '// publication',
      title: 'Moving Target Defense Strategy Selection against Malware in Resource-Constrained Devices',
      venue: 'IEEE · Aug 2023',
      desc:
        'Contributed a systematic methodology for building MTD strategy-selection agents that decide between defense mechanisms to deploy the optimal one.',
      cta: 'Read the paper',
    },
    journey: {
      title: 'The journey',
      kicker: '// education & experience',
      items: [
        {
          accent: 'green',
          period: '2023 — 2025',
          title: 'MSc in Informatics — UZH',
          org: 'Software Systems (90) + Data Science (30)',
          desc: 'Master’s thesis on an AI-assisted, gamified SDG labeling system.',
        },
        {
          accent: 'blue',
          period: '2024',
          title: 'Exchange semester — UTS Sydney',
          org: 'University of Technology Sydney',
          desc: 'UNIX systems, data science and cyber security. UTS Cybersec Society.',
        },
        {
          accent: 'violet',
          period: '2023 — 2024',
          title: 'Research Assistant (HiWi) — IVDA',
          org: 'Interactive Visual Data Analysis Group, UZH',
          desc: 'Human-centered AI, visual analytics with Python, Vue & D3.',
        },
        {
          accent: 'amber',
          period: '2019 — 2023',
          title: 'BSc in Informatics — UZH',
          org: 'Software Systems + Informatics',
          desc: 'Bachelor’s thesis on an MTD strategy selection agent (IEEE paper).',
        },
        {
          accent: 'blue',
          period: '2021 — 2024',
          title: 'Junior Web Developer',
          org: 'novu (ex jkweb AG)',
          desc: 'Symfony/PHP web apps, internal ERP, teaching app-development courses.',
        },
      ],
    },
    about: {
      title: 'About',
      kicker: '// the human behind the commits',
      body:
        'My dream role? Data-driven developer — combining a passion for data with the craft of building things that matter. I like working with people who have a clear vision and push projects forward. In three words: curious, reliable, solution-oriented.',
      groups: [
        {
          title: 'Driven by',
          items: ['Data architecture & pipelines', 'Modern data-driven systems', 'MLOps & Data Engineering'],
        },
        {
          title: 'Interests',
          items: ['Machine Learning & Data Science', 'Data visualisation', 'IoT & Cybersecurity'],
        },
      ],
      stackTitle: 'Stack & tools',
      stack: [
        'Python', 'SQL', 'dbt', 'scikit-learn', 'Vue.js', 'D3.js', 'FastAPI',
        'Docker', 'Kubernetes', 'OpenShift', 'GitLab', 'PHP / Symfony', 'LaTeX',
      ],
      photoAlt: {
        hiking: 'Nicolas on a summit above Lake Lucerne',
        surfing: 'Nicolas in a rash guard at a surf camp',
      },
      photoCaption: 'Off the clock — usually up a mountain or out on the waves.',
      langTitle: 'Languages',
      langs: ['German — native', 'English — fluent', 'French — A2/B1'],
    },
    footer: {
      tagline: 'Turning raw data into elegant systems.',
      built: 'Built with Vue & a bit of alchemy.',
    },
  },

  de: {
    nav: {
      work: 'Arbeit',
      projects: 'Projekte',
      journey: 'Werdegang',
      about: 'Über mich',
      langLabel: 'EN',
    },
    hero: {
      badge: 'Data-driven Developer · Zürich',
      hello: 'Hi, ich bin Nicolas —',
      name: 'Nicolas Huber',
      roles: ['aspiring code alchemist', 'Data Engineer', 'ML-Tüftler', 'Systems Builder'],
      formula: ['rohe Daten', 'elegante Systeme', 'echter Impact'],
      lead:
        'Ich verwandle rohe, unordentliche Daten in saubere Pipelines, scharfe Modelle und elegante Systeme. MSc Informatik der UZH, aktuell IT-Trainee bei der Migros mit Fokus auf Data Engineering und ML — neugierig, verlässlich, lösungsorientiert.',
      ctaProjects: 'Projekte ansehen',
      ctaGithub: 'GitHub',
      ctaCv: 'CV herunterladen',
      photoAlt: 'Nicolas Huber an einem Whiteboard mit einer Systemskizze',
    },
    stats: [
      { value: '333', label: 'erreichte ECTS-Credits', accent: 'green' },
      { value: '240×', label: 'weniger zu trainierende ML-Modelle', accent: 'blue' },
      { value: 'MSc', label: 'Informatik · UZH', accent: 'violet' },
      { value: 'IEEE', label: 'peer-reviewed Publikation', accent: 'amber' },
    ],
    work: {
      title: 'Wo ich arbeite',
      kicker: '// aktuelle Rolle',
      role: 'IT-Trainee — Data Engineering & ML',
      company: 'Migros-Genossenschafts-Bund',
      period: 'Juni 2025 — heute · Zürich',
      body:
        'Rotation durch Datenteams der Migros-Gruppe. Aktuell bin ich im Product-Development-Team bei Digitec Galaxus und migriere ML-Modelle.',
      highlights: [
        'Migros Bank, Product & Marketing Analytics (Jan. — Juni 2026): technische Ansprechperson für die Modernisierung der Dateninfrastruktur eines Teams von ~10 Analysten. Datenpipeline mit dbt und Dagster auf einer neuen OpenShift-Plattform, Deployment eines Kampagnentools, Vorbereitung eines ML-Modells für einen A/B-Test und interne Workshops zu dbt, Datenprodukten und Git.',
        'MGB, Data & Analytics (Juni — Dez. 2025): Aggregations-Layer für das Modelltraining eines Promotionsoptimierungstools — von 2,4 Mio. auf 10.000 Modelle (Faktor 240), ein Trainingslauf von 3 Stunden auf 15 Minuten (Faktor 12). Umgesetzt als dbt-Pipeline auf Google Cloud.',
      ],
      tags: ['dbt', 'Dagster', 'Python', 'SQL', 'Google Cloud', 'OpenShift', 'Machine Learning'],
    },
    projects: {
      title: 'Ausgewählte Projekte',
      kicker: '// was ich gebaut habe',
      viewAll: 'Alle auf GitHub ansehen',
      items: [
        {
          accent: 'green',
          name: 'SDG Tag Heroes',
          role: 'Masterarbeit',
          desc:
            'Ein interaktives, gamifiziertes System zum KI-gestützten Labeling der UN-Nachhaltigkeitsziele in der Forschung — Human-in-the-Loop trifft LLMs.',
          tags: ['Vue', 'D3', 'FastAPI', 'LLM'],
          link: 'https://github.com/HuberNicolas/sdg-tag-heroes',
        },
        {
          accent: 'blue',
          name: 'MTD Strategy Selection Agent',
          role: 'Bachelorarbeit · IEEE',
          desc:
            'Ein Moving-Target-Defense-Agent, der auf ressourcenbeschränkten IoT-Geräten anhand von Plattform-Metriken den optimalen Abwehrmechanismus gegen Malware wählt.',
          tags: ['Python', 'IoT Security', 'RL'],
          link: 'https://github.com/HuberNicolas/MTDStrategySelectionAgent',
        },
        {
          accent: 'violet',
          name: 'OkCupid Explorer',
          role: 'Interactive Visual Data Analysis · UZH',
          desc:
            'Fragebogen ausfüllen und sehen, wo man unter 842 echten OkCupid-Profilen landet — Kosinus-Ähnlichkeit, PCA und k-Means, alles direkt im Browser.',
          tags: ['Vue', 'TypeScript', 'ECharts', 'scikit-learn'],
          link: 'https://github.com/HuberNicolas/okcupid-explorer',
        },
        {
          accent: 'amber',
          name: 'Towers vs. Monsters: Remastered',
          role: 'Spiel · im Browser spielbar',
          desc:
            'Ein Tower-Defense-Spiel, in dem jeder Turm in genau einer Linie schiesst. Remake unseres Software-Engineering-Projekts von 2021, läuft jetzt komplett im Browser — auf Desktop und Handy.',
          tags: ['React', 'TypeScript', 'Canvas', 'Vitest'],
          link: 'https://hubernicolas.github.io/tower-defense-remastered/',
        },
        {
          accent: 'green',
          name: 'Gaia Classifier',
          role: 'Data Science · UTS Sydney',
          desc:
            'Bestimmt die Spektralklasse von Gaia-DR3-Sternen mit einer Grid Search über zehn scikit-learn- und XGBoost-Klassifikatoren — 99,7 % Accuracy in der Kreuzvalidierung.',
          tags: ['Python', 'scikit-learn', 'XGBoost', 'pandas'],
          link: 'https://github.com/HuberNicolas/gaia-classifier',
        },
        {
          accent: 'blue',
          name: 'Heart Disease Risk Factors',
          role: 'Data Science · erste Schritte',
          desc:
            'Vergleicht Risikofaktoren für Herzkrankheiten an den vier Spitälern des UCI-Datensatzes. Unser erstes Data-Science-Projekt von 2021, neu geschrieben als getestetes Python-Paket.',
          tags: ['Python', 'pandas', 'scikit-learn', 'UMAP'],
          link: 'https://github.com/HuberNicolas/heart-disease-risk-factors-uzh',
        },
      ],
    },
    publication: {
      kicker: '// Publikation',
      title: 'Moving Target Defense Strategy Selection against Malware in Resource-Constrained Devices',
      venue: 'IEEE · Aug. 2023',
      desc:
        'Beitrag einer systematischen Methodik zum Aufbau von MTD-Strategieauswahl-Agenten, die zwischen Abwehrmechanismen entscheiden, um den optimalen einzusetzen.',
      cta: 'Paper lesen',
    },
    journey: {
      title: 'Der Werdegang',
      kicker: '// Ausbildung & Erfahrung',
      items: [
        {
          accent: 'green',
          period: '2023 — 2025',
          title: 'MSc Informatik — UZH',
          org: 'Software Systems (90) + Data Science (30)',
          desc: 'Masterarbeit zu einem KI-gestützten, gamifizierten SDG-Labeling-System.',
        },
        {
          accent: 'blue',
          period: '2024',
          title: 'Austauschsemester — UTS Sydney',
          org: 'University of Technology Sydney',
          desc: 'UNIX-Systeme, Data Science und Cyber Security. UTS Cybersec Society.',
        },
        {
          accent: 'violet',
          period: '2023 — 2024',
          title: 'Hilfsassistent (HiWi) — IVDA',
          org: 'Interactive Visual Data Analysis Group, UZH',
          desc: 'Human-centered AI, Visual Analytics mit Python, Vue & D3.',
        },
        {
          accent: 'amber',
          period: '2019 — 2023',
          title: 'BSc Informatik — UZH',
          org: 'Software Systems + Informatik',
          desc: 'Bachelorarbeit zu einem MTD-Strategieauswahl-Agenten (IEEE-Paper).',
        },
        {
          accent: 'blue',
          period: '2021 — 2024',
          title: 'Junior-Webentwickler',
          org: 'novu (ehem. jkweb AG)',
          desc: 'Symfony/PHP-Webapps, internes ERP, Kurse für angehende Entwickler.',
        },
      ],
    },
    about: {
      title: 'Über mich',
      kicker: '// der Mensch hinter den Commits',
      body:
        'Meine Traumrolle? Data-driven Developer — die Leidenschaft für Daten mit dem Handwerk verbinden, Dinge zu bauen, die zählen. Ich arbeite gern mit Menschen, die eine klare Vision haben und Projekte voranbringen. In drei Worten: neugierig, verlässlich, lösungsorientiert.',
      groups: [
        {
          title: 'Was mich antreibt',
          items: ['Datenarchitektur & Pipelines', 'Moderne datengetriebene Systeme', 'MLOps & Data Engineering'],
        },
        {
          title: 'Interessen',
          items: ['Machine Learning & Data Science', 'Datenvisualisierung', 'IoT & Cybersecurity'],
        },
      ],
      stackTitle: 'Stack & Tools',
      stack: [
        'Python', 'SQL', 'dbt', 'scikit-learn', 'Vue.js', 'D3.js', 'FastAPI',
        'Docker', 'Kubernetes', 'OpenShift', 'GitLab', 'PHP / Symfony', 'LaTeX',
      ],
      photoAlt: {
        hiking: 'Nicolas auf einem Gipfel über dem Vierwaldstättersee',
        surfing: 'Nicolas im Lycra-Shirt in einem Surfcamp',
      },
      photoCaption: 'Offline — meistens auf einem Berg oder auf den Wellen.',
      langTitle: 'Sprachen',
      langs: ['Deutsch — Muttersprache', 'Englisch — fließend', 'Französisch — A2/B1'],
    },
    footer: {
      tagline: 'Aus rohen Daten werden elegante Systeme.',
      built: 'Gebaut mit Vue & etwas Alchemie.',
    },
  },
}
