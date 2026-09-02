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
├── assets/
│   ├── main.css
│   └── images/                 # fotos do Hero e hobbies (Profile.jpg, wife_and_my.jpg, ...)
├── components/
│   ├── DownloadResumeButton.vue # botão de download do currículo (PDF)
│   ├── SiteNav.vue              # navegação fixa + toggle de tema
│   ├── SocialButton.vue         # botão de rede social (GitHub/LinkedIn)
│   ├── TechChip.vue             # chip de tecnologia (sizes sm/md)
│   └── sections/                # Hero, Sobre, Experiência, Habilidades,
│                                # Educação, Projetos, Hobbies, Contato
├── composables/useTheme.ts      # tema claro/escuro (persistido em localStorage)
├── data/resume.ts               # TODOS os dados do currículo em um só lugar
├── router/index.ts
└── views/HomeView.vue
```

> Para editar o conteúdo do currículo, altere apenas `src/data/resume.ts`.
> As imagens usadas no Hero e nos hobbies ficam em `src/assets/images/`,
> carregadas automaticamente pelo `HobbiesSection` via `import.meta.glob`.

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

> O projeto usa **PrimeVue 5**, que requer uma **licença PrimeUI** (Community ou Commercial).
> Veja a seção [Licença PrimeUI](#licença-primeui) antes de rodar.

### Licença PrimeUI

O PrimeVue 5 depende de uma chave de licença do [PrimeUI](https://primeui.dev/pricing)
(Community gratuita ou Commercial). Sem a chave, o site exibe um banner de aviso no cliente.

1. Obtenha sua chave em [primeui.dev/pricing](https://primeui.dev/pricing).
2. Copie `.env.example` para `.env` e preencha a chave:

   ```sh
   copy .env.example .env
   ```

   ```dotenv
   VITE_PRIMEUI_LICENSE=SUA_CHAVE_AQUI
   ```

   O arquivo `.env` **não é versionado** (ignorado pelo git).

3. No **Cloudflare Pages**, adicione a variável de ambiente
   `VITE_PRIMEUI_LICENSE` com o valor da chave (Settings -> Environment variables).

> Aviso: por ser uma verificação client-side, a chave fica embutida no bundle JS
> público do build. Por isso ela nunca deve ser commitada no repositório — use apenas
> variáveis de ambiente.

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

### Formatar código

```sh
npm run format
```

Formata o código com Prettier.

### Gerar PDF do currículo

```sh
npm run pdf:generate
```

Regenera `public/curriculo-otavio-mota.pdf` a partir dos dados de `src/data/resume.ts`.
O PDF é versionado e vai junto no build do Cloudflare Pages (disponível em
`/curriculo-otavio-mota.pdf`).

> O site expõe o botão **"Baixar currículo (PDF)"** no Hero e no Contato, apontando
> para `/curriculo-otavio-mota.pdf` (download direto, sem rota estática adicional).

> O script importa `src/data/resume.ts` diretamente (type-stripping do Node).
> Isso funciona nativamente em **Node 23.6+/24** (versão usada pelo Volta e pelo
> Cloudflare Pages). Em Node 22.x seria preciso rodar com
> `node --experimental-strip-types`.

## Deploy no Cloudflare Pages

Este projeto é um site estático. O build gera a pasta `dist/`.

**Config em diretório:** no dashboard do Cloudflare, em Workers & Pages, crie a página
-> `Upload assets direto`, ou **conecte o repositório git** (recomendado):

| Configuração | Valor |
| --- | --- |
| Build command | `npm run pdf:generate && npm run build` |
| Build output directory | `dist` |
| Node version | `24` |

O build command **regenera o PDF a partir de `src/data/resume.ts` antes de buildar**,
garantindo que `/curriculo-otavio-mota.pdf` esteja sempre em sincronia com os dados,
mesmo que o PDF não seja gerado localmente. Requer o `pdfmake` (já é devDependency,
instalado pelo `npm install` do Pages) e Node 24 (definido acima).

O arquivo `public/_redirects` (copiado para `dist/_redirects`) fornece fallback de SPA
(`/* /index.html 200`), necessário para roteamento por histórico.

> Quer acesso local/preview do comportamento de produção? Use `npm run preview`.