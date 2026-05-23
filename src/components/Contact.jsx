import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const contactInfo = [
  {
    icon: '📍',
    title: 'Dirección',
    lines: ['Calle Latacunga # 712', 'entre 29 de Mayo y 3 de Julio', 'Santo Domingo de los Tsáchilas, Ecuador'],
  },
  {
    icon: '📱',
    title: 'WhatsApp / Teléfono',
    lines: ['+593 99 927 3235'],
    link: 'https://wa.me/593999273235',
    linkText: 'Enviar mensaje',
  },
  {
    icon: '🌐',
    title: 'Redes Sociales',
    lines: ['@CamaraComerico.SantoDomingo'],
    link: 'https://www.facebook.com/CamaraComerico.SantoDomingo',
    linkText: 'Ver en Facebook',
  },
  {
    icon: '🕐',
    title: 'Horario de Atención',
    lines: ['Lunes a Viernes', '8:00 AM - 5:00 PM', 'Sábados: 8:00 AM - 12:00 PM'],
  },
]

const subjects = [
  'Información sobre afiliación',
  'Cursos y capacitaciones',
  'Eventos y ferias',
  'Comercio exterior',
  'Certificaciones SECAP',
  'Representación gremial',
  'Otro',
]

export default function Contact() {
  const [sectionRef, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const isValid = {
    name: form.name.trim().length >= 3,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    message: form.message.trim().length >= 10,
  }

  const formIsValid = isValid.name && isValid.email && isValid.message

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formIsValid) {
      setTouched({ name: true, email: true, message: true })
      return
    }
    setStatus('sending')

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTouched({})

    // Open WhatsApp as fallback contact
    const msg = encodeURIComponent(
      `Hola, soy ${form.name}. ${form.subject ? `Consulta sobre: ${form.subject}. ` : ''}${form.message}`
    )
    setTimeout(() => {
      window.open(`https://wa.me/593999273235?text=${msg}`, '_blank')
      setStatus(null)
    }, 2000)
  }

  return (
    <section id="contacto" className="py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #020c1a 0%, #0a1e4f 50%, #0d2659 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-white text-xs tracking-widest uppercase px-4 mb-4 inline-block">Contáctanos</span>
          <h2 className="section-title text-white mb-4">
            Estamos aquí para <span className="gradient-text-gold">ayudarte</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            ¿Tienes dudas sobre afiliación, capacitaciones o nuestros servicios?
            Contáctanos y te responderemos a la brevedad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="card-glass p-6 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-white/60 text-sm leading-relaxed">{line}</p>
                    ))}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors duration-200"
                      >
                        {item.linkText}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="card-glass rounded-2xl overflow-hidden"
            >
              <a
                href="https://maps.google.com/?q=Calle+Latacunga+712+Santo+Domingo+Ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-48 group"
              >
                <div
                  className="w-full h-full flex items-center justify-center relative"
                  style={{ background: 'linear-gradient(135deg, rgba(13,38,89,0.8), rgba(26,58,143,0.6))' }}
                >
                  <div className="text-center text-white">
                    <span className="text-5xl block mb-2">🗺️</span>
                    <p className="font-semibold text-sm">Ver en Google Maps</p>
                    <p className="text-white/50 text-xs mt-1">Calle Latacunga #712</p>
                  </div>
                  <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/5 transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/0 group-hover:text-white/60 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="card-glass rounded-3xl p-8">
              <h3 className="font-heading font-bold text-white text-2xl mb-2">Envíanos un mensaje</h3>
              <p className="text-white/50 text-sm mb-6">Te responderemos en menos de 24 horas hábiles.</p>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                      className="text-7xl mb-4"
                    >
                      ✅
                    </motion.div>
                    <h4 className="text-white font-bold text-xl mb-2">¡Mensaje enviado!</h4>
                    <p className="text-white/60 text-sm">
                      Abriendo WhatsApp para continuar la conversación...
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Tu nombre completo"
                          className={`input-dark ${touched.name && !isValid.name ? 'border-red-500/70 ring-1 ring-red-500/30' : ''}`}
                        />
                        {touched.name && !isValid.name && (
                          <p className="text-red-400 text-xs mt-1">Mínimo 3 caracteres</p>
                        )}
                      </div>
                      <div>
                        <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="tu@email.com"
                          className={`input-dark ${touched.email && !isValid.email ? 'border-red-500/70 ring-1 ring-red-500/30' : ''}`}
                        />
                        {touched.email && !isValid.email && (
                          <p className="text-red-400 text-xs mt-1">Email inválido</p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                          Teléfono (opcional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+593 9X XXX XXXX"
                          className="input-dark"
                        />
                      </div>
                      <div>
                        <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                          Asunto
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="input-dark"
                          style={{ background: 'rgba(255,255,255,0.08)' }}
                        >
                          <option value="">Selecciona un tema</option>
                          {subjects.map((s) => (
                            <option key={s} value={s} style={{ background: '#0d2659' }}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5 block">
                        Mensaje *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Escribe tu consulta aquí..."
                        rows={4}
                        className={`input-dark resize-none ${touched.message && !isValid.message ? 'border-red-500/70' : ''}`}
                      />
                      {touched.message && !isValid.message && (
                        <p className="text-red-400 text-xs mt-1">Mínimo 10 caracteres</p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full py-4 text-base font-bold rounded-xl"
                      whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                    >
                      {status === 'sending' ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Enviar Mensaje
                        </span>
                      )}
                    </motion.button>

                    {/* WhatsApp direct */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-transparent px-4 text-white/30 text-xs">o contactar directamente</span>
                      </div>
                    </div>

                    <motion.a
                      href="https://wa.me/593999273235?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20Cámara%20de%20Comercio%20Santo%20Domingo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1"
                      style={{ background: '#25D366', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
                      whileHover={{ boxShadow: '0 8px 25px rgba(37,211,102,0.5)' }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Escribir por WhatsApp
                    </motion.a>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
