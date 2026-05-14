import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 shrink-0" aria-label="Moto Paradise inicio">
      {/* Mark: two red chevron peaks */}
      <svg viewBox="0 0 243 151" className="h-10 w-auto" aria-hidden="true">
        <polygon points="87.67,150.35 0,150.35 86.2,0 128.86,77.77" fill="#DF0914" />
        <polygon points="201.37,150.35 113.7,150.35 199.89,0 242.55,77.77" fill="#DF0914" />
      </svg>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-black tracking-tight text-white uppercase leading-[1.1]">Moto</span>
        <span className="text-[15px] font-black tracking-tight text-white uppercase leading-[1.1]">
          Paradise<sup className="text-[8px] font-bold relative -top-1 ml-px">®</sup>
        </span>
        <div className="flex items-center gap-1.5 mt-[5px]">
          <span className="h-px w-4 bg-brand" />
          <span className="text-[7px] font-bold tracking-[0.22em] text-brand uppercase">Servicio</span>
          <span className="h-px w-4 bg-brand" />
        </div>
      </div>
    </a>
  )
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Reservaciones', href: '#reservations' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+528120361141"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Llamar ahora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/80 hover:text-white p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0D0D0D] border-b border-white/[0.06] md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1" aria-label="Menú móvil">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white text-base py-3 border-b border-white/[0.04] last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+528120361141"
                className="mt-4 inline-flex justify-center items-center bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Llamar ahora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
