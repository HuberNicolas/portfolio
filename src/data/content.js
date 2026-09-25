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
        'I turn messy, raw data into clean pipelines, sharp models and elegant systems. MSc in Informatics from UZH, now doing Data Engineering & Analytics at Migros — curious, reliable, solution-oriented.',
      ctaProjects: 'Explore projects',
      ctaGithub: 'GitHub',
      ctaCv: 'Download CV',
      photoAlt: 'Nicolas Huber at a whiteboard with a system sketch',
    },
    stats: [
      { value: '333', label: 'ECTS credits earned', accent: 'green' },
      { value: '4+ yrs', label: 'professional dev experience', accent: 'blue' },
      { value: 'MSc', label: 'Informatics · UZH', accent: 'violet' },
      { value: 'IEEE', label: 'peer-reviewed publication', accent: 'amber' },
    ],
    work: {
      title: 'Where I work',
      kicker: '// current role',
      role: 'IT Trainee — Data Engineering & Analytics',
      company: 'Migros-Genossenschafts-Bund',
      period: 'Jun 2025 — present · Zürich',
      body:
        'Rotating across data and platform teams: building dbt pipelines and ML feature engineering for price & promotion optimisation, running data analyses on stockpiling effects, and operating systems on Kubernetes, OpenShift & GitLab.',
      tags: ['dbt', 'Python', 'SQL', 'Machine Learning', 'Kubernetes', 'OpenShift'],
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
          name: 'Interactive Visual Data Analysis',
          role: 'Research Assistant · IVDA @ UZH',
          desc:
            'Human-centered AI tooling for visual analytics — combining machine learning, LLMs and interactive visualisation to explore complex data.',
          tags: ['Vue', 'D3', 'Qdrant', 'Docker'],
          link: 'https://github.com/HuberNicolas',
        },
        {
          accent: 'amber',
          name: 'Design Patterns Cheatsheet',
          role: 'Open source',
          desc:
            'Clean, minimal Python implementations of the classic software design patterns — a reference I actually reach for.',
          tags: ['Python', 'Architecture'],
          link: 'https://github.com/HuberNicolas/design-patterns-cheatsheet',
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
        'Ich verwandle rohe, unordentliche Daten in saubere Pipelines, scharfe Modelle und elegante Systeme. MSc Informatik der UZH, aktuell Data Engineering & Analytics bei der Migros — neugierig, verlässlich, lösungsorientiert.',
      ctaProjects: 'Projekte ansehen',
      ctaGithub: 'GitHub',
      ctaCv: 'CV herunterladen',
      photoAlt: 'Nicolas Huber an einem Whiteboard mit einer Systemskizze',
    },
    stats: [
      { value: '333', label: 'erreichte ECTS-Credits', accent: 'green' },
      { value: '4+ J.', label: 'professionelle Entwicklungserfahrung', accent: 'blue' },
      { value: 'MSc', label: 'Informatik · UZH', accent: 'violet' },
      { value: 'IEEE', label: 'peer-reviewed Publikation', accent: 'amber' },
    ],
    work: {
      title: 'Wo ich arbeite',
      kicker: '// aktuelle Rolle',
      role: 'IT-Trainee — Data Engineering & Analytics',
      company: 'Migros-Genossenschafts-Bund',
      period: 'Juni 2025 — heute · Zürich',
      body:
        'Rotation durch Daten- und Plattform-Teams: dbt-Pipelines und ML-Feature-Engineering für die Preis- & Aktionsoptimierung, Datenanalysen zu Bevorratungseffekten sowie System Engineering auf Kubernetes, OpenShift & GitLab.',
      tags: ['dbt', 'Python', 'SQL', 'Machine Learning', 'Kubernetes', 'OpenShift'],
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
          name: 'Interactive Visual Data Analysis',
          role: 'HiWi · IVDA @ UZH',
          desc:
            'Human-centered-AI-Werkzeuge für Visual Analytics — Machine Learning, LLMs und interaktive Visualisierung zur Exploration komplexer Daten.',
          tags: ['Vue', 'D3', 'Qdrant', 'Docker'],
          link: 'https://github.com/HuberNicolas',
        },
        {
          accent: 'amber',
          name: 'Design Patterns Cheatsheet',
          role: 'Open Source',
          desc:
            'Saubere, minimale Python-Implementierungen der klassischen Software-Design-Patterns — eine Referenz, die ich wirklich nutze.',
          tags: ['Python', 'Architektur'],
          link: 'https://github.com/HuberNicolas/design-patterns-cheatsheet',
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
