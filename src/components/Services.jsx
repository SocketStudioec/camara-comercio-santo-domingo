import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const services = [
  {
    id: 'afiliacion',
    photo: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80&auto=format&fit=crop',
    icon: '🤝',
    tag: 'Membresía',
    title: 'Afiliación Empresarial',
    short: 'Ingresa a la red comercial más importante de los Tsáchilas.',
    benefits: ['Representación gremial activa', 'Red de +800 empresas', 'Descuentos exclusivos', 'Acceso a convenios'],
    accent: '#3b82f6',
    popular: true,
  },
  {
    id: 'capacitacion',
    photo: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop',
    icon: '🎓',
    tag: 'Formación',
    title: 'Capacitación Continua',
    short: 'Programas formativos diseñados para empresarios modernos.',
    benefits: ['Cursos presenciales y online', 'Certificaciones reconocidas', 'Docentes especializados', 'Horarios flexibles'],
    accent: '#10b981',
    popular: false,
  },
  {
    id: 'comercio-exterior',
    photo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format&fit=crop',
    icon: '🌐',
    tag: 'Internacional',
    title: 'Comercio Exterior',
    short: 'Expande tu negocio más allá de las fronteras nacionales.',
    benefits: ['Asesoría en normativas', 'Alianza con UTE', 'Contactos internacionales', 'Tramitología de exportación'],
    accent: '#8b5cf6',
    popular: false,
  },
  {
    id: 'certificaciones',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop',
    icon: '📋',
    tag: 'Certificación',
    title: 'Certificaciones SECAP',
    short: 'Valida oficialmente las competencias de tu equipo comercial.',
    benefits: ['Comerciante minorista', 'Agente de ventas', 'Cajero punto de venta', 'Certificado oficial SECAP'],
    accent: '#f59e0b',
    popular: false,
  },
  {
    id: 'ferias',
    photo: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&auto=format&fit=crop',
    icon: '🎪',
    tag: 'Eventos',
    title: 'Ferias y Eventos',
    short: 'Exhibe tu marca en los eventos comerciales de la región.',
    benefits: ['Ferias anuales masivas', 'Ruedas de negocios B2B', 'Networking empresarial', 'Visibilidad de marca'],
    accent: '#ef4444',
    popular: false,
  },
  {
    id: 'representacion',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop',
    icon: '⚖️',
    tag: 'Gremial',
    title: 'Representación Gremial',
    short: 'Tu voz ante el gobierno, autoridades y organismos reguladores.',
    benefits: ['Interlocución gubernamental', 'Defensa de derechos', 'Políticas públicas', 'Asesoría jurídica'],
    accent: '#64748b',
    popular: false,
  },
]

export default function Services() {
  const [ref, inView] = useInView()
  const [hover, setHover] = useState(null)

  return (
    <section id="servicios" className="py-24 overflow-hidden" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: '#f59e0b' }} />
            <span className="text-xs tracking-[0.18em] uppercase font-semibold" style={{ color: '#0d2659' }}>Servicios</span>
          </div>
          <h2 className="font-heading font-black leading-tight mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: '#0d2659' }}>
            Todo lo que necesitas para<br />crecer como empresario
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#6b7280' }}>
            Una gama completa de servicios diseñados para impulsar la competitividad
            de tu negocio en Santo Domingo de los Tsáchilas.
          </p>
        </motion.div>

        {/* Photo-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.16,1,0.3,1] }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ aspectRatio: '4/3', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
              onMouseEnter={() => setHover(svc.id)}
              onMouseLeave={() => setHover(null)}
            >
              {/* Photo */}
              <motion.img
                src={svc.photo}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: hover === svc.id ? 1.08 : 1 }}
                transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
              />

              {/* Default overlay */}
              <div className="absolute inset-0 transition-all duration-500"
                style={{ background: hover === svc.id
                  ? 'linear-gradient(0deg, rgba(13,38,89,0.96) 0%, rgba(13,38,89,0.7) 50%, rgba(13,38,89,0.3) 100%)'
                  : 'linear-gradient(0deg, rgba(13,38,89,0.92) 0%, rgba(13,38,89,0.5) 55%, rgba(0,0,0,0.15) 100%)'
                }} />

              {/* Popular badge */}
              {svc.popular && (
                <div className="absolute top-4 right-4 z-10 badge-gold text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: '#f59e0b', color: '#0d2659' }}>
                  Popular
                </div>
              )}

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                {/* Tag */}
                <div className="mb-2">
                  <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                    style={{ background: `${svc.accent}33`, color: svc.accent, border: `1px solid ${svc.accent}55` }}>
                    {svc.tag}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl">{svc.icon}</span>
                  <h3 className="font-heading font-bold text-white text-lg leading-tight">{svc.title}</h3>
                </div>

                {/* Short desc */}
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  {svc.short}
                </p>

                {/* Benefits – visible on hover */}
                <AnimatePresence>
                  {hover === svc.id && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
                      className="space-y-1.5 overflow-hidden"
                    >
                      {svc.benefits.map(b => (
                        <li key={b} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>
                          <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: svc.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                {/* CTA arrow */}
                <motion.div
                  className="flex items-center gap-1.5 mt-3 font-semibold text-sm"
                  style={{ color: svc.accent }}
                  animate={{ x: hover === svc.id ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Saber más
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Full Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background photo */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1553484771-047a44eee27b?w=1400&q=70&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(13,38,89,0.97) 0%, rgba(13,38,89,0.85) 50%, rgba(26,58,143,0.8) 100%)' }} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6" style={{ background: '#f59e0b' }} />
                <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: '#fcd34d' }}>Únete hoy</span>
              </div>
              <h3 className="font-heading font-black text-white text-2xl lg:text-3xl mb-2">
                ¿Listo para impulsar tu negocio?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Únete a los +800 empresarios que confían en la Cámara de Comercio.</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <motion.a
                href="#afiliate"
                onClick={e => { e.preventDefault(); document.querySelector('#afiliate')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary px-7 py-3.5 font-bold whitespace-nowrap"
                whileHover={{ scale: 1.04 }}
              >Afiliarme Ahora</motion.a>
              <motion.a
                href="#contacto"
                onClick={e => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-secondary px-7 py-3.5 font-bold whitespace-nowrap"
                whileHover={{ scale: 1.04 }}
              >Más Información</motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
