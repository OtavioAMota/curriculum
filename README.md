# Curriculum — Landing Page

Currículo pessoal em formato de landing page construído com **Vue 3 + Vite + PrimeVue**.

## Stack

- **Vue 3** (Composition API / `<script setup>`) + **TypeScript**
- **Vite** (build/dev server)
- **PrimeVue 5** com preset **Aura** e modo claro/escuro
- **Vue Router** (rota única, navegação por âncoras)

## Estrutura

```
src/
├── components/
│   ├── SiteNav.vue              # navegação fixa + toggle de tema
│   └── sections/                # Hero, Sobre, Experiência, Habilidades,
│                                # Educação, Projetos, Contato
├── composables/useTheme.ts      # tema claro/escuro (persistido em localStorage)
├── data/resume.ts               # TODOS os dados do currículo em um só lugar
├── router/index.ts
└── views/HomeView.vue
```

> Para editar o conteúdo do currículo, altere apenas `src/data/resume.ts`.

## Versões encapsuladas (Volta)

O projeto usa [Volta](https://volta.sh/) para fixar as versões de Node e npm por projeto
(campo `volta` no `package.json`). Assim nada "vira global" no computador:

- Instale o Volta uma vez: `winget install Volta.Volta`
- Reinicie o terminal — ao rodar `node`/`npm` dentro desta pasta, o Volta usa automaticamente as versões pinadas (`node@24`, `npm@11`).

Caso precise mudar a versão: `volta pin node@<versao> npm@<versao>`.

## Projeto Setup

```sh
npm install
```

### Dev server (hot-reload)

```sh
npm run dev
```

### Build de produção

```sh
npm run build
```

### Type-check

```sh
npm run type-check
```

### Lint

```sh
npm run lint
```

## Deploy no Cloudflare Pages

Este projeto é um site estático. O build gera a pasta `dist/`.

**Config em diretório:** no dashboard do Cloudflare, em Workers & Pages, crie a página
-> `Upload assets direto`, ou **conecte o repositório git** (recomendado):

| Configuração | Valor |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `24` |

O arquivo `public/_redirects` (copiado para `dist/_redirects`) fornece fallback de SPA
(`/* /index.html 200`), necessário para roteamento por histórico.

> Quer acesso local/preview do comportamento de produção? Use `npm run preview`.