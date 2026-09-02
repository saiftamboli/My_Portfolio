/**
 * Converts raster images in src/assets to WebP.
 *
 * These are all full-bleed background images, so anything wider than
 * MAX_EDGE is detail nobody will ever see — downscaling first is where
 * most of the saving comes from, WebP encoding does the rest.
 *
 * Run with: npm run images
 */
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ASSET_DIR = path.resolve('src/assets')
const MAX_EDGE = 2400
const QUALITY = 82
const CONVERTIBLE = /\.(jpe?g|png)$/i

const kb = (bytes) => Math.round(bytes / 1024)

const files = await readdir(ASSET_DIR)
const targets = files.filter((f) => CONVERTIBLE.test(f))

if (targets.length === 0) {
  console.log('No convertible images found.')
  process.exit(0)
}

let before = 0
let after = 0

for (const file of targets) {
  const input = path.join(ASSET_DIR, file)
  const output = path.join(ASSET_DIR, `${file.replace(CONVERTIBLE, '')}.webp`)

  const original = await stat(input)
  const image = sharp(input)
  const { width, height } = await image.metadata()

  const pipeline = image.clone()
  if (Math.max(width, height) > MAX_EDGE) {
    pipeline.resize({
      width: width >= height ? MAX_EDGE : undefined,
      height: height > width ? MAX_EDGE : undefined,
      withoutEnlargement: true,
    })
  }

  await pipeline.webp({ quality: QUALITY }).toFile(output)
  const converted = await stat(output)

  before += original.size
  after += converted.size

  const saved = Math.round((1 - converted.size / original.size) * 100)
  console.log(
    `${file.padEnd(48)} ${String(kb(original.size)).padStart(6)} KB -> ${String(kb(converted.size)).padStart(5)} KB  (-${saved}%)`,
  )
}

console.log(
  `\nTotal: ${kb(before)} KB -> ${kb(after)} KB  (-${Math.round((1 - after / before) * 100)}%)`,
)
