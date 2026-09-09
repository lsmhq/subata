import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.resolve(__dirname, '../src/.vuepress/components/items-db/raw-items.txt');
const outputPath = path.resolve(__dirname, '../src/.vuepress/public/assets/items-db/items.json');

const TRADE_FLAGS = new Set([
  'Crowns Only', 'No Auction', 'No Trade', 'No Gift', 'No Sell',
  'No Bargain', 'No Dye', 'Retired', 'Auction', 'Keeps Only'
]);

const SCHOOLS = new Set([
  'Balance', 'Death', 'Fire', 'Ice', 'Life', 'Myth', 'Storm',
  'Sun', 'Moon', 'Star', 'Shadow'
]);

const text = fs.readFileSync(inputPath, 'utf8');
const lines = text.split(/\r?\n/);

const items = [];
const typeCount = new Map();
const schoolCount = new Map();
const noLevel = [];
const noType = [];

let current = null;

for (const raw of lines) {
  if (raw.startsWith('\t')) {
    const line = raw.slice(1).trim();
    if (!line) continue;
    current.lines.push(line);
    if (TRADE_FLAGS.has(line)) current.flags.push(line);
    const card = line.match(/^(\+?\d*)\s*(.+?)\s*\([0-9A-F]{8}\)$/);
    if (card) current.cards.push(line);
    continue;
  }

  const title = raw.trim();
  if (!title) continue;

  const m = title.match(/^(.+?)\s*\(([^()]*)\)$/);
  if (!m) continue;

  const name = m[1].trim();
  const tokens = m[2].split(',').map((t) => t.trim());

  let school = null;
  let type = null;
  let level = null;
  let id = null;

  for (const t of tokens) {
    const lv = t.match(/^Level\s*(\d+)\+?$/i);
    if (lv) { level = parseInt(lv[1], 10); continue; }
    if (/^[0-9A-F]{8}$/i.test(t)) { id = t.toUpperCase(); continue; }
    if (SCHOOLS.has(t)) { school = t; continue; }
    if (!type) { type = t; }
  }

  if (type == null) { type = 'Unknown'; noType.push(name); }
  if (level == null) noLevel.push(name);

  typeCount.set(type, (typeCount.get(type) || 0) + 1);
  if (school) schoolCount.set(school, (schoolCount.get(school) || 0) + 1);

  current = { name, school, type, level, id, test: /^test_|_test|xdata|unused/i.test(name), lines: [], cards: [], flags: [] };
  items.push(current);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  JSON.stringify({
    meta: {
      generatedAt: new Date().toISOString().split('T')[0],
      source: 'shrekislyfe69/wizard101-info items.txt (2021 snapshot)',
      note: 'Data extracted from the official game client (Root.wad), snapshot circa June 2021. Field schema is designed to be interchangeable with future Root.wad extractions.'
    },
    items
  })
);

console.log('items:', items.length);
console.log('noType:', noType.length, JSON.stringify(noType.slice(0, 20)));
console.log('noLevel:', noLevel.length, JSON.stringify(noLevel.slice(0, 20)));
console.log('types:', JSON.stringify([...typeCount.entries()].sort((a, b) => b[1] - a[1])));
console.log('schools:', JSON.stringify([...schoolCount.entries()]));
console.log('output:', outputPath, fs.statSync(outputPath).size, 'bytes');