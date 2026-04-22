const hardSkills = [
  { category: 'Backend',     items: ['Node.js', 'Express', 'Laravel', 'Python', 'Go'] },
  { category: 'Frontend',    items: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'] },
  { category: 'Database',    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { category: 'DevOps',      items: ['Docker', 'Nginx', 'Linux', 'CI/CD', 'Git'] },
  { category: 'API & Tools', items: ['REST API', 'GraphQL', 'Postman', 'Swagger'] },
]

const softSkills = ['Problem Solving', 'Team Collaboration', 'Fast Learner', 'Clean Code', 'Komunikasi', 'Time Management']

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: '120px 24px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Geist, sans-serif' }}
    >
      <p style={{ fontSize: '0.72rem', color: '#3f3f46', letterSpacing: '0.1em', marginBottom: '64px' }}>
        Skills
      </p>

      {/* Hard skills */}
      <div style={{ marginBottom: '56px' }}>
        <p style={{ fontSize: '0.72rem', color: '#27272a', letterSpacing: '0.08em', marginBottom: '24px' }}>
          Hard Skills
        </p>
        <div style={{ borderTop: '1px solid #141414', borderLeft: '1px solid #141414' }}>
          {hardSkills.map((group) => (
            <div
              key={group.category}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                borderBottom: '1px solid #141414',
                borderRight: '1px solid #141414',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0d0d0d'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{ padding: '18px 20px', borderRight: '1px solid #141414' }}>
                <span style={{ fontSize: '0.72rem', color: '#3f3f46', letterSpacing: '0.05em' }}>
                  {group.category}
                </span>
              </div>
              <div style={{ padding: '14px 20px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '0.78rem',
                      color: '#71717a',
                      fontWeight: 300,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft skills */}
      <div>
        <p style={{ fontSize: '0.72rem', color: '#27272a', letterSpacing: '0.08em', marginBottom: '24px' }}>
          Soft Skills
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {softSkills.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: '0.78rem',
                color: '#3f3f46',
                border: '1px solid #1a1a1a',
                padding: '7px 16px',
                fontWeight: 300,
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#a1a1aa'; e.currentTarget.style.borderColor = '#27272a' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#3f3f46'; e.currentTarget.style.borderColor = '#1a1a1a' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}