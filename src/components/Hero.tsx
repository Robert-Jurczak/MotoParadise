import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, MessageCircle, ShieldCheck, Star, Clock } from 'lucide-react'
import { EASE_OUT_EXPO } from '../lib/animations'
import { InfiniteSlider } from './ui/InfiniteSlider'

import logoHonda from '../assets/logos/honda.svg'
import logoSuzuki from '../assets/logos/suzuki.svg'
import logoBMW from '../assets/logos/bmw.svg'
import logoDucati from '../assets/logos/ducati.svg'
import logoKTM from '../assets/logos/ktm.svg'
import logoHusqvarna from '../assets/logos/husqvarna.svg'
import logoHarley from '../assets/logos/harley.svg'
import logoKawasaki from '../assets/logos/kawasaki.svg'
import logoYamaha from '../assets/logos/yamaha.svg'
import logoTriumph from '../assets/logos/triumph.svg'
import logoAprilia from '../assets/logos/aprilia.svg'
import logoItalika from '../assets/logos/italika.svg'
import logoIndian from '../assets/logos/indian.svg'


const HERO_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80'

const TRUST_ITEMS = [
  { icon: Star, label: '10 años de experiencia' },
  { icon: ShieldCheck, label: 'Garantía en todas las reparaciones' },
  { icon: Clock, label: 'Disponible hoy' },
]

const BRANDS: { name: string; logo: string; imgClass?: string }[] = [
  { name: 'Honda',           logo: logoHonda },
  { name: 'Kawasaki',        logo: logoKawasaki, imgClass: 'h-10' },
  { name: 'Yamaha',          logo: logoYamaha },
  { name: 'Suzuki',          logo: logoSuzuki },
  { name: 'BMW',             logo: logoBMW },
  { name: 'Ducati',          logo: logoDucati },
  { name: 'KTM',             logo: logoKTM,      imgClass: 'h-10' },
  { name: 'Husqvarna',       logo: logoHusqvarna },
  { name: 'Harley-Davidson', logo: logoHarley },
  { name: 'Indian',          logo: logoIndian,   imgClass: 'h-4' },
  { name: 'Triumph',         logo: logoTriumph,  imgClass: 'h-10' },
  { name: 'Aprilia',         logo: logoAprilia,  imgClass: 'h-10' },
  { name: 'Italika',         logo: logoItalika },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const lineVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
}

const ctaVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.65, 0.85])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero Moto Paradise"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <img
          src={HERO_IMAGE}
          alt="Motocicleta en Moto Paradise, Monterrey"
          className="w-full h-[115%] object-cover object-center"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-[#0A0A0A]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div variants={lineVariant}>
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              <span className="w-8 h-px bg-brand" />
              Monterrey, Nuevo León
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={lineVariant}
              className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.92] tracking-[-0.04em] text-white"
            >
              Moto
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.p
              variants={lineVariant}
              className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.92] tracking-[-0.04em] text-brand"
            >
              Paradise.
            </motion.p>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={lineVariant}
            className="text-white/50 text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-12 text-balance"
          >
            Mecánica especializada en motocicletas en Monterrey.
            Más de 10 años cuidando tu moto con precisión y garantía.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={ctaVariant} className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="tel:+528120361141"
              className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-white font-semibold text-base px-8 py-4 rounded-full transition-colors duration-200 group"
            >
              <Phone size={18} className="group-hover:scale-110 transition-transform" />
              Llamar ahora
            </a>
            <a
              href="https://wa.me/528120361141?text=Hola%2C+quiero+información+sobre+mecánica+de+motocicletas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.12] text-white font-semibold text-base px-8 py-4 rounded-full transition-colors duration-200 group"
            >
              <MessageCircle size={18} className="text-[#25D366] group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div variants={ctaVariant} className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-white/60">
                <Icon size={16} className="text-brand flex-shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Brand carousel */}
      <motion.div
        className="relative z-20 w-full mt-auto border-t border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center py-6 gap-6 md:gap-0">

            {/* Label */}
            <div className="flex-shrink-0 md:border-r md:border-white/[0.08] md:pr-8 md:mr-8">
              <p className="text-white/30 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap text-center md:text-right">
                Multimarca
              </p>
            </div>

            {/* Slider */}
            <div className="relative flex-1 overflow-hidden w-full">
              <InfiniteSlider speed={35} gap={56} pauseOnHover>
                {BRANDS.map(({ name, logo, imgClass }) => (
                  <div key={name} className="flex items-center justify-center flex-shrink-0">
                    <img
                      src={logo}
                      alt={`${name} — Moto Paradise Monterrey`}
                      className={`${imgClass ?? 'h-7'} w-auto object-contain opacity-35 hover:opacity-90 transition-opacity duration-300`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </InfiniteSlider>

              {/* Edge fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent" />
            </div>

          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-white/20 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
