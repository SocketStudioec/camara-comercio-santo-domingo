import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { LOGO_URL } from '../utils/assets'

const stats = [
  { number: '+800', label: 'Empresas Afiliadas' },
  { number: '57', label: 'Años de Trayectoria' },
  { number: '+200', label: 'Eventos al Año' },
  { number: '1967', label: 'Año de Fundación' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background Photo ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=85&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(3,13,31,0.82) 0%, rgba(13,38,89,0.75) 40%, rgba(6,20,51,0.92) 100%)' }} />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(26,58,143,0.25) 0%, transparent 70%)' }} />
      </motion.div>

      {/* ── Grain texture overlay ── */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")", mixBlendMode: 'overlay' }} />

      {/* ── Content ── */}
      <motion.div style={{ opacity }} className="relative z-10 flex-1 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left – Headline */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-10" style={{ background: '#f59e0b' }} />
                <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: '#fcd34d' }}>
                  Santo Domingo de los Tsáchilas · Ecuador
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-heading leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 900 }}
              >
                Representamos<br />
                al{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #fcd34d 50%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Comercio
                </span>
                <br />
                Regional
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-lg leading-relaxed mb-10 max-w-xl"
                style={{ color: 'rgba(255,255,255,0.68)' }}
              >
                Desde 1967, la <strong className="text-white font-semibold">Cámara de Comercio Santo Domingo</strong> defiende
                los intereses de más de <strong style={{ color: '#fcd34d' }}>800 empresas afiliadas</strong> y fortalece
                el tejido empresarial de los Tsáchilas.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62, duration: 0.6 }}
                className="flex flex-wrap gap-4 mb-14"
              >
                <motion.a
                  href="#afiliate"
                  onClick={e => { e.preventDefault(); document.querySelector('#afiliate')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-primary font-bold text-base px-8 py-4"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Afiliarme Ahora
                </motion.a>
                <motion.a
                  href="#nosotros"
                  onClick={e => { e.preventDefault(); document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-secondary font-semibold text-base px-8 py-4"
                  whileHover={{ scale: 1.04 }}
                >
                  Conocer más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap items-center gap-5"
              >
                {['Gremio oficial Ecuador', 'SECAP certificado', 'Alianza UTE'].map((t, i) => (
                  <div key={t} className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#fbbf24' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium tracking-wide">{t}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right – Logo emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{ background: 'radial-gradient(circle, #1a3a8f 0%, #f59e0b 50%, transparent 80%)', transform: 'scale(1.3)' }} />

                {/* Ring decoration */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: '1px solid rgba(245,158,11,0.2)', transform: 'scale(1.12)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                >
                  {[0, 120, 240].map(deg => (
                    <div key={deg} className="absolute w-2 h-2 rounded-full" style={{
                      background: '#f59e0b',
                      top: '50%', left: '50%',
                      transform: `rotate(${deg}deg) translateX(calc(50% + 20px)) translateY(-50%)`,
                      boxShadow: '0 0 8px #f59e0b'
                    }} />
                  ))}
                </motion.div>

                {/* Logo container */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                  style={{
                    width: 'clamp(220px, 28vw, 320px)',
                    height: 'clamp(220px, 28vw, 320px)',
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                      border: '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,158,11,0.1)',
                    }}
                  >
                    <img
                      src={LOGO_URL}
                      alt="Cámara de Comercio Santo Domingo"
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ── Stats bar ── */}
      <div className="relative z-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(24px)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x" style={{ divideColor: 'rgba(255,255,255,0.08)' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.08 }}
                className="py-6 px-6 lg:px-8 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <div className="font-heading font-black text-2xl lg:text-3xl mb-0.5" style={{ color: '#fcd34d' }}>
                  {s.number}
                </div>
                <div className="text-xs font-medium tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
