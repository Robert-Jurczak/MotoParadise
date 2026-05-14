import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, ChevronRight } from 'lucide-react'
import { fadeLeft, fadeRight, fadeUp, VIEWPORT } from '../lib/animations'

const HOURS = [
  { day: 'Lunes – Viernes', time: '9:00 AM – 7:00 PM' },
  { day: 'Sábado', time: '9:00 AM – 3:00 PM' },
  { day: 'Domingo', time: 'Cerrado' },
]

const COVERAGE = ['Monterrey', 'San Nicolás de los Garza', 'Guadalupe', 'Apodaca', 'Santa Catarina', 'Escobedo']

export default function Location() {
  return (
    <section id="location" className="py-28 md:py-36 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-px bg-brand" />
            Ubicación
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-white leading-tight max-w-2xl text-balance">
            Te atendemos en Monterrey y zona metropolitana
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="rounded-2xl overflow-hidden border border-white/[0.06] aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.307188436817!2d-100.30026388816948!3d25.66110977732112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf72eecfff95%3A0xd198a14a480906e8!2sMoto%20Paradise%20Garza%20Sada!5e0!3m2!1spl!2smx!4v1778722438180!5m2!1spl!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Moto Paradise en Monterrey, Nuevo León"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Dirección</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Av. Eugenio Garza Sada Sur 1620<br />
                  Nuevo Repueblo, 64821<br />
                  Monterrey, N.L., México
                </p>
                <a
                  href="https://maps.google.com/?q=Av.+Eugenio+Garza+Sada+Sur+1620,+Nuevo+Repueblo,+64821+Monterrey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand text-xs font-medium mt-2 hover:opacity-80 transition-opacity"
                >
                  Ver en Google Maps <ChevronRight size={12} />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock size={18} className="text-brand" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold mb-3">Horario</p>
                <div className="flex flex-col gap-2">
                  {HOURS.map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center border-b border-white/[0.05] pb-2 last:border-0">
                      <span className="text-white/60 text-sm">{day}</span>
                      <span className={`text-sm font-medium ${time === 'Cerrado' ? 'text-white/30' : 'text-white'}`}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Teléfono</p>
                <a
                  href="tel:+528120361141"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  +52 81 2036 1141
                </a>
              </div>
            </div>

            {/* Coverage */}
            <div>
              <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">Área de cobertura</p>
              <div className="flex flex-wrap gap-2">
                {COVERAGE.map((city) => (
                  <span
                    key={city}
                    className="text-xs text-white/60 bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
