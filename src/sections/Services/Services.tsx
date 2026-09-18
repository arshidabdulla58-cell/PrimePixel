import { motion } from 'motion/react'
import Threads from '../../components/Threads'

const services = [
  {
    number: '01',
    title: 'Strategy & Direction',
    description:
      'We find the clearest idea, define the right direction and build a foundation for meaningful digital work.',
  },
  {
    number: '02',
    title: 'Brand Identity',
    description:
      'We create distinctive visual systems that give ambitious brands a clear voice and a memorable presence.',
  },
  {
    number: '03',
    title: 'Web Design & Development',
    description:
      'We design and develop expressive websites that balance storytelling, usability and performance.',
  },
  {
    number: '04',
    title: 'Motion & Interaction',
    description:
      'We use movement and interaction with purpose, creating digital experiences that feel responsive and alive.',
  },
]

function Services() {
  return (
    <section
      id="services"
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
            Services
          </p>

          <p className="mt-8 max-w-[360px] text-base leading-relaxed text-black/60 md:text-lg">
            From the first idea to the final interaction, we bring
            strategy, design and technology together under one roof.
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
            Everything a brand
            <br />
            needs to move forward.
          </h2>
        </motion.div>
      </div>

      {/* Services content */}
      <div className="mt-24 grid gap-8 md:mt-40 md:grid-cols-[0.9fr_1.1fr] md:gap-16">

        {/* Threads panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[420px] overflow-hidden rounded-[32px] bg-[#111111] md:sticky md:top-10 md:h-[620px]"
        >
          <div className="absolute inset-0">
            <Threads
              amplitude={1.2}
              distance={0}
              enableMouseInteraction
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-black/10" />

          <div className="absolute bottom-8 left-8 right-8 z-10">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">
              What we bring
            </p>

            <p className="mt-4 max-w-[360px] text-2xl font-medium leading-tight tracking-[-0.04em] text-white md:text-3xl">
              Strategy, design and technology working as one.
            </p>
          </div>
        </motion.div>

        {/* Service list */}
        <div className="border-t border-black/10">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover="hover"
              className="group border-b border-black/10"
            >
              <div className="grid gap-6 py-10 md:grid-cols-[60px_1fr_40px] md:items-start md:py-14">
                <span className="pt-1 text-xs text-black/40">
                  {service.number}
                </span>

                <div>
                  <motion.h3
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 10 },
                    }}
                    initial="rest"
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-3xl font-medium tracking-[-0.05em] md:text-5xl"
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    variants={{
                      rest: {
                        opacity: 0.45,
                        y: 5,
                      },
                      hover: {
                        opacity: 0.8,
                        y: 0,
                      },
                    }}
                    initial="rest"
                    transition={{
                      duration: 0.35,
                    }}
                    className="mt-4 max-w-[520px] text-sm leading-relaxed text-black/60 md:text-base"
                  >
                    {service.description}
                  </motion.p>
                </div>

                <motion.span
                  variants={{
                    rest: {
                      x: 0,
                      rotate: 0,
                    },
                    hover: {
                      x: 5,
                      rotate: 45,
                    },
                  }}
                  initial="rest"
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pt-1 text-xl text-black/40"
                >
                  ↗
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services