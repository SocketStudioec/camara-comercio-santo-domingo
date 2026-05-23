import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { LOGO_URL } from '../utils/assets'

const steps = [
  { num: '01', icon: '💬', title: 'Contáctanos', desc: 'Escríbenos por WhatsApp o visítanos en Calle Latacunga #712.' },
  { num: '02', icon: '📝', title: 'Registro', desc: 'Completa el formulario de afiliación con los datos de tu empresa.' },
  { num: '03', icon: '✅', title: 'Aprobación', desc: 'Tu solicitud es revisada y aprobada por el equipo directivo.' },
  { num: '04', icon: '🎉', title: 'Bienvenido', desc: 'Recibe tu carnet y accede a todos los beneficios desde el primer día.' },
]

const benefits = [
  { icon: '🤝', text: 'Representación ante organismos públicos y privados' },
  { icon: '📚', text: 'Acceso a cursos de capacitación con descuento' },
  { icon: '🌐', text: 'Red de contactos con +800 empresas afiliadas' },
  { icon: '📋', text: 'Asesoría jurídica y tributaria especializada' },
  { icon: '🎪', text: 'Participación preferencial en ferias y eventos' },
  { icon: '🏆', text: 'Directorio empresarial y visibilidad digital' },
  { icon: '🌍', text: 'Programas de comercio exterior e internacionalización' },
  { icon: '🎓', text: 'Certificaciones SECAP a precio preferencial' },
]

export default function Affiliate() {
  const [ref, inView] = useInView()

  return (
    <section id="afiliate" className="overflow-hidden">

      {/* ── Top: Benefits + Photo ── */}
      <div className="grid lg:grid-cols-2 min-h-[580px]">

        {/* Benefits side */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="flex flex-col justify-center px-10 lg:px-16 py-16"
          style={{ background: '#f8fafc' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: '#f59e0b' }} />
            <span className="text-xs tracking-[0.18em] uppercase font-semibold" style={{ color: '#0d2659' }}>Membresía</span>
          </div>

          <h2 className="font-heading font-black leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#0d2659' }}>
            Beneficios que impulsan<br />tu negocio
          </h2>
          <div className="w-10 h-1 rounded-full mb-6" style={{ background: 'linear-gradient(90deg,#f59e0b,#fcd34d)' }} />

          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
                className="flex items-start gap-3 p-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'white', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{b.icon}</span>
                <span className="text-sm leading-snug" style={{ color: '#374151' }}>{b.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="relative overflow-hidden"
          style={{ minHeight: '480px' }}
        >
          <img
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=900&q=85&auto=format&fit=crop"
            alt="Empresarios exitosos"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(13,38,89,0.75) 100%)' }} />

          {/* Overlay card */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="p-6 rounded-2xl"
              style={{
                background: 'rgba(13,38,89,0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-white font-heading font-bold text-sm">Cámara de Comercio</div>
                  <div className="text-xs" style={{ color: '#fcd34d' }}>Santo Domingo · Ecuador</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Sé parte del gremio empresarial más importante de los Tsáchilas y lleva tu negocio al siguiente nivel.
              </p>
              <a
                href="https://wa.me/593999273235?text=Hola,%20me%20interesa%20afiliarme%20a%20la%20Cámara%20de%20Comercio%20Santo%20Domingo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center font-bold py-3 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Iniciar Afiliación por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Process Steps ── */}
      <div className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #020d1f 0%, #0d2659 55%, #1a3a8f 100%)' }}
      >
        {/* BG texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: '#f59e0b' }} />
              <span className="text-xs tracking-[0.18em] uppercase font-semibold" style={{ color: '#fcd34d' }}>Proceso Simple</span>
              <div className="h-px w-8" style={{ background: '#f59e0b' }} />
            </div>
            <h3 className="font-heading font-black text-white text-3xl">¿Cómo afiliarme?</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="relative text-center p-7 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 left-full w-6 h-px z-10"
                    style={{ background: 'rgba(255,255,255,0.15)' }} />
                )}

                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl"
                  style={{
                    background: i === 0 ? 'linear-gradient(135deg,#f59e0b,#fbbf24)' : 'rgba(255,255,255,0.08)',
                    boxShadow: i === 0 ? '0 8px 20px rgba(245,158,11,0.4)' : 'none',
                  }}>
                  {step.icon}
                </div>

                <div className="font-heading font-black text-xs mb-1" style={{ color: i === 0 ? '#fcd34d' : 'rgba(255,255,255,0.3)' }}>
                  Paso {step.num}
                </div>
                <h4 className="font-heading font-bold text-white text-base mb-2">{step.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
