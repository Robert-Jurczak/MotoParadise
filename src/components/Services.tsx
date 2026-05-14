import { useEffect, useRef, useState } from 'react'
import { Wrench, Zap, SearchAlert, Settings } from 'lucide-react'
import { GiSpring, GiFlatTire } from 'react-icons/gi'
import { PiDiscBold } from 'react-icons/pi'
import { motion } from 'framer-motion'
import { fadeUp, VIEWPORT } from '../lib/animations'

type ServiceDef = {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
}

const SERVICES: ServiceDef[] = [
  {
    icon: SearchAlert,
    title: 'Diagnóstico y Motor',
    description:
      'Diagnóstico computarizado y reparación integral de motores. Trabajamos con todas las marcas para restaurar el rendimiento óptimo de tu moto.',
  },
  {
    icon: PiDiscBold,
    title: 'Sistema de Frenos',
    description:
      'Revisión, ajuste y reemplazo de pastillas, discos y líquido de frenos en Monterrey. Tu seguridad es nuestra prioridad número uno.',
  },
  {
    icon: GiSpring,
    title: 'Suspensión y Horquilla',
    description:
      'Servicio completo de suspensión delantera y trasera. Ajustes de amortiguación para una conducción precisa y confortable.',
  },
  {
    icon: Zap,
    title: 'Sistema Eléctrico',
    description:
      'Diagnóstico y reparación eléctrica: batería, arranque, luces y sensores revisados por especialistas certificados.',
  },
  {
    icon: GiFlatTire,
    title: 'Llantas y Balanceo',
    description:
      'Montaje, desmontaje y balanceo de llantas. Todas las medidas y marcas para garantizar tracción y estabilidad.',
  },
  {
    icon: Settings,
    title: 'Mantenimiento General',
    description:
      'Servicio preventivo completo: cambio de aceite, filtros, bujías, cadena y ajuste general para mantener tu moto en perfectas condiciones.',
  },
]

interface CardProps extends ServiceDef {
  style?: React.CSSProperties
}

