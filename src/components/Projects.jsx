import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import Reveal from './Reveal'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Featured Projects</p>
          <h2 className="section-title">Things I've built recently</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group h-full overflow-hidden rounded-2xl border border-surface-border bg-surface/60 shadow-card"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/10 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="mt-1 font-mono text-xs text-accent-light">{project.period}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.demo && (
                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary !px-4 !py-2 text-sm"
                      >
                        <FiExternalLink size={16} /> Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
