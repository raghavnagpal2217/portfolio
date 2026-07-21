import { FiAward, FiCheckCircle } from 'react-icons/fi'
import Reveal from './Reveal'
import { education, certifications } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Education</p>
          <h2 className="section-title">Academic background</h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-surface-border to-transparent" />
            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 0.1}>
                <div className="relative flex gap-6 pb-2">
                  <span className="relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-base text-accent-light shadow-glow">
                    <FiAward size={16} />
                  </span>
                  <div className="glass-card flex-1 p-6">
                    <p className="font-mono text-xs text-accent-light">{edu.period}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-ink-muted">{edu.field}</p>
                    <p className="mt-1 text-sm font-medium text-ink">{edu.school}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="glass-card p-6">
              <h3 className="font-display font-semibold text-lg text-ink mb-5">
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-accent-light" size={16} />
                    <div>
                      <p className="text-sm font-medium text-ink">{cert.name}</p>
                      <p className="text-xs text-ink-muted">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
