import { motion } from 'motion/react'
import Prism from '../../components/Prism'

const principles = [
  {
    number: '01',
    title: 'Clear Strategy',
    description:
      'We define the idea, direction and purpose before we start building.',
  },
  {
    number: '02',
    title: 'Distinctive Design',
    description:
      'We create visual systems that give brands character and clarity.',
  },
  {
    number: '03',
    title: 'Thoughtful Development',
    description:
      'We turn strong ideas into fast, responsive digital experiences.',
  },
  {
    number: '04',
    title: 'Long-Term Partnership',
    description:
      'We stay close, evolve the work and help your digital presence grow.',
  },
]

function Statement() {
  return (
    <section
      id="statement"
      className="border-t border-black/10 py-24 md:py-40"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10 flex items-center justify-between"
      >
        <span className="text-xs uppercase tracking-[0.18em] text-black/40">
          About PrimePixel
        </span>

        <span className="text-xs text-black/30">
          How we work
        </span>
      </motion.div>

      {/* Four principle cards */}
      <div className="grid overflow-hidden rounded-[32px] border border-black/10 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <motion.article
            key={principle.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ backgroundColor: '#ebeae5' }}
            className="group min-h-[220px] border-b border-black/10 p-6 transition-colors duration-300 sm:border-r sm:last:border-r-0 lg:min-h-[260px] lg:border-b-0"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs text-black/30">
                {principle.number}
              </span>

              <motion.span
                whileHover={{ rotate: 45 }}
                className="text-sm text-black/30"
              >
                ↗
              </motion.span>
            </div>

            <div className="mt-20">
              <h3 className="text-xl font-medium tracking-[-0.04em]">
                {principle.title}
              </h3>

              <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-black/50">
                {principle.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Main statement card */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 1,
    delay: 0.1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative mt-3 min-h-[500px] overflow-hidden rounded-[32px] bg-[#111111] md:min-h-[600px]"
>
  {/* React Bits background */}
  <div className="pointer-events-none absolute inset-0 opacity-70">
    <Prism
      animationType="rotate"
      timeScale={0.25}
      scale={3.2}
      glow={1.2}
      noise={0.15}
      bloom={1.2}
      hueShift={0}
      colorFrequency={1}
      transparent
      suspendWhenOffscreen
    />
  </div>

  {/* Dark readability overlay */}
  <div className="pointer-events-none absolute inset-0 bg-black/45" />

  {/* Soft central glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5227FF]/10 blur-[100px]" />

  {/* Card content */}
  <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-6 py-20 text-center md:min-h-[600px] md:px-12">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-8 text-xs uppercase tracking-[0.2em] text-white/40"
    >
      The PrimePixel approach
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-[950px] text-5xl font-medium leading-[0.9] tracking-[-0.06em] text-white md:text-7xl lg:text-[6.5rem]"
    >
      Not just another agency.
      <br />
      <span className="text-white/35">
        We're your creative partner.
      </span>
    </motion.h2>

    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.35,
      }}
      whileHover={{ scale: 1.04 }}
      className="mt-10 flex items-center gap-5 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform"
    >
      Let's build something great

      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
        ↗
      </span>
    </motion.a>
  </div>

  {/* Bottom metadata */}
  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/25 md:left-10 md:right-10">
    <span>PrimePixel®</span>
    <span>Strategy · Design · Technology</span>
  </div>
</motion.div>
    </section>
  )
}

export default Statement