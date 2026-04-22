// Taruh foto kamu di folder public/ dengan nama photo.jpg
const PHOTO_SRC = '/photo.jpg'

const stats = [
  { val: '2+',  label: 'Years Experience' },
  { val: '15+', label: 'Projects Built' },
  { val: '5+',  label: 'Tech Stacks' },
  { val: '∞',   label: 'Curiosity' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 24px',
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: 'Geist, sans-serif',
      }}
    >
      {/* Label */}
      <p style={{ fontSize: '0.72rem', color: '#3f3f46', letterSpacing: '0.1em', marginBottom: '64px' }}>
        About
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px', alignItems: 'start' }}>

        {/* Foto */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              maxWidth: '300px',
              overflow: 'hidden',
              backgroundColor: '#111',
            }}
          >
            <img
              src={PHOTO_SRC}
              alt="Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'grayscale(100%) brightness(0.85)',
                transition: 'filter 0.6s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%) brightness(1)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%) brightness(0.85)'}
              onError={e => {
                e.currentTarget.parentElement.style.backgroundColor = '#111'
                e.currentTarget.style.display = 'none'
                // Show placeholder text
                const ph = document.createElement('div')
                ph.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;color:#27272a;font-size:0.75rem;letter-spacing:0.1em;'
                ph.textContent = 'photo.jpg'
                e.currentTarget.parentElement.appendChild(ph)
              }}
            />
          </div>

          {/* Stats grid di bawah foto */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              maxWidth: '300px',
              marginTop: '1px',
              borderLeft: '1px solid #141414',
              borderTop: '1px solid #141414',
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: '16px',
                  borderRight: '1px solid #141414',
                  borderBottom: '1px solid #141414',
                }}
              >
                <div style={{ fontSize: '1.4rem', fontWeight: 300, color: '#e4e4e7', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {s.val}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#3f3f46', marginTop: '4px', letterSpacing: '0.05em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '8px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 300,
            color: '#e4e4e7',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
          }}>
            Full Stack<br />Developer
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              <>Hai, gue <span style={{ color: '#a1a1aa' }}>YourName</span> — developer yang passionate bikin aplikasi web end-to-end, dari arsitektur backend sampai UI yang clean.</>,
              <>Fokus di <span style={{ color: '#a1a1aa' }}>REST API</span>, sistem scalable, dan kode yang maintainable jangka panjang.</>,
              <>Di luar coding, gue suka explore teknologi baru dan baca dokumentasi (iya, serius).</>,
            ].map((text, i) => (
              <p key={i} style={{ fontSize: '0.85rem', color: '#52525b', lineHeight: 1.85, fontWeight: 300 }}>
                {text}
              </p>
            ))}
          </div>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.78rem',
              color: '#52525b',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              marginTop: '8px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#a1a1aa'}
            onMouseLeave={e => e.currentTarget.style.color = '#52525b'}
          >
            Download CV <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}