const projects = [
  {
    no: '01',
    title: 'E-Commerce API',
    year: '2024',
    desc: 'REST API full-featured untuk platform e-commerce: auth JWT, payment gateway, inventory management, dan order tracking.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/yourusername/ecommerce-api',
    demo: null,
  },
  {
    no: '02',
    title: 'Task Management App',
    year: '2024',
    desc: 'Aplikasi manajemen tugas real-time dengan kolaborasi tim, drag-and-drop board, dan notifikasi WebSocket.',
    tags: ['React', 'Laravel', 'MySQL', 'WebSocket', 'Tailwind'],
    github: 'https://github.com/yourusername/taskapp',
    demo: 'https://taskapp.demo.com',
  },
  {
    no: '03',
    title: 'URL Shortener Service',
    year: '2023',
    desc: 'Microservice URL shortener dengan analytics klik, custom alias, expiry links, dan rate limiting.',
    tags: ['Go', 'Redis', 'PostgreSQL', 'Docker', 'Nginx'],
    github: 'https://github.com/yourusername/urlshortener',
    demo: null,
  },
  {
    no: '04',
    title: 'Blog Platform',
    year: '2023',
    desc: 'Platform blog dengan CMS sederhana, markdown editor, SEO optimization, dan sistem komentar berbasis SSR.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/yourusername/blog',
    demo: 'https://blog.demo.com',
  },
]

const linkStyle = {
  fontSize: '0.75rem',
  color: '#3f3f46',
  textDecoration: 'none',
  letterSpacing: '0.02em',
  fontWeight: 300,
  transition: 'color 0.2s',
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: '120px 24px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Geist, sans-serif' }}
    >
      <p style={{ fontSize: '0.72rem', color: '#3f3f46', letterSpacing: '0.1em', marginBottom: '64px' }}>
        Projects
      </p>

      <div style={{ borderTop: '1px solid #141414' }}>
        {projects.map((p) => (
          <div
            key={p.no}
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
            {/* Left */}
            <div style={{ paddingTop: '2px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '0.72rem', color: '#27272a' }}>{p.no}</span>
              <span style={{ fontSize: '0.72rem', color: '#27272a', fontWeight: 300 }}>{p.year}</span>
            </div>

            {/* Right */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, color: '#e4e4e7', letterSpacing: '-0.02em', marginBottom: '12px' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#3f3f46', lineHeight: 1.85, marginBottom: '20px', fontWeight: 300 }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontSize: '0.72rem', color: '#3f3f46', border: '1px solid #1a1a1a', padding: '4px 12px', fontWeight: 300 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = '#a1a1aa'}
                    onMouseLeave={e => e.currentTarget.style.color = '#3f3f46'}
                  >GitHub ↗</a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = '#a1a1aa'}
                    onMouseLeave={e => e.currentTarget.style.color = '#3f3f46'}
                  >Live Demo ↗</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}