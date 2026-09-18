import { motion } from 'motion/react'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#statement' },
  { label: 'Process', href: '#process' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Dribbble', href: '#' },
]

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f4f3ef]">
      <div className="px-3 pb-6 md:px-5 lg:px-6">
        {/* Main footer */}
        <div className="relative min-h-0 overflow-hidden pt-16 md:min-h-[700px] md:pt-24 lg:pt-28">

          {/* ================= TOP CONTENT ================= */}

          <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr] md:gap-16 lg:grid-cols-[1.5fr_0.8fr_0.7fr]">

            {/* Email */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <a
                href="mailto:hello@primepixel.studio"
                className="group inline-block text-2xl font-medium tracking-[-0.04em] md:text-3xl"
              >
                <span className="border-b border-black/40 pb-1 transition-colors duration-300 group-hover:border-black">
                  hello@primepixel.studio
                </span>
              </a>
            </motion.div>

            {/* Navigation */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >
              <p className="mb-6 text-xs text-black/35">
                Navigation
              </p>

              <nav className="flex flex-col items-start gap-3">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 text-base tracking-[-0.02em] transition-colors duration-300 hover:text-black/50"
                  >
                    {item.label}

                    <span className="text-xs opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-50">
                      ↗
                    </span>
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Social */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            >
              <p className="mb-6 text-xs text-black/35">
                Social
              </p>

              <nav className="flex flex-col items-start gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-base tracking-[-0.02em] transition-colors duration-300 hover:text-black/50"
                  >
                    {social.label}

                    <span className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* ================= HUGE WORDMARK ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-24 w-full overflow-hidden md:absolute md:bottom-20 md:left-0 md:mt-0"
          >
            <div className="whitespace-nowrap text-[17vw] font-medium leading-[0.78] tracking-[-0.09em] text-black md:text-[17vw]">
              PrimePixel
              <sup className="ml-1 align-top text-[4vw] tracking-[-0.05em] md:ml-2">
                ®
              </sup>
            </div>
          </motion.div>

          {/* ================= BOTTOM INFORMATION ================= */}

          <div className="relative mt-16 border-t border-black/10 pt-5 md:absolute md:bottom-0 md:left-0 md:right-0 md:mt-0">
            <div className="flex flex-col gap-5 text-xs text-black/35 md:flex-row md:items-center md:justify-between">

              {/* Copyright */}

              <span>
                © 2026 PrimePixel® — All rights reserved.
              </span>

              {/* Legal links */}

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:gap-6">
                <a
                  href="#"
                  className="transition-colors hover:text-black"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="transition-colors hover:text-black"
                >
                  Terms of Service
                </a>

                <button
                  type="button"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }
                  className="transition-colors hover:text-black"
                >
                  Back to top ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer