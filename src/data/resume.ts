export interface SocialLink {
  label: string
  url: string
}

export interface ExperienceRole {
  title: string
  period: string
}

export interface ExperienceItem {
  company: string
  website?: string
  linkedin?: string
  period: string
  roles: ExperienceRole[]
  tech: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  detail?: string
}

export interface ProjectItem {
  name: string
  description: string
  tech: string[]
  link?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export const person = {
  name: 'Otavio A. Mota',
  role: 'Desenvolvedor Full Stack Pleno',
  location: 'Santa Catarina, Brasil',
  email: 'contato@otaviomota.dev',
  summary:
    'Full Stack Pleno no ecossistema Python (Django/DRF) com front-ends Vue.js. Foco em software escalável, dados geoespaciais (PostgreSQL/PostGIS) e APIs REST robustas.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/OtavioAMota' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/otavio1137/' },
    { label: 'Email', url: 'mailto:contato@otaviomota.dev' },
  ] as SocialLink[],
}

export const about =
  'Desenvolvedor Full Stack Pleno, especializado no ecossistema Python (Django / Django REST Framework) integrado a front-ends modernos com Vue.js e JavaScript. Foco em entregar software escalável e de alta disponibilidade.\n\nAtualmente na Carbon, atuo na arquitetura e no desenvolvimento de soluções complexas, com expertise em bancos de dados geoespaciais (PostgreSQL + PostGIS) e na construção de APIs REST robustas.\n\nO background em QA e suporte me deu uma visão 360°: penso além do código, antecipando falhas, reforçando a resiliência do sistema e a experiência de quem usa o produto. No back-end, priorizo modelagem sólida de dados, otimização de queries e segurança da informação — mantendo o código alinhado aos objetivos de negócio e à qualidade técnica do time.\n\nSou uma pessoa com diagnóstico de Transtorno do Espectro Autista (TEA), reconhecida como PCD. Essa condição me dá uma perspectiva diferenciada: atenção intensa a detalhes, rigor técnico e um olhar sistêmico para resolver problemas — características que levo para o código, a arquitetura e a colaboração.'

export const skills: SkillGroup[] = [
  {
    category: 'Backend',
    skills: ['Python', 'Django', 'Django REST Framework', 'Pytest'],
  },
  {
    category: 'Frontend',
    skills: ['JavaScript', 'Vue.js', 'Pinia', 'Vue Router', 'HTML5', 'CSS3'],
  },
  {
    category: 'Banco de Dados & Geo',
    skills: ['PostgreSQL', 'SQL', 'PostGIS'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['AWS', 'Docker', 'Linux', 'Git/GitHub'],
  },
  {
    category: 'Gestão & Agilidade',
    skills: ['Scrum', 'Kanban', 'Jira'],
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'Carbon',
    website: 'https://www.carbonbr.com',
    linkedin: 'https://www.linkedin.com/company/carbonbr',
    period: 'maio 2023 — atual',
    roles: [
      { title: 'Full-stack Developer', period: 'jun 2024 — atual' },
      { title: 'Back-end Developer', period: 'maio 2023 — jun 2024' },
      { title: 'Freelancer Developer', period: 'maio 2023' },
    ],
    tech: ['Python', 'Django', 'DRF', 'Vue.js', 'JavaScript', 'Pinia', 'PostgreSQL', 'PostGIS', 'AWS', 'Docker'],
  },
  {
    company: 'UNASP',
    website: 'https://unasp.br',
    period: 'abr 2023 — fev 2024',
    roles: [{ title: 'Monitorador de Sistema e Suporte', period: 'abr 2023 — fev 2024' }],
    tech: ['Suporte de Sistemas', 'Linux', 'Windows', 'Redes'],
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'UNIP — Universidade Paulista',
    period: '2018 — 2022',
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'Dashboard Financeiro',
    description:
      'Painel com gráficos, tabelas dinâmicas e exportação de relatórios construído com Vue 3 e PrimeVue.',
    tech: ['Vue 3', 'PrimeVue', 'ECharts'],
    link: 'https://github.com/OtavioAMota',
  },
  {
    name: 'Landing Page Responsiva',
    description:
      'Landing page de alta conversão com animações leves e SEO preparado. Lighthouse 98+ em performance.',
    tech: ['Vue 3', 'Vite', 'PrimeVue'],
  },
  {
    name: 'Biblioteca de Componentes',
    description: 'Design system interno com componentes acessíveis, documentados e versionados.',
    tech: ['Vue 3', 'TypeScript', 'Storybook'],
    link: 'https://github.com/OtavioAMota',
  },
]
