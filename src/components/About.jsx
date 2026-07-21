import { FiCode, FiLayers, FiCpu } from 'react-icons/fi'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { about, stats } from '../data/content'

const highlights = [
  { icon: FiCode, text: 'Full-stack apps with React, Node.js, and REST APIs' },
  { icon: FiLayers, text: 'Real-time systems using WebSockets, Socket.IO, and WebRTC' },
  { icon: FiCpu, text: 'Strong DSA practice with 300+ solved problems' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">About Me</p>
          <h2 className="section-title">A developer who enjoys the whole journey</h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <Reveal delay={0.05}>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-8 space-y-4">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-light border border-accent/20">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-ink">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="font-display text-3xl sm:text-4xl font-bold text-white">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
