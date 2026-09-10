import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import { collectDds } from './dds-lib.mjs'

const CARDS_DIR = path.resolve('wad/out/GUI/Cards')
const PRAXIS_DIR = path.resolve('wad/out_shard_world/GUI/Reagents/Praxis')
const PUBLIC = path.resolve('src/.vuepress/public')
const OUT_FRAMES = path.join(PUBLIC, 'assets/pack/frames')
const OUT_SPELLMENT = path.join(PUBLIC, 'assets/db/spellments')
const OUT_BOOST = path.join(PUBLIC, 'assets/pack/boosters')
const COMPONENT_DIR = path.resolve('src/.vuepress/components/pack-simulator')

const fileURL = (p) => '/subata/' + path.relative(PUBLIC, p).split(path.sep).join('/')

const SCHOOLS = {
  Fire: 'School_Fire_Blnk',
  Ice: 'School_Ice_Blnk',
  Storm: 'School_Storm_Blnk',
  Death: 'School_Death_Blnk',
  Life: 'School_Life_Blnk',
  Myth: 'School_Myth_Blnk',
  Balance: 'School_Balance_Blnk',
}

async function convertAll(dir, outDir) {
  const files = collectDds(dir)
  for (const { f, img } of files) {
    const pngOut = path.join(outDir, f.replace(/\.dds$/i, '') + '.png')
    fs.writeFileSync(pngOut, await sharp(img.data, { raw: { width: img.w, height: img.h, channels: 4 } }).png({ compressionLevel: 9 }).toBuffer())
  }
  return files.length
}

async function main() {
  fs.rmSync(OUT_BOOST, { recursive: true, force: true })
  fs.rmSync(OUT_FRAMES, { recursive: true, force: true })
  fs.mkdirSync(OUT_FRAMES, { recursive: true })
  fs.mkdirSync(OUT_SPELLMENT, { recursive: true })

  const nCards = await convertAll(CARDS_DIR, OUT_FRAMES)
  console.log('converted cards', nCards, 'from', CARDS_DIR)

  {
    const enchantSrc = path.join(OUT_FRAMES, 'Card_Enchant.png')
    const raw = await sharp(enchantSrc).metadata()
    const cell = Math.min(raw.width, raw.height)
    const buf = await sharp(enchantSrc).extract({ left: 0, top: 0, width: cell, height: cell }).png({ compressionLevel: 9 }).toBuffer()
    fs.writeFileSync(enchantSrc, buf)
    console.log('Card_Enchant cropped to first', cell, 'x', cell, 'frame')
  }

  const urlOf = (n) => fileURL(path.join(OUT_FRAMES, n + '.png'))

  const frames = {
    treasure: urlOf('School_Treasure_Blnk'),
    item: urlOf('School_Item_Blnk'),
    frame: urlOf('Frame_Selected'),
    enchant: urlOf('Card_Enchant'),
    bw: urlOf('School_BW_Blnk'),
    schools: {},
  }
  for (const [s, n] of Object.entries(SCHOOLS)) {
    frames.schools[s] = urlOf(n)
  }
  const covers = { back: urlOf('Frame_Selected') }

  const spells = []
  const praxisFiles = collectDds(PRAXIS_DIR)
  for (const { f, img } of praxisFiles) {
    const base = f.replace(/\.dds$/i, '').replace(/^Praxis_/i, '')
    fs.writeFileSync(path.join(OUT_SPELLMENT, base + '.png'), await sharp(img.data, { raw: { width: img.w, height: img.h, channels: 4 } }).png({ compressionLevel: 9 }).toBuffer())
    spells.push([base.replace(/_/g, ' '), fileURL(path.join(OUT_SPELLMENT, base + '.png'))])
  }
  console.log('converted praxis', spells.length)

  const snackMap = JSON.parse(fs.readFileSync(path.join(PUBLIC, 'assets/items-db/snack-items.json'), 'utf8')).items
  const reagentMap = JSON.parse(fs.readFileSync(path.join(PUBLIC, 'assets/items-db/reagent-items.json'), 'utf8')).items

  const data = {
    frames,
    covers,
    snacks: snackMap.map((i) => [i.name, i.image]),
    reagents: reagentMap.map((i) => [i.name, i.image]),
    spellments: spells,
  }
  fs.writeFileSync(path.join(COMPONENT_DIR, 'cards.json'), JSON.stringify(data))
  console.log('cards.json written, snacks', data.snacks.length, 'reagents', data.reagents.length, 'spellments', data.spellments.length)
}

main().catch((e) => { console.error(e); process.exit(1) })