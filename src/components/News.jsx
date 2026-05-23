import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const news = [
  {
    id: 1,
    category: 'Capacitación',
    tag: 'Formación',
    tagColor: 'badge-navy',
    title: 'Inicio del Programa de Comercio Exterior para Emprendedores',
    excerpt: 'En alianza con la Universidad UTE, lanzamos el programa de Comercio Exterior para Emprendedores, brindando herramientas para la internacionalización de negocios locales.',
    date: '15 Mayo, 2026',
    readTime: '3 min',
    emoji: '🌐',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    category: 'Evento',
    tag: 'Feria',
    tagColor: 'badge-gold',
    title: 'Gran Feria Comercial Santo Domingo 2026',
    excerpt: 'Nuestra feria anual reunió a más de 200 expositores y miles de visitantes, consolidando el espacio más importante para el comercio regional de los Tsáchilas.',
    date: '28 Abril, 2026',
    readTime: '4 min',
    emoji: '🎪',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 3,
    category: 'Certificación',
    tag: 'SECAP',
    tagColor: 'badge-navy',
    title: 'Certificación por Competencias en Comercio y Ventas',
    excerpt: 'Junto al SECAP, iniciamos el programa de certificación oficial para trabajadores del sector comercial en perfiles como comerciante minorista y agente de ventas.',
    date: '10 Marzo, 2026',
    readTime: '2 min',
    emoji: '📋',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    category: 'Gremial',
    tag: 'Representación',
    tagColor: 'badge-white',
    title: 'Diálogo Empresarial con el Gobierno Provincial',
    excerpt: 'La Cámara de Comercio participó en mesas de trabajo con las autoridades provinciales para promover políticas de desarrollo comercial y económico en la región.',
    date: '5 Febrero, 2026',
    readTime: '3 min',
    emoji: '🤝',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    id: 5,
    category: 'Formación',
    tag: 'Capacitación',
    tagColor: 'badge-gold',
    title: 'Nuevos Cursos de Formación Continua para Afiliados',
    excerpt: 'Inscríbete en nuestros cursos de formación continua. Incursiona en campos de alta demanda como marketing digital, gestión financiera y liderazgo empresarial.',
    date: '20 Enero, 2026',
    readTime: '2 min',
    emoji: '🎓',
    gradient: 'from-rose-500 to-rose-700',
  },
  {
    id: 6,
    category: 'Logro',
    tag: 'Aniversario',
    tagColor: 'badge-gold',
    title: '57 Años Impulsando el Comercio de los Tsáchilas',
    excerpt: 'Celebramos nuestro aniversario 57 con una historia de logros, crecimiento y compromiso con los empresarios de Santo Domingo. ¡Cada logro de nuestro gremio es gratificante!',
    date: '7 Septiembre, 2025',
    readTime: '5 min',
    emoji: '🏆',
    gradient: 'from-amber-400 to-amber-600',
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

export default function News() {
  const [sectionRef, inView] = useInView()
  const featured = news[0]
  const rest = news.slice(1)

  return (
    <section id="noticias" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="badge-navy text-xs tracking-widest uppercase px-4 mb-4 inline-block">Noticias & Eventos</span>
            <h2 className="section-title gradient-text-navy">Lo más reciente</h2>
            <div className="divider-gold mt-4" />
          </div>
          <motion.a
            href="https://www.facebook.com/CamaraComerico.SantoDomingo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy px-6 py-3 text-sm font-semibold whitespace-nowrap flex items-center gap-2 rounded-xl"
            whileHover={{ scale: 1.03 }}
          >
            Ver en Facebook
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="group card mb-8 overflow-hidden cursor-pointer"
        >
          <div className="grid md:grid-cols-5 gap-0">
            {/* Visual */}
            <div
              className={`md:col-span-2 h-56 md:h-auto flex items-center justify-center bg-gradient-to-br ${featured.gradient} relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div
                className="text-7xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {featured.emoji}
              </motion.div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`badge ${featured.tagColor} text-xs font-bold`}>{featured.tag}</span>
                <span className="text-xs text-gray-400">Destacado</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                {featured.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {featured.date}
                  </span>
                  <span>{featured.readTime} de lectura</span>
                </div>
                <motion.span
                  className="flex items-center gap-1 text-sm font-semibold text-blue-600"
                  whileHover={{ x: 4 }}
                >
                  Leer más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of news grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rest.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group card cursor-pointer overflow-hidden"
            >
              {/* Top visual */}
              <div className={`h-36 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                <motion.div
                  className="text-5xl"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.emoji}
                </motion.div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge-navy text-xs font-bold">{item.tag}</span>
                </div>
                <h4 className="font-heading font-bold text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-900 transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">{item.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facebook CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-4">
            Sigue todas nuestras noticias y eventos en redes sociales
          </p>
          <motion.a
            href="https://www.facebook.com/CamaraComerico.SantoDomingo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#1877F2', boxShadow: '0 4px 15px rgba(24,119,242,0.35)' }}
            whileHover={{ boxShadow: '0 8px 25px rgba(24,119,242,0.5)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Síguenos en Facebook
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
