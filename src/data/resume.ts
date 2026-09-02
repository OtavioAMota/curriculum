export interface SocialLink {
  label: string
  url: string
  icon: string
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
  highlights?: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  detail?: string
}

export interface ProjectItem {
  name: string
  problem: string
  stack: string[]
  repo?: string
  docs?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export const person = {
  name: 'Otavio Augusto Mota',
  role: 'Desenvolvedor Full-Stack | Especialista em Backend',
  location: 'Santa Catarina, Brasil',
  email: 'contato@otaviomota.dev',
  website: 'https://otaviomota.dev',
  focus: 'Python · Django · Dados',
  summary:
    'Desenvolvedor Full-Stack focado em Backend: Python (Django/DRF), bancos de dados geoespaciais e APIs REST de alta performance.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/OtavioAMota', icon: 'pi pi-github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/otavio1137/', icon: 'pi pi-linkedin' },
    { label: 'Email', url: 'mailto:contato@otaviomota.dev', icon: 'pi pi-send' },
  ] as SocialLink[],
}

export const socialNetworks: SocialLink[] = person.socials.filter(
  (social) => social.label === 'GitHub' || social.label === 'LinkedIn',
)

export const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Educação', href: '#education' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contato', href: '#contact' },
]

export const about: string[] = [
  'Desenvolvedor Full Stack Pleno. Sigo o princípio de que todo bom software começa com um bom entendimento do problema: um olhar curioso sobre o porquê, antes de escrever a primeira linha. Gosto de transformar cenários complexos em soluções enxutas e bem fundamentadas — e é nesse movimento de analisar, modelar e construir que meu raciocínio mais rende. Transito por todo o stack, com afinidade especial pelo backend (Python, Django/DRF) e bancos de dados; no frontend, construo com a mesma base, usando Vue.js e JavaScript.',
  'Atualmente na Carbon, atuo na arquitetura e no desenvolvimento de soluções complexas, com expertise em bancos de dados geoespaciais (PostgreSQL + PostGIS) e na construção de APIs REST robustas — guiado por performance, consistência e impacto real no negócio.',
  'O background em QA e suporte me deu uma visão 360°: penso além do código, antecipando falhas, reforçando a resiliência do sistema e valorizando a experiência de quem usa o produto. No backend, isso se traduz em modelagem sólida de dados, otimização de queries e segurança da informação.',
  'Sou uma pessoa com diagnóstico de Transtorno do Espectro Autista (TEA), reconhecida como PCD. Isso se reflete em atenção intensa a detalhes, rigor técnico e um olhar sistêmico — justamente as qualidades que sustentam esse jeito de trabalhar.',
]

