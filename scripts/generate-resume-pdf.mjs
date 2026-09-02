import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pdfMake from 'pdfmake/build/pdfmake.js'
import pdfFonts from 'pdfmake/build/vfs_fonts.js'
import {
  person,
  about,
  skills,
  experience,
  education,
  projects,
} from '../src/data/resume.ts'

pdfMake.vfs = pdfFonts

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.resolve(__dirname, '../public/curriculo-otavio-mota.pdf')

const PRIMARY = '#4f46e5'
const DARK = '#1e293b'
const MUTED = '#475569'

const sectionTitle = (text) => ({
  text: text.toUpperCase(),
  fontSize: 11,
  bold: true,
  color: PRIMARY,
  margin: [0, 14, 0, 4],
})

const sectionRule = {
  canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: PRIMARY }],
  margin: [0, 0, 0, 10],
}

const LINK_BLUE = '#2563eb'

function contactLine() {
  const items = []
  items.push({ text: person.email, link: `mailto:${person.email}`, color: LINK_BLUE, decoration: 'underline' })
  items.push({ text: person.location })
  const gh = person.socials.find((s) => s.label === 'GitHub')
  const li = person.socials.find((s) => s.label === 'LinkedIn')
  if (person.website) {
    items.push({ text: person.website.replace('https://', ''), link: person.website, color: LINK_BLUE, decoration: 'underline' })
  }
  if (gh) {
    items.push({ text: gh.url.replace('https://', ''), link: gh.url, color: LINK_BLUE, decoration: 'underline' })
  }
  if (li) {
    items.push({ text: li.url.replace('https://', ''), link: li.url, color: LINK_BLUE, decoration: 'underline' })
  }

  const inlines = []
  items.forEach((item, index) => {
    if (index > 0) inlines.push({ text: '   ·   ', color: MUTED })
    inlines.push(item)
  })

  return {
    text: inlines,
    fontSize: 9,
    margin: [0, 6, 0, 0],
  }
}

function paragraph(p) {
  return { text: p, fontSize: 9.5, lineHeight: 1.35, color: DARK, margin: [0, 0, 0, 4] }
}

function skillsBlock() {
  return skills.map((group) => ({
    text: [{ text: `${group.category}: `, bold: true, color: DARK }, group.skills.join(', ')],
    fontSize: 9.5,
    lineHeight: 1.35,
    color: DARK,
    margin: [0, 0, 0, 3],
  }))
}

function experienceBlock() {
  const out = []
  for (const item of experience) {
    out.push({
      columns: [
        { text: item.company, bold: true, fontSize: 11, color: DARK },
        { text: item.period, fontSize: 9, color: MUTED, alignment: 'right', margin: [8, 2, 0, 0] },
      ],
      margin: [0, 10, 0, 3],
    })

    if (item.roles.length > 1) {
      for (const role of item.roles) {
        out.push({
          columns: [
            { text: role.title, fontSize: 9.5, italics: true, color: DARK },
            { text: role.period, fontSize: 9, color: MUTED, alignment: 'right', margin: [8, 0, 0, 0] },
          ],
          margin: [0, 1, 0, 1],
        })
      }
    }

    if (item.highlights) {
      for (const h of item.highlights) {
        out.push({ text: `•  ${h}`, fontSize: 9, lineHeight: 1.3, color: DARK, margin: [0, 2, 0, 1] })
      }
    }

    if (item.tech && item.tech.length) {
      out.push({
        text: [{ text: 'Stack: ', bold: true, color: MUTED, fontSize: 8.5 }, { text: item.tech.join(', '), fontSize: 8.5, color: MUTED }],
        margin: [0, 3, 0, 0],
      })
    }
  }
  return out
}

function educationBlock() {
  return education.map((item) => ({
    columns: [
      {
        stack: [
          { text: item.degree, bold: true, fontSize: 9.5, color: DARK },
          { text: item.institution, fontSize: 9, color: MUTED },
        ],
      },
      { text: item.period, fontSize: 9, color: MUTED, alignment: 'right', width: 90 },
    ],
    margin: [0, 6, 0, 2],
  }))
}

function projectsBlock() {
  const out = []
  for (const item of projects) {
    out.push({ text: item.name, bold: true, fontSize: 10, color: DARK, margin: [0, 8, 0, 2] })
    out.push({ text: item.problem, fontSize: 9, lineHeight: 1.3, color: DARK, margin: [0, 0, 0, 3] })
    out.push({
      text: [{ text: 'Stack: ', bold: true, color: MUTED, fontSize: 8.5 }, { text: item.stack.join(', '), fontSize: 8.5, color: MUTED }],
      margin: [0, 0, 0, 2],
    })
  }
  return out
}

const docDefinition = {
  pageSize: 'A4',
  pageMargins: [42, 36, 42, 36],
  defaultStyle: { fontSize: 10, color: DARK },
  content: [
    { text: person.name, fontSize: 24, bold: true, color: DARK },
    { text: person.role, fontSize: 13, bold: false, color: PRIMARY, margin: [0, 2, 0, 0] },
    contactLine(),
    {
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: PRIMARY }],
      margin: [0, 8, 0, 0],
    },
    sectionTitle('Perfil'),
    sectionRule,
    ...about.map(paragraph),
    sectionTitle('Experiência'),
    sectionRule,
    ...experienceBlock(),
    { ...sectionTitle('Habilidades'), pageBreak: 'before' },
    sectionRule,
    ...skillsBlock(),
    sectionTitle('Educação'),
    sectionRule,
    ...educationBlock(),
    sectionTitle('Projetos'),
    sectionRule,
    ...projectsBlock(),
  ],
}

const pdfDoc = pdfMake.createPdf(docDefinition)
const buffer = await pdfDoc.getBuffer()
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, Buffer.from(buffer))
const sizeKb = (Buffer.byteLength(buffer) / 1024).toFixed(1)
console.log(`PDF gerado: ${outPath} (${sizeKb} KB)`)