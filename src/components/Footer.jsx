import { FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border py-10">
      <div className="section-container flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-muted">
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
            { icon: SiLeetcode, href: profile.leetcode, label: 'LeetCode' },
            {
              icon: FiMail,
              href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
              label: 'Email',
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-ink-muted transition-colors hover:border-accent/50 hover:text-accent-light"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-faint">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}