import { FiMail, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi'
import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  const contactLinks = [
    { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: FiLinkedin, label: 'linkedin.com/in/raghav-nagpal-9910923aa', href: profile.linkedin },
    { icon: FiMapPin, label: profile.location, href: null },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="section-title">Let's build something together</h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </Reveal>

        <div className="mt-14 max-w-3xl">
          <Reveal delay={0.05}>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map(({ icon: Icon, label, href }) => {
                const content = (
                  <div className="glass-card flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light border border-accent/20">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm text-ink break-all">{label}</span>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
