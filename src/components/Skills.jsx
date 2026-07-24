import { FiCode, FiCpu, FiDatabase, FiTool } from 'react-icons/fi'
import Reveal from './Reveal'
import { skills } from '../data/content'

const icons = {
  Languages: FiCode,
  Technologies: FiCpu,
  Databases: FiDatabase,
  Other: FiTool,
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="section-title">Tools I reach for every day</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = icons[group.category]
            return (
              <Reveal key={group.category} delay={i * 0.08}>
                <div className="glass-card h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light border border-accent/20">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-lg text-ink">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="tech-badge hover:border-accent/50 hover:text-accent-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
