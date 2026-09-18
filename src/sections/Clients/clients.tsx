import { motion } from 'motion/react'

const clients = [
  'AETHER',
  'MONO',
  'ORBIT',
  'SORA',
  'NOVA',
  'FORM',
]

function Clients() {
  return (
    <section
      id="clients"
      className="border-t border-black/10 py-24 md:py-32"
    >
      <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
        {/* Left content */}
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
            Selected clients
          </p>

          <p className="mt-8 max-w-[360px] text-base leading-relaxed text-black/60">
            We partner with ambitious teams to turn ideas into
            digital experiences that feel clear, distinctive and
            built to last.
          </p>
        </motion.div>

        {/* Client grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-2 border-t border-black/10 sm:grid-cols-3"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ x: 6 }}
              className="flex min-h-32 items-center border-b border-black/10 px-2 text-xl font-medium tracking-[-0.04em] transition-colors duration-300 hover:text-black/60 sm:min-h-40 sm:text-2xl"
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Clients
