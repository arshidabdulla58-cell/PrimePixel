import { motion } from 'motion/react'

const articles = [
  {
    number: '01',
    category: 'Design',
    title: 'Why restraint makes digital experiences feel more premium.',
    date: 'Sep 2026',
    readTime: '5 min read',
  },
  {
    number: '02',
    category: 'Strategy',
    title: 'Building brands that can move beyond their first idea.',
    date: 'Aug 2026',
    readTime: '4 min read',
  },
  {
    number: '03',
    category: 'Technology',
    title: 'Where motion adds meaning instead of just movement.',
    date: 'Jul 2026',
    readTime: '6 min read',
  },
]

function Journal() {
  return (
    <section
      id="journal"
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
            Journal
          </p>

          <p className="mt-8 max-w-[360px] text-base leading-relaxed text-black/60 md:text-lg">
            Ideas, observations and things we're thinking about across
            design, technology and the digital world.
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
            Thoughts worth
            <span className="text-black/30"> sharing.</span>
          </h2>
        </motion.div>
      </div>

      {/* Articles */}
      <div className="mt-24 grid gap-3 md:mt-40 md:grid-cols-3">
        {articles.map((article, index) => (
          <motion.a
            key={article.number}
            href="#contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="group flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[32px] border border-black/10 bg-[#ebeae5] p-6 transition-colors duration-300 hover:bg-[#e3e2dc] md:p-8"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <span className="text-xs text-black/30">
                {article.number}
              </span>

              <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-black/40">
                {article.category}
              </span>
            </div>

            {/* Article title */}
            <div>
              <motion.h3
                variants={{
                  hover: {
                    x: 6,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-3xl font-medium leading-[0.98] tracking-[-0.05em] md:text-4xl"
              >
                {article.title}
              </motion.h3>

              <div className="mt-8 flex items-center gap-4 text-xs text-black/35">
                <span>{article.date}</span>

                <span className="h-1 w-1 rounded-full bg-black/20" />

                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between border-t border-black/10 pt-5">
              <span className="text-xs uppercase tracking-[0.14em] text-black/30">
                Read article
              </span>

              <motion.span
                variants={{
                  hover: {
                    x: 5,
                    rotate: 45,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg text-black/30 group-hover:text-black"
              >
                ↗
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Bottom link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-3 flex items-center justify-between rounded-[32px] border border-black/10 px-6 py-6 md:px-8"
      >
        <span className="text-sm text-black/40">
          More ideas coming soon.
        </span>

        <span className="text-xs uppercase tracking-[0.16em] text-black/30">
          PrimePixel® Journal
        </span>
      </motion.div>
    </section>
  )
}

export default Journal