import fs from 'node:fs'
import path from 'node:path'

export function parseDds(buf) {
  if (buf.length < 129 || buf.toString('latin1', 0, 4) !== 'DDS ') {
    throw new Error('not a dds file')
  }
  const h = buf.readUInt32LE(12)
  const w = buf.readUInt32LE(16)
  let fourPos = null
  for (const p of [80, 84, 88]) {
    const c = buf.toString('latin1', p, p + 4)
    if (c === 'DXT1' || c === 'DXT3' || c === 'DXT5') { fourPos = p; break }
  }
  if (fourPos === null) {
    if (buf.toString('latin1', 80, 84) === 'DX10') throw new Error('DX10 header unsupported')
    throw new Error('fourcc not found in header')
  }
  const format = buf.toString('latin1', fourPos, fourPos + 4)
  const dataOff = 128
  const blockBytes = format === 'DXT1' ? 8 : 16
  const totalBlocks = Math.floor((buf.length - dataOff) / blockBytes)
  const bw = Math.ceil(w / 4)
  const bh = Math.ceil(h / 4)
  const n = Math.min(totalBlocks, bw * bh)
  const img = { w, h, format, data: Buffer.alloc(w * h * 4) }
  for (let i = 0; i < n; i++) {
    const off = dataOff + i * blockBytes
    const bx = (i % bw) * 4
    const by = Math.floor(i / bw) * 4
    decodeBlock(buf, off, img.format, img.data, w, h, bx, by)
  }
  return img
}

function expand565(c) {
  const r = Math.round(((c >> 11) & 31) * 255 / 31)
  const g = Math.round(((c >> 5) & 63) * 255 / 63)
  const b = Math.round((c & 31) * 255 / 31)
  return [r, g, b]
}

function rgbPalette(buf, off, format) {
  const c0 = buf.readUInt16LE(off)
  const c1 = buf.readUInt16LE(off + 2)
  const e0 = expand565(c0)
  const e1 = expand565(c1)
  const mix = (m, d) => [
    Math.round((e0[0] * (d - m) + e1[0] * m) / d),
    Math.round((e0[1] * (d - m) + e1[1] * m) / d),
    Math.round((e0[2] * (d - m) + e1[2] * m) / d),
  ]
  const pal = [e0, e1]
  let transparent = false
  if (format === 'DXT1' && c0 <= c1) {
    pal.push(mix(1, 2), [0, 0, 0])
    transparent = true
  } else {
    pal.push(mix(1, 3), mix(2, 3))
  }
  return { pal, transparent }
}

function decodeBlock(buf, off, format, out, w, h, bx, by) {
  let alpha = null
  let rgbOff = off
  if (format === 'DXT3') {
    alpha = []
    for (let row = 0; row < 4; row++) {
      const a16 = buf.readUInt16LE(off + row * 2)
      for (let col = 0; col < 4; col++) alpha[row * 4 + col] = ((a16 >> (col * 4)) & 15) * 17
    }
    rgbOff = off + 8
  } else if (format === 'DXT5') {
    const a0 = buf[off]
    const a1 = buf[off + 1]
    const bits = buf.readUIntLE(off + 2, 6)
    alpha = []
    for (let i = 0; i < 16; i++) {
      const ix = (bits >> (i * 3)) & 7
      let a
      if (ix === 0) a = a0
      else if (ix === 1) a = a1
      else if (a0 > a1) a = ((8 - ix) * a0 + (ix - 1) * a1) / 7
      else if (ix >= 6) a = ix === 6 ? 0 : 255
      else a = ((6 - ix) * a0 + (ix - 1) * a1) / 5
      alpha.push(a)
    }
    rgbOff = off + 8
  } else if (format !== 'DXT1') {
    throw new Error('unsupported format ' + format)
  }
  const { pal, transparent } = rgbPalette(buf, rgbOff, format)
  const idx = buf.readUInt32LE(rgbOff + 4)
  const px = []
  for (let i = 0; i < 4; i++) px.push([(idx >> (i * 2)) & 3, (idx >> (8 + i * 2)) & 3, (idx >> (16 + i * 2)) & 3, (idx >> (24 + i * 2)) & 3])
  for (let row = 0; row < 4; row++) {
    const yy = by + row
    if (yy >= h) continue
    for (let col = 0; col < 4; col++) {
      const xx = bx + col
      if (xx >= w) continue
      const pix = row * 4 + col
      const ci = px[row][col]
      let a = 255
      if (transparent && ci === 3) a = 0
      else if (alpha) a = Math.round(alpha[pix])
      const o = (yy * w + xx) * 4
      out[o] = pal[ci][0]
      out[o + 1] = pal[ci][1]
      out[o + 2] = pal[ci][2]
      out[o + 3] = a
    }
  }
}

export function collectDds(dir, pred) {
  const list = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.dds') && (!pred || pred(f)))
  const out = []
  for (const f of list) {
    const src = path.join(dir, f)
    try {
      out.push({ f, img: parseDds(fs.readFileSync(src)) })
    } catch (e) {
      console.warn('skip', f, e.message)
    }
  }
  return out
}