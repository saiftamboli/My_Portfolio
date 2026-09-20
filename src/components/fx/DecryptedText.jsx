import { useEffect, useRef, useState } from 'react'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&$@!?*'

/**
 * Reveals `text` character-by-character, showing scrambled placeholder
 * glyphs for not-yet-resolved characters. Runs once on mount, since this is a
 * first-impression moment, not a repeating gimmick.
 */
function DecryptedText({ text, className = '', speed = 35, revealDelay = 300 }) {
  const [display, setDisplay] = useState(text)
  const frameRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    let resolvedCount = 0

    function tick() {
      if (cancelled) return
      const next = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < resolvedCount) return char
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        })
        .join('')
      setDisplay(next)

      if (resolvedCount >= text.length) return

      if (Math.random() < 0.35) resolvedCount += 1
      frameRef.current = setTimeout(tick, speed)
    }

    const startTimer = setTimeout(tick, revealDelay)
    return () => {
      cancelled = true
      clearTimeout(startTimer)
      clearTimeout(frameRef.current)
    }
  }, [text, speed, revealDelay])

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  )
}

export default DecryptedText
