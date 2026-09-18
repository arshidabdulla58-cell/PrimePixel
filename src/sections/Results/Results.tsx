import { motion } from 'motion/react'

const results = [
  {
    value: '42%',
    label: 'Average conversion lift',
    description:
      'Through clearer journeys and stronger digital experiences.',
  },
  {
    value: '3.8×',
    label: 'Higher engagement',
    description:
      'Designed interactions that give people a reason to explore.',
  },
  {
    value: '68%',
    label: 'Faster experiences',
    description:
      'Lean interfaces built for speed across every device.',
  },
  {
    value: '91%',
    label: 'Repeat partnerships',
    description:
      'Long-term relationships built around meaningful results.',
  },
]

function Results() {
  return (
    <section
      id="results"
      className="border-t border-black/10 py-32 md:py-48"
    >
      {/* Heading */}
      <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
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
            Results
          </p>

          <p className="mt-8 max-w-[360px] text-base leading-relaxed text-black/60 md:text-lg">
            Good design should do more than look impressive. It
            should make digital experiences clearer, faster and
            more effective.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="max-w-[900px] text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Design that moves
            <br />
            the numbers.
          </h2>

          <p className="mt-10 max-w-[520px] text-sm leading-relaxed text-black/50 md:text-base">
            A snapshot of the kind of impact our work is designed
            to create. These figures are illustrative examples for
            the PrimePixel portfolio.
          </p>
        </motion.div>
      </div>

      {/* Results grid */}
      <div className="mt-24 border-t border-black/10 md:mt-40">
        <div className="grid md:grid-cols-2">
          {results.map((result, index) => (
            <motion.div
              key={result.value}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="border-b border-black/10 py-12 transition-transform duration-300 md:px-8 md:py-16"
            >
              <div className="flex items-start justify-between gap-8">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1 + 0.15,
                  }}
                  className="text-[clamp(4rem,8vw,7rem)] font-medium leading-none tracking-[-0.07em]"
                >
                  {result.value}
                </motion.span>

                <span className="pt-2 text-xs text-black/30">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-8 text-lg font-medium tracking-[-0.02em]">
                {result.label}
              </h3>

              <p className="mt-3 max-w-[320px] text-sm leading-relaxed text-black/50">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results