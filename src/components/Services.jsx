import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const services = [
  {
    id: 'afiliacion',
    icon: '🤝',
    category: 'Membresía',
    title: 'Afiliación Empresarial',
    short: 'Forma parte de la comunidad gremial más importante de la región.',
    description: 'Al afiliarte a la Cámara de Comercio Santo Domingo, formas parte de una red de más de 800 empresas que trabajan unidos por el desarrollo del comercio regional. Disfruta de representación gremial, descuentos en servicios y acceso a programas exclusivos.',
    benefits: ['Representación ante organismos públicos', 'Red de contactos empresariales', 'Descuentos en capacitaciones', 'Acceso a convenios y alianzas'],
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    badge: 'Popular',
  },
  {
    id: 'capacitacion',
    icon: '🎓',
    category: 'Formación',
    title: 'Capacitación Continua',
    short: 'Programas formativos para desarrollar tus competencias empresariales.',
    description: 'Ofrecemos cursos y talleres diseñados para los empresarios y emprendedores de Santo Domingo. Desde gestión empresarial hasta habilidades digitales, nuestros programas te preparan para los desafíos del mercado moderno.',
    benefits: ['Cursos presenciales y virtuales', 'Certificaciones reconocidas', 'Docentes especializados', 'Horarios flexibles para empresarios'],
    color: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-50',
    badge: 'Nuevo',
  },
  {
    id: 'comercio-exterior',
    icon: '🌐',
    category: 'Internacional',
    title: 'Comercio Exterior',
    short: 'Lleva tu negocio al mercado internacional con nuestro apoyo.',
    description: 'A través de alianzas con la Universidad UTE y el SECAP, brindamos capacitación especializada en comercio exterior para emprendedores que desean expandir sus negocios más allá de las fronteras nacionales.',
    benefits: ['Trámites de importación/exportación', 'Asesoría en normativas internacionales', 'Alianzas con UTE y SECAP', 'Networking con empresas exportadoras'],
    color: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-50',
    badge: null,
  },
  {
    id: 'certificaciones',
    icon: '📋',
    category: 'Certificación',
    title: 'Certificaciones por Competencias',
    short: 'Valida las habilidades de tu equipo con certificaciones oficiales.',
    description: 'En colaboración con el SECAP (Servicio Ecuatoriano de Capacitación Profesional), ofrecemos programas de certificación en el área de Comercio y Ventas para trabajadores y empresarios del sector comercial.',
    benefits: ['Perfiles: Comerciante minorista, Agente de ventas', 'Certificado oficial SECAP', 'Cajero de punto de venta', 'Abastecedor de perchas'],
    color: 'from-orange-500 to-orange-700',
    bg: 'bg-orange-50',
    badge: null,
  },
  {
    id: 'ferias',
    icon: '🎪',
    category: 'Eventos',
    title: 'Ferias y Eventos',
    short: 'Espacios para exhibir tus productos y conectar con clientes.',
    description: 'Organizamos ferias comerciales, ruedas de negocios y eventos empresariales a lo largo del año, brindando a los afiliados la oportunidad de exhibir sus productos, generar contactos y expandir su mercado.',
    benefits: ['Ferias anuales con alta asistencia', 'Ruedas de negocios B2B', 'Eventos de networking', 'Visibilidad para tu marca'],
    color: 'from-rose-500 to-rose-700',
    bg: 'bg-rose-50',
    badge: null,
  },
  {
    id: 'representacion',
    icon: '⚖️',
    category: 'Gremial',
    title: 'Representación Gremial',
    short: 'Tu voz ante el gobierno y organismos reguladores.',
    description: 'Actuamos como representantes legítimos del sector comercial ante el gobierno local, provincial y nacional, promoviendo políticas favorables para el desarrollo empresarial y defendiendo los derechos de nuestros afiliados.',
    benefits: ['Interlocución con el gobierno', 'Defensa de intereses sectoriales', 'Participación en políticas públicas', 'Asesoría jurídica empresarial'],
    color: 'from-slate-500 to-slate-700',
    bg: 'bg-slate-50',
    badge: null,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  const [sectionRef, inView] = useInView()
  const [selected, setSelected] = useState(null)

  return (
    <section id="servicios" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-navy text-xs tracking-widest uppercase px-4 mb-4 inline-block">Nuestros Servicios</span>
          <h2 className="section-title gradient-text-navy mb-4">
            Todo lo que necesitas para<br className="hidden sm:block" /> crecer como empresario
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios diseñados para impulsar la competitividad
            y el crecimiento de los negocios en Santo Domingo de los Tsáchilas.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              className="group card cursor-pointer relative overflow-hidden"
              onClick={() => setSelected(selected?.id === svc.id ? null : svc)}
              whileHover={{ y: -6 }}
            >
              {/* Badge */}
              {svc.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="badge bg-amber-400 text-amber-900 font-bold text-xs">{svc.badge}</span>
                </div>
              )}

              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${svc.color}`} />

              <div className="p-6">
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 ${svc.bg} rounded-2xl flex items-center justify-center text-2xl mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {svc.icon}
                </motion.div>

                {/* Category */}
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2 block">
                  {svc.category}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-200">
                  {svc.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.short}</p>

                {/* Expand indicator */}
                <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold">
                  <span>{selected?.id === svc.id ? 'Ver menos' : 'Ver más'}</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    animate={{ rotate: selected?.id === svc.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {selected?.id === svc.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-100 mt-4">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.description}</p>
                        <ul className="space-y-2">
                          {svc.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 relative overflow-hidden rounded-3xl"
          style={{ background: 'linear-gradient(135deg, #0d2659 0%, #1a3a8f 50%, #1e40af 100%)' }}
        >
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
          <div className="relative z-10 px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-2">
                ¿Listo para impulsar tu negocio?
              </h3>
              <p className="text-white/70">
                Únete a los +800 empresarios que confían en nosotros para crecer.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#afiliate"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#afiliate')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary px-7 py-3.5 font-bold whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Afiliarme Ahora
              </motion.a>
              <motion.a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary px-7 py-3.5 font-bold whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
              >
                Más Información
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
