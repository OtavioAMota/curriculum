export interface SocialLink {
  label: string
  url: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string
  tech: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  detail: string
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
  name: 'Seu Nome Aqui',
  role: 'Desenvolvedor(a) Frontend',
  location: 'São Paulo, Brasil',
  email: 'seu@email.com',
  phone: '+55 (11) 99999-9999',
  summary:
    'Desenvolvedor(a) Frontend apaixonado(a) por interfaces rápidas, acessíveis e bem projetadas. Experiência construindo aplicações web com Vue.js, TypeScript e design systems modernos.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/suaser' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/seuperfil' },
    { label: 'Email', url: 'mailto:seu@email.com' },
  ] as SocialLink[],
}

export const about =
  'Sou desenvolvedor(a) frontend com foco em criar experiências digitais que unem performance e usabilidade. Trabalho próximo de design e produto para transformar requisitos em interfaces sólidas, testáveis e escaláveis. Gosto de compartilhar conhecimento e contribuir com comunidades de tecnologia.'

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass'],
  },
  {
    category: 'Ferramentas & Framework',
    skills: ['Vite', 'PrimeVue', 'Tailwind CSS', 'Pinia', 'Vue Router'],
  },
  {
    category: 'Testes & Qualidade',
    skills: ['Vitest', 'Cypress', 'ESLint', 'Prettier'],
  },
  {
    category: 'Outros',
    skills: ['Git', 'Docker', 'CI/CD', 'Figma', 'REST APIs'],
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Desenvolvedor(a) Frontend',
    company: 'Empresa Exemplo',
    period: '2023 — atual',
    summary:
      'Desenvolvimento de painéis administrativos e landing pages com Vue 3, PrimeVue e TypeScript. Redução de 30% no tempo de load do bundle principal.',
    tech: ['Vue 3', 'TypeScript', 'PrimeVue', 'Vite'],
  },
  {
    role: 'Desenvolvedor(a) Web Júnior',
    company: 'Agência Exemplo',
    period: '2021 — 2023',
    summary:
      'Construção de sites institucionais e e-commerces responsivos. Criação de componentes reutilizáveis e integração com APIs REST.',
    tech: ['Vue 2', 'JavaScript', 'Sass', 'REST'],
  },
  {
    role: 'Estagiário(a) de Desenvolvimento',
    company: 'Startup Exemplo',
    period: '2020 — 2021',
    summary:
      'Apoio no desenvolvimento de features frontend, testes unitários e manutenção da base de código.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Git'],
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade Exemplo',
    period: '2017 — 2021',
    detail: 'Foco em engenharia de software e desenvolvimento web.',
  },
  {
    degree: 'Especialização em Frontend Engineering',
    institution: 'Plataforma Exemplo',
    period: '2022',
    detail: 'Cursos avançados de Vue.js, TypeScript e arquitetura frontend.',
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'Dashboard Financeiro',
    description:
      'Painel com gráficos, tabelas dinâmicas e exportação de relatórios construído com Vue 3 e PrimeVue.',
    tech: ['Vue 3', 'PrimeVue', 'ECharts'],
    link: 'https://github.com/suaser',
  },
  {
    name: 'Landing Page Responsiva',
    description:
      'Landing page de alta conversão com animações leves e SEO preparado. Lighthouse 98+ em performance.',
    tech: ['Vue 3', 'Vite', 'PrimeVue'],
  },
  {
    name: 'Biblioteca de Componentes',
    description:
      'Design system interno com componentes acessíveis, documentados e versionados.',
    tech: ['Vue 3', 'TypeScript', 'Storybook'],
    link: 'https://github.com/suaser',
  },
]