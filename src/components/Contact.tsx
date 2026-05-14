import React from 'react'
import { motion } from 'framer-motion'
import {
  Mail, MapPin, Phone, MessageCircle, Check, Copy,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { fadeUp, VIEWPORT } from '../lib/animations'

const APP_EMAIL = 'info@motoparadise.mx'
const APP_PHONE = '+52 81 2036 1141'
const APP_WHATSAPP_HREF = 'https://wa.me/528120361141?text=Hola%2C+quiero+información+sobre+mecánica+de+motocicletas'

const QUICK_LINKS = [
  {
    icon: MessageCircle,
    href: APP_WHATSAPP_HREF,
    label: 'WhatsApp',
    color: '#25D366',
  },
  {
    icon: Phone,
    href: 'tel:+528120361141',
    label: '+52 81 2036 1141',
    color: '#DF0914',
  },
  {
    icon: Mail,
    href: `mailto:${APP_EMAIL}`,
    label: APP_EMAIL,
    color: '#ffffff',
  },
  {
    icon: MapPin,
    href: 'https://www.google.com/maps/place/Moto+Paradise+Garza+Sada/@25.6611098,-100.3002639,17z',
    label: 'Google Maps',
    color: '#ffffff',
  },
]

// ── Copy Button ──────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore
    }
  }

  return (
    <button
      onClick={handleCopy}
      disabled={copied}
      aria-label={copied ? 'Copiado' : 'Copiar al portapapeles'}
      className="relative w-6 h-6 flex items-center justify-center rounded-md text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-colors disabled:opacity-100"
    >
      <span className={`absolute transition-all duration-150 ${copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <Check size={13} className="text-emerald-400" />
      </span>
      <span className={`absolute transition-all duration-150 ${copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
        <Copy size={13} />
      </span>
    </button>
  )
}

// ── Contact Box ──────────────────────────────────────────────────
type BoxProps = {
  icon: LucideIcon
  title: string
  description: string
  children: React.ReactNode
  last?: boolean
}

function Box({ icon: Icon, title, description, children, last }: BoxProps) {
  return (
    <div className={`flex flex-col justify-between border-b border-white/[0.07] md:border-b-0 md:border-r ${last ? 'border-r-0' : ''}`}>
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.02] px-5 py-4">
        <Icon size={16} strokeWidth={1.5} className="text-white/40" />
        <h3 className="text-sm font-medium tracking-wider text-white/80">{title}</h3>
      </div>
      {/* Content */}
      <div className="flex items-center gap-3 px-5 py-10 flex-1">
        {children}
      </div>
      {/* Footer */}
      <div className="border-t border-white/[0.07] px-5 py-4">
        <p className="text-white/35 text-xs">{description}</p>
      </div>
    </div>
  )
}

// ── Section ──────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-0"
        >
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-px bg-brand" />
            Contacto
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-white leading-tight mb-3 text-balance">
            Contáctanos en Monterrey
          </h2>
          <p className="text-white/40 text-sm mb-10">
            Respondemos en menos de 1 hora en horario laboral.
          </p>
        </motion.div>

        {/* Bordered container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="border border-white/[0.07] rounded-2xl overflow-hidden"
        >
          {/* 3-column boxes */}
          <div className="grid md:grid-cols-3">
            <Box
              icon={Mail}
              title="Email"
              description="Respondemos todos los correos en menos de 24 horas."
            >
              <a
                href={`mailto:${APP_EMAIL}`}
                className="font-mono text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide break-all"
              >
                {APP_EMAIL}
              </a>
              <CopyButton text={APP_EMAIL} />
            </Box>

            <Box
              icon={MapPin}
              title="Dirección"
              description="Visítanos de Lun–Vie 9:00–19:00, Sáb 9:00–15:00."
            >
              <a
                href="https://www.google.com/maps/place/Moto+Paradise+Garza+Sada/@25.6611098,-100.3002639,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide leading-relaxed"
              >
                Av. Eugenio Garza Sada Sur 1620,<br />
                Nuevo Repueblo, 64821<br />
                Monterrey, N.L.
              </a>
            </Box>

            <Box
              icon={Phone}
              title="Teléfono"
              description="Disponibles Lun–Sáb, 9:00 AM – 7:00 PM."
              last
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+528120361141"
                    className="font-mono text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide"
                  >
                    {APP_PHONE}
                  </a>
                  <CopyButton text={APP_PHONE} />
                </div>
                <a
                  href={APP_WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#25D366]/80 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={12} />
                  WhatsApp disponible
                </a>
              </div>
            </Box>
          </div>

          {/* Separator */}
          <div className="border-t border-white/[0.07]" />

          {/* Find us online */}
          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden">
            {/* Dot grid background */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
                maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-6 py-12 px-6">
              <h3 className="text-2xl font-bold text-white text-center">
                Encuéntranos en línea
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] px-4 py-2 rounded-full transition-colors duration-200"
                  >
                    <link.icon size={14} style={{ color: link.color }} />
                    <span className="font-mono text-sm font-medium text-white/70 tracking-wide">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
