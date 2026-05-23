# Cámara de Comercio Santo Domingo — Sitio Web Oficial

Sitio web institucional desarrollado para la **Cámara de Comercio Santo Domingo**, Santo Domingo de los Tsáchilas, Ecuador.

## 🚀 Stack Tecnológico

- **React 18** — UI Framework
- **Vite 4** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Animaciones y transiciones
- **React Router DOM** — Navegación

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🌐 URLs

- **Producción:** https://socket-studio.com/demo-aplicaciones/camara-comercio-santo-domingo
- **GitHub:** https://github.com/SocketStudioec/camara-comercio-santo-domingo

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx       — Navegación responsive con animaciones
│   ├── Hero.jsx         — Sección principal full-screen con parallax
│   ├── About.jsx        — Historia, misión, visión y valores
│   ├── Services.jsx     — Servicios con cards expandibles
│   ├── Affiliate.jsx    — Planes de afiliación y proceso
│   ├── News.jsx         — Noticias y eventos
│   ├── Contact.jsx      — Formulario de contacto + WhatsApp
│   └── Footer.jsx       — Footer con newsletter
├── hooks/
│   └── useInView.js     — Hook IntersectionObserver
├── App.jsx
├── main.jsx
└── index.css            — Tailwind + design system
public/
└── images/
    └── logo.png
```

## 🎨 Design System

- **Colores:** Navy Blue #0D2659 (primario) + Amber #F59E0B (acento)
- **Tipografía:** Inter (UI) + Montserrat (headings) + Playfair Display (display)
- **Breakpoints:** 375px / 768px / 1024px / 1440px

## 📋 Secciones

1. **Hero** — Presentación institucional con estadísticas
2. **Nosotros** — Historia, misión, visión, valores, timeline
3. **Servicios** — Afiliación, capacitación, comercio exterior, certificaciones
4. **Afíliate** — Planes y proceso de afiliación
5. **Noticias** — Noticias y eventos recientes
6. **Contacto** — Formulario + WhatsApp + info de contacto

## 🚀 Deploy

```bash
npm run build
# Subir /dist al servidor via SFTP
# sftp palma@31.97.102.179:/var/www/html/socket-studio/demo-aplicaciones/camara-comercio-santo-domingo/
```

---

Desarrollado por **[Socket Studio](https://socket-studio.com)** · v2.3 · 2026
