import { useState } from 'react'

const socials = [
  { label: 'GitHub',   href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Email',    href: 'mailto:youremail@example.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const baseInput = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #1a1a1a',
    color: '#a1a1aa',
    fontFamily: 'Geist, sans-serif',
    fontSize: '0.82rem',
    fontWeight: 300,
    padding: '10px 0',
    outline: 'none',
    transition: 'border-color 0.25s',
  }

  return (
    <section
      id="contact"
      style={{ padding: '120px 24px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Geist, sans-serif' }}
    >
      <p style={{ fontSize: '0.72rem', color: '#3f3f46', letterSpacing: '0.1em', marginBottom: '64px' }}>
        Contact
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px' }}>
        {/* Left */}
        <div>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 300,
            color: '#e4e4e7',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}>
            Let's build<br />something great.
          </h2>
          <p style={{ fontSize: '0.82rem', color: '#3f3f46', lineHeight: 1.85, marginBottom: '48px', fontWeight: 300 }}>
            Punya project atau ide menarik?<br />Gue terbuka untuk kolaborasi.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.78rem', color: '#3f3f46', textDecoration: 'none', fontWeight: 300, letterSpacing: '0.02em', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '12px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#a1a1aa'}
                onMouseLeave={e => e.currentTarget.style.color = '#3f3f46'}
              >
                <span style={{ display: 'block', width: '24px', height: '1px', backgroundColor: 'currentColor', flexShrink: 0 }} />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        {sent ? (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#e4e4e7', letterSpacing: '-0.01em' }}>Pesan terkirim.</p>
            <p style={{ fontSize: '0.78rem', color: '#3f3f46', fontWeight: 300 }}>Gue akan segera membalas.</p>
            <button
              onClick={() => setSent(false)}
              style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.78rem', color: '#3f3f46', cursor: 'pointer', textAlign: 'left', marginTop: '16px', fontFamily: 'Geist, sans-serif', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a1a1aa'}
              onMouseLeave={e => e.currentTarget.style.color = '#3f3f46'}
            >
              Kirim lagi →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { name: 'name',  label: 'Nama',  type: 'text',  placeholder: 'John Doe' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
            ].map((field) => (
              <div key={field.name}>
                <label style={{ display: 'block', fontSize: '0.68rem', color: '#27272a', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  {field.label.toUpperCase()}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  style={baseInput}
                  onFocus={e => e.target.style.borderBottomColor = '#52525b'}
                  onBlur={e => e.target.style.borderBottomColor = '#1a1a1a'}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', color: '#27272a', letterSpacing: '0.08em', marginBottom: '10px' }}>
                PESAN
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Ceritain project atau ide kamu..."
                required
                rows={5}
                style={{ ...baseInput, resize: 'none' }}
                onFocus={e => e.target.style.borderBottomColor = '#52525b'}
                onBlur={e => e.target.style.borderBottomColor = '#1a1a1a'}
              />
            </div>
            <button
              type="submit"
              style={{
                alignSelf: 'flex-start',
                fontFamily: 'Geist, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 400,
                color: '#e4e4e7',
                backgroundColor: 'transparent',
                border: '1px solid #27272a',
                padding: '10px 28px',
                cursor: 'pointer',
                letterSpacing: '0.02em',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#141414'; e.currentTarget.style.borderColor = '#52525b' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#27272a' }}
            >
              Kirim Pesan
            </button>
          </form>
        )}
      </div>
    </section>
  )
}