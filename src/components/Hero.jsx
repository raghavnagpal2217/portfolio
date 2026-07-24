import { motion } from 'framer-motion'
import { FiLinkedin, FiMail, FiArrowDown, FiFileText } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { profile } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[110px] animate-blob" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-accent-dark/20 blur-[110px] animate-blob [animation-delay:4s]" />

      <div className="section-container relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 glass-card px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-ink-muted">Open to new opportunities</span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-ink">
            Hi, I'm {profile.name.split(' ')[0]}
            <span className="text-accent">.</span>
            <br />
            <span className="bg-gradient-to-r from-accent-light via-accent to-accent-dark bg-clip-text text-transparent">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-secondary"
            >
              Contact Me
            </a>
            
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: SiLeetcode, href: profile.leetcode, label: 'LeetCode' },
              { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface/60 text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent-light hover:shadow-glow"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden sm:block"
        >
          <div className="relative h-72 w-72 lg:h-80 lg:w-80">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/30 to-transparent blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-surface-border bg-surface-elevated shadow-glow">
              <img
                src="/1000156005.webp"
                alt="Portrait of Raghav Nagpal"
                loading="lazy"
                className="h-full w-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 glass-card px-4 py-3">
              <p className="font-mono text-xs text-ink-muted">status</p>
              <p className="text-sm font-medium text-emerald-400">Available for hire</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-accent-light transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About section"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  )
}
