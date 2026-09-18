import { motion } from 'motion/react'

const benefits = [
  {
    number: '01',
    title: 'Quick response.',
    description:
      'We usually respond within one business day and take the time to understand what you need.',
  },
  {
    number: '02',
    title: 'Clear next steps.',
    description:
      'After the first conversation, we will outline the right direction, scope and next steps.',
  },
]

function Contact() {
  return (
    <section
      id="contact"
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
          Contact
        </span>

        <span className="text-xs text-black/30">
          Start a conversation
        </span>
      </motion.div>

      {/* Main contact area */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative overflow-hidden rounded-[32px] bg-[#111111] p-3 md:p-5 lg:p-6"
      >
        {/* Subtle ambient glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#5227FF]/10 blur-[130px]" />

        <div className="relative z-10 grid gap-3 lg:grid-cols-[0.75fr_1.25fr]">
          {/* ================= LEFT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[28px] bg-[#f4f3ef] p-6 md:p-8 lg:p-10"
          >
            {/* Logo */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold tracking-[-0.04em]">
                PrimePixel<span className="ml-1">®</span>
              </span>

              <span className="text-xs text-black/30">
                01 / 01
              </span>
            </div>

            <div className="mt-10">
              <h3 className="max-w-[360px] text-3xl font-medium leading-[0.95] tracking-[-0.05em] md:text-4xl">
                No commitment.
                <br />
                Just a focused
                <br />
                discussion.
              </h3>

              <p className="mt-5 max-w-[360px] text-sm leading-relaxed text-black/45">
                Tell us a little about yourself and what you're
                looking to build.
              </p>
            </div>

            {/* Form */}
            <form
              className="mt-10"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs text-black/50"
                  >
                    Your name*
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-black/5 bg-black/[0.035] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-black/25 focus:border-black/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs text-black/50"
                  >
                    E-mail*
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="hello@site.com"
                    className="w-full rounded-xl border border-black/5 bg-black/[0.035] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-black/25 focus:border-black/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs text-black/50"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-black/5 bg-black/[0.035] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-black/25 focus:border-black/20"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs leading-relaxed text-black/35">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-black"
                  />

                  <span>
                    I agree to the terms and privacy policy.
                  </span>
                </label>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#111111] px-5 py-4 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  Send message

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative flex min-h-[680px] flex-col justify-between overflow-hidden rounded-[28px] px-6 py-8 md:px-10 md:py-12 lg:min-h-[760px] lg:px-14 lg:py-14">
            {/* Decorative circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute -right-52 -top-52 h-[650px] w-[650px] rounded-full border border-white/[0.07]"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/[0.05]"
            />

            {/* Top */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-white/70" />

                <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Let's talk
                </span>
              </div>

              <span className="text-xs text-white/20">
                PrimePixel®
              </span>
            </div>

            {/* Main heading */}
            <div className="relative z-10 py-20 lg:py-24">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[900px] text-6xl font-medium leading-[0.86] tracking-[-0.07em] text-white md:text-8xl lg:text-[8rem]"
              >
                Let's talk
                <span className="text-white/30">.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="mt-8 max-w-[650px] text-lg leading-[1.35] text-white/45 md:text-2xl"
              >
                <span className="font-medium text-white">
                  Tell us about your goals.
                </span>{' '}
                We'll help define the right digital experience and
                the next steps to move it forward.
              </motion.p>
            </div>

            {/* Benefits */}
            <div className="relative z-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2 md:gap-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35 + index * 0.1,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-xs text-white/20">
                      {benefit.number}
                    </span>

                    <div>
                      <h3 className="text-sm font-medium text-white">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 max-w-[300px] text-sm leading-relaxed text-white/35">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom information strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-3 flex flex-col gap-4 rounded-[28px] border border-black/10 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-black/30">
            Prefer email?
          </p>

          <a
            href="mailto:hello@primepixel.studio"
            className="mt-2 block text-sm font-medium transition-opacity hover:opacity-50"
          >
            hello@primepixel.studio
          </a>
        </div>

        <div className="text-left md:text-right">
          <p className="text-xs uppercase tracking-[0.16em] text-black/30">
            Availability
          </p>

          <p className="mt-2 text-sm text-black/50">
            Taking on selected projects
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact