import { motion } from 'motion/react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We learn about your brand, audience and ambitions. Then we define the opportunity worth pursuing.',
    tag: 'Research',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We turn ideas into a clear strategy, creative direction and roadmap for the project.',
    tag: 'Strategy',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We shape the visual language, interactions and experience until every detail feels intentional.',
    tag: 'Creative',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'We bring the experience to life with clean, responsive and performance-focused development.',
    tag: 'Technology',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'We test, refine and launch with confidence, then stay close as the product continues to evolve.',
    tag: 'Growth',
  },
]

function Process() {
  return (
    <section
      id="process"
      className="border-t border-black/10 py-32 md:py-48"
    >
      {/* Header */}
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-black/40">
            Process
          </p>

          <p className="mt-8 max-w-[360px] text-base leading-relaxed text-black/60 md:text-lg">
            Good work doesn't happen by accident. We use a focused
            process that keeps strategy, creativity and technology
            moving in the same direction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="max-w-[950px] text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-[7rem]">
            One clear
            <span className="text-black/30"> process.</span>
            <br />
            Better work.
          </h2>
        </motion.div>
      </div>

      {/* Main process card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mt-24 overflow-hidden rounded-[32px] bg-[#111111] md:mt-40"
      >
        {/* Background glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#5227FF]/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#00C2FF]/10 blur-[120px]"
        />

        {/* Card header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white/70" />

            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              How we work
            </span>
          </div>

          <span className="text-xs text-white/25">
            05 stages
          </span>
        </div>

        {/* Process steps */}
        <div className="relative z-10 px-6 py-8 md:px-10 md:py-12 lg:px-16">
          {/* Connecting line */}
          <div className="absolute bottom-12 left-[43px] top-12 w-px bg-white/10 md:left-[67px]" />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ originY: 0 }}
            className="absolute bottom-12 left-[43px] top-12 w-px bg-white/40 md:left-[67px]"
          />

          <div>
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover="hover"
                className="group relative grid grid-cols-[56px_1fr] gap-6 border-b border-white/10 py-10 last:border-b-0 md:grid-cols-[88px_1fr_auto] md:gap-8 md:py-14"
              >
                {/* Number */}
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#111111] text-xs text-white/60 transition-colors duration-300 group-hover:border-white/60 group-hover:text-white md:h-14 md:w-14">
                  {step.number}
                </div>

                {/* Main content */}
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <motion.h3
                      variants={{
                        hover: { x: 8 },
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-3xl font-medium tracking-[-0.05em] text-white md:text-5xl"
                    >
                      {step.title}
                    </motion.h3>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/30 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/50">
                      {step.tag}
                    </span>
                  </div>

                  <motion.p
                    variants={{
                      hover: {
                        opacity: 0.8,
                        x: 4,
                      },
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="mt-4 max-w-[560px] text-sm leading-relaxed text-white/40 md:text-base"
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Arrow */}
                <motion.div
                  variants={{
                    hover: {
                      x: 6,
                      rotate: 45,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="hidden self-center text-xl text-white/20 transition-colors group-hover:text-white/70 md:block"
                >
                  ↗
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="relative z-10 border-t border-white/10 px-6 py-8 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[600px] text-sm leading-relaxed text-white/35 md:text-base">
              From the first conversation to launch day, every stage
              has one goal: turning a good idea into something people
              remember.
            </p>

            <motion.span
              whileHover={{ x: 5 }}
              className="text-xs uppercase tracking-[0.16em] text-white/30"
            >
              One team · One direction ↗
            </motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Process