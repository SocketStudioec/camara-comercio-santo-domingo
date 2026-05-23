import { motion } from 'framer-motion'
import { LOGO_URL } from '../utils/assets'

const footerLinks = {
  'Institución': [
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Historia', href: '#nosotros' },
    { label: 'Misión y Visión', href: '#nosotros' },
    { label: 'Directivos', href: '#nosotros' },
  ],
  'Servicios': [
    { label: 'Afiliación', href: '#afiliate' },
    { label: 'Capacitación', href: '#servicios' },
    { label: 'Comercio Exterior', href: '#servicios' },
    { label: 'Certificaciones', href: '#servicios' },
  ],
  'Empresa': [
    { label: 'Noticias', href: '#noticias' },
    { label: 'Eventos', href: '#noticias' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Afíliate', href: '#afiliate' },
  ],
}

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer
      className="relative overflow-hidden pt-20 pb-8"
      style={{ background: 'linear-gradient(180deg, #020c1a 0%, #01060f 100%)' }}
    >
      {/* BG decoration */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '35px 35px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-white/10">
                <img
                  src={LOGO_URL}
                  alt="Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-navy-DEFAULT font-black text-lg">CC</div>`
                  }}
                />
              </div>
              <div>
                <div className="text-white font-heading font-bold text-sm leading-tight">Cámara de Comercio</div>
                <div className="text-amber-400 font-semibold text-xs tracking-wider uppercase">Santo Domingo</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Representando y defendiendo los intereses empresariales de Santo Domingo
              de los Tsáchilas desde 1967.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.facebook.com/CamaraComerico.SantoDomingo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                whileHover={{ background: '#1877F2' }}
                title="Facebook"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://wa.me/593999273235"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                whileHover={{ background: '#25D366' }}
                title="WhatsApp"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-heading font-semibold mb-4 text-sm tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                      className="text-white/45 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Recibe nuestras noticias</h4>
              <p className="text-white/40 text-sm">Mantente informado de eventos y novedades</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl text-sm"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', outline: 'none' }}
              />
              <motion.button
                className="btn-primary px-5 py-2.5 text-sm font-bold whitespace-nowrap rounded-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Cámara de Comercio Santo Domingo, Ecuador. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <span>Desarrollado por</span>
            <a
              href="https://socket-studio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/70 hover:text-amber-400 transition-colors duration-200 font-semibold"
            >
              Socket Studio
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, #0d2659, #1a3a8f)', boxShadow: '0 4px 15px rgba(13,38,89,0.5)' }}
        whileHover={{ scale: 1.1, translateY: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Volver arriba"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </footer>
  )
}
