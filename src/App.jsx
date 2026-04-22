import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.closest('a')?.getAttribute('href')
      if (href?.startsWith('#')) {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer style={{ borderTop: '1px solid #141414', padding: '32px 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.75rem', color: '#333', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} YourName
        </p>
      </footer>
    </div>
  )
}

export default App