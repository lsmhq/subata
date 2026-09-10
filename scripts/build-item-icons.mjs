import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import { collectDds } from './dds-lib.mjs'

const GUI = path.resolve('wad/out_shard_world/GUI')
const PUBLIC = path.resolve('src/.vuepress/public')
const OUT_DB = path.join(PUBLIC, 'assets/items-db')
const OUT_SNACK = path.join(PUBLIC, 'assets/db/snacks')
const OUT_REAGENT = path.join(PUBLIC, 'assets/db/reagents')

const fileURL = (p) => '/subata/' + path.relative(PUBLIC, p).split(path.sep).join('/')

const slug = (name) => {
  let s = name.replace(/['\u2018\u2019]/g, '').replace(/[^A-Za-z0-9 _-]/g, '').trim().replace(/\s+/g, '_')
  if (!s) s = 'unnamed'
  return s
}

function snackName(f) {
  const base = f.replace(/\.dds$/i, '')
  let name = base
    .replace(/^Pet\s?Snacks_/i, '')
    .replace(/^PetSnacks_/i, '')
    .replace(/^Spell_/i, '')
    .replace(/_/g, ' ')
    .trim()
  return name
}

async function main() {
  fs.mkdirSync(OUT_SNACK, { recursive: true })
  fs.mkdirSync(OUT_REAGENT, { recursive: true })
  fs.mkdirSync(OUT_DB, { recursive: true })

  const snackFiles = collectDds(path.join(GUI, 'PetSnacks'))
  const reagentFiles = collectDds(path.join(GUI, 'Reagents'), (f) => /^Reagent_/i.test(f))

  const seen = new Set()
  const items = []

  async function convert(cat, files, nameOf, outDir) {
    const records = []
    for (const { f, img } of files) {
      const name = nameOf(f)
      let s = slug(name)
      while (seen.has(cat + '/' + s)) s += '_'
      seen.add(cat + '/' + s)
      const pngFile = s + '.png'
      const out = path.join(outDir, pngFile)
      fs.writeFileSync(out, await sharp(img.data, { raw: { width: img.w, height: img.h, channels: 4 } }).png({ compressionLevel: 9 }).toBuffer())
      records.push({ name, image: fileURL(out) })
    }
    return records
  }

  const snacks = await convert('snack', snackFiles, snackName, OUT_SNACK)
  const reagents = await convert('reagent', reagentFiles, (f) => f.replace(/\.dds$/i, '').replace(/_/g, ' '), OUT_REAGENT)

  const mk = (list, type) => ({ meta: { count: list.length, type }, items: list.map((r) => ({ name: r.name, type, image: r.image })) })
  fs.writeFileSync(path.join(OUT_DB, 'snack-items.json'), JSON.stringify(mk(snacks, 'snack')))
  fs.writeFileSync(path.join(OUT_DB, 'reagent-items.json'), JSON.stringify(mk(reagents, 'reagent')))

  console.log('snacks:', snacks.length, 'reagents:', reagents.length)
  console.log('png written to', OUT_SNACK, '+', OUT_REAGENT)
}

main().catch((e) => { console.error(e); process.exit(1) })