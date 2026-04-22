const educations = [
  {
    degree: 'S1 Teknik Informatika',
    institution: 'Universitas Contoh',
    period: '2021 – 2025',
    gpa: '3.75 / 4.00',
    desc: 'Fokus pada rekayasa perangkat lunak, algoritma, dan sistem terdistribusi. Aktif di UKM Programming dan menjadi asisten lab pemrograman.',
    tags: ['Software Engineering', 'Algorithms', 'Distributed Systems'],
  },
  {
    degree: 'SMA IPA',
    institution: 'SMA Negeri Contoh',
    period: '2018 – 2021',
    gpa: null,
    desc: 'Lulus dengan predikat sangat memuaskan. Aktif dalam olimpiade matematika dan komputer tingkat kabupaten.',
    tags: ['Mathematics', 'Physics', 'Computer Basics'],
  },
]

export default function Education() {
  return (
    <section
      id="education"
      style={{ padding: '120px 24px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Geist, sans-serif' }}
    >
      <p style={{ fontSize: '0.72rem', color: '#3f3f46', letterSpacing: '0.1em', marginBottom: '64px' }}>
        Education
      </p>

      <div style={{ borderTop: '1px solid #141414' }}>
        {educations.map((edu, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
              gap: '32px',
              padding: '40px 0',
              borderBottom: '1px solid #141414',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0d0d0d'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {/* Left: period */}
            <div style={{ paddingTop: '2px' }}>
              <p style={{ fontSize: '0.75rem', color: '#3f3f46', fontWeight: 300 }}>{edu.period}</p>
              {edu.gpa && (
                <p style={{ fontSize: '0.72rem', color: '#27272a', marginTop: '6px' }}>GPA {edu.gpa}</p>
              )}
            </div>

            {/* Right: content */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, color: '#e4e4e7', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                {edu.degree}
              </h3>
              <p style={{ fontSize: '0.78rem', color: '#52525b', marginBottom: '16px', fontWeight: 300 }}>
                {edu.institution}
              </p>
              <p style={{ fontSize: '0.82rem', color: '#3f3f46', lineHeight: 1.85, marginBottom: '20px', fontWeight: 300 }}>
                {edu.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {edu.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontSize: '0.72rem', color: '#3f3f46', border: '1px solid #1a1a1a', padding: '4px 12px', fontWeight: 300 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}