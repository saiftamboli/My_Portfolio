/**
 * Adds a pulsing dual-color glow around its children. Purely a className
 * wrapper, so no extra DOM layering is needed since the effect is box-shadow.
 */
function ElectricBorder({ children, className = '' }) {
  return <div className={`electric-border rounded-[inherit] ${className}`}>{children}</div>
}

export default ElectricBorder
