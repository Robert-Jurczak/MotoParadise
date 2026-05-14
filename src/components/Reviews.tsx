import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '../lib/animations'

const STATIC_REVIEWS = [
  {
    name: 'Carlos M.',
    rating: 5,
    text: 'Excelente servicio. Llevé mi Honda CB500 con un problema en el motor que otros talleres no pudieron diagnosticar. En Moto Paradise lo resolvieron en un día. Muy profesionales.',
  },
  {
    name: 'Rodrigo V.',
    rating: 5,
    text: 'El mejor taller de motocicletas en Monterrey sin duda. Precios justos, trabajo de calidad y el equipo es muy amable. Ya llevo 3 años siendo cliente fiel.',
  },
  {
    name: 'Ana L.',
    rating: 5,
    text: 'Llevé mi Kawasaki Ninja para mantenimiento general y quedó como nueva. El servicio fue rápido y me explicaron todo lo que le hicieron. 100% recomendado en Monterrey.',
  },
  {
    name: 'Jorge H.',
    rating: 5,
    text: 'Cambio de llantas y balanceo perfectos. En menos de una hora estaba listo. El trato es muy profesional y el precio muy competitivo. Volveré sin duda.',
  },
  {
    name: 'Miguel A.',
    rating: 5,
    text: 'Tuve una falla eléctrica difícil de encontrar en mi BMW R1200. El equipo de Moto Paradise la identificó y reparó rápidamente. Muy recomendables.',
  },
  {
    name: 'Laura P.',
    rating: 5,
    text: 'El servicio de suspensión que le hicieron a mi Suzuki GSX-R fue espectacular. La moto maneja como nunca. Profesionales de verdad en Monterrey.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 md:py-36 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-px bg-brand" />
            Reseñas
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-white leading-tight max-w-2xl text-balance">
            Lo que dicen nuestros clientes en Monterrey
          </h2>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-4 mb-16"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black text-white">4.9</span>
            <span className="text-white/40 text-lg">/ 5</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/40 text-sm">Basado en reseñas de Google</span>
          </div>
        </motion.div>

        {/* Review cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14"
        >
          {STATIC_REVIEWS.map((review) => (
            <motion.article
              key={review.name}
              variants={staggerItem}
              className="bg-[#111111] border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4"
            >
              <StarRating rating={review.rating} />
              <p className="text-white/70 text-sm leading-relaxed flex-1">"{review.text}"</p>
              <footer className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                <span className="text-white/50 text-xs font-medium">— {review.name}</span>
                <span className="text-white/25 text-xs">Google</span>
              </footer>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center"
        >
          <a
            href="https://www.google.com/maps/place/Moto+Paradise+Garza+Sada/@25.6611098,-100.3002639,17z/data=!3m1!4b1!4m6!3m5!1s0x8662bf72eecfff95:0xd198a14a480906e8!8m2!3d25.6611098!4d-100.2976836!16s%2Fg%2F11z5cysy0g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-full text-sm font-medium transition-colors duration-200"
          >
            Ver todas las reseñas en Google
            <ExternalLink size={14} className="text-brand" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
