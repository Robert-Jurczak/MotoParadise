import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-5 z-50 flex flex-col gap-3"
      aria-label="Contacto rápido"
    >
      {/* Phone */}
      <a
        href="tel:+528120361141"
        aria-label="Llamar a Moto Paradise"
        className="group flex items-center gap-3 justify-end"
      >
        <span className="hidden lg:block bg-[#111111] border border-white/[0.08] text-white/70 text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
          +52 81 2036 1141
        </span>
        <div className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-brand hover:bg-brand-dark flex items-center justify-center shadow-lg shadow-brand/30 transition-colors duration-200">
          <Phone size={20} className="text-white" />
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/528120361141?text=Hola%2C+quiero+información+sobre+mecánica+de+motocicletas"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp de Moto Paradise"
        className="group flex items-center gap-3 justify-end"
      >
        <span className="hidden lg:block bg-[#111111] border border-white/[0.08] text-white/70 text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
          WhatsApp
        </span>
        <div className="w-[52px] h-[52px] rounded-full bg-[#25D366] hover:bg-[#1DAA54] flex items-center justify-center shadow-lg shadow-[#25D366]/20 transition-colors duration-200">
          <MessageCircle size={20} className="text-white" />
        </div>
      </a>
    </motion.div>
  )
}