function ServiceCard({ icon: Icon, title, description, style }: CardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      style={style}
      className="w-[220px] h-[220px] [perspective:1200px] cursor-pointer select-none"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full [transform-style:preserve-3d] transition-[transform] duration-700 ${
          flipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-[#111111] border border-white/10 flex flex-col items-center justify-center gap-3 p-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
            <Icon size={24} className="text-brand" />
          </div>
          <span className="text-white/80 text-xs font-semibold text-center leading-snug">{title}</span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-brand flex flex-col p-4 shadow-xl">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-2 flex-shrink-0">
            <Icon size={16} className="text-white" />
          </div>
          <h3 className="text-white text-xs font-bold leading-snug mb-1.5">{title}</h3>
          <p className="text-white/90 text-xs leading-relaxed flex-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

function MobileServiceCard({ icon: Icon, title, description }: ServiceDef) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight
      const cardCenter = rect.top + rect.height / 2
      const progress = Math.min(Math.max((vh * 0.8 - cardCenter) / (vh * 0.45), 0), 1)
      setRotation(progress * 180)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="w-full h-[200px] [perspective:1200px]">
      <div
        className="relative w-full h-full [transform-style:preserve-3d]"
        style={{ transform: `rotateY(${rotation}deg)`, transition: 'transform 0.08s ease-out' }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-[#111111] border border-white/10 flex flex-col items-center justify-center gap-3 p-6 shadow-lg">
          <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center">
            <Icon size={28} className="text-brand" />
          </div>
          <span className="text-white/80 text-sm font-semibold text-center leading-snug">{title}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-brand flex flex-col justify-center p-6 shadow-xl">
          <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center mb-3 flex-shrink-0">
            <Icon size={18} className="text-white" />
          </div>
          <h3 className="text-white text-sm font-bold leading-snug mb-2">{title}</h3>
          <p className="text-white/90 text-xs leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

const RADIUS = 265

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const p = Math.min(Math.max((-rect.top - 500) / 500, 0), 1)
      setProgress(p)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="services" className="bg-[#0A0A0A]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 md:pt-36 pb-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-px bg-brand" />
            Servicios
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-white leading-tight max-w-2xl text-balance">
            Mecánica especializada para tu moto en Monterrey
          </h2>
        </motion.div>
      </div>

      {/* Mobile: vertical scroll-flip stack */}
      <div className="md:hidden max-w-md mx-auto px-6 flex flex-col gap-4 pb-20">
        {SERVICES.map(({ icon, title, description }) => (
          <MobileServiceCard key={title} icon={icon} title={title} description={description} />
        ))}
      </div>

      {/* Desktop: scroll-orbit animation */}
      <div
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ minHeight: 'calc(100vh + 1500px)' }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-[760px] h-[760px] flex items-center justify-center">

            {/* Wheel SVG — rim phase → wheel phase */}
            {(() => {
              const HUB_R = 54
              const RIM_R = 192
              const SPOKE_LEN = RIM_R - HUB_R
              const TIRE_R = 194
              const TIRE_W = 44

              const hubOpacity    = Math.min(progress * 6, 1)
              const spokeProgress = Math.min(progress / 0.42, 1)
              const rimOpacity    = Math.min(Math.max((progress - 0.08) / 0.32, 0), 1)
              const tireOpacity   = Math.min(Math.max((progress - 0.58) / 0.36, 0), 1)

              return (
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="-380 -380 760 760"
                >
                  {/* Tire */}
                  <circle cx="0" cy="0" r={TIRE_R}
                    fill="none"
                    stroke="rgba(255,255,255,0.13)"
                    strokeWidth={TIRE_W}
                    opacity={tireOpacity}
                  />
                  {/* Tire inner bead */}
                  <circle cx="0" cy="0" r={TIRE_R - TIRE_W / 2 + 1}
                    fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2"
                    opacity={tireOpacity}
                  />
                  {/* Tire outer bead */}
                  <circle cx="0" cy="0" r={TIRE_R + TIRE_W / 2 - 1}
                    fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2"
                    opacity={tireOpacity}
                  />

                  {/* Rim */}
                  <circle cx="0" cy="0" r={RIM_R}
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="3.5"
                    opacity={rimOpacity}
                  />

                  {/* 6 spokes — draw outward via dashoffset */}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const a = (i * Math.PI * 2) / 6 - Math.PI / 2
                    return (
                      <line key={i}
                        x1={Math.cos(a) * HUB_R} y1={Math.sin(a) * HUB_R}
                        x2={Math.cos(a) * RIM_R} y2={Math.sin(a) * RIM_R}
                        stroke="rgba(255,255,255,0.22)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray={SPOKE_LEN}
                        strokeDashoffset={SPOKE_LEN * (1 - spokeProgress)}
                        opacity={hubOpacity}
                      />
                    )
                  })}

                  {/* Hub outer ring */}
                  <circle cx="0" cy="0" r={HUB_R}
                    fill="rgba(10,10,10,1)"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="3"
                    opacity={hubOpacity}
                  />
                  {/* Hub axle */}
                  <circle cx="0" cy="0" r="18"
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="2"
                    opacity={hubOpacity}
                  />
                </svg>
              )
            })()}

            {/* Center: Wrench icon */}
            <div
              className="relative z-20 rounded-full flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #DF0914, #7a0008)',
                padding: 2,
                width: 128,
                height: 128,
              }}
            >
              <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center">
                <Wrench size={36} className="text-brand" />
              </div>
            </div>

            {/* Orbiting service cards */}
            {SERVICES.map(({ icon, title, description }, i) => {
              const angle = (i * Math.PI) / 3 - Math.PI / 2
              const x = RADIUS * Math.cos(angle) * progress
              const y = RADIUS * Math.sin(angle) * progress
              return (
                <ServiceCard
                  key={title}
                  icon={icon}
                  title={title}
                  description={description}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    opacity: Math.min(progress * 2.5, 1),
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transition: 'transform 0.25s ease-out, opacity 0.3s ease-out',
                    zIndex: 10,
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="pb-28 text-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-full text-sm font-medium transition-colors duration-200"
        >
          ¿Necesitas un servicio? Contáctanos
          <span className="text-brand">→</span>
        </a>
      </motion.div>
    </section>
  )
}
