import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const pillars = [
  { icon: '⚖️', title: 'Representación', desc: 'Voz oficial del sector comercial ante organismos públicos y privados.' },
  { icon: '📈', title: 'Competitividad', desc: 'Proyectos estratégicos que fortalecen el ecosistema empresarial regional.' },
  { icon: '🎓', title: 'Formación', desc: 'Programas de capacitación continua para empresarios y emprendedores.' },
  { icon: '🌐', title: 'Internacionalización', desc: 'Programas de comercio exterior para llevar negocios al mundo.' },
]

const milestones = [
  { year: '1967', text: 'Fundación en el año de la cantonización de Santo Domingo' },
  { year: '1990', text: 'Consolidación como referente gremial de los Tsáchilas' },
  { year: '2005', text: 'Implementación de programas de capacitación empresarial' },
  { year: '2015', text: 'Alianzas con UTE y SECAP para formación especializada' },
  { year: 'Hoy',  text: '+800 empresas afiliadas impulsando el comercio regional' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="nosotros" className="bg-white overflow-hidden">

      {/* ── Part 1: Intro split ── */}
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden"
          style={{ minHeight: '500px' }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85&auto=format&fit=crop"
            alt="Profesionales de negocios"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          {/* Gradient over photo */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(13,38,89,0) 50%, rgba(13,38,89,0.15) 100%)' }} />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(0deg, rgba(13,38,89,0.6) 0%, transparent 40%)' }} />

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-8"
            style={{
              background: 'rgba(13,38,89,0.92)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '1rem',
              padding: '1.25rem 1.75rem',
            }}
          >
            <div className="font-heading font-black text-4xl" style={{ color: '#fcd34d' }}>57+</div>
            <div className="text-white text-sm font-medium mt-0.5">Años sirviendo al comercio</div>
            <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Fundada en 1967</div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center px-10 lg:px-16 py-16"
          style={{ background: '#f9fafb' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#f59e0b' }} />
            <span className="text-xs tracking-[0.18em] uppercase font-semibold" style={{ color: '#0d2659' }}>
              Sobre Nosotros
            </span>
          </div>

          <h2 className="font-heading font-black leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0d2659' }}>
            Una institución al servicio del<br />
            <span style={{ color: '#1a3a8f' }}>desarrollo empresarial</span>
          </h2>

          <div className="w-12 h-1 rounded-full mb-6" style={{ background: 'linear-gradient(90deg,#f59e0b,#fcd34d)' }} />

          <p className="text-base leading-relaxed mb-5" style={{ color: '#4b5563' }}>
            La <strong style={{ color: '#0d2659' }}>Cámara de Comercio Santo Domingo</strong> fue creada el
            7 de septiembre de 1967, año de la cantonización de nuestra ciudad.
            Somos la voz oficial del sector comercial de Santo Domingo de los Tsáchilas.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#6b7280' }}>
            Representamos y defendemos los intereses de más de 800 empresas afiliadas,
            desarrollando proyectos que incrementan la competitividad y el desarrollo económico
            sostenible de nuestra región.
          </p>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { n: '+800', l: 'Afiliados' },
              { n: '57+',  l: 'Años' },
              { n: '+200', l: 'Eventos/año' },
            ].map(s => (
              <div key={s.l} className="text-center py-4 rounded-xl" style={{ background: 'white', boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}>
                <div className="font-heading font-black text-2xl" style={{ color: '#0d2659' }}>{s.n}</div>
                <div className="text-xs font-medium mt-0.5" style={{ color: '#9ca3af' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Part 2: Mission / Vision ── */}
      <div className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #030d1f 0%, #0d2659 55%, #1a3a8f 100%)' }}
      >
        {/* BG photo overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=60&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        {/* Dot grid */}
        <div className="absolute inset-0 z-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                tag: 'Misión',
                icon: '🎯',
                title: 'Lo que hacemos',
                text: 'Representar y defender los intereses de los comerciantes y empresarios de Santo Domingo de los Tsáchilas, desarrollando proyectos que contribuyan al incremento de la competitividad comercial y al fortalecimiento del tejido empresarial regional.',
                accent: '#3b82f6',
              },
              {
                tag: 'Visión',
                icon: '🔭',
                title: 'Hacia dónde vamos',
                text: 'Ser la institución gremial más influyente de Santo Domingo de los Tsáchilas, propulsando el comercio formal, el crecimiento económico sostenible, la creación de empleos y el fortalecimiento institucional del sector empresarial.',
                accent: '#f59e0b',
              },
            ].map((item, i) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
                className="p-8 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                    style={{ background: `${item.accent}22`, color: item.accent, border: `1px solid ${item.accent}44` }}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{item.title}</h3>
                <div className="w-8 h-0.5 rounded-full mb-4" style={{ background: item.accent }} />
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Part 3: Pillars + Timeline ── */}
      <div className="py-20 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Pillars */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: '#f59e0b' }} />
            <span className="text-xs tracking-[0.18em] uppercase font-semibold" style={{ color: '#0d2659' }}>Nuestros Valores</span>
            <div className="h-px w-8" style={{ background: '#f59e0b' }} />
          </div>
          <h3 className="font-heading font-black text-3xl" style={{ color: '#0d2659' }}>Lo que nos define</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="group text-center p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'white', border: '1px solid #f3f4f6', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              whileHover={{ boxShadow: '0 12px 40px rgba(13,38,89,0.1)' }}
            >
              <motion.div
                className="text-4xl mb-4 inline-block"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >{p.icon}</motion.div>
              <h4 className="font-heading font-bold text-lg mb-2" style={{ color: '#0d2659' }}>{p.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{p.desc}</p>
              <div className="mt-4 h-0.5 w-0 group-hover:w-10 mx-auto rounded-full transition-all duration-500"
                style={{ background: '#f59e0b' }} />
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-8" style={{ background: '#f59e0b' }} />
            <span className="text-xs tracking-[0.18em] uppercase font-semibold" style={{ color: '#0d2659' }}>Historia</span>
            <div className="h-px w-8" style={{ background: '#f59e0b' }} />
          </div>

          <div className="relative">
            {/* Line */}
            <div className="hidden lg:block absolute top-5 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #e5e7eb 10%, #e5e7eb 90%, transparent)' }} />

            <div className="grid lg:grid-cols-5 gap-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative text-center"
                >
                  {/* Dot */}
                  <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center relative z-10"
                    style={{
                      background: i === milestones.length - 1 ? 'linear-gradient(135deg,#f59e0b,#fbbf24)' : 'white',
                      border: `2px solid ${i === milestones.length - 1 ? '#f59e0b' : '#e5e7eb'}`,
                      boxShadow: i === milestones.length - 1 ? '0 4px 15px rgba(245,158,11,0.4)' : 'none'
                    }}
                  >
                    <span className="font-heading font-black text-xs"
                      style={{ color: i === milestones.length - 1 ? '#0d2659' : '#9ca3af' }}>
                      {i === milestones.length - 1 ? '★' : '●'}
                    </span>
                  </div>
                  <div className="font-heading font-black text-xl mb-2" style={{ color: '#0d2659' }}>{m.year}</div>
                  <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>{m.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
