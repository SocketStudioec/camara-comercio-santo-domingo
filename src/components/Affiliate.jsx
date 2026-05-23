import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const plans = [
  {
    name: 'Emprendedor',
    icon: '🌱',
    price: 'Consultar',
    period: 'mensual',
    desc: 'Ideal para pequeños negocios y emprendedores que dan sus primeros pasos.',
    features: [
      'Carnet de afiliado',
      'Acceso a red de contactos',
      'Boletín informativo mensual',
      'Participación en ferias',
      'Asesoría básica empresarial',
    ],
    cta: 'Consultar precio',
    highlighted: false,
    color: 'border-gray-200',
    tagColor: 'bg-gray-100 text-gray-600',
  },
  {
    name: 'Empresarial',
    icon: '🏢',
    price: 'Consultar',
    period: 'mensual',
    desc: 'La opción más completa para empresas establecidas que buscan crecer.',
    features: [
      'Todo lo de Emprendedor',
      'Descuentos en capacitaciones',
      'Representación gremial activa',
      'Acceso a convenios exclusivos',
      'Participación en ruedas de negocios',
      'Asesoría jurídica y tributaria',
      'Espacio en directorio empresarial',
    ],
    cta: 'Afiliarme ahora',
    highlighted: true,
    color: 'border-amber-400',
    tagColor: 'bg-amber-400 text-amber-900',
  },
  {
    name: 'Corporativo',
    icon: '🏆',
    price: 'Personalizado',
    period: 'anual',
    desc: 'Para grandes empresas con necesidades específicas de representación.',
    features: [
      'Todo lo de Empresarial',
      'Capacitaciones in-house',
      'Acceso preferencial a eventos',
      'Presencia en publicaciones',
      'Asesoría comercio exterior',
      'Contacto directo con directivos',
    ],
    cta: 'Contactar',
    highlighted: false,
    color: 'border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
  },
]

const steps = [
  { num: '01', title: 'Contáctanos', desc: 'Escríbenos por WhatsApp o visítanos en nuestras oficinas.' },
  { num: '02', title: 'Elige tu plan', desc: 'Selecciona la categoría de afiliación que mejor se adapte a tu negocio.' },
  { num: '03', title: 'Completa tu registro', desc: 'Llena el formulario de afiliación con los datos de tu empresa.' },
  { num: '04', title: 'Bienvenido', desc: 'Recibe tu carnet y empieza a disfrutar de todos los beneficios.' },
]

export default function Affiliate() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="afiliate" className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-navy text-xs tracking-widest uppercase px-4 mb-4 inline-block">Membresía</span>
          <h2 className="section-title gradient-text-navy mb-4">Afíliate a la Cámara</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Sé parte de la comunidad gremial más importante de Santo Domingo de los Tsáchilas.
            Accede a servicios exclusivos, capacitaciones y representación empresarial.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl border-2 ${plan.color} ${
                plan.highlighted
                  ? 'shadow-2xl shadow-amber-200/50 scale-[1.02]'
                  : 'shadow-card hover:shadow-card-hover'
              } transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500" />
              )}
              {plan.highlighted && (
                <div className="absolute top-4 right-4">
                  <span className="badge bg-amber-400 text-amber-900 font-bold text-xs px-3 py-1">Recomendado</span>
                </div>
              )}

              <div className="p-8">
                <div className="text-4xl mb-3">{plan.icon}</div>
                <div>
                  <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${plan.tagColor}`}>
                    {plan.name}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-3 mb-6 leading-relaxed">{plan.desc}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-amber-500' : 'text-emerald-500'}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? 'btn-primary w-full'
                      : 'btn-outline w-full border-2 border-navy-DEFAULT text-navy-DEFAULT hover:bg-navy-DEFAULT hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How to affiliate - Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl py-14 px-8 lg:px-16"
          style={{ background: 'linear-gradient(135deg, #0a1e4f 0%, #0d2659 50%, #1a3a8f 100%)' }}
        >
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="badge-white text-xs tracking-widest uppercase px-4 mb-3 inline-block">Proceso Simple</span>
              <h3 className="font-heading font-bold text-3xl text-white">¿Cómo afiliarme?</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="relative text-center"
                >
                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-white/15" />
                  )}

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center font-heading font-black text-sm"
                      style={{ background: i === 0 ? 'rgba(245,158,11,0.9)' : 'rgba(255,255,255,0.1)', color: i === 0 ? '#0d2659' : 'white', border: '1px solid rgba(255,255,255,0.15)' }}>
                      {step.num}
                    </div>
                    <h4 className="font-heading font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <motion.a
                href="https://wa.me/593999273235?text=Hola,%20me%20interesa%20afiliarme%20a%20la%20Cámara%20de%20Comercio%20Santo%20Domingo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-base font-bold inline-flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Iniciar Afiliación por WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
