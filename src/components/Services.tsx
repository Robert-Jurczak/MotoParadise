import { motion } from 'framer-motion'
import { Wrench, Zap, Disc, GitBranch, Circle, Settings } from 'lucide-react'
import { staggerContainer, staggerItem, fadeUp, VIEWPORT } from '../lib/animations'

const SERVICES = [
  {
    icon: Wrench,
    title: 'Diagnóstico y Reparación de Motor',
    description:
      'Diagnóstico computarizado y reparación integral de motores en Monterrey. Trabajamos con todas las marcas para restaurar el rendimiento óptimo de tu moto.',
  },
  {
    icon: Disc,
    title: 'Sistema de Frenos',
    description:
      'Revisión, ajuste y reemplazo de pastillas, discos y líquido de frenos en Monterrey. Tu seguridad es nuestra prioridad número uno.',
  },
  {
    icon: GitBranch,
    title: 'Suspensión y Horquilla',
    description:
      'Servicio completo de suspensión delantera y trasera en Monterrey. Ajustes de amortiguación para una conducción precisa y confortable.',
  },
  {
    icon: Zap,
    title: 'Sistema Eléctrico',
    description:
      'Diagnóstico y reparación del sistema eléctrico en Monterrey. Batería, arranque, luces y sensores revisados por especialistas certificados.',
  },
  {
    icon: Circle,
    title: 'Llantas y Balanceo',
    description:
      'Montaje, desmontaje y balanceo de llantas en Monterrey. Trabajamos con todas las medidas y marcas para garantizar tracción y estabilidad.',
  },
  {
    icon: Settings,
    title: 'Mantenimiento General',
    description:
      'Servicio preventivo completo en Monterrey: cambio de aceite, filtros, bujías, cadena y ajuste general. Mantén tu moto en condiciones perfectas.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-px bg-brand" />
            Servicios
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-white leading-tight max-w-2xl text-balance">
            Mecánica especializada para tu moto en Monterrey
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="bg-[#0A0A0A] p-8 hover:bg-[#111111] transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                <Icon size={20} className="text-brand" />
              </div>
              <h3 className="text-white font-bold text-base mb-3 leading-snug">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-full text-sm font-medium transition-colors duration-200"
          >
            ¿Necesitas un servicio? Contáctanos
            <span className="text-brand">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
