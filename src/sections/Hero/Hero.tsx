import { motion, useMotionValue, useSpring } from 'motion/react'
import Aurora from '../../components/Aurora/Aurora'

function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  })

  return (
    <section
      onMouseMove={(event) => {
        mouseX.set((event.clientX - window.innerWidth / 2) / 35)
        mouseY.set((event.clientY - window.innerHeight / 2) / 35)
      }}
     className="relative min-h-[calc(100vh-88px)] pt-[84px] md:pt-[92px]"
    >
      {/* Aurora container */}
      <div className="relative flex min-h-[calc(100vh-120px)] flex-col justify-between overflow-hidden rounded-[32px] bg-[#111111] px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14">
        {/* Aurora background */}
        <div className="pointer-events-none absolute inset-0">
          <Aurora
            colorStops={['#5227FF', '#00C2FF', '#FF4ECD']}
            amplitude={1.15}
            blend={0.55}
            speed={0.7}
          />
        </div>

        {/* Dark overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-black/20" />

        {/* Top label */}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70"
        >
          <span className="h-2 w-2 rounded-full bg-white" />
          Independent digital studio
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 max-w-[1200px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 text-xs uppercase tracking-[0.2em] text-white/60"
          >
            PRIMEPIXEL®
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[1100px] text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-white"
          >
            Digital experiences
            <br />
            for ambitious brands.
          </motion.h1>
        </div>

        {/* Bottom content */}
        <div className="relative z-10 grid gap-10 pt-16 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[520px] text-base leading-relaxed text-white/70 md:text-lg"
          >
            We design and build distinctive digital experiences
            for brands that want to move differently.
          </motion.p>

          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="group flex w-fit items-center gap-4 border-b border-white/40 pb-2 text-sm text-white transition-colors hover:border-white"
          >
            Explore our work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </motion.a>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 mt-10 flex items-center justify-between border-t border-white/20 pt-4 text-xs uppercase tracking-[0.18em] text-white/50">
          <span>Scroll to explore</span>

          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </div>
      </div>
    </section>
  )
}

export default Hero