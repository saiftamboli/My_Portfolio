import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Fills its parent section with a parallaxed image plus a legibility scrim.
 * Parent must be `relative overflow-hidden`.
 *
 * The image is texture, not subject. It should read as mood/color in the
 * margins, never compete with foreground text. `.glass` cards add further
 * local contrast, but the section scrim still needs to do most of the work.
 */
function SectionBackground({
  image,
  opacity = 0.4,
  blur = 0,
  position = 'center',
  overlay = 'linear-gradient(180deg, rgba(15,20,36,0.82) 0%, rgba(15,20,36,0.68) 40%, rgba(15,20,36,0.82) 100%)',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{
          y,
          backgroundImage: `url(${image})`,
          backgroundPosition: position,
          filter: blur ? `blur(${blur}px)` : undefined,
          opacity,
        }}
        className="absolute inset-0 scale-[1.18] bg-cover"
      />
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{ background: 'linear-gradient(180deg, #0f1424 0%, transparent 100%)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{ background: 'linear-gradient(0deg, #0f1424 0%, transparent 100%)' }}
      />
    </div>
  )
}

export default SectionBackground
