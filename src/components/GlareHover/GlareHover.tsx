import type { CSSProperties, ReactNode } from 'react'

interface GlareHoverProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  glareColor?: string
  glareOpacity?: number
  glareAngle?: number
  glareSize?: number
  transitionDuration?: number
}

function GlareHover({
  children,
  className = '',
  style,
  glareColor = '#ffffff',
  glareOpacity = 0.25,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
}: GlareHoverProps) {
  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      style={style}
    >
      {children}

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background: `linear-gradient(
            ${glareAngle}deg,
            transparent 0%,
            transparent 40%,
            ${glareColor}${Math.round(glareOpacity * 255)
              .toString(16)
              .padStart(2, '0')} 50%,
            transparent 60%,
            transparent 100%
          )`,
          backgroundSize: `${glareSize}% ${glareSize}%`,
          transitionDuration: `${transitionDuration}ms`,
        }}
      />
    </div>
  )
}

export default GlareHover