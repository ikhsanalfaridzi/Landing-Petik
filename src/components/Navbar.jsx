import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Contact',   href: '#contact' },
]

const s = {
  nav: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    fontFamily: 'Geist, sans-serif',
    transition: 'all 0.4s ease',
    backgroundColor: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid #141414' : '1px solid transparent',
    padding: scrolled ? '16px 0' : '28px 0',
  }),
  inner: { maxWidth: '1000px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  logo: { fontSize: '0.9rem', fontWeight: 500, color: '#e4e4e7', letterSpacing: '-0.02em', textDecoration: 'none' },
  ul: { display: 'flex', alignItems: 'center', gap: '40px', listStyle: 'none' },
  link: { fontSize: '0.8rem', fontWeight: 400, color: '#52525b', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.01em' },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={s.nav(scrolled)}>
      <div style={s.inner}>
        <a href="#" style={s.logo}>YourName</a>

        {/* Desktop */}
        <ul className="hidden md:flex" style={s.ul}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={s.link}
                onMouseEnter={e => e.currentTarget.style.color = '#e4e4e7'}
                onMouseLeave={e => e.currentTarget.style.color = '#52525b'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: '18px', height: '1px', backgroundColor: '#71717a',
                transition: 'all 0.3s',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                          : menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                          : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #141414', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ ...s.link, fontSize: '0.85rem' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}