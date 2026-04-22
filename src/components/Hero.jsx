import { useState, useEffect } from 'react'

const roles = ['Full Stack Developer', 'Backend Engineer', 'API Architect', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 24px',
        fontFamily: 'Geist, sans-serif',
        position: 'relative',
      }}
    >
      {/* Subtle top label */}
      <p
        className="animate-fade-up animation-fill-both animation-delay-100"
        style={{ fontSize: '0.72rem', color: '#3f3f46', letterSpacing: '0.1em', marginBottom: '48px' }}
      >
        Available for work
      </p>

      {/* Name */}
      <h1
        className="animate-fade-up animation-fill-both animation-delay-200"
        style={{
          fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          fontWeight: 300,
          color: '#e4e4e7',
          lineHeight: 1.0,
          letterSpacing: '-0.04em',
          marginBottom: '24px',
        }}
      >
        YourName
      </h1>

      {/* Role typewriter */}
      <div
        className="animate-fade-up animation-fill-both animation-delay-300"
        style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', minHeight: '28px' }}
      >
        <span style={{ fontSize: '0.95rem', fontWeight: 300, color: '#52525b' }}>
          {displayed}
          <span
            className="animate-blink"
            style={{ display: 'inline-block', width: '1.5px', height: '0.9em', backgroundColor: '#52525b', marginLeft: '2px', verticalAlign: 'middle' }}
          />
        </span>
      </div>

      {/* Desc */}
      <p
        className="animate-fade-up animation-fill-both animation-delay-400"
        style={{
          fontSize: '0.875rem',
          color: '#3f3f46',
          lineHeight: 1.9,
          maxWidth: '480px',
          marginBottom: '56px',
          fontWeight: 300,
        }}
      >
        Membangun sistem yang scalable, API yang bersih,
        dan solusi end-to-end yang efisien.
      </p>

      {/* CTA */}
      <div
        className="animate-fade-up animation-fill-both animation-delay-500"
        style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}
      >
        <a
          href="#projects"
          style={{
            fontSize: '0.78rem',
            fontWeight: 500,
            color: '#e4e4e7',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            padding: '10px 24px',
            border: '1px solid #27272a',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#52525b'
            e.currentTarget.style.backgroundColor = '#141414'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#27272a'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          View Projects
        </a>
        <a
          href="#contact"
          style={{
            fontSize: '0.78rem',
            fontWeight: 400,
            color: '#52525b',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#a1a1aa'}
          onMouseLeave={e => e.currentTarget.style.color = '#52525b'}
        >
          Contact me →
        </a>
      </div>

      {/* Bottom scroll indicator */}
      <div style={{ position: 'absolute', bottom: '40px', left: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.3 }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, #52525b, transparent)' }} />
      </div>
    </section>
  )
}