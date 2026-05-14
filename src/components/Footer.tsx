import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { fadeUp, VIEWPORT } from '../lib/animations'

const QUICK_LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Reservaciones', href: '#reservations' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#080808] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main footer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16"
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span className="font-bold text-sm tracking-widest uppercase text-white">
                Moto Paradise
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Mecánica especializada en motocicletas en Monterrey, Nuevo León. Más de 10 años de experiencia y garantía en cada servicio.
            </p>
          </div>

          {/* NAP */}
          <div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">Contacto</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+528120361141" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                <Phone size={14} className="text-brand flex-shrink-0" />
                +52 81 2036 1141
              </a>
              <a href="mailto:info@motoparadise.mx" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                <Mail size={14} className="text-brand flex-shrink-0" />
                info@motoparadise.mx
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={14} className="text-brand flex-shrink-0 mt-0.5" />
                <span>
                  Av. Eugenio Garza Sada Sur 1620<br />
                  Nuevo Repueblo, 64821<br />
                  Monterrey, N.L.
                </span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">Navegación</p>
            <nav className="flex flex-col gap-2" aria-label="Links del footer">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} Moto Paradise — Todos los derechos reservados
          </p>
          <p className="text-white/20 text-xs">
            Hecho con amor en Monterrey
          </p>
        </div>
      </div>
    </footer>
  )
}
