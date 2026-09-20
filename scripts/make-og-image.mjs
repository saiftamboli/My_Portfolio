/**
 * Generates the 1200x630 social preview card (public/og-image.jpg) shown
 * when the site is shared on LinkedIn, WhatsApp, X, Slack, etc.
 *
 * JPEG rather than WebP on purpose: several social scrapers still
 * handle WebP poorly and will silently show no image at all.
 *
 * Run with: npm run og
 */
import { stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE = path.resolve('src/assets/Hero_section.jpg')
const OUTPUT = path.resolve('public/og-image.jpg')
const W = 1200
const H = 630

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0f1424" stop-opacity="0.96"/>
      <stop offset="55%" stop-color="#0f1424" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#0f1424" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#scrim)"/>
  <text x="72" y="250" font-family="Arial Black, Arial, Helvetica, sans-serif"
        font-size="86" font-weight="900" fill="#f4f1e8" letter-spacing="1">Saif Tamboli</text>
  <text x="72" y="316" font-family="Arial, Helvetica, sans-serif"
        font-size="31" font-weight="700" fill="#f4f1e8" letter-spacing="3">PRODUCT ANALYST</text>
  <text x="72" y="392" font-family="Arial, Helvetica, sans-serif"
        font-size="27" fill="#f4f1e8" fill-opacity="0.72">Turning operational chaos into</text>
  <text x="72" y="430" font-family="Arial, Helvetica, sans-serif"
        font-size="27" fill="#f4f1e8" fill-opacity="0.72">scalable, AI-powered systems.</text>
  <rect x="72" y="472" width="132" height="5" fill="#e4364a"/>
  <text x="72" y="536" font-family="Arial, Helvetica, sans-serif"
        font-size="23" fill="#f2b84b" letter-spacing="2">saiftamboli.com</text>
</svg>
`)

await sharp(SOURCE)
  .resize(W, H, { fit: 'cover', position: 'center' })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 88 })
  .toFile(OUTPUT)

const { size } = await stat(OUTPUT)
console.log(`Wrote ${path.relative(process.cwd(), OUTPUT)}: ${W}x${H}, ${Math.round(size / 1024)} KB`)
