import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { getCalApi } from '@calcom/embed-react'
import { Calendar } from 'lucide-react'
import { fadeUp, VIEWPORT } from '../lib/animations'

export default function Reservations() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: 'moto-paradise' })
      cal('inline', {
        elementOrSelector: '#cal-inline-embed',
        calLink: 'bob-ftnxbw',
      })
      cal('ui', {
        cssVarsPerTheme: { dark: { 'cal-brand': '#DF0914' }, light: { 'cal-brand': '#DF0914' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <section id="reservations" className="py-28 md:py-36 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <Calendar size={12} />
            Reservaciones
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-white leading-tight mb-4 text-balance">
            Agenda tu servicio en Monterrey
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Selecciona el día y hora que mejor te convenga. Confirmamos en menos de 1 hora.
          </p>
        </motion.div>

        {/* Cal.com inline embed */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111111]"
          style={{ minHeight: 600 }}
        >
          <div
            id="cal-inline-embed"
            style={{ width: '100%', height: '100%', minHeight: 600, overflow: 'scroll', position: 'relative' }}
          />
        </motion.div>

        {/* Alternative CTA */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center text-white/40 text-sm mt-8"
        >
          ¿Prefieres llamar?{' '}
          <a href="tel:+528120361141" className="text-white/70 hover:text-white transition-colors underline underline-offset-4">
            +52 81 2036 1141
          </a>{' '}
          — Respuesta en menos de 1 hora
        </motion.p>
      </div>
    </section>
  )
}
