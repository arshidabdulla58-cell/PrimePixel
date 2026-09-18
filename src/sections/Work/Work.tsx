import { motion } from 'motion/react'
import GlareHover from '../../components/GlareHover/GlareHover'
import aetherImage from '../../assets/projects/aether.png'
import monoImage from '../../assets/projects/mono.png'
import orbitImage from '../../assets/projects/orbit.png'
import soraImage from '../../assets/projects/sora.png'

const projects = [
  {
    number: '01',
    name: 'AETHER',
    category: 'Brand & Digital Experience',
    year: '2026',
    description:
      'A refined digital identity and immersive web experience created for a modern lifestyle brand.',
    image: aetherImage,
  },
  {
    number: '02',
    name: 'MONO',
    category: 'E-commerce Experience',
    year: '2026',
    description:
      'A minimal commerce experience designed around product discovery, clarity and conversion.',
    image: monoImage,
  },
  {
    number: '03',
    name: 'ORBIT',
    category: 'Digital Product',
    year: '2025',
    description:
      'A flexible product platform that turns complex information into a simple, intuitive experience.',
    image: orbitImage,
  },
  {
    number: '04',
    name: 'SORA',
    category: 'Creative Platform',
    year: '2025',
    description:
      'A bold digital platform combining editorial storytelling, motion and interactive design.',
    image: soraImage,
  },
]

function Work() {
  return (
    <section
      id="work"
      className="border-t border-black/10 py-24 md:py-40"
    >
      {/* Section heading */}
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
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
            Selected work
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
            A selection of work built to make brands impossible to
            ignore.
          </h2>

          <p className="mt-10 max-w-[520px] text-base leading-relaxed text-black/60 md:text-lg">
            Every project starts with a clear idea and becomes a
            digital experience through strategy, design and technology.
          </p>
        </motion.div>
      </div>

      {/* Projects */}
      <div className="mt-24 md:mt-40">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group border-t border-black/10 py-10 md:py-14"
          >
            <div className="grid gap-8 md:grid-cols-[80px_1fr_0.7fr_100px] md:items-start">
              <span className="text-xs text-black/40">
                {project.number}
              </span>

              <div>
                <h3 className="text-4xl font-medium tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm text-black/50">
                  {project.category}
                </p>
              </div>

              <p className="max-w-[400px] text-sm leading-relaxed text-black/50 md:pt-2">
                {project.description}
              </p>

              <span className="text-sm text-black/40 md:pt-2">
                {project.year}
              </span>
            </div>

            {/* Project image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlareHover
                className="mt-10 aspect-[16/9] overflow-hidden rounded-[32px] bg-black/5 md:mt-14"
                glareColor="#ffffff"
                glareOpacity={0.18}
                glareAngle={-45}
                glareSize={220}
                transitionDuration={700}
              >
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </GlareHover>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Work