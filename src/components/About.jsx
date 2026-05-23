import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const values = [
  {
    icon: '🤝',
    title: 'Representación',
    desc: 'Defendemos los intereses de los comerciantes y empresarios de Santo Domingo ante organismos públicos y privados.',
  },
  {
    icon: '📈',
    title: 'Competitividad',
    desc: 'Desarrollamos proyectos estratégicos que fortalecen la competitividad del sector comercial de la región.',
  },
  {
    icon: '🎓',
    title: 'Capacitación',
    desc: 'Formamos empresarios con programas de capacitación continua adaptados a las necesidades del mercado actual.',
  },
  {
    icon: '🌐',
    title: 'Comercio Exterior',
    desc: 'Promovemos la internacionalización de negocios locales con programas de comercio exterior para emprendedores.',
  },
]

const timeline = [
  { year: '1967', event: 'Fundación de la Cámara de Comercio Santo Domingo, año de la cantonización de la ciudad.' },
  { year: '1990s', event: 'Expansión de servicios y consolidación como referente gremial de la región.' },
  { year: '2000s', event: 'Implementación de programas de capacitación empresarial y alianzas estratégicas.' },
  { year: '2015+', event: 'Integración de comercio exterior y nuevas tecnologías para el desarrollo empresarial.' },
  { year: 'Hoy', event: 'Más de 800 empresas afiliadas y crecimiento continuo al servicio del comercio regional.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <span className="badge-navy text-xs tracking-widest uppercase px-4">Sobre Nosotros</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="section-title gradient-text-navy mb-4">
            Una Historia de Compromiso
          </motion.h2>
          <motion.div variants={itemVariants} className="divider-gold mx-auto mb-6" />
          <motion.p variants={itemVariants} className="section-subtitle max-w-2xl mx-auto">
            Desde 1967, la Cámara de Comercio Santo Domingo ha sido el pilar fundamental del desarrollo
            comercial y empresarial de Santo Domingo de los Tsáchilas, Ecuador.
          </motion.p>
        </motion.div>

        {/* Mission / Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {[
            {
              icon: '🎯',
              tag: 'Misión',
              color: 'from-blue-600 to-navy-DEFAULT',
              title: 'Nuestra Misión',
              text: 'Representar y defender los intereses de los comerciantes y empresarios de Santo Domingo de los Tsáchilas, desarrollando proyectos y programas que contribuyan al incremento de la competitividad comercial y al fortalecimiento del tejido empresarial de nuestra región.',
            },
            {
              icon: '🔭',
              tag: 'Visión',
              color: 'from-amber-500 to-amber-600',
              title: 'Nuestra Visión',
              text: 'Ser la institución gremial más influyente y reconocida de Santo Domingo de los Tsáchilas, propulsando el comercio formal, el crecimiento económico sostenible, la creación de empleos dignos y el fortalecimiento institucional del sector empresarial regional.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div
                className="relative overflow-hidden rounded-3xl p-8 text-white h-full"
                style={{ background: `linear-gradient(135deg, #0d2659, #1a3a8f)` }}
              >
                {/* BG decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                  style={{ background: 'radial-gradient(circle, white, transparent)' }} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-bold tracking-widest uppercase`}
                    style={{ background: i === 0 ? 'rgba(59,130,246,0.2)' : 'rgba(245,158,11,0.2)', color: i === 0 ? '#93c5fd' : '#fcd34d' }}>
                    {item.tag}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-heading font-bold text-2xl mb-4">{item.title}</h3>
                  <div className="w-10 h-0.5 bg-amber-400 rounded-full mb-4" />
                  <p className="text-white/75 leading-relaxed text-base">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="badge-gold text-xs tracking-widest uppercase px-4 mb-3 inline-block">Nuestros Valores</span>
            <h3 className="font-heading font-bold text-3xl gradient-text-navy">Lo que nos define</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={itemVariants}
                className="group card p-6 text-center hover:border-blue-100 border border-transparent"
              >
                <motion.div
                  className="text-4xl mb-4 inline-block"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {v.icon}
                </motion.div>
                <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                <motion.div
                  className="mt-4 h-0.5 w-0 bg-amber-400 mx-auto rounded-full group-hover:w-12 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative"
          style={{ background: 'linear-gradient(135deg, #0a1e4f, #0d2659, #112770)', borderRadius: '2rem', overflow: 'hidden' }}
        >
          {/* BG decoration */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 px-8 py-12 lg:px-16">
            <div className="text-center mb-10">
              <span className="badge-white text-xs tracking-widest uppercase px-4 mb-3 inline-block">Nuestra Historia</span>
              <h3 className="font-heading font-bold text-3xl text-white">Línea del Tiempo</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-px" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} pl-12 lg:pl-0`}
                  >
                    {/* Dot */}
                    <div className="absolute left-2.5 lg:left-1/2 w-3 h-3 bg-amber-400 rounded-full ring-4 ring-amber-400/20 -translate-x-1.5 mt-1.5" />

                    {/* Content */}
                    <div className={`lg:w-5/12 ${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="inline-flex items-center gap-2 mb-2">
                        <span className="text-amber-400 font-heading font-black text-xl">{item.year}</span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
