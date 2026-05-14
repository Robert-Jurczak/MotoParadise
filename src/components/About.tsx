import { motion } from 'framer-motion'
import { ShieldCheck, Award, Star, MapPin } from 'lucide-react'
import { fadeLeft, fadeRight, staggerContainer, staggerItem, fadeUp, VIEWPORT } from '../lib/animations'

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=900&q=80'

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Garantía de 6 meses en todas las reparaciones' },
  { icon: Award, label: 'Técnicos certificados' },
  { icon: Star, label: '4.9 en Google Reviews' },
  { icon: MapPin, label: 'Monterrey, N.L.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-brand" />
              Nosotros
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-white leading-tight mb-8 text-balance">
              10 años de confianza en Monterrey
            </h2>
            <div className="space-y-5 text-white/60 text-base leading-relaxed">
              <p>
                Moto Paradise nació en Monterrey con una misión clara: ofrecer mecánica especializada en
                motocicletas con el más alto estándar de calidad. Durante más de 10 años hemos atendido
                a miles de motociclistas del área metropolitana de Monterrey y la región noreste de México.
              </p>
              <p>
                Nuestro equipo de técnicos certificados trabaja con todas las marcas y modelos —
                desde motocicletas de uso diario hasta motos de alto rendimiento. Usamos diagnóstico
                computarizado y refacciones de calidad para garantizar resultados duraderos.
              </p>
              <p>
                Cada servicio en Moto Paradise viene respaldado por nuestra garantía de 6 meses.
                Porque no solo reparamos motos, construimos relaciones de confianza.
              </p>
            </div>

            {/* Guarantee callout */}
            <div className="mt-10 p-5 rounded-2xl bg-brand/[0.07] border border-brand/20">
              <div className="flex gap-3 items-start">
                <ShieldCheck size={20} className="text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Nuestra garantía</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    6 meses de garantía en todas las reparaciones. Si algo falla, lo corregimos sin costo adicional.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="grid grid-cols-2 gap-3 mt-8"
            >
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3"
                >
                  <Icon size={15} className="text-brand flex-shrink-0" />
                  <span className="text-white/60 text-xs leading-snug">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Técnico especializado de Moto Paradise trabajando en una motocicleta en Monterrey"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width={900}
                height={1125}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="absolute -bottom-6 -left-6 bg-[#111111] border border-white/[0.08] rounded-2xl p-5 shadow-2xl"
            >
              <p className="text-4xl font-black text-brand leading-none mb-1">10+</p>
              <p className="text-white/60 text-xs font-medium leading-snug">años de<br />experiencia</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