export const skills: SkillGroup[] = [
  {
    category: 'Backend',
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'SQL',
      'PostGIS',
      'Pandas',
      'NumPy',
      'OpenPyXL',
      'Pytest',
    ],
  },
  {
    category: 'Frontend',
    skills: ['Vue.js', 'PWA', 'JavaScript', 'Pinia', 'Vue Router', 'HTML5', 'CSS3'],
  },
  {
    category: 'Infra & DevOps',
    skills: ['AWS', 'Docker', 'Linux', 'Git/GitHub', 'CI/CD', 'Cloudflare Pages'],
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
    tech: ['Python', 'Django', 'DRF', 'Vue.js', 'JavaScript', 'Pinia', 'PostgreSQL', 'PostGIS', 'AWS', 'Pytest', 'OpenPyXL'],
    highlights: [
      'Correção de bugs e otimização de queries em sistemas de produção, elevando a estabilidade e a performance das aplicações.',
      "Implementei a primeira versão do algoritmo de automatização do RenovaBio, estruturando todas as suas regras em código — hoje é o produto 'porta de entrada' da Carbon e a principal ferramenta de prospecção no mercado de biocombustíveis, que atrai usinas de etanol para a esteira de produtos e viabiliza o upsell para o SaaS de uso diário (plataforma Carbon). Posteriormente, liderei sua refatoração para manter a solução escalável.",
      'Atuação como braço direito do desenvolvimento: assumo as features mais críticas do dia a dia, do escopo ao deploy — desenvolvendo dashboards e novas funcionalidades, configurando o deploy, documentando e cobrindo o código com testes unitários em Pytest.',
    ],
  },
  {
    company: 'UNASP',
    website: 'https://unasp.br',
    period: 'abr 2023 — fev 2024',
    roles: [{ title: 'Monitorador de Sistema e Suporte', period: 'abr 2023 — fev 2024' }],
    tech: ['Suporte de Sistemas', 'Linux', 'Windows', 'Redes', 'Diagnóstico de Hardware e Software'],
    highlights: [
      'Responsável pela manutenção de computadores e suporte técnico a alunos e professores, garantindo o funcionamento contínuo dos ambientes de ensino.',
      'Estruturei a documentação dos pontos de internet, preenchendo a lacuna de registros da rede e agilizando a manutenção e as melhorias.',
      'Cuidava dos laboratórios de informática: instalação e reparo de projetores, cabos RJ45 e VGA, mantendo as salas prontas para uso.',
      'Prestava suporte técnico para toda a faculdade, incluindo a cobertura de eventos da universidade.',
    ],
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
    name: 'Automação RenovaBio / RenovaCalc (freelance, 2023)',
    problem:
      'O produtor precisava coletar manualmente notas fiscais e ordens de serviço, uma a uma, para entregar à auditoria do RenovaBio — um processo que consumia um setor inteiro. Como o software de terceiros usado pela fazenda não fazia essa coleta, desenvolvi um software em Python (OpenPyXL) que lê os dados extraídos desses softwares e retorna o arquivo do RenovaCalc com os cálculos do RenovaBio já prontos. O processo reduziu mais de 50% da carga de trabalho do setor. Após o resultado, fui contratado pela CarbonBR e liderei a refatoração para dar escalabilidade e adequação a outros clientes.',
    stack: ['Python', 'OpenPyXL'],
  },
  {
    name: 'Pipeline de dados Excel em Python (freelance, 2022)',
    problem:
      'Cliente recebia de uma plataforma dados brutos e desorganizados em planilhas Excel, em grande volume. Desenvolvi rotinas em Python com OpenPyXL para identificar padrões, reorganizar os dados, aplicar os cálculos desejados e devolver um Excel filtrado e fácil de ler — eliminando o tratamento manual. OpenPyXL foi escolhido pelo consumo de memória mais baixo em comparação a Pandas em lotes grandes, garantindo que a rotina rodasse em servidor sem impactar a disponibilidade.',
    stack: ['Python', 'OpenPyXL'],
  },
  {
    name: 'ARK Spawn Creator (freelance, 2021)',
    problem:
      'O cliente montava servidores de ARK: Survival Evolved editando o arquivo game.ini diretamente — um processo manual, tedioso e sujeito a erros, que consumia um dia inteiro de trabalho. Desenvolvi uma aplicação desktop em linguagem C que gera esse arquivo a partir das configurações escolhidas pelo usuário (quais dinos e onde aparecem). Com o software, o cliente passou a fazer tudo o que precisava em cerca de 1 hora, sem tocar no arquivo à mão.',
    stack: ['C', 'Bash', 'Desenvolvimento Desktop'],
    repo: 'https://github.com/OtavioAMota/ARK-creator-Spawn',
  },
]

export interface Hobby {
  name: string
  icon: string
  description: string
  image?: string
}

export const hobbiesLead =
  'Quando não estou arquitetando bancos de dados ou escrevendo código Python, gosto de aplicar meu olhar sistêmico em outras áreas.'

export const hobbies: Hobby[] = [
  {
    name: 'Game Dev',
    icon: 'pi pi-code',
    image: 'wife_and_my.jpg',
    description:
      'Meu grande projeto criativo: desenvolvimento de jogos junto com minha esposa, designer de animação. Enquanto eu construo a lógica e os sistemas, ela dá vida ao visual e à narrativa — na prática, código e arte andam de mãos dadas. Fora de criar, jogo os títulos que me desafiam como engenheiro: simulação, automação, gestão de recursos e RPGs — jogos que recompensam quem pensa em sistemas.',
  },
  {
    name: 'Terrários & Microbiomas',
    icon: 'pi pi-micro',
    image: 'hobbies_tatubolinha.jpg',
    description:
      'Construção e manutenção de microbiomas bioativos (terrários fechados) — um hobby que exige paciência, análise de variáveis e compreensão de ecossistemas, assim como a engenharia de software.',
  },
]
