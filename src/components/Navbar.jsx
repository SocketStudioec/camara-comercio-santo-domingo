import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LOGO_URL } from '../utils/assets'

const navLinks = [
  { label: 'Inicio',     href: '#inicio' },
  { label: 'Nosotros',   href: '#nosotros' },
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Afíliate',   href: '#afiliate' },
  { label: 'Noticias',   href: '#noticias' },
  { label: 'Contacto',   href: '#contacto' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeLink, setActive]   = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const go = (href) => {
    setActive(href); setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 76
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={scrolled ? {
          background: 'rgba(6,20,51,0.96)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
        } : {
          background: 'linear-gradient(180deg, rgba(3,13,31,0.7) 0%, transparent 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[76px]">

            {/* Logo */}
            <motion.a
              href="#inicio"
              onClick={e => { e.preventDefault(); go('#inicio') }}
              className="flex items-center gap-3.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0"
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                <img src={LOGO_URL} alt="Logo"
                  className="w-full h-full object-contain p-1.5"
                  onError={e => {
                    e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#0d2659;font-weight:900;font-size:13px;font-family:Montserrat,sans-serif">CC</div>`
                  }}
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-white font-heading font-bold text-sm leading-none tracking-wide">Cámara de Comercio</span>
                <span className="font-heading font-semibold text-[11px] tracking-[0.15em] uppercase mt-0.5" style={{ color: '#fcd34d' }}>
                  Santo Domingo
                </span>
              </div>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); go(link.href) }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                  style={{ color: activeLink === link.href ? '#fcd34d' : 'rgba(255,255,255,0.72)' }}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: '#f59e0b' }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://wa.me/593999273235"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 12px rgba(37,211,102,0.3)' }}
                whileHover={{ boxShadow: '0 6px 20px rgba(37,211,102,0.45)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </motion.a>

              <motion.a
                href="#afiliate"
                onClick={e => { e.preventDefault(); go('#afiliate') }}
                className="hidden lg:inline-flex btn-primary text-sm px-5 py-2.5 font-bold"
                whileHover={{ scale: 1.04 }}
              >
                Afiliarme
              </motion.a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                {[0,1,2].map(i => (
                  <motion.span
                    key={i}
                    className="block h-0.5 rounded-full bg-white"
                    style={{ width: i === 1 ? '12px' : '18px' }}
                    animate={menuOpen
                      ? i === 0 ? { rotate: 45,  y: 8,  width: '18px' }
                      : i === 1 ? { opacity: 0 }
                      : { rotate: -45, y: -8, width: '18px' }
                      : { rotate: 0, y: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.25 }}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: 'linear-gradient(160deg, #020c1a 0%, #0d2659 60%, #1a3a8f 100%)' }}
          >
            {/* Top bar clone */}
            <div className="h-[76px] flex items-center px-6">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                  <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain p-1.5" />
                </div>
                <div>
                  <div className="text-white font-heading font-bold text-sm">Cámara de Comercio</div>
                  <div className="font-heading text-[11px] tracking-widest uppercase" style={{ color: '#fcd34d' }}>Santo Domingo</div>
                </div>
              </div>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); go(link.href) }}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  className="px-5 py-4 rounded-2xl font-heading font-semibold text-xl transition-all duration-200"
                  style={{
                    color: activeLink === link.href ? '#fcd34d' : 'rgba(255,255,255,0.75)',
                    background: activeLink === link.href ? 'rgba(245,158,11,0.12)' : 'transparent',
                    border: activeLink === link.href ? '1px solid rgba(245,158,11,0.2)' : '1px solid transparent',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-6 pb-10 space-y-3">
              <a
                href="https://wa.me/593999273235"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-white"
                style={{ background: '#25D366', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="#afiliate"
                onClick={e => { e.preventDefault(); go('#afiliate') }}
                className="btn-primary w-full justify-center py-4 text-base font-bold"
              >
                Afiliarme Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
