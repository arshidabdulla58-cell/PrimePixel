import { motion } from 'motion/react'

const testimonials = [
  {
    quote:
      'PrimePixel understood what we were trying to become before we could even articulate it ourselves.',
    name: 'Alex Morgan',
    role: 'Founder, AETHER',
  },
  {
    quote:
      'The process was thoughtful, collaborative and incredibly focused. The final experience feels exactly like our brand.',
    name: 'Maya Chen',
    role: 'Creative Director, MONO',
  },
  {
    quote:
      'They brought strategy and design together in a way that made a complicated product feel incredibly simple.',
    name: 'Daniel Reed',
    role: 'Product Lead, ORBIT',
  },
]

function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Testimonials
          </p>

          <p className="mt-8 max-w-[360px] text-base leading-relaxed text-black/60 md:text-lg">
            Good partnerships create better work. Here's what some of
            the people we've worked with have to say.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
        >
          <h2 className="max-w-[900px] text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-[7rem]">
            Don't take
            <span className="text-black/30"> our word for it.</span>
          </h2>
        </motion.div>
      </div>

      {/* Main testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mt-24 overflow-hidden rounded-[32px] bg-[#111111] md:mt-40"
      >
        {/* Decorative circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="pointer-events-none absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full border border-white/5"
        />

        <div className="relative z-10 p-8 md:p-14 lg:p-20">
          {/* Quote mark */}
          <div className="text-7xl leading-none tracking-[-0.1em] text-white/10 md:text-9xl">
            “
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
            className="mt-4 max-w-[1050px] text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-white md:text-6xl lg:text-[5.5rem]"
          >
            {testimonials[0].quote}
          </motion.blockquote>

          <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 md:mt-24 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                {testimonials[0].name}
              </p>

              <p className="mt-1 text-sm text-white/35">
                {testimonials[0].role}
              </p>
            </div>

            <span className="text-xs uppercase tracking-[0.16em] text-white/25">
              Client perspective
            </span>
          </div>
        </div>
      </motion.div>

      {/* Other testimonials */}
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {testimonials.slice(1).map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            whileHover={{ y: -5 }}
            className="group flex min-h-[300px] flex-col justify-between rounded-[32px] border border-black/10 bg-[#ebeae5] p-6 md:p-8"
          >
            <span className="text-4xl leading-none text-black/10">
              “
            </span>

            <p className="max-w-[500px] text-xl font-medium leading-tight tracking-[-0.03em] md:text-2xl">
              {testimonial.quote}
            </p>

            <div className="flex items-end justify-between gap-4 border-t border-black/10 pt-5">
              <div>
                <p className="text-sm font-medium">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-black/40">
                  {testimonial.role}
                </p>
              </div>

              <motion.span
                whileHover={{ rotate: 45 }}
                className="text-sm text-black/30 transition-colors group-hover:text-black"
              >
                ↗
              </motion.span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Footer line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-3 rounded-[32px] border border-black/10 px-6 py-6"
      >
        <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-black/30 sm:flex-row sm:items-center sm:justify-between">
          <span>Built on collaboration</span>
          <span>Designed for long-term partnerships</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials