import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const navItems = [
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'About us',
    href: '#statement',
  },
  {
    label: 'Process',
    href: '#process',
  },
  {
    label: 'Journal',
    href: '#journal',
  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock page scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu with Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-[100] px-3 pt-3 md:px-5 md:pt-4 lg:px-6"
      >
        <div className="mx-auto flex h-[58px] w-full items-center justify-between rounded-full border border-black/10 bg-[#f4f3ef]/95 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl md:h-[62px] md:px-5">

          {/* ================= LOGO ================= */}

          <a
            href="#"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-[#111111] text-[9px] font-semibold tracking-[-0.06em] text-white transition-transform duration-300 group-hover:rotate-[-8deg]">
              PP
            </span>

            <span className="whitespace-nowrap text-base font-semibold tracking-[-0.05em] md:text-lg">
              PrimePixel<span className="ml-0.5">®</span>
            </span>
          </a>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-50 lg:flex">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative whitespace-nowrap py-2 text-[13px] text-black/55 transition-colors duration-300 hover:text-black"
              >
                {item.label}

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex shrink-0 items-center gap-2">

            {/* Contact button */}

            <a
              href="#contact"
              className="group flex h-10 min-w-[105px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#111111] px-4 text-[12px] font-medium !text-white transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="block whitespace-nowrap !text-white">
                Contact us
              </span>

              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-[9px] !text-white transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>

            {/* Menu button */}

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="group flex h-10 shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white/50 px-3.5 text-[12px] text-black/70 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black md:px-4"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="whitespace-nowrap">
                {menuOpen ? 'Close' : 'Menu'}
              </span>

              {/* Animated hamburger */}

              <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                <motion.span
                  animate={
                    menuOpen
                      ? {
                          rotate: 45,
                          y: 0,
                        }
                      : {
                          rotate: 0,
                          y: -2,
                        }
                  }
                  transition={{ duration: 0.25 }}
                  className="absolute block h-px w-3 bg-current"
                />

                <motion.span
                  animate={
                    menuOpen
                      ? {
                          rotate: -45,
                          y: 0,
                        }
                      : {
                          rotate: 0,
                          y: 2,
                        }
                  }
                  transition={{ duration: 0.25 }}
                  className="absolute block h-px w-3 bg-current"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            />

            {/* Menu panel */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed left-3 right-3 top-[76px] z-50 overflow-hidden rounded-[28px] border border-black/10 bg-[#f4f3ef] shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:left-5 md:right-5 md:top-[82px] lg:left-6 lg:right-6"
            >
              <div className="p-6 md:p-10">

                {/* Menu header */}

                <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                    Navigation
                  </span>

                  <span className="text-xs text-black/25">
                    PrimePixel®
                  </span>
                </div>

                {/* Menu links */}

                <nav className="grid">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center justify-between border-b border-black/10 py-5"
                    >
                      <span className="text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                        {item.label}
                      </span>

                      <span className="text-lg text-black/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black">
                        ↗
                      </span>
                    </motion.a>
                  ))}
                </nav>

                {/* Menu bottom */}

                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-black/30">
                      Have a project?
                    </p>

                    <a
                      href="mailto:hello@primepixel.studio"
                      onClick={closeMenu}
                      className="mt-2 block text-sm font-medium"
                    >
                      hello@primepixel.studio
                    </a>
                  </div>

                  <a
  href="#contact"
  onClick={closeMenu}
  className="group flex w-fit items-center gap-4 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium !text-white transition-transform duration-300 hover:scale-[1.03]"
>
  <span className="!text-white">
    Start a project
  </span>

  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs !text-white transition-transform duration-300 group-hover:translate-x-1">
    ↗
  </span>
</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar