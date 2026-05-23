import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Affiliate from './components/Affiliate'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Affiliate />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
